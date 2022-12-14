import styled, { css } from 'styled-components'
export const CardDevelopmentByWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    & .img {
      height: 100px;
      margin-top: 1.6em;
      aspect-ratio: 1;
      border-radius: 30%;
      background: url('/assets/imgs/avatar.jpg') no-repeat;
      background-size: 110%;
      background-color: center center;
      margin-bottom: 0.4em;
      box-shadow: -5px -5px 8px #ffffff7a, 5px 5px 8px #a9a9aa7a;
    }
    .title {
      font-weight: bold;
    }
    & .info {
      text-align: center;
      margin-top: 0.4em;
      color: ${theme.colors.secondary};

      line-height: 1.2em;
      & .icons {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        & svg {
          width: 30px;
          height: 30px;
          color: ${theme.colors.secondary};
          cursor: pointer;
          :hover {
            color: ${theme.colors.primary};
          }
        }
      }
      span {
        font-family: ${theme.fonts.family.harabara_mais};
        font-weight: bold;
        font-size: 1.2em;
      }
      p {
        font-size: 1.5rem;
      }
    }
  `}
`
