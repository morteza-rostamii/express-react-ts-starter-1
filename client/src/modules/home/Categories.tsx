import { Image } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import useCategoriesStore from 'stores/categories.store'

const Categories = () => {
  const {categories, getCategoriesAct} = useCategoriesStore();

  useEffect(() => {
    const getData = async () => await getCategoriesAct();
    getData(); 
  }, []);

  return (
    <div>
      <div
      className='
      flex items-center justify-between
      '
      >
        <h2
        className='font-bold text-lg'
        >
        Categories
        </h2>
        <Link to={'#'}>
          See All
        </Link>
      </div>

      <div
      className='
      flex flex-wrap
      '
      >
        {
          categories?.length 
          ?(
            categories.map((el:any) => (
              <div key={el.id}>
                <Image
                width={70}
                height={70}
                borderRadius={'100%'}
                src={el.image}
                />
                {el.name}
              </div>
            ))
          ):''
        }
      </div>
    </div>
  )
}

export default Categories