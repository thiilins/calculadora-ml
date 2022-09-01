import React from 'react'
import * as S from './styles'
import { t } from '@i18n'
interface ICard {
  children?: JSX.Element | JSX.Element[]
}
const Card = ({ children }: ICard) => {
  return <S.CardWrapper>{children}</S.CardWrapper>
}

export default Card
