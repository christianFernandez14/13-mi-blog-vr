/**La inicialización del proyecto*/

1.- Nos posicionamos en el floder del backEnd, en mi caso lo llame API

2.- Y creamos nuestro "package.json", es decir vamos inicializar un proyecto de node.

    en el foder debe colocar > npm init   ... Sigues todos lo pasos

3.- Instalaremos Frameworks, que nos ayudaran en el desarrollo del proyecto

    .- Express > Nos va permitir gestionar todo peticiones HTTP (GET PUT POST DELETE)
       Te posicionas en el carpeta del backEnd > "npm install express --save"  .. Con el "save" le estamos indicando que guarde esa dependecia dentro de nuestro proyecto y no de manera global

    .- Mongoose > Es un ORM, un gestor de todas las funciones de MongoDb
       Te posicionas en el carpeta del backEnd > "npm install mongoose@6.4.3 --save" Con esta version especicamente al momento de crear el proyecto quiero probar probar los problemas que hay con la version actual que es la v8.4.0
    
    .- Multer > Libreria que nos permite gestionar archivos, como subirlos a nustro proyectos.  
       Te posicionas en el carpeta del backEnd > "npm install multer --save"

    .- Validator > Libreria que nos permite validar datos del lado backEnd
       Te posicionas en el carpeta del backEnd > "npm install validator --save"

    .- Cors > Un midelwere, que nos permite gestionar el acceso cruzado entre dominios.  Es un mecanismo de seguridad implementado por los navegadores web 
       Te posicionas en el carpeta del backEnd > "npm install cors --save"

    .- Nodemon > Es el que permite escuhar simpre al proyecto, monitorearlo, y lo ideal que lo tengas dentro de las dependencias pero Dev y no en produción como las anteriores.
          Te posicionas en el carpeta del backEnd > "npm install nodemon --save-dev"  

4.- Configuramos nuestro nodemon, con nuestro archi index.js
    
    Nos vamos a la propiedad "script", dentro de nuestro package.json y creamos otro propiedad, "start": "nodemon index.js" ... para salir del escucha de nodemon "Ctrl + C"


/**CONCETARNOS A LA BASE DE DATO CON MONGOOSE*/

1.- Debemos tener arriba nuestra DB (ejecutar el mongod.exe) y sigusta el cliente visual de MonngoDB Compass y me conecto

2.- En el compass, creamos la DB junto a su colección, ya que no lo permite crear, si no la definimos.

3.- Nos comenzamos a organizar un poco y creamos en nustra carpeta raiz un folder de nombre "database" > conexion.js

4.- Requerimos todos los metodos y librerias, para podero conectarme.

5.- En el backEnd, para importar dependencias o librerias se usa el "require" en vez del "import", lo que hace el require es ir a la carpeta de node-mudules y tomar su dependencia

6.- Usamo el archivo index.js para llamar la conexion, ya que en package.json definimos que nodemon viera a ese archivo

7.- Al momento de crear el metodo de conexion nos percatamos que la version de mongoose instalada para este momento v6.4.3 no me permite el String de conexion solo la dirección Ip de conexión 


/**CREANDO EL SERVIDOR CON NODE*/

1.- Nos permite escuhar peticiones y crear rutas, entre otras cosas.

2.- Donde estamos levantando el servidor, perfectamente puede ir el llamdo a la conexon a la DB, dependera de como lo quieras estructurar.
