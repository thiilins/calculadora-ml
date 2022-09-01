import React from 'react'
import Content from './Content'
import Header from './Header'
import * as S from './styles'
interface IGrid {
  children: React.ReactNode
}
const Grid = ({ children }: IGrid) => {
  return (
    <S.LayoutContainer>
      <Header />
      <Content>{children}</Content>
    </S.LayoutContainer>
  )
}

export default Grid
