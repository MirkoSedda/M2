// function addToggleButtons() {
//   for (let section of document.querySelectorAll('section')) {
//     section.children[0].classList.add('collapse')
//     section.children[0].classList.add('show')

//     section.innerHTML =
//       `
//                         <button class='btn btn-outline-light toggle-btn' data-bs-toggle="collapse" data-bs-target="#${section.id} > div">
//                             Show/hide section
//                         </button>
//                     ` + section.innerHTML
//   }
// }

// function countAlbums() {
//   const albumN = document.querySelectorAll('img').length - 3

//   const span = document.createElement('span')

//   span.classList.add('text-center')
//   span.classList.add('d-inline-block')
//   span.classList.add('w-100')
//   span.classList.add('my-4')

//   span.innerHTML = 'P.S. This page contains ' + albumN + ' albums!'

//   document.querySelector('footer').appendChild(span)
// }

// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// const btn3 = document.querySelector('.btn3')
// const tr1 = document.querySelector('.tr1')
// const tr2 = document.querySelector('.tr2')
// const tr3 = document.querySelector('.tr3')
// btn1.addEventListener('click', () => {
//   tr1.classList.add('d-none')
// })
// btn2.addEventListener('click', () => {
//   tr2.classList.add('d-none')
// })
// btn3.addEventListener('click', () => {
//   tr3.classList.add('d-none')
// })

// const deleteRow = () => {
//   const parent = document
//     .querySelector('.btn-sm')
//     .parentElement.parentElement.classList.add('d-none')
//   console.log(parent)
// }

// const btns = () => {
//   const buttons = document.querySelector('.btn-sm')
//   for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', removeRow)
//   }
// }
const addTrack = () => {
  const tBody = (document.querySelector('tbody').innerHTML += ` 
            <tr>
              <th scope="row">3</th>
              <td>Let's goooo</td>
              <td>.30 sec</td>
              <td>
                <button type="button" class="btn btn-secondary btn-sm bg-dark">
                  Delete Track
                </button>
              </td>
            </tr>`)
}

const deleteRow = () => {
  const btns = document.querySelectorAll('.btn-sm')
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', event => {
      event.target.parentElement.parentElement.classList.add('fade-out')
      setTimeout(() => {
        event.target.parentElement.parentElement.classList.add('d-none')
      }, 500)
    })
  }
}
deleteRow()
