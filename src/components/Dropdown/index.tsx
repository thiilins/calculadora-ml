import React, { useState } from 'react'
import ClickAwayListener from '@mui/base/ClickAwayListener'

import {
  Container,
  UserImg,
  DropdownBtn,
  DropdownContent,
  IconContainer,
  ArrowDownIcon,
  ArrowUpIcon,
  PlaceHolderText
} from './styles'

interface DropdownProps {
  children: JSX.Element | JSX.Element[]
  userImg?: string
  width?: string
  value?: string
  placeholderColor?: string
  arrowColor?: string
  placeholder: string
  containerStyle?: object
  contentStyle?: object
  fullRounded?: boolean
  disabled?: boolean
  btnStyle?: object
}

const Dropdown = ({
  children,
  width,
  userImg,
  value,
  disabled,
  placeholder,
  containerStyle = {},
  contentStyle = {},
  fullRounded,
  placeholderColor,
  arrowColor,
  btnStyle = {}
}: DropdownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Container
        style={containerStyle}
        onClick={() => {
          if (!disabled) setOpen(!open)
        }}
      >
        <DropdownBtn
          disabled={disabled}
          style={btnStyle}
          width={width}
          open={open}
          type="button"
          fullRounded={fullRounded}
        >
          {userImg && <UserImg src={userImg} />}
          {value ? (
            value
          ) : (
            <PlaceHolderText placeholderColor={placeholderColor}>
              {placeholder}
            </PlaceHolderText>
          )}
          <IconContainer>
            {open ? (
              <ArrowUpIcon arrowColor={arrowColor} disabled={disabled} />
            ) : (
              <ArrowDownIcon arrowColor={arrowColor} disabled={disabled} />
            )}
          </IconContainer>
        </DropdownBtn>

        <DropdownContent style={contentStyle} width={width} open={open}>
          {children}
        </DropdownContent>
      </Container>
    </ClickAwayListener>
  )
}

export default Dropdown
