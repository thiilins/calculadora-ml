import React from 'react'
import * as S from './styles'
import { t } from '@i18n'
import { GitHub, LinkedIn, Web } from '@mui/icons-material'
const CardDevelopmentBy = () => {
  return (
    <S.CardDevelopmentByWrapper>
      <div className="title">
        <span>{t('home.development_by')}</span>
      </div>
      <div className="img"></div>
      <div className="info">
        <span>Thiago Lins</span>
        <p>Dev FullStack</p>
        <div className="icons">
          <GitHub />
          <LinkedIn />
          <Web />
        </div>
      </div>
    </S.CardDevelopmentByWrapper>
  )
}

export default CardDevelopmentBy
