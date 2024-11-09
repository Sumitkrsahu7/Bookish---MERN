import React from 'react'
import  Card from './Card'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'


const Courses = () => {
  return (
    <>
      <div className='msx-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='items-center justify-center mt-28 text-center'>
          <h1 className='text-2xl md:text-4xl font-semibold'>Konichiwa unknown kun  <span className='text-pink-500'> Ohio</span>
          </h1>
          <p className='mt-5'>
            this is me creating this webiste by copying fromyoutube and this is good for me to learn new stuffs and it is going good and also there is nothinng new to say. Even though i wrote this much it is not enough tfor this website to render its content in 3 lines, i dont know how myuch i will have to write for that let's see i think the maximum words i should writ ein infinity, but the minimum is 150. might be , i am also guessing only
          </p>
          <Link to='/'>
          <button className='bg-pink-500 py-2 px-4 rounded-lg mt-8 hover:bg-pink-600 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) =>(
              <Card key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Courses