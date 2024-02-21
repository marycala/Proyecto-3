import './Gallery.css'

const accessKey = '2Ueaui2MS9FjrrvDcIV5GVvC-mUeA0leWhWDiSDqwgc'

const div = document.querySelector('#gallery')
const ul = document.createElement('ul')

const images = await fetch(
  `https://api.unsplash.com/photos/random?count=12&orientation=landscape&client_id=${accessKey}`
)
  .then((res) => res.json())
  .then((res) => {
    div.innerHTML = ''

    for (let i = 0; i < res.length; i++) {
      const image = res[i]
      const imgLi = document.createElement('li')

      const img = document.createElement('img')
      img.src = `${image.urls.regular}`
      img.alt = `${image.alt_description}`

      imgLi.appendChild(img)
      ul.appendChild(imgLi)
      div.appendChild(ul)
    }
  })
  .catch((error) => console.log(error))

input.addEventListener('input', function () {
  const search = input.value.trim().toLowerCase()

  if (search === '') {
    div.style.display = 'block'
  } else {
    div.style.display = 'none'
  }
})
