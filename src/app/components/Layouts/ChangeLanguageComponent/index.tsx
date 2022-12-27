import React, { useState } from 'react'
import * as S from './styles'
import usePersistedState from '@hooks/usePersistedState'
import { languages, ILanguage } from '@i18n'
import useTranslation from '@hooks/useTranslation'
import Dropdown from '@components/Dropdown'
import DropdownItem from '@components/Dropdown/DropdownItem'
import { useEffect } from 'react'

const ChangeLanguageComponent = () => {
  const { t } = useTranslation()
  const [languageName, setLanguageName] = usePersistedState<string>(
    'i18nextLng',
    'pt-BR',
    'string'
  )

  const [language, setLanguage] = useState<ILanguage>({} as ILanguage)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const defineLanguage = () => {
      const nlng = languages.find((lng) => lng.alias === languageName)
      setLanguage(
        nlng
          ? {
              alias: nlng.alias,
              name: nlng.name,
              flag: `/assets/flags/${nlng.flag}.png`
            }
          : ({} as ILanguage)
      )
      setLoading(false)
    }
    loading && language && defineLanguage()
  }, [loading, language, languageName])
  const handleChangeLanguage = (lng: string) => {
    const nlng = languages.find((language) => language.alias === lng)
    setLanguage({
      alias: nlng!.alias,
      name: nlng!.name,
      flag: `/assets/flags/${nlng!.flag}.png`
    })
    setLanguageName(nlng!.alias)
    window.location.reload()
  }
  return (
    <S.ChangeLanguageComponentWrapper>
      <Dropdown
        value={t(`languages.${language!.name}`)}
        placeholder={'Idioma'}
        fullRounded={false}
        userImg={language.flag}
      >
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
