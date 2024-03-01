'use client'

import { useContext } from 'react'

import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '../Dialog/Dialog'
import { ModalContext } from './ModalContext'

interface ModalProps {
  children: React.ReactNode
  planet: any
}

const Modal = ({ children }: ModalProps) => {
  const { open, setOpen } = useContext(ModalContext)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>AA</DialogTitle>

          <DialogDescription>BB</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
