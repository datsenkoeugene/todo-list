import Component from './Component.js'
import store from '../redux/store.js'
import { allTodo, activeButton, activeTodo, completeTodo } from '../redux/actions.js'

export default class FilterButtons extends Component {
    constructor(selector, store) {
      super(selector, store)
      this.setup()        
    }
  
    render() { 
      const { filterButtons, isActive } = store.getState()     
      
      this.$el.innerHTML = `
          <div class="filter-group">
            ${filterButtons.map( ({label, name}) => `
              <button 
                class="filter-group__all ${ name === isActive ? 'active' : ''}"
                type="button"
                data-name="${name}"                                            
              >
                  ${label}
              </button>            
            `).join(' ')}           
          </div>
        `
    }  
    
    setup() {
        this.$el.addEventListener('click', this.onHandleClick)
    }

    onHandleClick(e) {
        if (e.target.dataset.name === 'all') {          
            store.dispatch(allTodo()) 
            store.dispatch(activeButton(e.target.dataset.name))           
        }
        else if (e.target.dataset.name === 'done') {
            if (store.getState().todos.filter(({complete}) => complete === true).length > 0) {
              store.dispatch(completeTodo())            
              store.dispatch(activeButton(e.target.dataset.name))
             
            } else {
              store.dispatch(allTodo())
              store.dispatch(activeButton('all')) 
            }                    
           
        }
        else if (e.target.dataset.name === 'active') { 
          if (store.getState().todos.filter(({complete}) => complete === false).length > 0) {
            store.dispatch(activeTodo())
            store.dispatch(activeButton(e.target.dataset.name))
          }  else {
            store.dispatch(allTodo())
              store.dispatch(activeButton('all')) 
          }             
        }
    }
  }