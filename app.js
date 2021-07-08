const { handlePause } = require('./helpers/handleMenu')
const { inquirerMenu } = require('./helpers/inquirerMenu')

const main = async() => {
  let opt = ''

  do {

    console.clear()
    opt = await inquirerMenu()

  } while(opt !== 0) {
    await handlePause()
  }
}

main()