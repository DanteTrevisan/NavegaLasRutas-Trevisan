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
            text: "KOF\n94",
        },
    },
    {
        kof95: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters '95"),
            text: "KOF\n95",
        },
    },
    {
        kof96: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters '96"),
            text: "KOF\n96",
        },
    },
    {
        kof97: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters '97"),
            text: "KOF\n97",
        },
    },
    {
        kof98: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters '98"),
            text: "KOF\n98",
        },
    },
    {
        kof99: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters '99"),
            text: "KOF\n99",
        },
    },
    {
        kof2000: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters 2000"),
            text: "KOF\n2000",
        },
    },
    {
        kof2001: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters 2001"),
            text: "KOF\n2001",
        },
    },
    {
        kof2002: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters 2002"),
            text: "KOF\n2002",
        },
    },
    {
        kof2002um: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters 2002 Unlimited Match"),
            text: "KOF\n2002UM",
        },
    },
    {
        kof2003: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters 2003"),
            text: "KOF\n2003",
        },
    },
    {
        kofneowave: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters Neowave"),
            text: "KOF\nNW",
        },
    },
    {
        kofxi: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters XI"),
            text: "KOF\nXI",
        },
    },
    {
        kofxii: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters XII"),
            text: "KOF\nXII",
        },
    },
    {
        kofxiii: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters XIII"),
            text: "KOF\nXIII",
        },
    },
    {
        kofxiv: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters XIV"),
            text: "KOF\nXIV",
        },
    },
    {
        kofxv: {
            url: urls.category + "/" + toUrlFormat("The King Of Fighters XV"),
            text: "KOF\nXV",
        },
    },
]