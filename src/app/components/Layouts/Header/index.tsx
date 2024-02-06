import React from 'react'
import MercadoLivreLogo from "@assets/mercado_livre_horizontal.svg";
import * as S from './styles'
import ChangeLanguageComponent from '../ChangeLanguageComponent'

const Header: React.FC = () => {
  return (
    <S.MainHeaderContainer>
      <S.MainLogoContainer>
        <MercadoLivreLogo />
      </S.MainLogoContainer>
      <ChangeLanguageComponent />
    </S.MainHeaderContainer>
  )
}

export default Header
