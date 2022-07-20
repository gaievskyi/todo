export const english = {
  title: 'To-do App',
  subtitle: 'Create your plan.',
  error: 'An error occurred.',
  empty: 'List is empty. Try adding a to-do.',
  deleteAllCompleted: {
    title: 'Delete completed',
    success: 'Completed to-dos deleted.'
  },

  todo: {
    delete: {
      success: 'Todo has been deleted.'
    },
    edit: {
      success: 'Todo has been edited.'
    }
  },

  addToDo: {
    input: {
      placeholder: 'Play basketball at 7PM'
    },
    success: 'To-do has been added.',
    errors: {
      empty: 'To-do cannot be empty.'
    }
  }
} as const
