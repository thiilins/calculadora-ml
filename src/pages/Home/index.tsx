import React, { useState } from 'react'
import { t } from '@i18n'
import { Container } from './styles'
import LoadingPageComponent from '@components/loadingPageComponent'
import { useEffect } from 'react'
import CardDevelopmentBy from '@components/CardDevelopmentBy'
import adSpace from '@assets/ad_space_square.png'
import Card from '@components/Card'
import { maxHeight } from '@mui/system'
import LoadingComponent from '@/components/LoadingComponent'
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
        <Card styles={{ maxWidth: '300px', height: '250px' }}>
          <img src={adSpace} />
        </Card>
      </div>
      <div className="content">
        <Card>
          <LoadingComponent />
        </Card>
      </div>
    </Container>
  )
}

export default Home
