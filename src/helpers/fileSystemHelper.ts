import * as FileSystem from 'expo-file-system';

const { documentDirectory } = FileSystem;

export async function createDirectory(name: string) {
    const isDirectory = await FileSystem.readDirectoryAsync(documentDirectory + name);
    if(isDirectory) return false;

    await FileSystem.makeDirectoryAsync(documentDirectory + name);
    return true;
}
