/*

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
//EX15 Write a function to change the column size for heading in jumbotron

const jumbotron = document.querySelector('body > .container > :nth-child(3)')
const evenNav = document.querySelector(
  'body > :first-child > :nth-child(2) > nav > :nth-child(even)'
)

const changeBgColorAndColWidth = () => {
  jumbotron.innerHTML = ` 
      <div class="jumbotron p-4 p-md-5 text-white rounded bg-pink">
        <div class="col-md-12 px-0">
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
changeBgColorAndColWidth()

//EX14 Write a function to remove all the links under "Elsewhere"

const elseLinks = document.querySelector('aside > div:nth-of-type(3) > ol > li')

const removeLinks = () => {
  const elseLinks = document.querySelector('aside > div:nth-of-type(3) > ol')
  elseLinks.innerHTML = ''
}
removeLinks()

//EX16 Write a function to remove the "Search" magnifying glass icon

const svgIcon = document.querySelector(
  'body > :first-child > header > .row > :nth-child(3) > a > svg'
)

const removeSearch = () => {
  svgIcon.style.display = 'none'
}

removeSearch()

//EX17 Write a function to trim just the first 50 characters in the first paragraph for each blog post

const blogPost1 = document.querySelector(
  'main > .row > :first-child > :nth-child(2) > :nth-child(5)'
)

const blogPost2 = document.querySelector(
  'main > .row > div > div:nth-child(3) > p:nth-child(3)'
)

const removeCharacters = () => {
  const postContent = blogPost1.innerText
  const shorterContent = postContent.substring(50)
  blogPost1.innerText = shorterContent

  const postContent2 = blogPost2.innerText
  const shorterContent2 = postContent2.substring(50)
  blogPost2.innerText = shorterContent2
}

removeCharacters()
