import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { setHTMLAttrLangTag } from 'common/translations'
import { SaveUkraine, ToDos } from 'modules'

export const App: React.FC = () => {
  const { t, i18n } = useTranslation()

  document.title = t('title')

  useEffect(() => {
    setHTMLAttrLangTag(i18n.language)
  }, [i18n.language])

  return (
    <>
      <ToDos />
      <SaveUkraine />
    </>
  )
}
