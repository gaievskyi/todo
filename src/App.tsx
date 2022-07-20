import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { setHTMLAttrLangTag } from 'common/translations'
import { SaveUkraine } from 'modules'
import { ToDos } from 'modules/ToDos'

export const App: React.FC = () => {
  const { t, i18n } = useTranslation()

  document.title = t('title')

  useEffect(() => {
    setHTMLAttrLangTag(i18n.language)
  }, [i18n.language])

  return (
    <>
      <SaveUkraine />
      <ToDos />
    </>
  )
}
