import styled, { css } from 'styled-components'
import { LoadingPageProps } from './types'
export const Container = styled.div<LoadingPageProps>`
  ${({ theme, loading }) => css`
    background-color: ${theme.colors.primary};
    width: 100vw;
    height: 100vh;
    color: white;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* z-index: 1; */
    /* position: absolute; */
    /* top: 0; */
    ${!loading &&
    `-webkit-animation: slide-out-left 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;  
    animation: slide-out-left 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)  both;`}

    svg {
      max-width: 50vw;
      max-height: 70vh;
    }

    @-webkit-keyframes slide-out-left {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        /* opacity: 1; */
      }
      100% {
        -webkit-transform: translateX(-110vw);
        transform: translateX(-110vw);
        /* opacity: 0; */
      }
    }
    @keyframes slide-out-left {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        /* opacity: 1; */
      }
      100% {
        -webkit-transform: translateX(-110vw);
        transform: translateX(-110vw);
        /* opacity: 0; */
      }
    }
  `}
`
export const HeartBeatAnimation = styled.div`
  ${({ theme }) => css`
    -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
    animation: heartbeat 1.5s ease-in-out infinite both;
    @-webkit-keyframes heartbeat {
      from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
    @keyframes heartbeat {
      from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
  `}
`
