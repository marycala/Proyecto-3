import './Filter.css'

const input = document.querySelector('#input')
const button = document.querySelector('#boton')
const div = document.querySelector('#filter')
const main = document.querySelector('main')

let keyword = ''
const accessKey = '2Ueaui2MS9FjrrvDcIV5GVvC-mUeA0leWhWDiSDqwgc'

async function buscarImagenes() {
  keyword = input.value

  const url = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${accessKey}&per_page=12`

  const response = await fetch(url)
  const data = await response.json()

  div.innerHTML = ''

  const resultados = data.results
  if (keyword != resultados) {
    const p = document.createElement('p')
    p.textContent = 'No hay resultados que coincidan con la búsqueda 😩'
    p.id = 'noResults'

    div.append(p)
  } else {
    resultados.map((result) => {
      const imagen = document.createElement('img')
      imagen.src = `${result.urls.regular}`
      imagen.alt = `${result.alt_description}`

      div.append(imagen)
      main.append(div)
    })
  }
}

button.addEventListener('click', async (e) => {
  e.preventDefault()
  await buscarImagenes()
})

input.addEventListener('input', function () {
  const search = input.value.trim().toLowerCase()

  if (search === '') {
    div.style.display = 'none'
  } else {
    div.style.display = 'grid'
  }
})
