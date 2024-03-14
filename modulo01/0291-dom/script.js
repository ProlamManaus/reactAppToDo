// getElementById()
const elementHtml = document.getElementById('blog-title')
// console.log(elementHtml)

// getElementsByTagName()
const elementTag = document.getElementsByTagName('h2')
// console.log(elementTag)

// querySelector()
const elementSelector = document.querySelector('.one')
// console.log(elementSelector)

// querySelectorAll()
const elementsSelectorAll = document.querySelectorAll('.one')
// console.log(elementsSelectorAll)
const elementsSelectorAllId = document.querySelectorAll('#blog-title')
// console.log(elementsSelectorAllId)

// innerText
const elementInnerText = document.querySelector('h1')
// torca o texto por: "PROLAM - 2024"
// elementInnerText.innerText = "PROLAM - 2024"

// Atributos add
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerId = document.querySelector('#header')
// console.log(headerId)
//console.log(headerId.getAttribute('id')) //header

const AttributeClass = headerId.getAttribute('class')
//console.log(AttributeClass) //bg
// remover
header.removeAttribute('id')
header.removeAttribute('class')

header.setAttribute('class', 'bg header')
{/* <header class="bg header"> */ }

// Style
const elementStyle = document.querySelector('body')
elementStyle.style.backgroundColor = '#567'

// navegando pelo elementos
// parent Node parentElement
const elementParents = document.querySelector("h1")
const section = elementParents.parentNode
// console.log(section)

const elementParents1 = document.querySelector("body")
const section1 = elementParents1.parentElement
// console.log(section1)

const el = document.querySelector('body')
// console.log(el.childNodes)
// console.log(el.children)
// console.log(el.firstChild)
// console.log(el.firstElementChild)

// console.log(el.lastChild)
// console.log(el.lastElementChild)

function printHtml() {
  // console.log('@printHtml')
}

// *** apenas esse esta correto ***
const h1 = document.querySelector('h1')
h1.addEventListener('click', print)

function print() {
  // console.log('@printClick')
}


function printScript() {
  // console.log('@printScript')
}
h1.onclick = printScript


const input = document.querySelector('input')
// input.onkeydown = function(event) {
// input.onclick = function(event) {
input.onkeydown = function(event) {
  // console.log(event) 
  // console.log(event.key)
  // console.log(event.currentTarget) // próprio input
  console.log(event.currentTarget.value) // valor de todo put
}




