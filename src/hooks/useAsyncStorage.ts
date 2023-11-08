import AsyncStorage from "@react-native-async-storage/async-storage";


export default function useAsyncStorage() {
    async function save(key: string, value: any) {
        await AsyncStorage.setItem(key, value);
    }
    async function find(key: string) {
        return await AsyncStorage.getItem(key);
    }

    return {
        save,
        find
    }
}