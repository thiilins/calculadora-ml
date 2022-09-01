import React from 'react'
import { ReactComponent as MercadoLivreLogo } from '@assets/mercado_livre_horizontal.svg'
import * as S from './styles'

const Header: React.FC = () => {
  return (
    <S.MainHeaderContainer>
      <S.MainLogoContainer>
        <MercadoLivreLogo />
      </S.MainLogoContainer>
    </S.MainHeaderContainer>
  )
}

export default Header
