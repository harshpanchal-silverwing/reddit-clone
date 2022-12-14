import React from 'react';
import {
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  MenuIcon,
} from '@heroicons/react/solid';
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
function Header() {
  const { data: session } = useSession();
  return (
    <div className='sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-sm'>
      <div className='relative h-10 w-10  flex-shrink-0 cursor-pointer'>
        <Link href='/'>
          <Image
            src={'https://shoppingapi.netlify.app/reddit.png'}
            objectFit='contain'
            layout='fill'
          />
        </Link>
      </div>

      <div className='mx-5 flex items-center xl:min-w-{300px}'>
        <HomeIcon className='h-5 w-5' />
        <p className='ml-2 flex-1 hidden lg:inline'>Home</p>
        <ChevronDownIcon className='h-5 w-5' />
      </div>

      <form className='flex flex-1 items-center space-x-2 border-gray-200 bg-gray-100 px-3 py-1'>
        <SearchIcon className='h-6 w-6 text-gray-400' />
        <input
          className='flex-1 bg-transparent outline-none'
          type='text'
          placeholder='Search reddit'
        />
        <button type='submit' hidden />
      </form>

      <div className='mx-5 space-x-2 text-gray-500 items-center hidden lg:inline-flex'>
        <SparklesIcon className='icon' />
        <GlobeIcon className='icon' />
        <VideoCameraIcon className='icon' />
        <hr className='h-10 border border-gray-100' />
        <PlusIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <SpeakerphoneIcon className='icon' />
      </div>

      <div className='flex ml-5 items-center lg:hidden'>
        <MenuIcon className='icon' />
      </div>

      {session ? (
        <div
          onClick={() => signOut()}
          className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'
        >
          <div className='flex-1 text-xs'>
            <p className='truncate'>{session?.user?.name}</p>
            <p className='text-gray-400'>Sign Out</p>
          </div>

          <ChevronDownIcon className='h-5 flex-shrink-0 text-gray-400' />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'
        >
          <p className='text-gray-400'>Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;
