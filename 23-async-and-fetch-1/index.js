console.log("async and fetch")

const iAmSynchronous = () => {
  for (let i = 0; i < 20000000; i++){
    let d = new Date()
  }

  console.log("all done")
}

const iAmAsynchronous = () => {
  setTimeout(() => {
    console.log("inside timeout")
  }, 6000)

  console.log('outside timeout')
}