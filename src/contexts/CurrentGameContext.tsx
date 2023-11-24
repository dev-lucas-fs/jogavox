import { JOGType, JogToJSON } from '@/core/JOG';
import { clearInstalledGames, findAll } from '@/core/JOGInstall';
import { createContext, useEffect, useState } from 'react';

export const CurrentGameContext = createContext<{ 
    gameState: GameStateType, 
    nextGameState: () => void, 
    changeCurrentGame: (id: string) => void,
    gameData: JOGType,
    installedGames: JOGType[],
    reloadInstalledGames: () => Promise<void>
}>(null);

type GameStateType = { lugar: number, slide: number };

const defaultGameState = { lugar: 0, slide: 0 };

export default function CurrentGameProvider({ children }) {
    const [installedGames, setInstalledGames] = useState<JOGType[]>([]);
    const [gameData, setGameData] = useState<JOGType>(null); 
    const [gameState, setGameState] = useState<GameStateType>(defaultGameState);

    function changeCurrentGame(id: string) {
        setGameData(() => installedGames.find((value) => value.id === id))
        resetGameState();
    }

    function nextGameState() {
        setGameState((gameState) => {
            if(gameData.lugares[gameState.lugar].slides.length < gameState.slide) {
                gameState.slide++;
                return gameState;
            }

            gameState.lugar++;
            gameState.slide = 0;
            return gameState;
        })
    }

    function resetGameState() {
        setGameState(() => defaultGameState)
    }

    async function loadInstalledGames() {
        // APENAS PARA TESTE
        //await clearInstalledGames();
        const installedGames = await findAll();
        setInstalledGames(() => installedGames);
    }

    async function reloadInstalledGames() {
        const installedGames = await findAll();
        setInstalledGames(() => installedGames);
    };

    useEffect(() => {  
        loadInstalledGames();
    }, []);

    return (
        <CurrentGameContext.Provider value={{ gameState, nextGameState, changeCurrentGame, gameData, installedGames, reloadInstalledGames }}>
            { children }
        </CurrentGameContext.Provider>
    );
}