import React, { useState } from 'react'
import { t } from '@i18n'
import { Container } from './styles'
import LoadingPageComponent from '@components/loadingPageComponent'
import { useEffect } from 'react'
import CardDevelopmentBy from '@components/CardDevelopmentBy'
const Home = () => {
  document.title = t('general.mercado livre') + ' | ' + t('general.site title')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    loading &&
      setTimeout(() => {
        setLoading(false)
      }, 2000)
  }, [loading])
  return (
    <Container>
      <LoadingPageComponent loading={loading} />
      <div className="aside">
        <CardDevelopmentBy />
      </div>
    </Container>
  )
}

export default Home
