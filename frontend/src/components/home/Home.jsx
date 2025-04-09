
import DisplayBrandName from './DisplayBrandName'
import CarouselProd from './Carousel'
import ProductsMenu from './ProductsMenu'
import FrecuentQuestions from './FrecuentQuestions'
import AboutUs from './AboutUs'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const Home = () => {
    const config = useSelector(state => state.config);
    const [featuredProducts, setFeaturedProducts] = useState({
        "DESTACADOS": [
          {
            "name": "MELANIA",
            "amount": null,
            "amountToBuy": 1,
            "price": 43000,
            "size": "",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1724205177015-925729355-IMG-20240623-WA0060.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1724205177015-925729355-IMG-20240623-WA0064.jpg",
            "table": "primaria",
            "description": {
              "general": "El Melania está cortado al bies… Esta técnica consiste en cortar el tejido en un ángulo de 45 grados respecto a su hilo, proporcionando una elasticidad única que permite a la tela adaptarse de manera fluida a las formas del cuerpo, lo que lo hace ser el guardapolvo más cómodo del universo!!!!\nEn los costados está cocido, se coloca por arriba de la cabeza como una remera.\nLa espalda lleva combinación de colores. Generalmente la parte superior coincide con el color de los bolsillos. \n",
              "base": "Azul",
              "detalle": "Azul. Espalda Aqua",
              "vivos": "Aqua",
              "bolsillos": "Tapitas guardapampa Pastel "
            },
            "type": "primaria",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43000,
            "id": "66c5487994cf7b91ae155db3"
          },
          {
            "name": "JARDINERO LAURIN",
            "amount": null,
            "amountToBuy": 1,
            "price": 43000,
            "size": "",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1724039577712-821862753-1f8c028b-c1f2-4465-a071-3d6b7f84c908.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1724039577712-821862753-4d86a637-2d5c-47a3-b2df-b2c5057d834f.jpg",
            "table": "primaria",
            "description": {
              "general": "El LAURIN es un Jardinero super canchero y fresco. \nNo posee broches laterales, se coloca por la cabeza como una remera. \nLos broches del canesú son broches Madison de primera calidad lavables en lavarropas.\n",
              "base": "Azul",
              "detalle": "Azul",
              "vivos": "Celeste Bandera",
              "bolsillos": "Tapitas Ojos turcos + Mano Fátima + Gliter plateado"
            },
            "type": "primaria",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43000,
            "id": "66c2c19b786e49d79bd191f7"
          },
          {
            "name": "Totebag M Bordada",
            "category": "accesorios",
            "type": "totebag",
            "amount": 4,
            "amountToBuy": 1,
            "price": 16000,
            "size": "M",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1739931072357-676367530-peces 1.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1739931072357-676367530-peces 2.jpg",
            "img3": "https://pacucostorage.blob.core.windows.net/guardapolvos/1739931072357-676367530-medidas .jpg",
            "table": "stock",
            "description": {
              "general": "Totebag de tusor natural. Bordado: Peces. Medidas: ancho: 35cm. alto: 40cm. fuelle: 7cm.",
              "base": "",
              "detalle": "",
              "vivos": "",
              "bolsillos": ""
            },
            "show": true,
            "effectivePrice": 16000,
            "id": "67b53dc2cfed0e8d5cd3cf4a"
          },
          {
            "name": "Totebag M Bordada",
            "category": "accesorios",
            "type": "totebag",
            "amount": 4,
            "amountToBuy": 1,
            "price": 16000,
            "size": "M",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1739931141505-81462960-sol 1.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1739931141505-81462960-sol 2.jpg",
            "img3": "https://pacucostorage.blob.core.windows.net/guardapolvos/1739931141505-81462960-medidas .jpg",
            "table": "stock",
            "description": {
              "general": "Totebag de tusor natural. Bordado: Sol. Medidas: ancho: 35cm. alto: 40cm. fuelle: 7cm.",
              "base": "",
              "detalle": "",
              "vivos": "",
              "bolsillos": ""
            },
            "show": true,
            "effectivePrice": 16000,
            "id": "67b53e07cfed0e8d5cd3cf53"
          },
          {
            "name": "FLORA",
            "amount": null,
            "amountToBuy": 1,
            "price": 43000,
            "size": "",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1724204885993-161668739-IMG-20240623-WA0184.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1724204885993-161668739-IMG-20240623-WA0183.jpg",
            "table": "primaria",
            "description": {
              "general": " El Flora está cortado al bies… Esta técnica consiste en cortar el tejido en un ángulo de 45 grados respecto a su hilo, proporcionando una elasticidad única que permite a la tela adaptarse de manera fluida a las formas del cuerpo, lo que lo hace ser el guardapolvo más cómodo del universo!!!!\nEn los costados está cocido, se coloca por arriba de la cabeza como una remera. Los botones de 28 cm de la parte superior van cosidos ( no se desabrochan) están forrados en tela arciel.\nLa espalda lleva combinación de colores. Generalmente la parte superior coincide con el color de los bolsillos. \nHace zoom y enamórate de los detalles!!!\n",
              "base": "Azul",
              "detalle": "Turquesa claro 412",
              "vivos": "Turquesa Claro 412",
              "bolsillos": "Tapitas Arcoiris Pastel"
            },
            "type": "primaria",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43000,
            "id": "66c5475794cf7b91ae155da7"
          },
          {
            "name": "MALVA CON RECORTE",
            "amount": null,
            "amountToBuy": 1,
            "price": 43000,
            "size": "",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1724204466565-755700628-IMG-20240623-WA0241.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1724204466565-755700628-IMG-20240623-WA0240.jpg",
            "table": "primaria",
            "description": {
              "general": "El MALVA es un Ponchito con broches laterales ( 3 broches aro de 11mm marca Everle de primera calidad)\nPuede llevar corte en canesú o elegir la opción de la delantera toda entera.\nLa espalda es toda del mismo color.\n",
              "base": "Blanca",
              "detalle": "Azul",
              "vivos": "Turquesa Claro 412",
              "bolsillos": "Tapita guardapampa pastel + Gliter plateado"
            },
            "type": "primaria",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43000,
            "id": "66c545b394cf7b91ae155d95"
          },
          {
            "name": "FLORA",
            "amount": null,
            "amountToBuy": 1,
            "price": 43000,
            "size": "",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1724203878668-99047351-IMG-20240623-WA0226.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1724203878668-99047351-IMG-20240623-WA0228.jpg",
            "table": "primaria",
            "description": {
              "general": " El Flora está cortado al bies… Esta técnica consiste en cortar el tejido en un ángulo de 45 grados respecto a su hilo, proporcionando una elasticidad única que permite a la tela adaptarse de manera fluida a las formas del cuerpo, lo que lo hace ser el guardapolvo más cómodo del universo!!!!\nEn los costados está cocido, se coloca por arriba de la cabeza como una remera. Los botones de 28 cm de la parte superior van cosidos ( no se desabrochan) están forrados en tela arciel.\nLa espalda lleva combinación de colores. Generalmente la parte superior coincide con el color de los bolsillos. \nHace zoom y enamórate de los detalles!!!\n",
              "base": "Blanca",
              "detalle": "Rosa Chicle",
              "vivos": "Rosa Chicle",
              "bolsillos": "Tapita animal Colores + doble vivo"
            },
            "type": "primaria",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43000,
            "id": "66c5436794cf7b91ae155d79"
          },
          {
            "name": "JARDINERO LAURIN",
            "amount": null,
            "amountToBuy": 1,
            "price": 43000,
            "size": "",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1724039684344-295700694-709bb0a4-1f4c-4f9b-a149-0c541e7449f1.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1724039684344-295700694-4d86a637-2d5c-47a3-b2df-b2c5057d834f.jpg",
            "table": "primaria",
            "description": {
              "general": "El LAURIN es un Jardinero super canchero y fresco. \nNo posee broches laterales, se coloca por la cabeza como una remera. \nLos broches del canesú son broches Madison de primera calidad lavables en lavarropas.\n",
              "base": "Azul",
              "detalle": "Azul",
              "vivos": "Turquesa Claro 412",
              "bolsillos": "Tapitas Ojitos turcos + Gliter Plateado"
            },
            "type": "primaria",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43000,
            "id": "66c2c206786e49d79bd191fd"
          },
          {
            "name": "FLORA",
            "amount": 1,
            "amountToBuy": 1,
            "price": 43100,
            "size": "4",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1727792797553-337373926-8e1ea2c4-a30b-471d-bcd2-e97215b6ef3b.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1727792797553-337373926-03e14d60-7070-4399-a431-4902a0eb1ee4.jpg",
            "table": "stock",
            "description": {
              "general": " El Flora está cortado al bies… Esta técnica consiste en cortar el tejido en un ángulo de 45 grados respecto a su hilo, proporcionando una elasticidad única que permite a la tela adaptarse de manera fluida a las formas del cuerpo, lo que lo hace ser el guardapolvo más cómodo del universo!!!!\nEn los costados está cocido, se coloca por arriba de la cabeza como una remera. Los botones de 28 cm de la parte superior van cosidos ( no se desabrochan) están forrados en tela arciel.\nLa espalda lleva combinación de colores. Generalmente la parte superior coincide con el color de los bolsillos. \nHace zoom y enamórate de los detalles!!!\n",
              "base": "Cuadrille chico Francia",
              "detalle": "Azul",
              "vivos": "Turquesa Claro 412 ",
              "bolsillos": "Tapita Mariposas + Gliter plateado"
            },
            "type": "stock",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43100,
            "id": "66fc06a089d1a32a068d8788"
          },
          {
            "name": "FLORA",
            "amount": 1,
            "amountToBuy": 1,
            "price": 43100,
            "size": "5",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1727824384372-39336044-IMG-20241001-WA0074 - Copia.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1727824384372-39336044-IMG-20241001-WA0076.jpg",
            "table": "stock",
            "description": {
              "general": "El Flora está cortado al bies… Esta técnica consiste en cortar el tejido en un ángulo de 45 grados respecto a su hilo, proporcionando una elasticidad única que permite a la tela adaptarse de manera fluida a las formas del cuerpo, lo que lo hace ser el guardapolvo más cómodo del universo!!!!\nEn los costados está cocido, se coloca por arriba de la cabeza como una remera. Los botones de 28 cm de la parte superior van cosidos ( no se desabrochan) están forrados en tela arciel.\nLa espalda lleva combinación de colores. Generalmente la parte superior coincide con el color de los bolsillos. \nHace zoom y enamórate de los detalles!!!\n",
              "base": "Cuadrille chico Francia",
              "detalle": "Azul",
              "vivos": "Lima",
              "bolsillos": "Tapita arcoiris multicolar"
            },
            "type": "stock",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43100,
            "id": "66fc8201476f4b7fb540bcee"
          }
        ],
        "STOCK": [
          {
            "name": "MELANIA",
            "amount": 1,
            "amountToBuy": 1,
            "price": 39200,
            "size": "2",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1727793493734-908297500-16e5905d-68d2-4894-a09d-df60b79d05b1.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1727793493734-908297500-16ed29e2-53e4-45f5-95cc-e3a3e1342eb4.jpg",
            "table": "stock",
            "description": {
              "general": "El Melania está cortado al bies… Esta técnica consiste en cortar el tejido en un ángulo de 45 grados respecto a su hilo, proporcionando una elasticidad única que permite a la tela adaptarse de manera fluida a las formas del cuerpo, lo que lo hace ser el guardapolvo más cómodo del universo!!!!\nEn los costados está cocido, se coloca por arriba de la cabeza como una remera.\nLa espalda lleva combinación de colores. Generalmente la parte superior coincide con el color de los bolsillos.\n",
              "base": "Cuadrille chico Francia",
              "detalle": "Azul",
              "vivos": "Rosa 220",
              "bolsillos": "Tapitas Ojos turcos"
            },
            "type": "stock",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 39200,
            "id": "66fc095789d1a32a068d87b4"
          },
          {
            "name": "MALVA CON RECORTE",
            "amount": 1,
            "amountToBuy": 1,
            "price": 43100,
            "size": "1",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1727824674253-944503463-IMG-20241001-WA0081.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1727824674253-944503463-IMG-20241001-WA0082 - Copia.jpg",
            "table": "stock",
            "description": {
              "general": "El MALVA es un Ponchito con broches laterales ( 3 broches aro de 11mm marca Eberle de primera calidad)\nPuede llevar corte en canesú o elegir la opción de la delantera toda entera.\nLa espalda es toda del mismo color.\n",
              "base": "Cuadrille chico Francia",
              "detalle": "Azul",
              "vivos": "Fucsia +Gliter Fucsia",
              "bolsillos": "AZULES"
            },
            "type": "stock",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43100,
            "id": "66fc8323476f4b7fb540bd00"
          },
          {
            "name": "JARDINERO PACU CON TABLITAS",
            "amount": 1,
            "amountToBuy": 1,
            "price": 43100,
            "size": "3",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1722447518727-821339595-IMG-20240623-WA0188.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1722447518727-821339595-IMG-20240623-WA0207.jpg",
            "table": "stock",
            "description": {
              "general": "El PACU es un Jardinero super canchero y fresco. \nNo posee broches laterales, se coloca por la cabeza como una remera. \nLos broches del canesú son broches aro de 11mm de primera calidad lavables en lavarropas.\n",
              "base": "Jean Azul",
              "detalle": "Fucsia",
              "vivos": "Fucsia +Gliter Fucsia",
              "bolsillos": "Tapita Margaritas + Gliter Fucsia"
            },
            "type": "stock",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43100,
            "id": "66aa76a17dbdd519b8d3037b"
          },
          {
            "name": "MALVA CON RECORTE",
            "category": "guardapolvo",
            "type": "stock",
            "amount": 1,
            "amountToBuy": 1,
            "price": 43100,
            "size": "0",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1740088568669-392326363-Photoroom_20250220_182215.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1740088568669-392326363-Photoroom_20250220_182238.jpg",
            "img3": "https://pacucostorage.blob.core.windows.net/guardapolvos/1740088568669-392326363-MALVA.jpg",
            "table": "stock",
            "description": {
              "general": "El MALVA es un Ponchito con broches laterales ( 3 broches aro de 11mm marca Eberle de primera calidad)\nPuede llevar corte en canesú o elegir la opción de la delantera toda entera.\nLa espalda es toda del mismo color.\n",
              "base": "celeste intermedio ",
              "detalle": "Oxford Celeste",
              "vivos": "Rosa Bebe",
              "bolsillos": "guardapampa pastel+ glitter"
            },
            "show": true,
            "effectivePrice": 43100,
            "id": "67b7a4f9ea929f0524f303b0"
          },
          {
            "name": "JARDINERO LAURIN",
            "amount": 1,
            "amountToBuy": 1,
            "price": 43100,
            "size": "2",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1721754404682-407788781-IMG-20240623-WA0163.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1721754404682-407788781-IMG-20240623-WA0144.jpg",
            "table": "stock",
            "description": {
              "general": "\n\nEl LAURIN es un Jardinero super canchero y fresco. \nNo posee broches laterales, se coloca por la cabeza como una remera. \nLos broches del canesú son broches Madison de primera calidad lavables en lavarropas.\n",
              "base": "Azul",
              "detalle": "Azul",
              "vivos": "Celeste Bebe 401",
              "bolsillos": "Tapitas Azules Espacio"
            },
            "discountPrice": 0,
            "type": "stock",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43100,
            "id": "669fe321c684ee643f9ad255"
          },
          {
            "name": "MILA",
            "amount": 1,
            "amountToBuy": 1,
            "price": 43100,
            "size": "2",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1737229026412-504093294-Photoroom_20250118_133514.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1737229026412-504093294-Photoroom_20250118_133528.jpg",
            "table": "stock",
            "description": {
              "general": "\n\nEl Mila es un Jardinero super canchero y fresco. El diseño está inspirado en una prenda deportiva. No posee broches laterales, se coloca por la cabeza como una remera. Se puede confeccionar con combinaciones de telas en la delantera diferente a la de la espalda, creando así una prenda personalizada.\nEl Mila es más largo en la espada con respecto a la delantera.\n",
              "base": "Cuadrille chico Negro",
              "detalle": "Negro",
              "vivos": "Negro",
              "bolsillos": "Negro + Gliter Negro Opaco"
            },
            "type": "stock",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43100,
            "id": "678c02e5066398ef709bc4d7"
          },
          {
            "name": "FLORA",
            "amount": 1,
            "amountToBuy": 1,
            "price": 43100,
            "size": "1",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1737232299694-157159618-Photoroom_20250118_172348.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1737232299694-157159618-Photoroom_20250118_133555 (1).jpg",
            "table": "stock",
            "description": {
              "general": " El Flora está cortado al bies… Esta técnica consiste en cortar el tejido en un ángulo de 45 grados respecto a su hilo, proporcionando una elasticidad única que permite a la tela adaptarse de manera fluida a las formas del cuerpo, lo que lo hace ser el guardapolvo más cómodo del universo!!!!\nEn los costados está cocido, se coloca por arriba de la cabeza como una remera. Los botones de 28 cm de la parte superior van cosidos ( no se desabrochan) están forrados en tela arciel.\nLa espalda lleva combinación de colores. Generalmente la parte superior coincide con el color de los bolsillos. \nHace zoom y enamórate de los detalles!!!\n",
              "base": "Blanca",
              "detalle": "Azul",
              "vivos": "Aqua",
              "bolsillos": "tapita arcoiris "
            },
            "type": "stock",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43100,
            "id": "678c0fab066398ef709bc5e8"
          },
          {
            "name": "JARDINERO LAURIN",
            "amount": 1,
            "amountToBuy": 1,
            "price": 43100,
            "size": "2",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1727791492335-666205134-IMG-20240922-WA0051.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1727791492335-666205134-IMG-20240623-WA0046.jpg",
            "table": "stock",
            "description": {
              "general": "El LAURIN es un Jardinero super canchero y fresco. \nNo posee broches laterales, se coloca por la cabeza como una remera. \nLos broches del canesú son broches Madison de primera calidad lavables en lavarropas.\n",
              "base": "Azul",
              "detalle": "Azul",
              "vivos": "Celeste Bebe 401",
              "bolsillos": "Tapitas Ojos turcos + Mano Fátima + Gliter plateado"
            },
            "type": "stock",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43100,
            "id": "66fc018589d1a32a068d8746"
          },
          {
            "name": "JARDINERO LAURIN",
            "amount": 1,
            "amountToBuy": 1,
            "price": 43100,
            "size": "1",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1727791713537-835440660-fe678bc2-e01d-4244-bda1-fc9d1820ff23.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1727791713537-835440660-6d7ef07e-dcf3-4384-a7bc-197a00e29a66.jpg",
            "table": "stock",
            "description": {
              "general": "El LAURIN es un Jardinero super canchero y fresco. \nNo posee broches laterales, se coloca por la cabeza como una remera. \nLos broches del canesú son broches Madison de primera calidad lavables en lavarropas.\n",
              "base": "Azul",
              "detalle": "Azul",
              "vivos": "Rosa Chicle",
              "bolsillos": "Tapita corazones Aldi"
            },
            "type": "stock",
            "category": "guardapolvo",
            "show": true,
            "effectivePrice": 43100,
            "id": "66fc026389d1a32a068d8752"
          },
          {
            "name": "MALVA CON RECORTE + VOLADOS",
            "category": "guardapolvo",
            "type": "stock",
            "amount": 1,
            "amountToBuy": 1,
            "price": 46700,
            "size": "4",
            "img": "https://pacucostorage.blob.core.windows.net/guardapolvos/1740524619243-123706378-Photoroom_20250225_192137.jpg",
            "img2": "https://pacucostorage.blob.core.windows.net/guardapolvos/1740524619243-123706378-Photoroom_20250225_192153.jpg",
            "img3": "https://pacucostorage.blob.core.windows.net/guardapolvos/1740524619243-123706378-MALVA.jpg",
            "table": "stock",
            "description": {
              "general": "\n\nEl MALVA es un Ponchito con broches laterales ( 3 broches aro de 11mm marca Eberle de primera calidad)\nPuede llevar corte en canesú o elegir la opción de la delantera toda entera.\nLa espalda es toda del mismo color.\n\n\n",
              "base": "Azul",
              "detalle": "Rojo",
              "vivos": "Rojo + Gliter Plateado",
              "bolsillos": "Estampa corazones+gliiter plateado"
            },
            "show": true,
            "effectivePrice": 46700,
            "id": "67be4c4c17d77ee8d71468db"
          }
        ]
      });

    // useEffect(() => {
    //     if(config && featuredProducts){
    //         setFeaturedProducts(config[0].featuredProducts);
    //     } 
    // }, [config]);

    return(
        <>
            <DisplayBrandName />
            {
                featuredProducts && Object.entries(featuredProducts).map(([title, prods]) => (
                    <CarouselProd key={title} title={title} prods={prods} /> 
                ))
            }
            <ProductsMenu />
            <FrecuentQuestions />
            <AboutUs />
        </>
    )
}

export default Home