require('colors')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'list',
    name: 'question',
    message: 'Que desea hacer?',
    choices: [
      {
        name: `${"1.".green} Crear tarea`,
        value: 1
      },
      {
        name: `${"2.".green} Listar tareas`,
        value: 2
      },
      {
        name: `${"3.".green} Listar tareas completadas`,
        value: 3
      },
      {
        name: `${"4.".green} Listar tareas pendientes`,
        value: 4
      },
      {
        name: `${"5.".green} Completar tarea(s)`,
        value: 5
      },
      {
        name: `${"6.".green} Borrar tarea`,
        value: 6
      },
      {
        name: `${"0.".green} Salir\n`,
        value: 0
      }
    ],
    validate(value) {
      return !isNaN(parseFloat(value)) || 'Introduce una opcion correcta por favor'
    }
  }
]

const inquirerMenu = async() => {

  console.log("=======================================".green)
  console.log("======== Seleccione una opcion ========".green)
  console.log("=======================================\n".green)

  return { question } = await inquirer.prompt(questions)
}

module.exports = {
  inquirerMenu
}