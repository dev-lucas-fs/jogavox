import * as FileSystem from "expo-file-system";
import Repository from "@/core/downloader/repository";
import * as Zip from 'react-native-zip-archive';
import { InstalledGameType } from "./manager/install";
import Manager from "./manager"

export async function download(gameId: number) {
    const gameFromRepository = findByIdFromRepository(gameId);
    if(gameFromRepository === null) null;

    const { url, id, image, name } = gameFromRepository;
    const installObj: InstalledGameType = {
        name,
        image,
        id: String(id),
        files: []
    }

    const base = FileSystem.documentDirectory + "games";
    const fileName = id + ".zip";
    const gameFolder = `${base}/${id}`;
    
    try {
        await createFolder("games");
        await FileSystem.downloadAsync(url, `${base}${fileName}`);  
        await createFolder(id + "", base);

        await Zip.unzip(base + fileName, gameFolder);
        
        const [folder] = await FileSystem.readDirectoryAsync(gameFolder);

        const contentFolderPath = `${gameFolder}/${folder}`;
        const contentFolder = await FileSystem.readDirectoryAsync(contentFolderPath);

        for(let file of contentFolder) {
            installObj.files.push({
                name: file,
                path: `${gameFolder}/${folder}/${file}`
            });
        }

        await Manager.install(installObj);
    } catch (error) {
        console.log(error);
    }
}


function findByIdFromRepository(gameId: number) {
    const info = Repository.filter((game) => game.id == gameId);
    if(info.length == 0) return null;

    const { url, id, image, name } = info[0];
    return { url, id, image, name };
}

async function createFolder(name: string, path = FileSystem.documentDirectory) {
    const dirContents = await FileSystem.readDirectoryAsync(path);
    const isFolder = dirContents.filter((content) => content == name).length > 0;

    if(isFolder) return;

    await FileSystem.makeDirectoryAsync(path + name);
}

