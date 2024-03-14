// clearTimeout cancelar um timeOut

const timeOut = 3000
console.log('start!')
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)
console.log('after 1 2 3 seconds.')

