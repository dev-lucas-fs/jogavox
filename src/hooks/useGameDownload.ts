import * as FileSystem from "expo-file-system"
import { unzip } from 'react-native-zip-archive';



export default async function useGameDownload() {
    const files = FileSystem.readDirectoryAsync(FileSystem.cacheDirectory + "unzipped/2015_3_meio_ambiente")
    

    
}

