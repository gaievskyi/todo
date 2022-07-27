import { MutableRefObject } from 'react'
import { useStore } from './to-dos.store'

export const useToDos = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo, deleteSelected } =
    useStore()

  const isAnySelected = todos.some((todo) => todo.isCompleted)

  const add = (text: string) => addTodo(text)
  const toggle = (id: number) => toggleTodo(id)
  const del = (id: number) => deleteTodo(id)
  const edit = (id: number, text: string) => editTodo(id, text)
  const delSelected = () => deleteSelected()

  const scrollBottomOnAdd = (ref: MutableRefObject<HTMLDivElement>) => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })
  }

  return {
    todos,
    add,
    toggle,
    del,
    delSelected,
    edit,
    isAnySelected,
    scrollBottomOnAdd
  }
}
