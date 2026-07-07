const products = [

{
    id:1,
    image:"/images/products/p1.png",
    name:"iPhone 16 Pro Max 256GB",
    price:34990000,
    oldPrice:37990000,
    tag:"Giảm 3 triệu",
    category:"phone"
},

{
    id:2,
    image:"/images/products/p2.png",
    name:"Samsung Galaxy S25 Ultra",
    price:29990000,
    oldPrice:33990000,
    tag:"Hot",
    category:"phone"
},

{
    id:3,
    image:"/images/products/p3.png",
    name:"MacBook Air M4",
    price:26990000,
    oldPrice:29990000,
    tag:"Mới",
    category:"laptop"
},

{
    id:4,
    image:"/images/products/p4.png",
    name:"ASUS Vivobook",
    price:15990000,
    oldPrice:17990000,
    tag:"Sinh viên",
    category:"laptop"
},

{
    id:5,
    image:"/images/products/p5.png",
    name:"Xiaomi Redmi Note 14",
    price:7990000,
    oldPrice:8990000,
    tag:"Giá tốt",
    category:"phone"
}

];


export default products;

const products = [

{
    id:1,
    image:"/images/products/p1.png",
    name:"iPhone 16 Pro Max 256GB",
    price:34990000,
    oldPrice:37990000,
    tag:"Giảm 3 triệu",

    images:[
        "/images/products/p1.png",
        "/images/products/p1-2.png",
        "/images/products/p1-3.png"
    ],

    description:
    "iPhone 16 Pro Max với chip mạnh mẽ, camera chuyên nghiệp, màn hình cao cấp.",

    specs:[
        "Màn hình OLED 6.9 inch",
        "Chip Apple A18 Pro",
        "RAM 8GB",
        "Bộ nhớ 256GB"
    ]
},


{
    id:2,
    image:"/images/products/p2.png",
    name:"Samsung Galaxy S25 Ultra",
    price:29990000,
    oldPrice:33990000,
    tag:"Hot",

    images:[
        "/images/products/p2.png",
        "/images/products/p2-2.png"
    ],

    description:
    "Samsung Galaxy S25 Ultra hiệu năng cao, camera zoom vượt trội.",

    specs:[
        "Màn hình Dynamic AMOLED",
        "Chip Snapdragon",
        "RAM 12GB",
        "Bộ nhớ 256GB"
    ]
}


];


export default products;