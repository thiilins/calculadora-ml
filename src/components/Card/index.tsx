import React from 'react'
import * as S from './styles'
import { t } from '@i18n'
interface ICard {
  children?: JSX.Element | JSX.Element[]
  styles?: React.CSSProperties
}
const Card = ({ children, styles }: ICard) => {
  return <S.CardWrapper style={styles}>{children}</S.CardWrapper>
}

export default Card
