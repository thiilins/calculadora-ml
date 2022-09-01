import styled, { css } from 'styled-components'
export const CardWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: inset 5px 5px 10px #a9a9aa77, inset -5px -5px 10px #ffffff7e;
  `}
`
