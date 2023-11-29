import { JOGType, JogToJSON } from '@/core/JOG';
import { clearInstalledGames, findAll } from '@/core/JOGInstall';
import { createContext, useEffect, useState } from 'react';

export const CurrentGameContext = createContext<{ 
    gameState: GameStateType, 
    nextGameState: () => void, 
    resetGameState: () => void,
    changeCurrentGame: (id: string) => void,
    gameData: JOGType,
    installedGames: JOGType[],
    loadInstalledGames: () => Promise<void>
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
            if((gameData.lugares[gameState.lugar].slides.length - 1) > gameState.slide) {
                gameState.slide++;
            } else if((gameData.lugares.length - 1) > gameState.lugar) {
                gameState.lugar++;
                gameState.slide = 0;
            }

            return {
                slide: gameState.slide,
                lugar: gameState.lugar
            };
        });
    }

    function resetGameState() {
        setGameState(() => defaultGameState)
    }

    async function loadInstalledGames() {
        // APENAS PARA TESTE
        //await clearInstalledGames();
        const installedGames = await findAll();
        if(installedGames !== null)
            setInstalledGames(() => installedGames);
    }

    useEffect(() => {  
        //clearInstalledGames();
        loadInstalledGames();
        //clearInstalledGames();
    }, []);

    return (
        <CurrentGameContext.Provider value={{ resetGameState, gameState, nextGameState, changeCurrentGame, gameData, installedGames, loadInstalledGames }}>
            { children }
        </CurrentGameContext.Provider>
    );
}