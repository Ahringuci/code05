import { v4 as idv4 } from "uuid";

const defaults = [
    {
        id: idv4(),
        title: "Vivo V23e",
        image: "https://cdn.tgdd.vn/Products/Images/42/245607/Vivo-V23e-1-2-600x600.jpg",
        price: 8290000,
        inCart: false,
        sku: "VivoV23e",
        quantity: 2,
    },
    {
        id: idv4(),
        title: "X70 Pro 5G",
        image: "https://cdn.tgdd.vn/Products/Images/42/248099/vivo-x70-pro-xanh-hong-1-600x600.jpg",
        price: 19990000,
        inCart: false,
        sku: "VivoX70Pro5G",
        quantity: 5,
    },
    {
        id: idv4(),
        title: "Vivo V21 5G",
        image: "https://cdn.tgdd.vn/Products/Images/42/238047/vivo-v21-5g-xanh-den-600x600.jpg",
        price: 9990000,
        inCart: false,
        sku: "VivoV215G",
        quantity: 100,
    },
    {
        id: idv4(),
        title: "Vivo Y33s",
        image: "https://cdn.tgdd.vn/Products/Images/42/249102/vivo-y33s-xanhhong-600x600.jpg",
        price: 9990000,
        inCart: false,
        sku: "VivoY33s",
        quantity: 100,
    },
    {
        id: idv4(),
        title: "Vivo Y21s",
        image: "https://cdn.tgdd.vn/Products/Images/42/249429/vivo-y21s-blue-600x600.jpg",
        price: 9990000,
        inCart: false,
        sku: "VivoY21s",
        quantity: 100,
    },
];
export const defaultAPI = [...defaults];
