import Storage from "@/core/storage";

export type InstalledGameType = {
    id: string;
    name: string;
    image: string;
    files: { name: string, path: string }[]
};

async function install({ id, name, image, files }: InstalledGameType) {
    let installedGames: InstalledGameType[] = [];
    const getInstalledGames = await (Storage.get("installed")) as InstalledGameType[];
    if(getInstalledGames !== null) installedGames = getInstalledGames;

    installedGames = installedGames.filter((item) => item.id !== id);

    installedGames.push({
        id,
        name,
        image,
        files
    });

    return Storage.set("installed", installedGames);
}

async function findAll() {
    return await (Storage.get("installed")) as InstalledGameType[];
}

async function findById(id: string) {
    const installedGames = await (Storage.get("installed")) as InstalledGameType[];
    const target = installedGames.filter((item) => item.id === id);

    return target.length === 0 ? null : target[0];
}

export default {
    install,
    findAll,
    findById
}