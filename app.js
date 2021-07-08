const { inquirerEnter } = require('./helpers/inquirerEnter')
const { inquirerMenu } = require('./helpers/inquirerMenu')

const main = async() => {
  let opt = ''

  do {
    console.clear()
    opt = await inquirerMenu()
    await inquirerEnter()

  } while(opt !== 0) {
  }
}

main()