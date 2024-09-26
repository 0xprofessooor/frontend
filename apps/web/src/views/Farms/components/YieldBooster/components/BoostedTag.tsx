import { useTranslation } from '@iguanadex/localization'
import { RocketIcon, Tag, TagProps } from '@iguanadex/uikit'
import { memo } from 'react'

interface BoostedTag extends TagProps {
  // Add Object to bypass typescript warning
  style?: object
}

const BoostedTag: React.FC<BoostedTag> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="success" outline startIcon={<RocketIcon width="18px" color="success" mr="4px" />} {...props}>
      {t('Boosted')}
    </Tag>
  )
}

export default memo(BoostedTag)
