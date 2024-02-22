import React from 'react'
import { t } from '@i18n'
import { LoadingContainer, LoadingAnimation, AnimationText } from './styles'

const LoadingComponent: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingAnimation>
        <div className="loading__it ems">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LoadingAnimation>
      <AnimationText>
        {t('general.loading')} <span>|</span>
      </AnimationText>
    </LoadingContainer>
  )
}

export default LoadingComponent
