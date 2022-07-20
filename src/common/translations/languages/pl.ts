export const polish = {
  title: 'To-do App',
  subtitle: 'Utwórz swój plan.',
  error: 'Wystąpił błąd.',
  empty: 'Lista to-do jest pusta. Spróbuj dodać to-do.',
  deleteAllCompleted: {
    title: 'Usuń zakończone',
    success: 'Zakończone to-do zostały usunięte.'
  },

  todo: {
    delete: {
      success: 'To-do zostało usunięte.'
    },
    edit: {
      success: 'To-do zostało edytowane.'
    }
  },

  addToDo: {
    input: {
      placeholder: 'Zagrać w koszykówkę o 19:00'
    },
    success: 'To-do zostało dodane.',
    errors: {
      empty: 'To-do nie może być puste.'
    }
  }
} as const
