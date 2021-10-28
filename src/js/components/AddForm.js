import Component from './Component.js'
import store from '../redux/store.js'
import { addTodo } from '../redux/actions.js'
import { randomId } from '../services/randomId.js'
import Storage from '../services/Storage.js'

export default class AddForm extends Component {
  constructor(selector, store) {
    super(selector, store)
    this.setup()
  }

  render() {    
    this.$el.innerHTML = `
        <form class="form add-form" >
            <input
                class="form__input"
                type="text"
                placeholder="New todo"
                required
                />
            <button type="submit" class="form__btn">Add</button>
        </form>        
        `
  }

  setup() {
    this.$el.addEventListener('submit', this.addNewTodo)
  }

  addNewTodo(e) {
    e.preventDefault()
    const inputText = e.target.querySelector('[type="text"]')

    const newTodo = {
      title: inputText.value.trim(),
      complete: false,
      id: randomId(),
      data: Date.now()
    }
    Storage.setData('todos', [...Storage.getData('todos'), newTodo])
    store.dispatch(addTodo(newTodo))
    inputText.value = ''    
  }
}
