import { DefaultModalProps } from '../types'
import { IVariantColor } from '@sharedTypes/colors'
export type DefaultViewDataModalProps = {
  children?: React.ReactNode
  title?: string
  cancelBtnText?: string
  cancelBtnColor?: IVariantColor
  cancelBtnAction?: () => void | Promise<void>
  addSaveBtnText?: string
  addSaveBtnColor?: IVariantColor
  addSaveBtnAction?: () => void | Promise<void>
  maxWidth?: string
  hideCloseButton?: boolean
} & DefaultModalProps
