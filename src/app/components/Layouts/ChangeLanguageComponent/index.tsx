import React, { useState } from 'react'
import * as S from './styles'
import usePersistedState from '@hooks/usePersistedState'
import { languages } from '@configs/i18n'
import { useTranslation } from '@i18n'
import Dropdown from '@components/Dropdown'
import DropdownItem from '@components/Dropdown/DropdownItem'
import { useEffect } from 'react'

const ChangeLanguageComponent = () => {
  const { t } = useTranslation()
  const [language, setLanguage] = usePersistedState<string>(
    'i18nextLng',
    'pt-BR',
    'string'
  )

  const [languageName, setLanguageName] = useState<string>(() => {
    if (language) {
    }
    return ''
  })
  const getLanguageName = () => {
    const lng = languages.find((lng) => lng.alias === language)
    return lng ? t(`languages.${lng.name}`) : ''
  }

  useEffect(() => {
    const defineLanguage = () => {
      const name = getLanguageName()
      setLanguageName(name)
    }
    language && defineLanguage()
  }, [language])
  const handleChangeLanguage = (lng: string) => {
    const selectedLanguage = languages.find(
      (language) => language.alias === lng
    )
    setLanguage(selectedLanguage!.alias)
    setLanguageName(selectedLanguage!.name)
    window.location.reload()
  }
  return (
    <S.ChangeLanguageComponentWrapper>
      <Dropdown value={languageName} placeholder={'Idioma'}>
        {languages.map((language) => {
          return (
            <S.LanguageItem
              key={language.alias}
              onClick={() => handleChangeLanguage(language.alias)}
            >
              <S.Flag flag={`/assets/flags/${language.flag}.png`} />
              <span>{t(`languages.${language.name}`)}</span>
            </S.LanguageItem>
          )
        })}
      </Dropdown>
    </S.ChangeLanguageComponentWrapper>
  )
}

export default ChangeLanguageComponent
