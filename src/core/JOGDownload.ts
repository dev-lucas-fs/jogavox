import * as FileSystem from "expo-file-system";
import * as Zip from 'react-native-zip-archive';
import { findById } from "./JOGCollection";
import { install } from "./JOGInstall";

export async function download(gameId: string) {
    console.log("COMEÇOU O DOWNLOAD");
    const gameFromCollection = findById(gameId);
    if(gameFromCollection === null) return null;
    
    const { url, name, id } = gameFromCollection;

    const base = FileSystem.documentDirectory + "games";
    const fileName = id + ".zip";
    const gameFolder = `${base}/${id}`;
    
    await createFolder("games");
    
    await removeZipFiles();
    await FileSystem.downloadAsync(url, `${base}/${fileName}`);  

    await createFolder(id, base);
    await Zip.unzip(`${base}/${fileName}`, gameFolder);
    
    const [folder] = await FileSystem.readDirectoryAsync(gameFolder);

    const contentFolderPath = `${gameFolder}/${folder}`;
    
    await install ({
        gameFolder: contentFolderPath,
        id
    });
}


async function createFolder(name: string, path = FileSystem.documentDirectory) {
    const dirContents = await FileSystem.readDirectoryAsync(path);
    console.log(dirContents);
    const isFolder = dirContents.filter((content) => content == name).length > 0;

    if(isFolder) return;

    await FileSystem.makeDirectoryAsync(`${path}/${name}`);
}

async function removeZipFiles() {
    const base = FileSystem.documentDirectory + "games";
    const files = await FileSystem.readDirectoryAsync(base);

    for(let file of files) {
        if(!file.includes(".zip")) continue;

        await FileSystem.deleteAsync(`${base}/${file}`);
    }
}
