import AsyncStorage from '@react-native-async-storage/async-storage';

export type GameInstalled = {
    name: string;
    author: string;
    image: string;
}

export default class JOGInstall {


    public static async install() {
        await AsyncStorage.setItem("games", JSON.stringify([{
            name: "Meio Ambiente",
            author: "Rubens Queiroz",
            image: ""
        }]));
    }

    public static async getGamesInstalled() {
        const games = await AsyncStorage.getItem("games");

        if(games == null) return null;

        return JSON.parse(
            games
        ) as GameInstalled[];
    }
}