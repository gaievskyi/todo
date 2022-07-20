import { Check2All } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'
import { Empty } from './Empty.styled'

export const EmptyComponent: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Empty.Container>
      <Check2All size={150} />
      <small>{t('empty')}</small>
    </Empty.Container>
  )
}
