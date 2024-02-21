import './NavBar.css'

const header = document.querySelector('header')

const h1 = document.createElement('h1')
h1.textContent = 'Pinterest'
const nav = document.createElement('nav')
const ul = document.createElement('ul')

const navBar = ['Hoy', 'Explorar', 'Info', 'Empresa', 'Blog']

const links = [
  'https://www.pinterest.es/today/',
  'https://www.pinterest.es/ideas/',
  'https://help.pinterest.com/es/guide/all-about-pinterest',
  'https://business.pinterest.com/es/',
  'https://newsroom.pinterest.com/es/'
]

const ariaLabel = [
  'Mantén la inspiración',
  'Explorar lo mejor de Pinterest',
  'Todo acerca de Pinterest',
  'Pinterest Business: para empresas, creadores e ideas',
  'Sala de prensa de Pinterest'
]

for (let i = 0; i < navBar.length; i++) {
  const li = document.createElement('li')
  const a = document.createElement('a')

  a.textContent = navBar[i]
  a.target = '_blank'
  a.href = links[i]
  a.setAttribute('aria-label', `${ariaLabel[i]}`)

  li.append(a)
  ul.append(li)
}

nav.append(ul)
header.append(h1)
header.append(nav)
