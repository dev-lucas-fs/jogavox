import LocalGames from "@/constants/AvailableGames"

export type LocalGameType = {
    name: string,
    image: string,
    url: string,
    size: number,
    author: string,
    id: number,
    comments: string,
    version: string
}

export default function useLocalGames() {

    return LocalGames as LocalGameType[]
}