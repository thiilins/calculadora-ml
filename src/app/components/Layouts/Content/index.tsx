import React from 'react'

import * as S from './styles'
interface IContent {
  children: React.ReactNode
}
const Content: React.FC<IContent> = ({ children }) => {
  return <S.MainContentContainer>{children}</S.MainContentContainer>
}

export default Content
