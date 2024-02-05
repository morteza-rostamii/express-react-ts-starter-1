import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import React from 'react'

function FootDrawer({children, btn}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const placement = 'bottom';

  const Btn = React.cloneElement(btn, {
    onClick: onOpen,
  });

  return (
    <>
      {Btn}
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
         
          <DrawerBody>
            {children}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default FootDrawer