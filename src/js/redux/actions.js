import {
  ADD_TODO,
  CHECK_TODO,
  REMOVE_TODO,
  SEARCH_TODO,
  ALL_TODO,
  ACTIVE_BUTTON,
  COPLETED_TODO,
  NO_COPLETED_TODO,
  IS_LOGIN
} from './types.js'

export const isLogIn = () => ({
  type: IS_LOGIN,
})

export const allTodo = () => ({
  type: ALL_TODO,
})

export const completeTodo = () => ({
  type: COPLETED_TODO,
})

export const activeTodo = () => ({
  type: NO_COPLETED_TODO,
})

export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
})

export const checkTodo = (id) => ({
  type: CHECK_TODO,
  payload: id,
})

export const searchTodo = (todoName) => ({
  type: SEARCH_TODO,
  payload: todoName,
})

export const activeButton = (name) => ({
  type: ACTIVE_BUTTON,
  payload: name,
})
