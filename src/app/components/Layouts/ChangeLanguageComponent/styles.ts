import styled, { css } from 'styled-components'
import { UserImg } from '@components/Dropdown/styles'
interface IFlag {
  flag: string
}
export const ChangeLanguageComponentWrapper = styled.div`
  ${({ theme }) => css`
    padding: 1rem 3rem;
    ${UserImg} {
      border-radius: 10%;
      width: 3.3rem;
      height: 2.5rem;
    }
  `}
`
export const LanguageItem = styled.button`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    padding: 0.5rem;
    gap: 1rem;
    width: 100%;
    height: 4rem;
    cursor: pointer;
    border-radius: 1rem;
    font-size: 1.5rem;
    & + & {
      margin-top: 1rem;
    }
    * {
      display: flex;
      width: 100%;
      justify-content: flex-start;
    }
    border: 0;
    color: ${theme.colors.secondary};
    font-family: ${theme.fonts.family.harabara_mais};
    background-color: transparent;
    :hover {
      background-color: ${theme.colors.secondary}30;
    }
  `}
`
export const Flag = styled.div<IFlag>`
  ${({ theme, flag }) => css`
    background-image: url(${flag});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    border-radius: 10%;
    height: 100%;
  `}
`
