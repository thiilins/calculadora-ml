import { StandardButton } from '@components/Button'
import React from 'react'
import Modal from 'react-modal'
import * as S from './styles'
import { DefaultViewDataModalProps } from './types'

Modal.setAppElement('#root')

const StandardModal = ({
  isOpen = false,
  onRequestClose,
  children,
  title,
  maxWidth = '650px',
  addSaveBtnText = 'Salvar',
  addSaveBtnColor = 'secondary',
  addSaveBtnAction,
  cancelBtnText = 'Cancelar',
  cancelBtnColor = 'red',
  cancelBtnAction,
  hideCloseButton = true
}: DefaultViewDataModalProps) => {
  const StandardBaseModalStyle: Modal.Styles = {
    overlay: {
      background: ' rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '1999'
    },
    content: {
      width: '100%',
      maxWidth: maxWidth,
      background: 'white',
      padding: '2rem',
      position: 'relative',
      borderRadius: '0.5rem',
      zIndex: '2000',
      border: '0',
      outline: 'none'
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={StandardBaseModalStyle}
    >
      <S.Wrapper>
        <S.Header>
          {title && <h2>{title}</h2>}
          {!hideCloseButton && (
            <button type="button" onClick={onRequestClose}>
              Fechar
            </button>
          )}
        </S.Header>
        <S.Content>{children}</S.Content>
        <S.Footer>
          <StandardButton
            text={cancelBtnText}
            primaryColor={cancelBtnColor}
            sx={{
              height: '45px'
            }}
            onClick={cancelBtnAction}
          />
          <StandardButton
            text={addSaveBtnText}
            primaryColor={addSaveBtnColor}
            sx={{
              height: '45px'
            }}
            onClick={addSaveBtnAction}
          />
        </S.Footer>
      </S.Wrapper>
    </Modal>
  )
}

export default StandardModal
