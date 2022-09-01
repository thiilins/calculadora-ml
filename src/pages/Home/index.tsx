import React, { useState } from 'react'
import { t } from '@i18n'
import { Container } from './styles'
import LoadingPageComponent from '@components/loadingPageComponent'
import { useEffect } from 'react'
const Home = () => {
  document.title = t('general.mercado livre') + ' | ' + t('general.site title')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    loading &&
      setTimeout(() => {
        setLoading(false)
      }, 1000)
  }, [loading])
  return (
    <Container>
      <LoadingPageComponent loading={false} />
    </Container>
  )
}

export default Home
