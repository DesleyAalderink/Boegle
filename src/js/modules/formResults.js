import{socket} from './socket.js'

let bookForm = {
  init: function() {
    console.log('bookForm init complete')
    document.querySelector('form').addEventListener('submit', this.search)
    socket.init()
  },
  search: function(el) {
    el.preventDefault()
    const input = document.querySelectorAll('#bookInfo input')
    const select = document.querySelectorAll('#bookInfo select')
    const checkboxes = document.querySelectorAll('#checkboxes input')
    const genres = []

    console.log('test')

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        genres.push(checkbox.value)
      }
    })

    const givenSearchValues = {
      url: 'search',
      title: input[0].value,
      author: input[1].value,
      language: select[0].value,
      age: select[1].value,
      pubYear: input[2].value,
      genres: genres
    }
    socket.io.emit('searchValues', givenSearchValues)
  }
}

export {
  bookForm
}
