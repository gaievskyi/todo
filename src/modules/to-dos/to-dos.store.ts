import { TodoType } from 'common/types'
import { v4 as generateUniqueID } from 'uuid'
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type ToDoState = {
  todos: TodoType[]
  addTodo: (text: string) => void
  deleteTodo: (id: number) => void
  toggleTodo: (id: number) => void
  editTodo: (id: number, text: string) => void
  deleteSelected: () => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = (set: any) => ({
  todos: [] as TodoType[],

  addTodo: (text: string) =>
    set((state: ToDoState) => ({
      todos: [
        ...state.todos,
        { id: generateUniqueID(), text, isCompleted: false }
      ]
    })),

  toggleTodo: (id: number) =>
    set((state: ToDoState) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
      selectedTodos: state.todos.filter((todo) => todo.isCompleted === true)
    })),

  deleteTodo: (id: number) =>
    set((state: ToDoState) => ({
      todos: state.todos.filter((todo) => todo.id !== id)
    })),

  editTodo: (id: number, text: string) =>
    set((state: ToDoState) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      )
    })),

  deleteSelected: () =>
    set((state: ToDoState) => ({
      todos: state.todos.filter((todo) => !todo.isCompleted)
    }))
})

export const useStore = create<ToDoState>()(devtools(persist(store)))
