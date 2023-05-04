'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  pathData,
  PathData,
  socialMediaItems,
  SocialMediaItems,
} from '../data/data';
import { FaAlignLeft } from 'react-icons/fa';

function Navigation() {
  const [show, setShow] = useState(false);
  return (
    <header className='w-full pt-4 sm:pt-0 '>
      <div className=''>
        <nav className='rounded md:flex md:items-center md:justify-between'>
          <div className='container flex flex-wrap items-center justify-between mx-auto pl-2'>
            <div className='cursor-pointer relative overflow-hidden sm:w-[132px] w-[90px] sm:h-[24px] h-[16px] '>
              <Link href='/' className='flex items-center'>
                Transkriptorium'
              </Link>
            </div>

            <div className='hidden md:flex  min-[798px]:gap-6 max-[797px]:gap-2 md:order-2 '>
              {socialMediaItems.map((item: SocialMediaItems) => {
                return (
                  <Link href={item.link} key={item.name} target={'_blank'}>
                    <item.icon style={{ fontSize: '24px', color: '#fff' }} />
                  </Link>
                );
              })}
            </div>

            <span className='text-3xl cursor-pointer mx-2 md:hidden block'>
              <FaAlignLeft
                onClick={() => setShow(!show)}
                style={{ fontSize: '24px', color: '#fff' }}
              />
            </span>

            {show && (
              <div className='md:hidden fixed z-10 bg-[rgba(255, 255, 255, 0.05)] backdrop-blur-[48px] inset-y-0 left-0 right-1/4 p-5'>
                <div className='cursor-pointer absolute top-25 overflow-hidden w-[132px] h-[24px] '>
                  <Link href='/' className='flex items-center'>
                    Transkriptorium'
                  </Link>
                </div>
                <div className='absolute top-40'>
                  <ul className='flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
                    {pathData.map((item: PathData, key: number) => (
                      <li key={key}>
                        <Link
                          href={item.link}
                          className='block font-BeVietnamPro not-italic font-medium text-[17px] leading-[22px] py-2 pl-2 pr-3 text-white rounded '
                          aria-current='page'
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='absolute bottom-10 '>
                  <div className='flex justify-between pb-5'>
                    <hr className='w-[169px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-200 to-transparent opacity-50 dark:opacity-100' />
                    <hr className='w-[169px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-200 to-transparent opacity-50 dark:opacity-100' />
                  </div>
                  <div className='flex justify-center gap-6 order-2'>
                    {socialMediaItems.map((item) => {
                      return (
                        <Link
                          href={item.link}
                          key={item.name}
                          target={'_blank'}
                        >
                          <item.icon
                            style={{ fontSize: '24px', color: '#fff' }}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            <div className='md:items-center justify-between hidden w-full md:flex md:w-auto md:order-1'>
              <ul className='flex flex-col  md:flex-row space-x-0 min-[892px]:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
                {pathData.map((item: PathData, key: number) => (
                  <li key={key}>
                    <Link
                      href={item.link}
                      className='block text-base py-2 pl-2 pr-3 text-white rounded md:bg-transparent'
                      aria-current='page'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <hr className='border-[0.5px] border-solid border-white mt-3 md:hidden' />
    </header>
  );
}

export default Navigation;
