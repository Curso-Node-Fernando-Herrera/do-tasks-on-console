module.exports = handleWrite = ({ text = '' }) => {
  return new Promise( resolve => {

    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
    
    readLine.question(text, (opt) => {
      resolve(opt)
      readLine.close()
    })

  })
}