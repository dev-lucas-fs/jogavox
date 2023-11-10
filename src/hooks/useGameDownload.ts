import * as FileSystem from "expo-file-system"
import { unzip } from 'react-native-zip-archive';



export default async function useGameDownload() {
    const url = 'http://intervox.nce.ufrj.br/~projetojogavox/Site_Jogavox/Jogos/Olimpo/2015_3_meio_ambiente.zip';
    const path = FileSystem.cacheDirectory + '1.zip'
    console.log(path)
    const downloadResumable = FileSystem.createDownloadResumable(
        url,
        path,
    );
        
    await downloadResumable.downloadAsync();
    unzip(path, FileSystem.cacheDirectory + "unzipped/")
        .then(() => {
            console.log('Unzip completed!');
        })
        .catch((error) => {
            console.error('Unzip failed: ', error);
        });
    
    
}

