/*

EX15) Write a function to change the column size for heading in jumbotron
EX16) Write a function to remove the "Search" magnifying glass icon
EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
*/

// EX11 Write a function to add a new link into the navbar

const navbar = document.querySelector(
  'body > :first-child > :nth-child(2) > nav'
)

const addLink = () => {
  navbar.innerHTML += `<a class="p-2 text-muted" href="#">New Link</a>`
}
addLink()

//EX12 Write a function to change the color of the main title

const title = document.querySelector(
  'body > :first-child > :nth-child(3) > div > h1'
)

const changeTitleColor = () => {
  title.style.color = 'lightblue'
}

changeTitleColor()

//EX13 Write a function to change the background of the jumbotron

const jumbotron = document.querySelector('body > .container > :nth-child(3)')
const evenNav = document.querySelector(
  'body > :first-child > :nth-child(2) > nav > :nth-child(even)'
)

const changeBgColor = () => {
  jumbotron.innerHTML = ` 
      <div class="jumbotron p-4 p-md-5 text-white rounded bg-pink">
        <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">
            Title of a longer featured blog post
          </h1>
          <p class="lead my-3">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>
          <p class="lead mb-0">
            <a href="#" class="text-white font-weight-bold"
              >Continue reading...</a
            >
          </p>
        </div>
      </div>`
}
changeBgColor()

//EX14 Write a function to remove all the links under "Elsewhere"

const elseLinks = document.querySelector('aside > div:nth-of-type(3) > ol > li')

const removeLinks = () => {
  const elseLinks = document.querySelector('aside > div:nth-of-type(3) > ol')
  elseLinks.innerHTML = ''
}
removeLinks()

// ---------------------------
const jumboCol = document.querySelector(
  'body > :first-child > :nth-child(3) > div'
)
const svgIcon = document.querySelector(
  'body > :first-child > header > .row > :nth-child(3) > a > svg'
)
const blogPostOne = document.querySelector(
  'main > :first-child > :first-child > div > :nth-child(3)'
)
const blogPostTwo = document.querySelector(
  'main > :first-child > :first-child > :nth-child(2) > :nth-child(3)'
)
const blogPostThree = document.querySelector(
  'main > :first-child > :first-child > :nth-child(3) > :nth-child(3)'
)
const disabledBtn = document.querySelector('aside')

const changeSize = () => {
  continueText.classList.remove('col-md-6')
  continueText.classList.add('col-md-4')
}

const removeSearch = () => {
  svgIcon.style.display = 'none'
}

const removeCharacters = () => {
  console.log(blogPostOne)
  console.log(blogPostTwo)
  let str1 = blogPostOne.innerText
  let str2 = blogPostTwo.innerText
  let str3 = blogPostThree.innerText
  console.log(str1)
  console.log(str2)
  str1.substring(50)
  str2.substring(50)
  str3.substring(50)

  console.log(str1)
  console.log(str2)
}
