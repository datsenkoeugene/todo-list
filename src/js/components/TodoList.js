import Component from './Component.js'
import store from '../redux/store.js'
import { removeTodo, checkTodo, allTodo, activeButton } from '../redux/actions.js'
import Storage from '../services/Storage.js'

export default class TodoList extends Component {
    constructor(selector, store) {
        super(selector, store)
        this.setup()
    }

    render() {
        const { todos, searchTodos } = store.getState()        
        const currentList = searchTodos.length ?  searchTodos : todos
        
        if (currentList.length) {
            this.$el.innerHTML = `
                <ul class="todo-list">
                    ${currentList.map(({title, complete, id}) => `
                        <li data-key="${id}" class="todo-list__item">
                            <span class="todo-list__title ${complete ? 'check': ''}" title="${title}" >
                                ${title}
                            </span>
                            <div class="todo-list__btn-group">
                                <button class="todo-list__btn-remove" data-name="remove" >
                                    &#10060;
                                </button>
                                <button class="todo-list__btn-check" data-name="check" >
                                    &#10004;
                                </button>
                            </div>
                        </li>                
                    `).join(' ')}               
                </ul>     
        `        
        } else {           
            this.$el.innerHTML = `<h2 style="text-align: center;">No todos</h2>`
        }        
    }

    setup() {
        this.$el.addEventListener('click', this.onHandleClick)
    }

    onHandleClick(e) {        
        if (e.target.dataset.name === 'remove') { 
            const confResult = confirm('You sure remove this todo ?')
            if (confResult) {
                store.dispatch(removeTodo(e.target.parentNode.parentNode.dataset.key))                       
                Storage.setData('todos', store.getState().todos)             
                store.dispatch(allTodo())   
                store.dispatch(activeButton('all'))   
            }                                              
        } else if (e.target.dataset.name === 'check') {
            store.dispatch(checkTodo(e.target.parentNode.parentNode.dataset.key))            
            Storage.setData('todos', store.getState().todos)                                                   
            store.dispatch(allTodo())
            store.dispatch(activeButton('all'))
        }
    }

}