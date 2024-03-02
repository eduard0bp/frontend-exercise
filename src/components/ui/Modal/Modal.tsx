'use client'
import { Dialog, DialogContent } from '..'
import { ModalContext } from './ModalContext'
import { useContext } from 'react'

interface ModalProps {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const { open, setOpen } = useContext(ModalContext)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default Modal
