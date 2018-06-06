let bookForm = {
  init: function() {
    console.log('bookForm init complete')
    document.querySelector('form').addEventListener('submit', this.search)
  },
  search: function(el) {
    el.preventDefault()
    const input = document.querySelectorAll('#bookInfo input')
    const select = document.querySelectorAll('#bookInfo select')
    const checkboxes = document.querySelectorAll('#checkboxes input')
    const genres = []

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        genres.push(checkbox.value)
      }
    })

    const givenSearchValues = {
      title: input[0].value,
      author: input[1].value,
      language: select[0].value,
      age: select[1].value,
      year: input[2].value,
      genres: genres
    }
    console.log(givenSearchValues)
  }
}

export {
  bookForm
}