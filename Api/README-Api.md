Api:

/**Hablemos de la DB que utlizaremos:* 

1.- MongoDb: Db no relacional es de decir NoSql

    Repasemos un poco la diferencia entre ambas:

    Sql => Oracle, Postgres, MySql / Conjunto de tablas (orientadas a tablas), se relacionan mediantes indices, se accede a ella a traves de consultas (lenguaje Sql), con esquema claro y fijo 

    NoSql => MongoDB / su lenguaje de consulta es JavaScript, No tiene porque existir algun tipo de relación y otra (siempre puedes usar el codigo para simularlo, pero no es principal accion, es decir es No Relacional), no le decimos "tablas", le decimos colecciones, que a su vez continen documentos (que son obejto Json)

     SQL              NOSQL
    -Relacionales   - No relacionales
    -Tablas         - JavaScript 
    -Esquema        - Orientada a documentos(json, bson) 
                    - Sencillez
                    - Velocidad
                    - Esquema libre

            
            Esquema Tabla Sql               |            Base de datos > Colección        
                                            |
              Columna     Columna           |                 Campos            Campos
        Fila  Registro    Registro          |  Documento      Datos del Doc.    Datos del Doc.
        Fila  Registro    Registro          |  Documento      Datos del Doc.    Datos del Doc.


Veamoslo en Json, para que entiendas la colección:

Usuario:
{
  nombre: "Christian",
  apellido: "Fernandez",
  email: "christian@christian.com"
}

.- la Base de dato y coleccion > Usuario
.- los Campos > nombre, apellido, email
.- Datos del Docimenyos > Chrsitian, Fernandez, christian@christian.com
.- Documento > todo lo que contenga cada apertura y cierre del las llaves ({})


VAMOS CON LA INSTALACIÓN DE MONGODB.

  Al momento de la creación de este proyecto ya tenia instalada la versión 6.0 y al recurrir a la pagina oficial de MongoDB.com solo existia una anterior, que esta descargue para este proyecto...

  El motivo de lo anterior es para ver cuales son los cambios que afecta entre versión y versión 

  recuerda que para trabjar un versio u otra, luego de instalar dicha version debes:

    1.- Crear la carpeta data: ejem "data5"
    2.- Entrar en la carpeta anterior y crear una con el nombre "db"
    3.- Y cuando vayas ejecutar el demonio (mongod.exe) por tener una versión distinta a las 6, que fue la primera, debes colocar el "path" ejem: >mongod.exe --dbpath C:/data5/db  ... y se levanta en demonio

/**Hablemos de las Tools a utilizar - para desarrollar APIs:*  Ya que nos permitira usar javaScript en toda las tecnologias 

1.- Node.js: debes tener instalada la versión Lts, en el momento que estes desrrollando el proyecto. Esta tecnologia te sirve no solo para la creacion de APIs, sino para todo el ecositemas de JS 

    Vericamos en el "cmd" de windows (en mi caso) que esta instalada con el comando de "node --version", si se instalo correctamente debe arrojarte la version instalada
    Tambien vericamos que se instalo "npm", ya que es que es el gestor de la dependecias del proyecto.

2.- Debemos tener el MongoDb corriendo (ejecutar mongod.exe) y tener cuidado que versión estas utilizando.

3.- Debemos tener un cliente REST, en este caso usaremos "Postman", nos permitira testear los distintos "endPoints" que vayamos desarrollando para nuestro backEnd, es el que te impone las condiciones de como debe funcionar una API


/**La inicialización del proyecto*/

1.- Nos posicionamos en el floder del backEnd, en mi caso lo llame API

2.- Y creamos nuestro "package.json", es decir vamos inicializar un proyecto de node.

    en el foder debe colocar > npm init   ... Sigues todos lo pasos

3.- 

/**NOS VEMOS EN README DE LA API**/