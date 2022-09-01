import styled, { css } from 'styled-components'

export const LoadingContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    z-index: 9999;
  `}
`
export const LoadingAnimation = styled.div`
  ${({ theme }) => css`
    width: 200px;
    height: 150px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    @keyframes animationTwo {
      0% {
        opacity: 1;
        transform: translate(0 0);
      }
      49.99% {
        opacity: 1;
        transform: translate(80px, 0);
      }
      50% {
        opacity: 0;
        transform: translate(80px, 0);
      }
      100% {
        opacity: 0;
        transform: translate(0, 0);
      }
    }
    @keyframes animationOne {
      0% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(80px, 0);
      }
      100% {
        transform: translate(0, 0);
      }
    }
    & .loading__items div {
      position: absolute;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      top: 60px;
      left: 20px;
    }
    & .loading__items div:nth-child(1) {
      background: ${theme.colors.primary};
      animation: animationOne 1s linear infinite;
      animation-delay: -0.5s;
    }
    & .loading__items div:nth-child(2) {
      background: ${theme.colors.secondary};
      animation: animationOne 1s linear infinite;
      animation-delay: 0s;
    }
    & .loading__items div:nth-child(3) {
      background: ${theme.colors.primary};
      animation: animationTwo 1s linear infinite;
      animation-delay: -0.5s;
    }

    & .loading__items {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateZ(0) scale(1);
      backface-visibility: hidden;
      transform-origin: 0 0; /* see note above */
    }
    & .loading__items div {
      box-sizing: content-box;
    }
  `}
`
export const AnimationText = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: ${theme.fonts.weight.bold};
    font-family: ${theme.fonts.family.harabara_mais};
    font-size: 3rem;
    padding: 0.5rem;
    letter-spacing: 0.1rem;
    text-align: center;
    overflow: hidden;

    white-space: nowrap;
    overflow: hidden;
    width: 30em;
    animation: type 4s steps(60, end) infinite;

    p a {
      color: lime;
      text-decoration: none;
    }

    span {
      animation: blink 1s infinite;
    }

    @keyframes type {
      from {
        width: 0;
      }
    }

    @keyframes type2 {
      0% {
        width: 0;
      }
      50% {
        width: 0;
      }
      100% {
        width: 100;
      }
    }

    @keyframes blink {
      to {
        opacity: 0;
      }
    }

    ::selection {
      background: black;
    }
  `}
`
