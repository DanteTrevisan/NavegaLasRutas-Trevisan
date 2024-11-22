import { toUrlFormat } from "./utils";

export const urls = {
    home: "/",
    category: "albums",
    item: "/album/",
    cart: "/cart/",
    checkout: "/checkout/",
};

export interface Route {
    [key:string]: {
        url: string,
        text: string
    };
}

export const routes: Route[] = [
    {
        home: {
            url: urls.home,
            text: "Inicio",
        },
    },
    {
        store: {
            url: urls.category,
            text: "Tienda",
        },
    },
    {
        kof94: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters '94"),
            text: "KOF94",
        },
    },
    {
        kof95: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters '95"),
            text: "KOF95",
        },
    },
    {
        kof96: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters '96"),
            text: "KOF96",
        },
    },
    {
        kof97: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters '97"),
            text: "KOF97",
        },
    },
    {
        kof98: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters '98"),
            text: "KOF98",
        },
    },
    {
        kof99: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters '99"),
            text: "KOF99",
        },
    },
    {
        kof2000: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters 2000"),
            text: "KOF2000",
        },
    },
    {
        kof2001: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters 2001"),
            text: "KOF2001",
        },
    },
    {
        kof2002: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters 2002"),
            text: "KOF2002",
        },
    },
    {
        kof2002um: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters 2002 Unlimited Match"),
            text: "KOF2002UM",
        },
    },
    {
        kof2003: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters 2003"),
            text: "KOF2003",
        },
    },
    {
        kofneowave: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters Neowave"),
            text: "KOFNW",
        },
    },
    {
        kofxi: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters XI"),
            text: "KOFXI",
        },
    },
    {
        kofxii: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters XII"),
            text: "KOFXII",
        },
    },
    {
        kofxiii: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters XIII"),
            text: "KOFXIII",
        },
    },
    {
        kofxiv: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters XIV"),
            text: "KOFXIV",
        },
    },
    {
        kofxv: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters XV"),
            text: "KOFXV",
        },
    },
]