# Apunte para Sistemas Distribuidos correspondiente a los temas de práctica del primer parcial.
**Martin Ignacio Casas**  
**v1.0.0**

## Índice
1. [JavaScript](#javascript)
2. [API REST en Node.js](#api-rest-en-node)
3. [Frontend en Node.js](#frontend-en-node)
4. [Anexo 1: Git y GitHub](#anexo-1-git-y-github)
5. [Anexo 2: Axios](#anexo-2-axios)
6. [Anexo 3: Formularios en JavaScript y HTML](#anexo-3-formularios-en-javascript-y-html)

---

## JavaScript

### Introducción
JavaScript es uno de los lenguajes más utilizados en el desarrollo web. Es conocido por su capacidad de manipular dinámicamente el contenido de las páginas web, interactuar con APIs externas y manejar eventos de usuario (aquellos que generan los usuarios cuando interactuan con apps). Originalmente creado para ejecutarse en el navegador, hoy en día JavaScript también es utilizado en el backend gracias a plataformas como Node.js.

Su versatilidad y amplio ecosistema lo han convertido en el lenguaje por excelencia para el desarrollo de aplicaciones web modernas, tanto en el frontend como en el backend. Comparado con otros lenguajes como Java, JavaScript es más dinámico y flexible, permitiendo a los desarrolladores escribir código rápido y eficiente para aplicaciones web interactivas.

### ECMAScript
ECMAScript (ES) es el estándar que define el lenguaje JavaScript. Las versiones de JavaScript se refieren a menudo a las versiones de ECMAScript, como ES6 (ECMAScript 2015), que introdujo mejoras significativas, como las clases, promesas, y las funciones arrow. Desde entonces, el estándar ha seguido evolucionando, añadiendo características como módulos (ESM), async/await y nuevas formas de trabajar con objetos y arreglos.

Cambios significativos en ES6+:
- Clases: Añadieron una sintaxis más estructurada para definir objetos y herencia, similar a Java.
- Promesas: Facilitaron el manejo de operaciones asincrónicas de una manera más clara y legible.
- let/const: Nuevas formas de declarar variables con un mejor control de su alcance (scope).

### Usos Comunes
JavaScript es ampliamente utilizado para:

- **Frontend (Navegador)**: Manipulación del DOM, creación de interfaces de usuario interactivas (React, Vue.js).
- **Backend (Node.js)**: Servidores web, aplicaciones de tiempo real (Express, Nest.js).
- **Desarrollo Fullstack**: Aplicaciones que utilizan JavaScript tanto en el frontend como en el backend (MEAN/MERN stack).
- **Scripting**: Automización de tareas mediante scripts.

### Node.js
Node.js es un entorno de ejecución para JavaScript en el servidor. Permite a los desarrolladores crear aplicaciones del lado del servidor utilizando JavaScript, lo que abre la puerta al desarrollo fullstack utilizando un solo lenguaje.

Ventajas de Node.js:
- **No bloqueante (non-blocking I/O)**: Puede manejar múltiples solicitudes simultáneamente de manera eficiente.
- **Uso de un solo lenguaje**: Tanto frontend como backend en JavaScript.
- **NPM (Node Package Manager)**: El administrador de paquetes más grande del mundo, con acceso a miles de librerías.

### Tipos de Datos
JavaScript es un lenguaje dinámico, lo que significa que el tipo de dato de una variable se determina en tiempo de ejecución. Los tipos básicos incluyen:

- Primitivos: Number, String, Boolean, Undefined, Null, Symbol.
- Objetos: En JavaScript, todo lo demás es un objeto. Arrays y funciones también son objetos.
Ejemplo de uso de tipos primitivos y objetos:

```js
let num = 42;           // Number
let str = "Hola";       // String
let bool = true;        // Boolean
let arr = [1, 2, 3];    // Array (objeto)
let obj = { nombre: "Juan", edad: 30 }; // Objeto
```
### Variables var, let y const
En JavaScript, existen tres formas de declarar variables: var, let y const, cada una con su propio ámbito y casos de uso:

- var: tiene ámbito de función y ha estado disponible desde las primeras versiones de JavaScript.
- let: tiene ámbito de bloque y fue introducido en ES6, ofreciendo un mecanismo de ámbito más predecible.
- const: también tiene ámbito de bloque y se utiliza para declarar constantes que no pueden ser reasignadas después de su inicialización.

Buenas prácticas
Se recomienda usar let y const en lugar de var al escribir código JavaScript para evitar problemas inesperados con los ámbitos y crear un código más predecible y fácil de mantener.

- Usa let si necesitas reasignar el valor de una variable.
- Usa const si deseas declarar constantes que no cambien después de su inicialización.

### Funciones y Objetos
En JavaScript, las funciones pueden ser asignadas a variables, pasadas como argumentos, o devueltas por otras funciones. Los objetos, por su parte, son estructuras clave que permiten agrupar propiedades y métodos.

```js
let persona = {
    nombre: 'Ana',
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

persona.saludar();  // Hola, soy Ana
```

### Clases
Introducidas en ES6, las clases en JavaScript proporcionan una sintaxis más limpia y estructurada para trabajar con objetos y herencia. A diferencia de Java, JavaScript utiliza un modelo de herencia basado en prototipos.

```javascript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

let juan = new Persona('Juan', 25);
juan.saludar();  // Hola, soy Juan y tengo 25 años.
```

### Propiedades del Lenguaje (Scope, Chains y Closures)
En JavaScript, nos referimos a Scope como al alcance de una variable que es accesible en el codigo.

**Alcance Lexico:**
Es el tipo de alcance mas comun en JavaScript. Es determinado durante la fase de escritura de codigo, no durante la ejecucion. En este tipo de alcance, el acceso a las variables esta determinado por su ubicacion en el codigo. Utilizar el alcance lexico permite reducir problemas causados por la utilizacion de variables globales.

Ejemplo:
```javascript
function outer() {
  var outerVariable = "Hello";

  function inner() {
    var innerVariable = "World";
    console.log(outerVariable + " " + innerVariable);
  }

  inner();
}

outer(); output: Hello World
```

En el ejemplo de arriba, la funcion "inner" puede acceder a la variable "outerVariable" que esta definida en "outer". Esto es por esta en su "alcance lexico".

Ventajas del alcance lexico:
- Mayor legilibilidad: hace que el codigo sea mas legible dejando claro que variables estan definidas y cual es su alcance (tambien evitando conflictos de nombrado). Esto permite que el codigo sea mas facil de leer, en contraposicion a si abundaran las variables globales.
- Mayor mantenibilidad (encapsulacion): hace que el codigo sea mas mantenible haciendo que se puedan cambiar variable sin afectar otras partes del codigo. Es decir, el cambio de una variable acotada a un scope, no afecta otros scopes.
- Estado global reducido: el estado global es informacion que puede ser accedida en cualquier parte del codigo. Es necesario a veces, pero se puede reducir a una minima expresion limitando el alcance de las variables, y limitando tambien la modificacion de ese estado global a ciertas partes del codigo para que sea mas mantenible.

**Scope Chain:**
La scope chain es un mecanismo en JavaScript para encontrar variables. Consiste en los objetos de variables del ámbito actual y de todos los ámbitos padres. Al acceder a una variable, el motor de JavaScript primero buscará en el objeto de variables del ámbito actual. Si no la encuentra, seguirá buscando en la cadena de ámbitos hasta encontrar la variable o alcanzar el ámbito global.

```lua
   |
   +-- Contexto de Ejecución de Función 1
   |      |
   |      +-- Contexto de Ejecución de Función 2
   |             |
   |             +-- Contexto de Ejecución de Función 3
   |
   +-- Contexto de Ejecución de Función 4
```

Escenarios de Aplicación de la Scope Chain
La scope chain tiene varios escenarios de aplicación en JavaScript, entre los cuales se incluyen:

- Búsqueda de variables: La scope chain determina el orden en el que se buscan las variables, permitiendo que JavaScript acceda correctamente a las variables. Por ejemplo, si una función declara una variable con el mismo nombre que una variable global, se usará la variable local de la función.
- Closures (cierres): Un closure es una función que puede acceder a las variables del ámbito en el que fue creada, incluso después de que dicho ámbito haya finalizado. Esto es posible porque los closures capturan la cadena de ámbitos del contexto en el que se crearon. Se utilizan en funciones de callback, controladores de eventos, y módulos.
- Desarrollo modular: La scope chain permite implementar organización modular encapsulando variables y funciones en ámbitos privados. Esto significa que solo se puede acceder a esas variables y funciones dentro del ámbito en el que fueron declaradas, mejorando la legibilidad, mantenibilidad y modularidad del código.

Ejemplo de Closure:

```javascript
function createCounter() {
  var count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

var counter = createCounter();
counter(); // Salida: 1
counter(); // Salida: 2
```

En el ejemplo anterior, la función createCounter() devuelve una función interna que tiene acceso a la variable count de la función externa. Incluso después de que createCounter() haya terminado de ejecutarse, la función interna sigue pudiendo acceder y modificar la variable count. Esta es la característica fundamental de los closures.

Escenarios de Aplicación de los Closures
- Variables privadas: Los closures proporcionan un mecanismo para implementar variables privadas, es decir, variables que solo pueden ser accedidas por las funciones en las que fueron declaradas. Esto mejora la encapsulación y la seguridad del código.
- Desarrollo modular: Los closures se utilizan para crear código modular, dividiendo el código en unidades autocontenidas que se pueden reutilizar y mantener de forma independiente. Esto facilita la lectura, mantenibilidad y escalabilidad del código.
- Ejecución diferida: Los closures permiten diferir la ejecución de funciones, lo que es útil para implementar operaciones asíncronas y procesamiento de eventos.

### Event Loop
Un ejemplo popular de Engine de Javascript es el Engine V8 de Google. Es utilizado dentro de Chrome y en Node.js. Un grafico que resume sus componentes es:

![V8 Engine Components](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OnH_DlbNAPvB9KLxUCyMsA.png)

Consiste de dos componentes principales:
- Heap de Memoria: donde se realiza la alocacion de memoria.
- Call Stack: donde el runtime mantiene un track de las llamadas a las funciones

El proceso que realiza el call stack es simple, cuando se está a punto de ejecutar una función, esta es añadida al stack. Si la función llama a su vez, a otra función, es agregada sobre la anterior. Si en algún momento de la ejecución hay un error, este se imprimirá en la consola con un mensaje y el estado del call stack al momento en que ocurrió.

Javascript es un lenguaje single threaded. Esto quiere decir que durante la ejecución de un script existe un solo thread que ejecuta el código. Por lo tanto solo se cuenta con un call stack.

Ejemplo:

```js
function multiply (x, y) {    
  return x * y; 
} 

function printSquare (x) {    
  var s = multiply(x, x);    
  console.log(s); 
} 

printSquare(5);
```

Los estados del call stack serían:

![Call stack status](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*18iNeFsZ2pOq533_-YPGYA.png)

Si se tuviera una función de esta manera:

```js
function foo() {    
  foo(); 
} 

foo();
```

![Call stack overflow](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*SsUMEKtyEcfyj67N6cWhzQ.png)

Lo que sucedería es que en algún momento la cantidad de funciones llamadas excede el tamaño del stack, por lo que el navegador mostrará este error:

![Range error: call stack overflow](https://miro.medium.com/v2/resize:fit:772/format:webp/1*8moBF2yE8d8DitZHuXjceQ.png)

Pero qué pasa si llamamos a un timeout o hacemos un request con AJAX a un servidor. Al ser un solo thread, hay un solo call stack y por lo tanto solo se puede ejecutar una cosa a la vez. Es decir el navegador debería congelarse, no podría hacer más nada, no podría renderizar, hasta que la llamada termine de ejecutarse. Sin embargo esto no es asi, JavaScript es asincrónico y no bloqueante. Esto es gracias al Event Loop.

Event Loop
Algo interesante acerca de JavaScript, o mejor dicho de los runtimes de JavaScript, es que no cuentan nativamente con cosas como setTimeout, DOM, o HTTP request. Estas son llamadas web apis, que el mismo navegador provee, pero no están dentro del runtime JS.

Por lo tanto este es el gráfico que muestra una visión más abarcativa de JavaScript. En este se puede ver el runtime, más las Web APIs y el Callback Queue.

![Javascript runtimes components](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*s8PDSxizAIpw4B6Tdtd_Rg.png)

Al haber un solo thread es importante no escribir codigo bloqueante para la UI no quede bloqueada.

Pero ¿Cómo hacemos para escribir código no bloqueante?

La solución son callbacks asincronicas. Para esto combinamos el uso de callbacks (funciones que pasamos como parámetros a otras funciones ) con las WEB API’s.

```js
console.log("Hello");

setTimeout(function timeoutCallback() {

console.log("World");

}, 500);

console.log("Martin");

/* 
 * Resultados:
 * => Hello
 * => Martin
 * => World
 */
```

Como pueden ver la ejecución no se queda bloqueada en setTimeout() ya que imprime la instrucción que le sigue primero) ¿Pero entonces cómo es que posible que esto sea así si solo existe un solo thread? ¿ Cómo es que la ejecución continua y al mismo tiempo el setTimeout hace la cuenta regresiva para ejecutar la función pasada como callback?

Esto es porque, como mencione anteriormente, el setTimeout NO es parte del runtime. Sino que es provista por el navegador como WEB APIs ( o en el caso de Node por c++ apis). Los cuales SI se ejecutan en un thread distinto.

¿Como se maneja esto con una única call stack?

Existe otra estructura donde se guardan las funciones que deben ser ejecutadas luego de cierto evento (timeout, click, mouse move), en el caso del código de ejemplo de arriba se guarda que, cuando el timeout termine se debe ejecutar la función timeoutCallback(). Tener en cuenta que cuando sucede el evento, esta estructura no es la que la ejecuta y tampoco las agrega al call stack ya que sino podría pasar que la función se ejecutará en medio de otro código. Lo que hace es enviarla a la Callback Queue.

Lo que hace el event loop es fijarse el call stack, y si está vacío (es decir no hay nada ejecutandose) envía la primera función que esté en la callback queue al call stack y comienza a ejecutarse.

Luego de terminar la cuenta regresiva del setTimeout() (que no es ejecutada en el runtime de javascript), timeoutCallback() será enviada a la callback queue. El event loop chequeara el Call Stack, si este está vacío enviará timeoutCallback() al call stack para su ejecución.

![Javascript event loop example](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7TBEc7ozzrMZmVgvI3s0mQ.gif)

De esta manera se logra que el código sea no bloqueante, en vez de un setTimeout podría ser una llamada a un servidor, en donde habría que esperar que se procese nuestra solicitud y nos envíe una respuesta, el cual sería tiempo ocioso si no contáramos con callbacks asincronicas, de modo que el runtime pueda seguir con otro código. Una vez que la respuesta haya llegado del servidor y Call Stack esté vacío, se podrá procesar la respuesta (mediante la función pasada como callback ) y hacer algo con ella, por ejemplo mostrarla al usuario.

### Manejo de Paquetes con npm

npm responde a las siglas de Node Package Manager o manejador de paquetes de node, es la herramienta por defecto de JavaScript para la tarea de compartir e instalar paquetes.

Tal como reza su documentación, npm se compone de al menos dos partes principales.

- Un repositorio online para publicar paquetes de software libre para ser utilizados en proyectos Node.js
- Una herramienta para la terminal (command line utility) para interactuar con dicho repositorio que te ayuda a la instalación de utilidades, manejo de dependencias y la publicación de paquetes.

Es decir, en tu proyecto basado en Node — que actualmente incluye los proyectos de aplicaciones web que utilizan Node para su proceso de compilación y generación de archivos — utilizarás la utilidad de linea de comandos (cli) para consumir paquetes desde el repositorio online, un listado gigantesco de soluciones de software para distintos problemas disponibles públicamente en npmjs.com y para manejar dependencias, y para ello necesitas un archivo de configuración que le diga a npm que este es un proyecto node.

package.json
Este archivo indica a npm que el directorio en el que se encuentra es en efecto un proyecto o paquete npm. Este archivo contiene la información del paquete incluyendo la descripción del mismo, versión, autor y más importante aún dependencias.

Este archivo es generado automáticamente mediante la ejecución de un script de npm: 
```bash 
npm init 
``` 
este script es ejecutado para inicializar un proyecto JavaScript, al ejecutarlo la linea de comandos hará algunas preguntas para crear el paquete, como nombre, version, autor, licencia, etc.

Algunos campos son:

- version: Corresponde a la versión de tu proyecto. Lo ideal es mantener este campo actualizado cuando modificas algo en tu proyecto.
- description: Una breve descripción de tu proyecto. Particularmente importante si lo que estás creando es un paquete que publicarás vía npm.
- entry point: Define cuál será el punto de "entrada" de tu proyecto. Esto es, que archivo se ejecutará cuando se importe tu proyecto dentro de otro. Nuevamente, especialmente importante para paquetes de librerías.
- test command: Aquí puedes definir el comando que quieres ejecutar para realizar las pruebas de tu proyecto, este comando se ejecutará cuando escribas npm run test en tu terminal.
- git repository: Define la url del repositorio git en donde este proyecto está alojado, se utiliza para informar a los usuarios de tu paquete el repositorio en donde encontrar el código fuente del proyecto.
- author: El nombre e email de quien creó este proyecto.
- license: Identifica el tipo de licencia de uso de tu proyecto. Permite a las personas saber que y que no está permitido al usar tu código. 
- private: Es un valor boolean que te permite evitar que tu paquete se publique en el repositorio. Si lo que estás creando es un proyecto personal este valor será true.

npm scripts
Una importante sección de este archivo es scripts. Esta sección define un listado de propiedades que permiten ejecutar comandos dentro del contexto de tu proyecto incluyendo: comandos de otros paquetes listados como dependencias, scripts personalizados, scripts bash, etc.

Por defecto se crea un script para ejecutar el comando de test que, si no agregaste nada personalizado en el proceso de inicialización sólo tendrá una llamada al comando echo, es decir, ****al ejecutar en la terminal npm run test verás en la consola Error: no test specified

Un ejemplo de producción de esta sección es:

```json
{
		...
		...
    "scripts": {
        "start": "npm run generate && PORT=5000 react-scripts start",
        "build": "react-scripts build",
        "storybook": "start-storybook -p 6006 -h localhost",
        "build-storybook": "build-storybook -s public",
        "test": "jest",
        "test:watch": "jest --watch --silent",
        "cypress": "cypress run",
        "eject": "react-scripts eject",
        "lint": "eslint src/**/*.{js,ts,tsx} --fix",
        "prettier": "npx prettier --write '**/*.tsx'",
        "generate": "graphql-codegen --config codegen.yml"
    },
    ...
		...
}
```

En este ejemplo podemos ver una lista de 11 scripts que cumplen diferentes tareas tales como:

start: Primero ejecuta el script generate y luego inicia la aplicación web. react-scripts es una dependencia del paquete y se encuentra disponible dentro del directorio node_modules.
build: Ejecuta la compilación de la aplicación en modo producción.
lint: Ejecuta el proceso de linting (revisión de formato y estilo de código) del proyecto
test: Ejecuta el script de pruebas basado en el paquete jest que también está instalado como dependencia.
prettier: Ejecuta prettier mediante el uso de npx. Este es un paquete especial de npm que permite ejecutar binarios dentro del alcance de tu proyecto sin necesidad de especificar dicho comando como script dentro del archivo package.json.

Dependencias y dependencias de desarrollo
La siguiente sección muy relevante dentro del archivo es el listado de dependencias y el listado de dependencias de desarrollo

```json
{
   
    "dependencies": {
        "react": "^17.0.1",
        "react-dom": "^17.0.1",
        "react-hook-form": "6.14.1",
        "react-i18next": "11.8.5",
        "react-query": "^3.5.12",
        "react-router-dom": "5.2.0",
        "react-scripts": "4.0.1",
        "react-table": "^7.6.3",
        "react-virtual": "2.3.2",
        "yup": "0.32.8"
    },
		...
		...
    "devDependencies": {
        "@emotion/jest": "11.1.0",
        "@graphql-codegen/add": "2.0.2",
        "@graphql-codegen/cli": "1.20.1",
        "@graphql-codegen/introspection": "1.18.1",
        "@graphql-codegen/typescript": "1.20.2",
        "@graphql-codegen/typescript-graphql-request": "3.0.1",
        "@graphql-codegen/typescript-operations": "1.17.14",
        "@types/jest": "^26.0.20",
        "@types/node": "^12.0.0",
        "@types/react": "^16.9.53",
        "@types/react-dom": "^16.9.8",
        "@types/react-router-dom": "^5.1.7",
        "cypress": "^6.2.1",
        "eslint": "^7.17.0",
        "eslint-config-prettier": "^7.1.0",
        "eslint-plugin-prettier": "^3.3.1",
        "starwars-names": "1.6.0",
        "stylelint": "13.8.0",
        "stylelint-config-prettier": "8.0.2",
        "stylelint-prettier": "1.1.2",
        "ts-jest": "^26.4.4"
    }
}
```

Estas secciones, definen que paquetes disponibles en el repositorio de npm son requeridos por tu proyecto indicando también la versión necesaria. La versión mostrada aquí está en formato semver y corresponde al campo version mencionado antes.

Estas dependencias son instaladas al ejecutar 
```bash
npm install <pkg> --save 
```
y en el caso de las dependencias de desarrollo utilizando 
```bash
npm install <pkg> --save-dev
```

La diferencia de estos listados es que dependencies está destinado a ser utilizando en producción y devDependencies define paquetes que son necesarios sólo durante el desarrollo de tu proyecto.

Es importante conocer cómo se definen las versiones a utilizar en estas dependencias. Cada una de ellas muestra un número basado en semver en la forma mayor.minor.patch.

- mayor: Representa una versión mayor que genera cambios en la API del producto.
- minor: Representa un valor que aumenta cuando se hacen cambios retro-compatibles.
- patch: Un valor que aumenta cada vez que se hacen reparaciones de errores o mejoras sutiles.

También es posible encontrar algunos símbolos frente a la numeración de la versión, estos son:
- ^: latest minor release. Por ejemplo ^1.0.4 indica que 1.0.4 es la versión más "baja" que se puede instalar pero permite que se instale cualquier versión superior a esa pero que se encuentre dentro de la versión 1.
- ~: latest patch release. Esta es la forma contraria a  ^. Esta especificación  ~1.0.4 puede instalar la versión 1.0.7 si es que esta es la ultima version del patch.
Una vez instalados los paquetes de tus dependencias la información de las versiones instaladas queda almacenada en un archivo llamado package-lock.json

package-lock.json
Este archivo es auto generado por npm install y es una lista descriptiva y exacta de las versiones instaladas durante tu proceso. No esta destinado a ser leído ni manipulado por los desarrolladores, si no, para ser un insumo del proceso de manejo de dependencias.

¿Cómo trabajar con npm?
Lo más usual que harás con npm es la instalación de dependencias, esto se hace mediante 
```bash
npm install
```
para instalar todas las dependencias listadas en el archivo package.json o utilizando 
```bash
npm install <pkg>
```
para instalar algún paquete en particular.

ESM vs CJS

**¿Qué es CommonJS (CJS)?**
CommonJS es un sistema de módulos introducido alrededor de 2009, cuando JavaScript aún no tenía un sistema oficial de módulos. Fue popularizado por Node.js, permitiendo cargar módulos de forma síncrona (es decir, bloquea la ejecución hasta que el módulo se carga completamente).

Ejemplo de CJS:

```javascript
// module-name.js
module.exports = {
  data: 42,
  method: () => console.log("Hello from CJS")
};

// index.js
const module = require("./module-name.js");
module.method();
```

Uso principal:
- Entornos de Node.js.
- Aplicaciones que necesitan transpiladores o empaquetadores como Webpack para funcionar en navegadores.
Adecuado para proyectos legacy o antiguos que no han migrado a ESM.

**¿Qué es ES Modules (ESM)?**
ESM es el sistema de módulos nativo introducido con ES6 en 2015, permitiendo tanto importaciones síncronas como asíncronas. Es compatible con navegadores modernos. ESM mejora la organización del código y permite la eliminación de código no usado (tree-shaking).

Ejemplo de ESM:
```javascript
// module.js
export const data = 42;
export const method = () => console.log("Hello from ESM");

// index.js
import { data, method } from "./module.js";
method();
```

Uso principal:
- Navegadores (sin necesidad de herramientas adicionales).
- Proyectos modernos en Node.js.
- Permite importar directamente desde URLs o CDNs.

### Promesas (AMPLIAR)


### Paquetes Built-in
Node.js incluye un conjunto de módulos nativos que se pueden utilizar sin necesidad de realizar instalaciones adicionales. Estos módulos están diseñados para proporcionar funcionalidades esenciales del sistema y permiten que las aplicaciones JavaScript interactúen eficientemente con archivos, servidores, flujos de datos, criptografía, entre otras áreas.

Estos módulos son especialmente útiles en aplicaciones tanto del lado del servidor como en herramientas de automatización. A continuación, se presenta una lista de los módulos incorporados en Node.js versión 6.10.3 junto con una breve descripción de cada uno:


**assert**	Proporciona un conjunto de pruebas de aserción para validar condiciones durante la ejecución del programa.
**buffer**	Maneja datos binarios de manera eficiente.
**child_process**	Permite ejecutar procesos hijos para tareas paralelas.
**cluster**	Divide un proceso de Node en múltiples procesos para mejorar la escalabilidad.
**crypto**	Implementa funciones criptográficas usando OpenSSL.
**dgram**	Proporciona sockets UDP para comunicación en redes.
**dns**	Realiza consultas DNS y funciones de resolución de nombres.
**domain**	(Obsoleto) Maneja errores no controlados.
**events**	Permite trabajar con eventos y la emisión de ellos mediante un patrón basado en EventEmitter.
**fs**	Gestiona el sistema de archivos, permitiendo leer, escribir y manipular archivos.
**http**	Permite que Node.js actúe como un servidor HTTP.
**https**	Habilita el uso de HTTPS para servidores seguros.
**net**	Crea servidores y clientes para comunicación a través de sockets.
**os**	Proporciona información sobre el sistema operativo.
**path**	Facilita la manipulación de rutas de archivos y directorios.
**punycode**	(Obsoleto) Implementa un esquema de codificación de caracteres.
**querystring**	Maneja cadenas de consulta (query strings) en URLs.
**readline**	Permite procesar flujos de datos línea por línea.
**stream**	Facilita la gestión de datos en flujo, como archivos de gran tamaño o transmisiones en vivo.
**string_decoder**	Decodifica objetos de tipo Buffer en cadenas de texto.
**timers**	Ejecuta funciones después de un tiempo determinado (en milisegundos).
**tls**	Implementa los protocolos TLS y SSL para comunicaciones seguras.
**tty**	Proporciona clases para manejar terminales de texto.
**url**	Analiza y manipula URLs.
**util**	Ofrece funciones de utilidad generales para facilitar el desarrollo.
**v8**	Provee acceso a información sobre V8, el motor de JavaScript.
**vm**	Compila y ejecuta código JavaScript en una máquina virtual aislada.
**zlib**	Comprime y descomprime archivos utilizando algoritmos como Gzip.

### Naturaleza Sincrónica y Web APIs (AMPLIAR)
Las Web APIs son interfaces que los navegadores proporcionan para extender las funcionalidades de JavaScript, permitiendo la interacción con elementos del entorno web como el DOM, multimedia, red, almacenamiento local, y más. Estas APIs funcionan de forma independiente al motor V8 de JavaScript, que solo ejecuta el código JS. Cuando se invoca una API, la llamada pasa al navegador, que se encarga de ejecutarla en su propio entorno, permitiendo una programación más eficiente.

**¿Para qué se usan las Web APIs?**
Se utilizan para manipular contenidos del navegador y gestionar funcionalidades que no pueden lograrse únicamente con JavaScript nativo. Además, permiten realizar operaciones asíncronas (como llamadas de red) sin bloquear el hilo principal de ejecución.

**Interacción con el motor V8**
El motor V8 de Google ejecuta el código JavaScript, pero delega las llamadas a APIs del navegador hacia otros subsistemas. Por ejemplo, una solicitud a la API fetch es manejada por el navegador y los resultados se devuelven al motor V8 para continuar su procesamiento.

**APIs más comunes y ejemplos simples**

- DOM (Document Object Model): Manipula los elementos de la página.
```js
document.querySelector('h1').textContent = 'Hola Mundo';
```

- Fetch API: Realiza solicitudes HTTP.
```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

- LocalStorage / SessionStorage: Guarda datos en el navegador.
```js
localStorage.setItem('usuario', 'Alice');
console.log(localStorage.getItem('usuario')); // Alice
```

- Geolocation API: Obtiene la ubicación del dispositivo.
```js
navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords));
```

- Canvas API: Dibuja gráficos en un elemento <canvas>.
```js
const ctx = document.querySelector('canvas').getContext('2d');
ctx.fillRect(10, 10, 100, 100);
```

- Notifications API: Muestra notificaciones del sistema.
```js
new Notification('¡Hola!', { body: 'Tienes un mensaje nuevo' });
```

## API REST en Node
Una API REST (Representational State Transfer) es un estilo arquitectónico que permite la comunicación entre un cliente y un servidor a través de protocolos HTTP. La API expone recursos que pueden ser consultados, creados, actualizados o eliminados mediante métodos HTTP (GET, POST, PUT, DELETE, etc.). REST es muy utilizado por ser sencillo, eficiente y por funcionar sobre estándares web.

Casos de Uso
- Aplicaciones móviles: Las apps consumen API REST para sincronizar datos con un servidor (como el login de usuarios).
- E-commerce: Gestiona productos, inventarios, y órdenes mediante API.
- Servicios financieros: Aplicaciones de bancos permiten transferencias y consulta de cuentas mediante APIs REST.
- Integraciones entre sistemas: Permite que dos sistemas independientes se comuniquen (por ejemplo, el front y el back de una tienda en línea).

Frameworks Comunes en Node.js
- Express: Popular por ser ligero, flexible y fácil de usar.
- Koa: Creado por los desarrolladores de Express, ofrece mayor modularidad.
- NestJS: Enfocado en aplicaciones escalables con TypeScript.
- Hapi: Robusto y orientado a la seguridad.
