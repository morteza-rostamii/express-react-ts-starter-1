import { Avatar, Button, IconButton } from '@chakra-ui/react'
import { faker } from '@faker-js/faker'
import FootDrawer from 'components/FootDrawer'
import React from 'react'
import { HiChevronDown, HiOutlineShoppingBag } from 'react-icons/hi2'

const Header = () => {
  const category = 'Men';
  
  return (
    <header
    className='flex items-center justify-between'
    >
      <Avatar
      src={faker.image.avatar()}
      size={'md'}
      />
      <FootDrawer
      btn={
      <Button 
      rightIcon={<HiChevronDown size={20}/>} 
      borderRadius={'9999px'}
      >{category}</Button>}
      >
        men or women
      </FootDrawer>

      <IconButton
      aria-label=''
      isRound={true}
      borderRadius={'9999px'}
      icon={<HiOutlineShoppingBag size={20}/>}
      colorScheme='purple'
      />
    </header>
  )
}

export default Header