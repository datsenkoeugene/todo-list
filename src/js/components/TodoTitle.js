import Component from './Component.js'
import store from '../redux/store.js'

export default class TodoTitle extends Component {
    constructor(selector, store) {
      super(selector, store)        
    }
  
    render() { 
      const { todos } = store.getState()
      let completeTodos = todos.filter(({complete}) => complete === true).length    
      this.$el.innerHTML = `
          <h2 class="todo-title" >
            <span class="todo-title__all">All todos: ${store.getState().todos.length},</span>
            <span class="todo-title__complete">complete: ${completeTodos}</span>
          </h2>
        `
    }   
  }