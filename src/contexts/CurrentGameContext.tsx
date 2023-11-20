import { JOGType, JogToJSON } from '@/core/JOG';
import { createContext, useState } from 'react';

export const CurrentGameContext = createContext<{ 
    id: number, 
    gameState: GameStateType, 
    nextGameState: () => void, 
    changeId: (newId: number) => void,
    gameData: JOGType
}>(null);

type GameStateType = { lugar: number, slide: number }

const defaultGameState = { lugar: 1, slide: 1 };

export default function CurrentGameProvider({ children }) {
    const [id, setID] = useState<number>(0);
    const [gameData, setGameData] = useState<JOGType>(null); 
    const [gameState, setGameState] = useState<GameStateType>(defaultGameState);

    async function changeId(newId: number) {
        setID(newId);
        const JOGContent = await JogToJSON();
        setGameData(() => JOGContent)
        resetGameState();
    }

    function nextGameState() {
        setGameState((gameState) => {
            if(gameData.lugares[gameState.lugar].slides.length < gameState.slide) {
                gameState.slide++;
                return gameState;
            }

            gameState.lugar++;
            gameState.slide = 1;
            return gameState;
        })
    }

    function resetGameState() {
        setGameState(() => defaultGameState)
    }

    return (
        <CurrentGameContext.Provider value={{ id, gameState, nextGameState, changeId, gameData }}>
            { children }
        </CurrentGameContext.Provider>
    );
}