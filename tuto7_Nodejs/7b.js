const fs = require('fs')

const directory = process.argv[2]

fs.watch(directory, (eventType, filename) => {
  if (filename.endsWith('~')) return
  console.log(`filename is ${filename}, event type is: ${eventType}`)
  if (eventType === 'change') {
    fs.readFile(directory + filename, (err, data) => {
      if (err) return console.log(err.toString())
      console.log(data.toString())
    })
  }
})
