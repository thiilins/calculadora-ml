import styled, { css } from 'styled-components'

import { ReactComponent as ArrowDown } from '@assets/arrow-down.svg'
import { ReactComponent as ArrowUp } from '@assets/arrow-up.svg'

interface DropdownBtnProps {
  width?: string
  open: boolean
  fullRounded?: boolean
  disabled?: boolean
}

interface DropdownContentProps {
  open: boolean
  width?: string
}

export const Container = styled.div`
  position: relative;
  display: inline-block;
`

export const UserImg = styled.img`
  width: 3.3rem;
  height: 3.3rem;
  border-radius: 50%;
  margin: 0.4rem 0 0.4rem 0.6rem;
`

export const DropdownBtn = styled.button<DropdownBtnProps>`
  background-color: #fff;
  color: ${({ disabled }) => (disabled ? '#b1aabb' : '#324147')};

  font-size: 1.3rem;
  border: 1px solid #ddd7e5;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  width: ${({ width }) => (width ? width : '15rem')};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.2rem;

  border-radius: ${({ fullRounded = true }) => (fullRounded ? '20px' : '10px')};
`

export const DropdownContent = styled.div<DropdownContentProps>`
  display: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd7e5;
  margin-top: 0.4rem;
  margin-bottom: 2rem;
  z-index: 1;
  border-radius: 10px;

  max-height: 20rem;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
  ::-webkit-scrollbar-track {
    background: none;
    border: none;
  }

  width: ${({ width }) => (width ? width : '15rem')};

  ${({ open }) =>
    open &&
    css`
      display: flex;
      flex-direction: column;
      padding: 1rem;
      align-items: center;
    `}
`

interface IconProps {
  disabled?: boolean
  arrowColor?: string
}

export const ArrowDownIcon = styled(ArrowDown)<IconProps>`
  path {
    fill: ${({ disabled, arrowColor }) =>
      arrowColor ? arrowColor : disabled ? '#b1aabb' : '#4f6872'};
  }
`

export const ArrowUpIcon = styled(ArrowUp)<IconProps>`
  path {
    fill: ${({ disabled, arrowColor }) =>
      arrowColor ? arrowColor : disabled ? '#b1aabb' : '#4f6872'};
  }
`

export const IconContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  justify-content: flex-end;
`

interface PlaceHolderTextProps {
  placeholderColor?: string
}

export const PlaceHolderText = styled.p<PlaceHolderTextProps>`
  color: ${({ placeholderColor }) =>
    placeholderColor ? placeholderColor : '#b1aabb'};
`
