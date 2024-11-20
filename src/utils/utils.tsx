export const dataPath = "/src/data/";

export const gameImagesPath = "/images/games/";
export const albumsImagesPath = "/images/albums";
export const imagesExtension = ".webp";

export const albumsCollection = "albums";
export const ordersCollection = "orders";

interface StageData {
    name: string;
}

export interface SongData {
    id: number;
    name: string;
    duration: string;
    notes: string;
    stages: StageData;
}

export interface DiscData {
    id: number;
    songs: SongData[];
}

export interface AlbumData {
    id: number;
    name: string;
    image: string;
    price: number;
    stock: number;
    descripcion: string;
    discs: DiscData[];
}

export interface GameData {
    id: number;
    name: string;
    image: string;
    description: string;
    story: string;
    albums: AlbumData[]
}

export interface ItemData {
    id: number;
    name: string;
    image: string;
    price: number;
    stock: number;
    description: string;
    story: string;
    discs: DiscData[];
    quantity: number;
}

/**
 * @param {string} input - string. PUede contener caracteres especiales 
 * @returns {string} - string en formato URL
 */ 

export function toUrlFormat(input: string) : string {
    const OnlyAlphanumericCharacters = input
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .toLowerCase();
    const urlFormat = OnlyAlphanumericCharacters.replace(/\s+/g,"-");
    return urlFormat;
}