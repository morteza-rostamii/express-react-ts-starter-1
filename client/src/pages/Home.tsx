import { Avatar, Button, IconButton } from '@chakra-ui/react'
import React from 'react'
import { faker } from '@faker-js/faker';
import FootDrawer from 'components/FootDrawer';
import { HiChevronDown, HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi2";
import Header from 'modules/home/Header';
import Categories from 'modules/home/Categories';
import Search from 'modules/home/Search';

const Home = () => {

  

  return (
    <main
    className='
    pt-10 px-4
    '
    >
      <div
      className='flex flex-col gap-4 bg-slate-50'
      >
        <Header/>
        <Search/>
        <Categories/>
      </div>
    </main>
  )
}

export default Home