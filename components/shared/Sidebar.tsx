import React from 'react';
import Image from 'next/image';

interface SidebarItemProps {
  text: string; // Explicitly typing text as a string
}

function SidebarItem({ text }:SidebarItemProps) {
  return (
    <div className='flex items-center mb-8'>
      <div className='bg-[#35e3a4] rounded-full p-2'>
        <Image className='h-[15px] w-[15px]' src='/maps-and-flags.png' alt='logo' width={900} height={900} />
      </div>
      <p className='ml-2 text-[#414040] tracking-wide'>{text}</p>
    </div>
  );
}

function Sidebar() {
  return (
    <div className='bg-zinc-100 w-1/5 h-auto p-4 pl-[45px]'>
      <div>

        {/*operation Section*/}
        <p className='mb-10 font-medium text-[#414040]'>Operations</p>
        <SidebarItem text='Products' />
        <SidebarItem text='Bookings' />
        <SidebarItem text='Offline Tickets' />
        <SidebarItem text='Add Products' />


        {/*Marketing Section*/}
        <p className='mb-10 mt-6 font-medium text-[#414040]'>Marketing</p>
        <SidebarItem text='Customers' />
        <SidebarItem text='Social' />
        <SidebarItem text='Reviews & Ratings' />
        

        {/*General Section*/}
        <p className='mb-10 mt-6 font-medium text-[#414040]'>General</p>
        <SidebarItem text='Business Details' />
        <SidebarItem text='Website Details' />
        <SidebarItem text='Dashboard' /> 
        <SidebarItem text='Integrations' />
        

        {/*Finance Section*/}
        <p className='mb-10 mt-6 font-medium text-[#414040]'>Finance</p>
        <SidebarItem text='Payments Integration' />
      </div>
    </div>
  );
}

export default Sidebar;
