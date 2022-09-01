import React from 'react'
import { t, selectedLanguage } from '@i18n'
import { ReactComponent as MercadoLivreLogo } from '@assets/mercado_livre_vertical_pt.svg'
import { ReactComponent as MercadoLibreLogo } from '@assets/mercado_livre_vertical_es.svg'

import { Container, HeartBeatAnimation } from './styles'
import { LoadingPageProps } from './types'
const LoadingPageComponent = ({ loading = true }: LoadingPageProps) => {
  document.title = t('general.mercado livre') + ' | ' + t('general.site title')
  const isSpanish = !selectedLanguage?.alias.includes('pt')
  return (
    <Container loading={loading}>
      <HeartBeatAnimation>
        {isSpanish ? <MercadoLibreLogo /> : <MercadoLivreLogo />}
      </HeartBeatAnimation>
    </Container>
  )
}

export default LoadingPageComponent
