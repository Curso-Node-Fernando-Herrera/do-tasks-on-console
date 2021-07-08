require('colors')
const handleWrite = require('./handleWrite')

const handleMenu = () => {

  return new Promise( resolve => {

    console.clear()
    console.log("=======================================".green)
    console.log("======== Seleccione una opcion ========".green)
    console.log("=======================================\n".green)
    
    console.log(`${"1.".green} Crear tarea`)
    console.log(`${"2.".green} Listar tareas`)
    console.log(`${"3.".green} Listar tareas completadas`)
    console.log(`${"4.".green} Listar tareas pendientes`)
    console.log(`${"5.".green} Completar tarea(s)`)
    console.log(`${"6.".green} Borrar tarea`)
    console.log(`${"0.".green} Salir\n`)
    
    handleWrite({ text: "Seleccione una opcion: " })
      .then(resolve) // devuelve la tecla que escribimos
    })
}
  
const handlePause = () => {
  return new Promise( resolve => {

    handleWrite({ text: `Presione ${"ENTER".green} para continuar` })
      .then(resolve) // devuelve la tecla que escribimos

  })
}

module.exports = {
  handleMenu,
  handlePause
}