window.onload = function () {
  addToggleButtons()

  countAlbums()
}

function addToggleButtons() {
  for (let section of document.querySelectorAll('section')) {
    section.children[0].classList.add('collapse')
    section.children[0].classList.add('show')

    section.innerHTML =
      `
                        <button class='btn btn-outline-light toggle-btn' data-bs-toggle="collapse" data-bs-target="#${section.id} > div">
                            Show/hide section
                        </button>
                    ` + section.innerHTML
  }
}

function countAlbums() {
  const albumN = document.querySelectorAll('img').length - 3

  const span = document.createElement('span')

  span.classList.add('text-center')
  span.classList.add('d-inline-block')
  span.classList.add('w-100')
  span.classList.add('my-4')

  span.innerHTML = 'P.S. This page contains ' + albumN + ' albums!'

  document.querySelector('footer').appendChild(span)
}
