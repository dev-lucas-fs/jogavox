import { JogToJSON } from '@/core/JOG';
import { clearInstalledGames, findAll } from '@/core/JOGInstall';
import { JOGType } from '@/core/JOGTypes';
import { createContext, useEffect, useState } from 'react';

export const CurrentGameContext = createContext<{ 
    gameState: GameStateType, 
    nextGameState: () => void, 
    resetGameState: () => void,
    changeCurrentGame: (id: string) => void,
    gameData: JOGType,
    installedGames: JOGType[],
    loadInstalledGames: () => Promise<void>
    clear: () => Promise<void>
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
        //await clear();
        const installedGames = await findAll();
        if(installedGames !== null)
            setInstalledGames(() => installedGames);
    }

    async function clear() {
        clearInstalledGames();
        setInstalledGames(() => [])
    }

    useEffect(() => {  
        //clear();
        loadInstalledGames();
        //clear();
    }, []);

    return (
        <CurrentGameContext.Provider value={{ clear, resetGameState, gameState, nextGameState, changeCurrentGame, gameData, installedGames, loadInstalledGames }}>
            { children }
        </CurrentGameContext.Provider>
    );
}