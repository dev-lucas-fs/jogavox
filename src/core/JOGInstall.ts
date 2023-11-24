import Storage from "@/core/storage";
import * as FileSystem from "expo-file-system";

import { JOGType, JogToJSON } from "./JOG";
import { findById } from "./JOGCollection";

export type InstallPropsType = {
    id: string;
    gameFolder: string;
};

export async function install({ id, gameFolder }: InstallPropsType) {
    let installedGames: JOGType[] = [];
    const getInstalledGames = await (Storage.get("installed")) as JOGType[];
    if(getInstalledGames !== null) installedGames = getInstalledGames;

    const contentFolder = await FileSystem.readDirectoryAsync(gameFolder);
    let JOGObj = {} as JOGType;

    const assets: { name: string, path: string }[] = []

    for(let file of contentFolder) {
        const filePath = `${gameFolder}/${file}`;
        if(file.split(".jog").length > 1) {
            JOGObj = await JogToJSON(`${filePath}`);
            continue;
        }
        assets.push({
            name: file,
            path: filePath
        })
    }

    for(let i = 0; i < JOGObj.lugares.length; i++) {
        const fundo = JOGObj.lugares[i].fundo;
        if(fundo) {
            const { path } = assets.find(({ name }) => name == fundo);
            JOGObj.lugares[i].fundo = path;
        }

        const slides = JOGObj.lugares[i].slides;
        for(let j = 0; j < slides.length; j++) {
            const midia = slides[j].midia;
            if(midia) {
                const { path } = assets.find(({ name }) => name == midia);
                JOGObj.lugares[i].slides[j].midia = path;
            }
        }
    }
    
    JOGObj.id = id;
    JOGObj.image = findById(id).image;

    installedGames.push(JOGObj);

    return Storage.set("installed", installedGames);
}

export async function findAll() {
    return await (Storage.get("installed")) as JOGType[];
}


export async function clearInstalledGames() {
    await Storage.set("installed", [] as JOGType[])
}
