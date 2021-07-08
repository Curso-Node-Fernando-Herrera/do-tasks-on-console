const { handleMenu, handlePause } = require('./helpers/handleMenu')

const main = async() => {
  let opt = ''

  do {
    opt = await handleMenu()
  } while(opt !== '0') {
    await handlePause()
  }
}

main()