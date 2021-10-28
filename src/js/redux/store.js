import EventObserver from './EventObserver.js'
import { rootReducer } from './rootReducer.js'
import Storage from '../services/Storage.js'

const initialState = {
  todos: [...Storage.getData('todos')],
  searchTodos: [],  
  isActive: 'all',
  filterButtons: [
    { name: 'all', label: 'All' },
    { name: 'done', label: 'Done' },
    { name: 'active', label: 'Active'},
  ],
  isLogin: false,
  searchTodoName: ''
}

const createStore = (rootReducer, initialState) => {
  let state = rootReducer(initialState, { type: '__INIT__' })
  const subscribers = []
  const events = new EventObserver()
  return {
    events,
    dispatch(action) {
      state = rootReducer(state, action)
      subscribers.forEach((sub) => sub())
      events.next('change')
    },
    subscribe(callback) {
      subscribers.push(callback)
    },
    getState() {
      return state
    },
  }
}

const store = createStore(rootReducer, initialState)
export default store
