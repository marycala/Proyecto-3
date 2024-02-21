import './Input.css'

const header = document.querySelector('header')

const input = document.createElement('input')
input.id = 'input'
input.type = 'text'
input.placeholder = 'Burcar imágenes'
header.append(input)
