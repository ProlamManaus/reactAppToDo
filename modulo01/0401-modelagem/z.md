


const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

function listaPilotos(pilotos) {
  for (let piloto of pilotos) {
    console.log(piloto);
  }
}
pilotos.push('alonso')
listaPilotos(pilotos)
const acharSenna = pilotos.find(piloto => piloto === 'Senna')
console.log(acharSenna ? `Achei o ${acharSenna}` : 'Não achei')




