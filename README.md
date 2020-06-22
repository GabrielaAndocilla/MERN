# MERN

Es un proyecto web realizado en MERN que son un conjunto de frameworks y herramientas . Este consinsiste en la implementación de:

MongoDB: Base no sql donde se almacena los datos

NodeJS: Ambiente de ejecución de javaScript

ExpressJs: PErmite crear el backend de un sitio  usando Nodejs

ReactJs: Para la creación de interfaces de usuarios


El proyecto trata del ingreso de departamentos y trabajadores, y mostrar cuanto es su sueldo. El departamento dirá cuanto es el sueldo por hora del trabajador y  cada trabajador tendrá el número de horas.

Esta información se almacenará en Mongodb, el cual tendrá dos collecciones definidas por esquemas hechos mongoose. Estos esquemas se encontrarán referenciados, en este caso la collección de trabajador tendrá un referencia de Departamento.


Para el proyecto se necesita:

-Intalar Node.js
-MongoDB, su instalación se puede realizar por medio de Homebrew
-Postman o cualalquier programa que permita testear las peticiones HTTP REST

1. Iniciar proyecto

mkdir nombre_carpeta
cd nombre_carpeta
npm init

2. Instalar lo necesario

npm i express mongoose cors 

3. Se puede instalar nodemon si se desea
npm i -D nodemon

Tras tener todo esto se pued realizar el proyecto, para correr el frontend se escribe:
npm start

esto iniciará un proceso en el navegador

para el backend:
npm run dev

Imprimirá mensajes en consola que identificaremos que todo se encuentra bien.


