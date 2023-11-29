
export type CollectionType = {
    id: string;
    name: string;
    url: string;
    image: string;
    description?: string;
    author: string;
    size: string;
}


const collection: CollectionType[] = [
    {
        id: "1",
        name: "Meio Ambiente",
        url: "https://drive.google.com/uc?export=download&id=1wMup83IMC9Sw4XWNYfDMMRi9YlgNXZq7",
        image: "https://i.ibb.co/19ddxD2/capa.png",
        author: "Rubens Queiroz",
        size: "2,4"
    },
    {
        id: "2",
        name: "Jogo dos Instrumentos",
        url: "https://drive.google.com/uc?export=download&id=1wMup83IMC9Sw4XWNYfDMMRi9YlgNXZq7",
        image: "https://i.ibb.co/z4vqF7z/instrumentos.png",
        author: "Thiago e Antonio Borges",
        size: "5"
    },
    {
        id: "3",
        name: "Primeiros Socorros",
        url: "https://drive.google.com/uc?export=download&id=1wMup83IMC9Sw4XWNYfDMMRi9YlgNXZq7",
        image: "https://i.ibb.co/7SS3DY9/OIG-z-POUtdz0-Wow.jpg",
        author: "Rubens Queiroz",
        size: "1,77"
    },
    
];

export function findById(id: string) {
    const info = collection.filter((game) => game.id == id);
    
    if(info.length == 0) return null;

    return info[0];
}


export default collection;
