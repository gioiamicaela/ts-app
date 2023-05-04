import Image from 'next/image';
import Link from 'next/link';
import {
  pathData,
  PathData,
  socialMediaItems,
  SocialMediaItems,
} from '../data/data';

function Footer() {
  return (
    <footer className='mt-auto'>
      <hr className='bg-black opacity-30 border-solid border-2 border-[#c8c8c8]' />
      <div className='min-w-full m-0 pt-[88px] px-[118px]flex justify-between pb-[60px]'>
        <div className='columns-1 lg:columns-4'>
          <div className='row flex flex-col'>
            <div className='relative overflow-hidden w-[132px] h-[24px]'>
              Transkriptorium
            </div>

            <p className='mt-[15px] ml-0 pl-0 not-italic font-normal text-base leading-5 text-[#d0d0d0] h-[64px] w-[281px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh in
              maecenas posuere at congue.
            </p>
            <div
              className={'flex gap-6 md:order-2 ml-0 pl-0'}
              style={{ marginTop: '15px' }}
            >
              {socialMediaItems.map((item: SocialMediaItems) => {
                return (
                  <Link href={item.link} key={item.name} target={'_blank'}>
                    <item.icon style={{ fontSize: '24px', color: '#fff' }} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className='columns-2 lg:columns-4 max-w-[120px] pl-0'>
          <div className='row pt-5 lg:pt-0'>
            <h4 className='mb-[15px] not-italic font-semibold text-xl leading-6 text-white h-[24px] w-[51px]'>
              Docs
            </h4>
            <h5 className='mb-[15px] not-italic font-normal text-base leading-5 text-[#d0d0d0] h-[24px]'>
              Developers
            </h5>
            <h5 className='mb-[15px] not-italic font-normal text-base leading-5 text-[#d0d0d0] h-[24px]'>
              GitHub
            </h5>
            <h5 className='mb-[15px] not-italic font-normal text-base leading-5 text-[#d0d0d0] h-[24px]'>
              White Paper
            </h5>
            <h5 className='mb-[15px] not-italic font-normal text-base leading-5 text-[#d0d0d0] h-[24px]'>
              Branding
            </h5>
          </div>
        </div>
        <div className='columns-2 lg:columns-4 max-w-[128px] pl-0'>
          <div className='row pt-5 lg:pt-0'>
            <h4 className='mb-[15px] not-italic font-semibold text-xl leading-6 text-white h-[24px] w-[51px]'>
              Governance
            </h4>
            <h5 className='mb-[15px] not-italic font-normal text-base leading-5 text-[#d0d0d0] h-[24px]'>
              Treasury
            </h5>
            <h5 className='mb-[15px] not-italic font-normal text-base leading-5 text-[#d0d0d0] h-[24px]'>
              Voting
            </h5>
            <h5 className='mb-[15px] not-italic font-normal text-base leading-5 text-[#d0d0d0] h-[24px]'>
              Delegate
            </h5>
            <h5 className='mb-[15px] not-italic font-normal text-base leading-5 text-[#d0d0d0] h-[24px]'>
              Forum
            </h5>
          </div>
        </div>
        <div className='columns-2 lg:columns-4 max-w-[128px] pl-0'>
          <div className='row pt-5 lg:pt-0'>
            <h4 className='mb-[15px] not-italic font-semibold text-xl leading-6 text-white h-[24px] w-[51px]'>
              About
            </h4>
            <h5 className='mb-[15px] not-italic font-normal text-base leading-5 text-[#d0d0d0] h-[24px]'>
              Security
            </h5>
            <h5 className='mb-[15px] not-italic font-normal text-base leading-5 text-[#d0d0d0] h-[24px]'>
              Blog
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
