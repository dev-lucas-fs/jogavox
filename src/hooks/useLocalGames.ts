import LocalGames from "@/constants/AvailableGames"

export type LocalGameType = {
    name: string,
    image: string,
    url: string,
    size: number,
    author: string
}

export default function useLocalGames() {

    return LocalGames as LocalGameType[]
}