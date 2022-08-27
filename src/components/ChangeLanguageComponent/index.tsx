import React from 'react'
import * as S from './styles'
import usePersistedState from '@hooks/usePersistedState'
import { languages } from '@configs/i18n'
import { t } from '@i18n'

const ChangeLanguageComponent = () => {
  const [language, setLanguage] = usePersistedState<string>(
    'i18nextLng',
    'pt-BR'
  )
  return (
    <S.ChangeLanguageComponentWrapper>
      Hello World
    </S.ChangeLanguageComponentWrapper>
  )
}

export default ChangeLanguageComponent
