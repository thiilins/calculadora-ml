import React, { useState } from 'react'
import { t } from '@i18n'
import { Container } from './styles'
import LoadingPageComponent from '@components/loadingPageComponent'
import { useEffect } from 'react'
const Home = () => {
  document.title = t('general.mercado livre') + ' | ' + t('general.site title')

  return (
    <Container>
      <LoadingPageComponent loading={false} />
    </Container>
  )
}

export default Home
