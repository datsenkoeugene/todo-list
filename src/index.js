import './styles/style.css'
import containers from './js/main.js'
import TodoTile from './js/components/TodoTitle.js'
import FilterButtons from './js/components/FilterButtons.js'
import AddForm from './js/components/AddForm.js'
import TodoList from './js/components/TodoList.js'
import SearchForm from './js/components/SearchForm.js'

import store from './js/redux/store.js'

const app = document.getElementById('app')

document.addEventListener('DOMContentLoaded', (e) => {
  containers.map((c) => app.append(c))
 
  new TodoTile('.title-container', store).render()
  new FilterButtons('.filter-btn-container', store).render()
  new AddForm('.add-form-container', store).render()
  new TodoList('.todo-list-container', store).render()
  new SearchForm('.search-form-container', store).render()  
})
