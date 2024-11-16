export const dataPath = "/src/data/data.json";

export const gamesImagesPath = "/images/games/";
export const albumsImagesPath = "/images/albums";
export const imagesExtension = ".webp";

export const albumsCollection = "albums";
export const ordersCollection = "orders";



const StageData = {
    name: string,
}

export const SongData = {
    id: number,
    name: string,
    duration: string,
    notes: string,
    stages: StageData,
}

const DiscData = {
    songs: []
}

export const AlbumData = {
    id: number,
    name: string,
    image: string,
    price: number,
    stock: number,
    descripcion: string,
    story: string,
    discs: []
}

export const GameData = {
    id: number,
    name: string,
    image: string,
    descripcion: string,
    albums: [],
}

export const ItemData = {
    id: number,
    name: string,
    image: string,
    price: number,
    stock: number,
    descripcion: string,
    songs: [],
    quantity: number,
}

/**
 * @param {string} input - Input string, puede contener caracteres especiales
 * @return {string} - URL en formato string. Sin caracteres especiales. Las palabras unidas con "-"
 */

export function aFormatoUrl(input) {
    const SoloCaracteresAlfanumericos = input
        .replace(/[^a-zA-Z0-9\s]/g,"")
        .toLowerCase();
    const formatoURL = SoloCaracteresAlfanumericos.replace(/\s+/g,"-");
    return formatoURL;
}