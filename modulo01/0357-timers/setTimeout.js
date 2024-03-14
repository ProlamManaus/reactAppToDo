// setTimeout rodar uma função depois de x milissegundos

const timeOut = 3000
console.log('start!')
const finished = () => console.log('done!')

setTimeout(finished, timeOut)
console.log('after 1 2 3 seconds.')

