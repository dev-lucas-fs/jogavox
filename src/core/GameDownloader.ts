import * as FileSystem from "expo-file-system";
import * as Zip from 'react-native-zip-archive';

const url = "https://drive.google.com/uc?export=download&id=19DCGjLdqyZ2MsdZqMIGVUG9vTj3yuNpP";



export async function download() {
    const base = FileSystem.documentDirectory;
    const files = await FileSystem.readDirectoryAsync(base)

    for(let file of files)
        if(file === "2015_3_meio_ambiente")
         return;

    //     console.log("NOT FOUND")
    

    // // const result = await FileSystem.downloadAsync(
    // //     url,
    // //     base + "meio_ambiente.zip"
    // // );

    // await Zip.unzip(base + "meio_ambiente.zip", base)

    
    // //console.log("result.status");
}

