require('colors')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'enter',
    message: `Presione ${"ENTER".green} para continuar`,
    validate(value) {
      const isEnter = value === ''
      return isEnter || `Presione ${"ENTER".green} por favor`
    }
  }
]

const inquirerEnter = async() => {
  await inquirer.prompt(questions)
}

module.exports = {
  inquirerEnter
}
