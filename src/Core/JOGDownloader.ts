import {
    downloadFile,
    DocumentDirectoryPath
} from "react-native-fs"

import {
    unzip
} from "react-native-zip-archive"
import JOGInstall from "./JOGInstall";

type GameInfoType = {
    name: string;
    author: string;
    image: string;
    url: string;
}; 

const info: GameInfoType[] = [{
    name: "Meio Ambiente",
    author: "Lucas F.",
    image: "https://blog.logrocket.com/wp-content/uploads/2022/04/adding-custom-fonts-react-native.png",
    url: "http://intervox.nce.ufrj.br/~projetojogavox/Site_Jogavox/Jogos/Olimpo/2015_3_meio_ambiente.zip"
},
{
    name: "Meio Ambiente 2",
    author: "Lucas F.",
    image: "https://blog.logrocket.com/wp-content/uploads/2022/04/adding-custom-fonts-react-native.png",
    url: "http://intervox.nce.ufrj.br/~projetojogavox/Site_Jogavox/Jogos/Olimpo/2015_3_meio_ambiente.zip"
}]; 

export default class JOGDownloader {
    private info: GameInfoType[];

    constructor() {
        this.info = info;
    }

    public async getGameInfo() {
        JOGInstall.install();

        const installedGames = await JOGInstall.getGamesInstalled();

        if(!installedGames) 
            return this.info.map((game) => ({ ...game, ...{ isInstall: false } }))

        const games = this.info.map((game) => {
            for(let installGame of installedGames) {
                if(installGame.name === game.name) 
                    return { ...game, ...{ isInstall: true } };
            }

            return { ...game, ...{ isInstall: false } };
        })


        return games;
    }


}

export async function downloadGame(path: string) {
    const { promise } = downloadFile({
        fromUrl: path,
        toFile: DocumentDirectoryPath + "/meio_ambiente.zip"
    });

    const result = await promise;

    await unzipGame(DocumentDirectoryPath + "/meio_ambiente.zip")
}

export async function unzipGame(path: string) {
    const result = await unzip(path, `${DocumentDirectoryPath}`); 

    return result;
}