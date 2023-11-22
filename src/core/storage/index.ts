import AsyncStorage from "@react-native-async-storage/async-storage";


async function get(key: string) {
    const item = await AsyncStorage.getItem(key);

    return JSON.parse(item);
}

async function set(key: string, value: any) {
    const valueStringify = JSON.stringify(value);

    return await AsyncStorage.setItem(key, valueStringify);
}


export default {
    get, 
    set
}