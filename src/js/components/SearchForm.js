import Component from './Component.js'
import store from '../redux/store.js'
import { searchTodo, allTodo } from '../redux/actions.js'

export default class SearchForm extends Component {
  constructor(selector, store) {
    super(selector, store)    
    this.setup()
    this.isRender = false    
  }

  render() {       
    if (this.isRender) {
        return
    }     
        
    this.$el.innerHTML = `
            <form class="form search-form">
                <input 
                    class="form__input"
                    type="text"
                    placeholder="Search todo"                                                                        
                />
            </form>    
        `        
        this.isRender = true        
  }

  setup() {
    this.$el.addEventListener('input', this.searchTodo)    
  }

  searchTodo(e) {      
    if (e.target.value.trim() !== '') {                     
      store.dispatch(searchTodo(e.target.value.trim()))                          
    } else {           
      store.dispatch(allTodo())                             
    }    
  }
}
