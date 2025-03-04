# Pacuco Guardapolvos

FrontEnd de la pagina web, desarrolada con ReactJS

URL: pacuco.com.ar


TODO:

- Mejorar la pantalla de finalizar compra.
- Agregar filtros a la pestaña de adminsitracion de productos (listo falta adaptarlo a mobile)
- Mejorar la forma en la que se pueden ocultar guardapolvos del publico.
- Agregar a la barra de navegacion los accesorios (intentar hacer == que lo que voy a implementar en administracion)
- Corregir bug de la imagen que aparece cuando se ingresa al prod desde el carrito, se muestra una vieja.
- Agregar en seccion admin que puedan editar los textos mas importantes. (que se haga la request en App.jsx y se guarde en un reducer)
- Ver si hay API del correo argentino para simplificar la eleccion de sucursal.
- Ver como hacer para implementar el whatsapp una vez re realice una compra en lugar de un mail
- Ver de agregar en productos comprados, unos botones por producto, para indicar que esta en proceso su pedido y que ya fue entregado, y que al clickearse se envie un correo
- Cuando un guardapolvo es == pero de distinto talle, que aparezcan en una misma publicacion (esto en los de stock)
- Mejorar tiempo de carga de la pagina, rendimiento (LCP, FCP, etc).
- Agregar un boton de compartir en redes sociales.
- Agregar mas filtros para los guardapolvos (por tabla / base / vivo / detalle / modelo, etc).
- Agregar que puedan modificar los guardapolvos destacados.
- Cambiar nombre que aparece al recibir el mail de compras@pacuco.com.ar
- [x] ~~Que no se mueva para arriba la pantalla de administracion de prods cuando se pasa de pagina.~~
- [x] ~~Ver que pasa con la segunda pagina de los productos~~
- [x] ~~Agregar a servicio configs las categorias y demas para que puedan ser administradas desde la administrtacion~~
- [x] ~~Corregir estilo de productos cuando no tienen descuento, quedan raros los espacios~~
- [x] ~~Agregar que se pueda editar si un producto aparece cuando no tiene stock (una flag).~~
- [x] ~~Cambiar grafico de total vendidos en pantalla admin.~~
- [x] ~~Corregir en seccion admin que no se actualice la pagina en cada modificacion.~~
- [x] ~~Cambiar como se realiza la busqueda, que sea con una query al backend y quede en la url, cosa de que al compartir la url se aplique la busqueda. EJ: `/items/search=laptop`~~
- [x] ~~Agregar label que indique que en un guardapolvo es de entrega inmediata, o que demora 20 dias, en el mismo lugar donde figura si hay stock o no.~~
- [x] ~~Colocar que se pueda cerrar el carrito con un boton al lado del Finalizar Compra (y ver si se puede cerrar cuando le dan para atras)~~
- [x] ~~Cambiar/Mejorar las imagenes del carousel grande del home~~
- [x] ~~Modificar que los permisos en seccion admin se comprueben cada vez que se renderiza la pagina, y no cada vez que se quiere realizar una accion.~~
- [x] ~~Agregar en medios de pago, el titular de la cuenta. {para cambiar esto bien deberia modificar la estructura del schema payments.js del backend, que queden en diccionarios separados,  (mercado pago, cuenta dni, transferencia) y que adentro de cada uno tenga el cbu, titular, alias, etc}~~
- [x] ~~Agregar opcion de modificacion del precio por % de todos los guardapolvos en seccion admin.~~
- [x] ~~Agregar pantalla de carga a imagenes de guardapolvos `https://www.youtube.com/watch?v=VyUJUD5gyoo&t=321s`~~
- [x] ~~Arreglar bug que ocurre luego de elegir un talle en una lista de guardapolvos, aparecen todos, y rapido aparecen los filtrados, agregarle pantalla de carga o algo.~~
- [x] ~~Cambiar preguntas frecuentes por la foto que mando mama~~
- [x] ~~Hacer que al darle click en sobre nosotras o productos del footer, te lleve a esa seccion~~
- [x] ~~Mejorar el estilo del descuento, poner el % que se esta descontando del valor original. EJ: `https://www.fravega.com`~~
- [x] ~~Arreglar bug que pasa al aplicar descuento, se plica en uno, vas al otro y se va el que ya tenia.~~
- [x] ~~Que las paginas del componente PaginationProductos.jsx se mantenga, al volver para atras de un guardapolvo.~~
- [x] ~~Bug: cuando se esta en una pagina 5 en nivel inicial, y vas desde el footer a primaria que tiene menos, se buguea~~
