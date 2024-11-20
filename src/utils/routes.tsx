import { toUrlFormat } from "./utils";

export const urls = {
    home: "/",
    category: "albums",
    item: "/album",
    cart: "/cart",
    checkout: "/checkout",
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
            url: urls.category + toUrlFormat("The King Of Fighters '94"),
            text: "The King Of Fighters '94",
        },
    },
    {
        kof95: {
            url: urls.category + toUrlFormat("The King Of Fighters '95"),
            text: "The King Of Fighters '95",
        },
    },
    {
        kof96: {
            url: urls.category + toUrlFormat("The King Of Fighters '96"),
            text: "The King Of Fighters '96",
        },
    },
    {
        kof97: {
            url: urls.category + toUrlFormat("The King Of Fighters '97"),
            text: "The King Of Fighters '97",
        },
    },
    {
        kof98: {
            url: urls.category + toUrlFormat("The King Of Fighters '98"),
            text: "The King Of Fighters '98",
        },
    },
    {
        kof99: {
            url: urls.category + toUrlFormat("The King Of Fighters '99"),
            text: "The King Of Fighters '99",
        },
    },
    {
        kof2000: {
            url: urls.category + toUrlFormat("The King Of Fighters 2000"),
            text: "The King Of Fighters 2000",
        },
    },
    {
        kof2001: {
            url: urls.category + toUrlFormat("The King Of Fighters 2001"),
            text: "The King Of Fighters 2001",
        },
    },
    {
        kof2002: {
            url: urls.category + toUrlFormat("The King Of Fighters 2002"),
            text: "The King Of Fighters 2002",
        },
    },
    {
        kof2002um: {
            url: urls.category + toUrlFormat("The King Of Fighters 2002 Unlimited Match"),
            text: "The King Of Fighters 2002 Unlimites Match",
        },
    },
    {
        kof2003: {
            url: urls.category + toUrlFormat("The King Of Fighters 2003"),
            text: "The King Of Fighters 2003",
        },
    },
    {
        kof2003: {
            url: urls.category + toUrlFormat("The King Of Fighters 2003"),
            text: "The King Of Fighters 2003",
        },
    },
    {
        kofneowave: {
            url: urls.category + toUrlFormat("The King Of Fighters Neowave"),
            text: "The King Of Fighters Neowave",
        },
    },
    {
        kofxi: {
            url: urls.category + toUrlFormat("The King Of Fighters XI"),
            text: "The King Of Fighters XI",
        },
    },
    {
        kofxii: {
            url: urls.category + toUrlFormat("The King Of Fighters XII"),
            text: "The King Of Fighters XII",
        },
    },
    {
        kofxiii: {
            url: urls.category + toUrlFormat("The King Of Fighters XIII"),
            text: "The King Of Fighters XIII",
        },
    },
    {
        kofxiv: {
            url: urls.category + toUrlFormat("The King Of Fighters XIV"),
            text: "The King Of Fighters XIV",
        },
    },
    {
        kofxv: {
            url: urls.category + toUrlFormat("The King Of Fighters XV"),
            text: "The King Of Fighters XV",
        },
    },
]