import './Button.css'

const header = document.querySelector('header')

const button = document.createElement('button')
button.type = 'button'
button.textContent = 'Buscar'
button.id = 'boton'
header.append(button)
