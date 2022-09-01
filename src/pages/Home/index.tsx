import reactLogo from '@assets/react.svg'
import React, { useState } from 'react'
import { t } from '@i18n'
import { Container } from './styles'
const Home = () => {
  return (
    <Container>
      <p className="welcome">{t('home.bem_vindo')}</p>
      <span className="welcome__subtitle">
        Edite o Arquivo Translation.json na pasta public e veja
      </span>
    </Container>
  )
}

export default Home
