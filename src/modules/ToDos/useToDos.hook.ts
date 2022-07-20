import { useEffect, useRef } from 'react'
import { useStore } from './ToDos.store'

export const useToDos = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo, deleteSelected } =
    useStore()

  const bottomRef = useRef<HTMLDivElement>(null)

  const add = (text: string) => addTodo(text)
  const toggle = (id: number) => toggleTodo(id)
  const del = (id: number) => deleteTodo(id)
  const edit = (id: number, text: string) => editTodo(id, text)
  const delSelected = () => deleteSelected()

  const isAnySelected = todos.some((todo) => todo.isCompleted)

  const scrollBottomOnAdd = () =>
    bottomRef?.current?.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
      inline: 'nearest'
    })

  useEffect(() => scrollBottomOnAdd(), [todos])

  return {
    todos,
    add,
    toggle,
    del,
    delSelected,
    edit,
    isAnySelected,
    bottomRef,
    scrollBottomOnAdd
  }
}
