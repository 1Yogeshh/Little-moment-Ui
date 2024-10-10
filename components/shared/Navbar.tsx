import React from 'react'
import Image from 'next/image'
import { ChevronDown, MapPin } from 'lucide-react'

function Navbar() {
  return (

    <div className='flex justify-between pl-[50px] pr-[50px] h-[80px] items-center'>

        {/* Navbar Logo */ }
      <div>
        <Image className='h-[40px] w-[150px]' src={`/moment.png`} alt='logo' width={900} height={900}/>
      </div>

      {/* Navbar Right button*/ }
      <div className='flex bg-[#000] text-white pt-2 pb-2 pl-4 pr-4 gap-4 items-center rounded-lg'>
        
        <div className=' bg-[#35e3a4] rounded-full p-2'><Image className='h-[20px] w-[20px]' src={`/maps-and-flags.png`} alt='logo' width={900} height={900}/></div>

        <p className='font-medium'>Sim & Sams</p>

        <div><ChevronDown/></div>

      </div>

    </div>
  )
}

export default Navbar
