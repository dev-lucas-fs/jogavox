export type DadosGeraisType = {
    nomeJogo: string;
    autor: string;
    versao: string;
    comentarios?: string[];
}

export type ModeloType = {
    narrando: boolean,
}

export type SlideType = {
    titulo: string;
    midia?: string;
    textos?: string[];
    posicaoTexto?: PosicaoType;
}

export type LugarType = {
    nome: string;
    fundo?: string;
    slides: Array<SlideType>;
    respostaEsperada?: string;
    lugarOK?: string;
    lugarErro?: string;  
    corLetra: CorLetraType;
    pontos?: number;
}

export type JOGType = {
    id: string;
    image: string;
    url?: string;
    dadosGerais: DadosGeraisType;
    modelo: ModeloType;
    lugares: Array<LugarType>;
}

export type PosicaoType = "esquerda" | "direita" | "cima" | "baixo" | "centro";
export type CorLetraType = "preto" | "branco";
export type CorLetraHexType = {
    "preto": "#000",
    "branco": "#FFF"
};
