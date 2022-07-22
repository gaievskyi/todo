import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { AddToDo, DeleteAllCompleted, Empty, ToDo } from 'modules'
import { Styled } from './ToDos.styled'
import { useToDos } from './useToDos.hook'

export const ToDos: React.FC = () => {
  const { t } = useTranslation()
  const {
    todos,
    isAnySelected,
    toggle,
    del,
    delSelected,
    edit,
    add,
    scrollBottomOnAdd
  } = useToDos()

  const bottomRef = useRef(document.createElement('div'))

  useEffect(() => scrollBottomOnAdd(bottomRef), [todos])

  return (
    <>
      <Styled.Container>
        <Styled.Title>{t('title')}</Styled.Title>
        <Styled.Subtitle>{t('subtitle')}</Styled.Subtitle>
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
      </Styled.Container>
      <div ref={bottomRef} />
    </>
  )
}
