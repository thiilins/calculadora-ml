import React from 'react'
import { selectedLanguage } from '@i18n'
import { ReactComponent as MercadoLivreLogo } from '@assets/mercado_livre_horizontal_pt.svg'
import { ReactComponent as MercadoLibreLogo } from '@assets/mercado_livre_horizontal_es.svg'
import * as S from './styles'
import ChangeLanguageComponent from '../ChangeLanguageComponent'

const Header: React.FC = () => {
  const isSpanish = !selectedLanguage?.alias.includes('pt')
  return (
    <S.MainHeaderContainer>
      <S.MainLogoContainer>
        {isSpanish ? <MercadoLibreLogo /> : <MercadoLivreLogo />}
      </S.MainLogoContainer>
      <ChangeLanguageComponent />
    </S.MainHeaderContainer>
  )
}

export default Header
