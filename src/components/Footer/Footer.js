import './Footer.css'

const footer = document.querySelector('footer')
const nav = document.createElement('nav')
const ul = document.createElement('ul')

const navFooter = ['Términos del servicio', 'Política de privacidad', 'Ayuda']

const links = [
  'https://policy.pinterest.com/es/terms-of-service',
  'https://policy.pinterest.com/es/privacy-policy',
  'https://help.pinterest.com/es'
]

const ariaLabel = [
  'Condiciones de servicio',
  'Política de privacidad',
  'Pinterest Help'
]

for (let i = 0; i < navFooter.length; i++) {
  const li = document.createElement('li')
  const a = document.createElement('a')

  a.textContent = navFooter[i]
  a.target = '_blank'
  a.href = links[i]
  a.setAttribute('aria-label', `${ariaLabel[i]}`)

  li.append(a)
  ul.append(li)
}

nav.append(ul)
footer.append(nav)
