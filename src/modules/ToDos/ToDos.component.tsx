import { t } from 'i18next'
import { AddToDo, DeleteAllCompleted, Empty, ToDo } from 'modules'
import { ToDos } from './ToDos.styled'
import { useToDos } from './useToDos.hook'

export const ToDosComponent: React.FC = () => {
  const {
    todos,
    isAnySelected,
    toggle,
    del,
    delSelected,
    edit,
    add,
    bottomRef
  } = useToDos()

  return (
    <>
      <ToDos.Container>
        <ToDos.Title>{t('title')}</ToDos.Title>
        <ToDos.Subtitle>{t('subtitle')}</ToDos.Subtitle>
        <DeleteAllCompleted
          onDeleteSelected={delSelected}
          isVisible={isAnySelected}
        />
        {todos.length === 0 && <Empty />}
        {todos.map((todo, index) => (
          <ToDo
            index={index}
            id={todo.id}
            key={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            onToggle={toggle}
            onDelete={del}
            onEdit={edit}
          />
        ))}
        <AddToDo onAdd={add} />
      </ToDos.Container>
      <div ref={bottomRef} />
    </>
  )
}
