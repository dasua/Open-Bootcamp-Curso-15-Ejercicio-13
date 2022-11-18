/**
 * Crea un nuevo proyecto de Node
 *
 * - [X] Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
 * - [X] Duplica el archivo del ejercicio de la sesión 04-Textos
 * - [X] Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
 * - [X] Crea el fichero .eslintrc.json
 * - [X] Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
 * - [X] Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
 * - [X] Crea un script en el package.json para corregir automáticamente todos los errores
 * - [X] Ejecuta el script a través del terminal
 */

// const nombre = 'Jesús'
// const apellido = "Guerreiro"
// const apellido2 = `Real de Asua`
const nombre = 'Jesús'
const apellido = 'Guerreiro'
const apellido2 = 'Real de Asua'
const estudiante = nombre.concat(' ', apellido)
const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()
const longitudEstudiante = estudiante.length
const primeraLetraNombre = nombre.charAt(0)
const ultimaLetraApellido = apellido.charAt(apellido.length - 1)
const estudianteSinEspacios = estudiante.replaceAll(' ', '')
const existeNombre = estudiante.includes(nombre)

console.log(nombre)
console.log(apellido)
console.log(apellido2)
console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(longitudEstudiante)
console.log(primeraLetraNombre)
console.log(ultimaLetraApellido)
console.log(estudianteSinEspacios)
console.log(existeNombre)
