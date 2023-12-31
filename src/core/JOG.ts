import ini from "ini";
import { readAsStringAsync } from 'expo-file-system';
import { DadosGeraisType, JOGType, LugarType, ModeloType, SlideType } from "./JOGTypes";




export async function JogToJSON(jogPath: string) {
    const jogAsString = await readAsStringAsync(jogPath)
    const iniJSON = ini.decode(jogAsString);

    let dadosGerais = createDadosGeraisObject(iniJSON);
    let modelo = createModeloObject(iniJSON);
    let lugares = createLugaresObject(iniJSON);

    return {
        dadosGerais,
        modelo,
        lugares
    } as JOGType;
}

function convertText(obj: any) {
    const textKeys = '0123456789'.split('');
    const comments = Array.from({ length: 9 }, () => "");
    for(let key of Object.keys(obj)) {
        if(!textKeys.includes(key)) continue;

        comments[Number(key)] = obj[key];
    }
    return comments;
}

function createDadosGeraisObject(obj: any) {
    let dadosGerais = obj["DADOS GERAIS"];
    let jog = {
        nomeJogo: dadosGerais["NOME DO JOGO"],
        autor: dadosGerais["AUTOR"],
        versao: dadosGerais["VERSÃO"],
    }

    if(dadosGerais["COMENTÁRIOS"])
        jog["comentarios"] = dadosGerais["COMENTÁRIOS"];

    return jog as DadosGeraisType;
}

function createModeloObject(obj: any) {
    let modelo = obj["MODELO"];
    if(!modelo) return {} as ModeloType;
    let narrando = false;
    if(modelo["NARRANDO"] === "SIM")
        narrando = true;

    return {
        narrando
    } as ModeloType;
}

function createLugaresObject(obj: any) {
    let currentLugar = {}
    let lugares = [];
    for(let i = 1; true ;i++) {
        const key = `LUGAR ` + i;

        if(obj[key] === undefined) break;

        currentLugar = obj[key];
    
        const lugar = setLugarProperties(currentLugar);

        lugar["slides"] = createSlidesObject(obj, i);

        lugares.push(lugar);
    }

    return lugares as LugarType[];
}

function setLugarProperties(lugar: any) {
    const lugarMap = {
        "FUNDO": "fundo",
        "LUGAR OK": "lugarOK",
        "LUGAR ERRO": "lugarErro",
        "PONTUAÇÃO":"pontos",
        "RESPOSTA ESPERADA":"respostaEsperada",
        "NOME": "nome"
    }

    const lugarObj = {} as LugarType;

    for(let prop of Object.keys(lugarMap)) {
        const key = lugarMap[prop];
        if(key) {
            lugarObj[key] = lugar[prop];
        }
    }

    console.log(lugarObj)

    return lugarObj;
}

function createSlidesObject(obj: any, lugarIndex: number) {
    let currentSlide = {}
    let slides = [];
    for(let i = 1; true ;i++) {
        const key = `SLIDE ${lugarIndex} ${i}`;

        if(obj[key] === undefined) break;

        currentSlide = obj[key];

        const slide = {
            nome: currentSlide["TÍTULO"]
        }
        

        if(currentSlide["MÍDIA"])
            slide["midia"] = currentSlide["MÍDIA"];
        
        slide["textos"] = convertText(currentSlide);

        slides.push(slide);
    }

    return slides as SlideType[];
}
