import {
  ADD_TODO,
  CHECK_TODO,
  REMOVE_TODO,
  SEARCH_TODO,
  ALL_TODO,
  COPLETED_TODO,
  NO_COPLETED_TODO,
  ACTIVE_BUTTON,
  IS_LOGIN,
} from './types.js'

export const rootReducer = (state, action) => {
  switch (action.type) {
    case ALL_TODO:
      return {
        ...state,
        todos: [...state.todos],
        searchTodos: [],
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(({ id }) => id !== action.payload)],
      }
    case CHECK_TODO:
      const idx = state.todos.findIndex(({ id }) => id === action.payload)
      const newTodo = {
        ...state.todos[idx],
        complete: !state.todos[idx].complete,
      }
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, idx),
          newTodo,
          ...state.todos.slice(idx + 1, state.todos.length),
        ],
      }
    case SEARCH_TODO:
      return {
        ...state,
        searchTodos: [
          ...state.todos.filter(
            ({ title }) => title.indexOf(action.payload) > -1
          ),
        ],
      }
    case COPLETED_TODO:
      return {
        ...state,
        searchTodos: [
          ...state.todos.filter(({ complete }) => complete === true),
        ],
      }
    case NO_COPLETED_TODO:
      return {
        ...state,
        searchTodos: [
          ...state.todos.filter(({ complete }) => complete === false),
        ],
      }
    case ACTIVE_BUTTON:
      return {
        ...state,
        isActive: action.payload,
      }
    case IS_LOGIN:
      return {
        ...state,
        isLogin: true,
      }
    default:
      return state
  }
}
