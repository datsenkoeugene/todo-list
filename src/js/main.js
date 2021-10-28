function HTML(html) {
  const div = document.createElement('div')
  div.innerHTML = html
  return div.childNodes[0]
}

const containers = [
  HTML(`<div class='title-container'></div>`),
  HTML(`<div class='filter-btn-container'></div>`),
  HTML(`<div class='add-form-container'></div>`),
  HTML(`<div class='todo-list-container'></div>`),
  HTML(`<div class='search-form-container'></div>`)  
]

export default containers
