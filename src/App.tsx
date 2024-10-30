import './App.css'
import { Fragment, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import profilePicture from './assets/profilePicture.png'
import profilePictureTransparentBg from './assets/profilePictureTransparentBg.png'

import homePicture1 from './assets/home-image-1.png'
import homePicture2 from './assets/home-image-2.png'
import backButton from './assets/back-button.png';
import { animated, useScroll } from 'react-spring';
import { Link } from 'react-router-dom'
import MenuNavigation from './MenuNavigation'
import { setBlur } from './utils'

type TClamp = <T>(curr: T, min: T, max: T) => T

const clamp: TClamp = (curr, min, max) => {
  if (curr < min) {
    return min;
  } else if (curr > max) {
    return max;
  }

  return curr;
}

const AVATAR_SIZE = 80;

const interpolate = (val: number, input: Array<number>, output: Array<number>) => {
  const [minInput, maxInput] = [Math.min(...input), Math.max(...input)];
  const [minOutput, maxOutput] = [Math.min(...output), Math.max(...output)];

  // Linear interpolation formula
  const scale = (val - minInput) / (maxInput - minInput);
  return minOutput + scale * (maxOutput - minOutput);
}

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    // query: '(min-width: 1224px)'
    query: '(min-width: 800px)'
  })

  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })

  const containerRef = useRef(null!);
  const scrollValue = useScroll({
    container: containerRef,
    /* default: {
      immediate: true,
    } */
  });

  const sizeBasedOnScrollY = scrollValue.scrollY.to(
    scrollP => {
      return clamp(120 - scrollP, AVATAR_SIZE - 20, 120)
    }
  );

  return (
    <animated.div className='m-0 p-0 grid w-screen h-screen content-between overflow-auto'>
      {
        (isDesktopOrLaptop || isBigScreen) && (
          <div style={{ overflow: 'scroll' }}>
            <div className='flex content-between'>
              <div className='font-abhaya p-10 grid grid-cols-1 content-between' style={{ width: '50%' }}>
                <ul className='text-left sm:text-xl md:text-2xl lg:text-2xl text-[#985151] font-nunito font-bold'>
                  Mobile Developer
                </ul>
                <div>
                  <div className='text-left font-extrabold text-4xl text-[#513838]'>
                    Hello,
                  </div>
                  <div className='text-left font-extrabold text-4xl text-[#513838]'>
                    my name is Arslan
                  </div>
                </div>
                <div className='text-left sm:text-xl md:text-2xl lg:text-2xl text-[#AF9F9F] font-nunito font-medium'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                </div>
                <div className='grid grid-cols-8 gap-4 hover:text-[#FFFFFF]'>
                  <button className='border-0 hover:border-0 p-0 bg-transparent border-[#985151] hover:text-[#FFFFFF]'>
                    <div className='rounded-md py-1 border-2 border-[#985151] hover:bg-[#985151] hover:text-[#FFFFFF] text-[#513838] font-nunito font-medium text-center text-sm content-center'>
                      <Link color='transparent' className='text-[#513838] hover:text-[#FFFFFF]' to={"projects"}>Projects</Link>
                    </div>
                  </button>
                  <button className='border-0 hover:border-0 p-0 bg-transparent border-[#985151]'>
                    <div className='rounded-md py-1 border-2 border-[#985151] hover:bg-[#985151] hover:text-[#FFFFFF] text-[#513838] font-nunito font-medium text-center text-sm content-center'>
                      Github
                    </div>
                  </button>
                  <button className='border-0 hover:border-0 p-0 bg-transparent border-[#985151]'>
                    <div className='rounded-md py-1 border-2 border-[#985151] hover:bg-[#985151] hover:text-[#FFFFFF] text-[#513838] font-nunito font-medium text-center text-sm content-center'>
                      LinkedIn
                    </div>
                  </button>
                  <button className='border-0 hover:border-0 p-0 bg-transparent border-[#985151]'>
                    <div className='rounded-md py-1 border-2 border-[#985151] hover:bg-[#985151] hover:text-[#FFFFFF] text-[#513838] font-nunito font-medium text-center text-sm content-center'>
                      Email
                    </div>
                  </button>
                </div>
              </div>
              <div style={{ width: '20%' }} />
              <img src={profilePicture} width={"35%"} className='right-0 top-0' />
            </div>
            <div className='h-5 sm:h-5 md:h-10 lg:h-10 xl:lg-15 2xl:lg-15' />
            <div className='flex content-between'>
              <div className='pl-10 pt-0 grid grid-cols-1 content-between' style={{ width: '75%' }}>
                <div className='text-left font-abhaya font-bold text-4xl text-[#513838]'>
                  Our Services
                </div>
                <div className='h-5 sm:h-5 md:h-10 lg:h-10 xl:lg-15 2xl:lg-15' />
                <ul className='text-left sm:text-xl md:text-2xl lg:text-2xl text-[#985151] font-nunito font-bold'>
                  Mobile Development
                </ul>
                <div className='h-5 sm:h-5 md:h-10 lg:h-10 xl:lg-15 2xl:lg-15' />
                <div className='text-start sm:text-xl md:text-2xl lg:text-2xl text-[#AF9F9F] font-nunito font-medium' style={{ width: '80%' }}>
                  We excel in mobile development, either cross platform or native apps. We have experience targeting various businesses. We excel in mobile development, either cross platform or native apps. We have experience targeting various businesses.
                </div>
                <div className='h-5 sm:h-5 md:h-10 lg:h-10 xl:lg-15 2xl:lg-15' />
                <img src={backButton} width={70} height={70} />
              </div>
              <div style={{ width: '20%' }} />
              <div className='grid grid-cols-2' style={{ width: '50%', alignItems: 'center' }}>
                <img src={homePicture1} height={175} width={175} />
                <img src={homePicture2} height={220} width={220} />
              </div>
            </div>
            <div className='h-20' />
          </div>
        )
      }

      {
        !(isDesktopOrLaptop || isBigScreen) && (
          <Fragment>
            <animated.div id={"sidebar-content"} ref={containerRef} className='pt-safe overflow-x-hidden'>
              <animated.div style={{
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                width: '105%',
                position: 'absolute',
                background: '#985151',
                height: AVATAR_SIZE,
                opacity: scrollValue.scrollY.to(
                  scrollP => {
                    return interpolate(scrollP, [0, AVATAR_SIZE], [0, 1])
                  }
                ),
              }} />
              <div>
                <animated.svg width="500" height="400" viewBox="140 550 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"
                  style={{
                    opacity: scrollValue.scrollY.to(
                      scrollP => {
                        return interpolate(AVATAR_SIZE - scrollP, [0, AVATAR_SIZE / 2, AVATAR_SIZE], [0, 0.5, 1])
                      }
                    ),
                  }}
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M426.755 0.660905C526.01 5.37687 630.416 42.2627 691.019 119.058C747.053 190.064 709.403 290.888 725.408 379.114C738.276 450.044 786.302 512.961 775.404 584.204C763.332 663.132 724.842 738.452 662.532 790.186C597.271 844.368 510.835 889.895 426.755 873.671C345.261 857.947 319.875 754.823 250.249 710.635C174.069 662.287 41.2528 688.785 6.43092 606.913C-27.6816 526.71 83.9568 456.257 106.308 372.209C131.067 279.108 79.6084 166.633 143.094 93.0241C208.865 16.7636 324.689 -4.1886 426.755 0.660905Z" fill="#985151" />
                </animated.svg>
                <svg
                  width="30"
                  height="24"
                  fill="none"
                  viewBox="0 0 39 28"
                  onClick={() => {
                    setBlur(10);
                    setDrawerOpen(true)
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ position: 'absolute', top: 30, left: 30, zIndex: 1, }}
                >
                  <path d="M2 2H37M2 13.6H37M2 26H37" stroke="white" stroke-width="4" stroke-linecap="round" />
                </svg>
                <animated.div
                  style={{
                    zIndex: 1,
                    height: sizeBasedOnScrollY,
                    width: sizeBasedOnScrollY,
                  }}
                  className='absolute rounded-full top-[10px] right-[20px] bg-[#D3B8B8] overflow-hidden' /* className='top-[20px] right-[20px]' */
                >
                  <animated.img
                    className={'mt-[10px] pr-[5px] object-contain'}
                    src={profilePictureTransparentBg}
                    style={{
                      height: sizeBasedOnScrollY,
                      width: sizeBasedOnScrollY,
                    }}
                  />
                </animated.div>

                <animated.div
                  className='font-abhaya absolute top-[150px] pl-[20px]'
                  style={{
                    opacity: scrollValue.scrollY.to(
                      scrollP => {
                        return interpolate(AVATAR_SIZE - scrollP, [0, AVATAR_SIZE], [0, 1])
                      }
                    ),
                  }}
                >
                  <div className='text-left font-extrabold text-3xl text-[#513838]'>
                    Hello,
                  </div>
                  <div className='text-left font-extrabold text-3xl text-[#513838]'>
                    my name is
                  </div>
                  <div className='text-left font-extrabold text-3xl text-[#513838]'>
                    Arslan Ahmad
                  </div>
                </animated.div>
                <div style={{ position: 'relative', top: -140 }}>
                  <div className='text-left text-xl text-[#AF9F9F] font-nunito font-medium text-left p-[20px]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                  </div>
                  <div className='flex text-left font-extrabold text-3xl text-[#513838] place-content-between px-[20px] pt-2'>
                    <div className='font-abhaya'>
                      Our Services
                    </div>
                    <svg width="26" height="44" viewBox="0 0 26 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 3.25L22.5597 20.9929C22.698 21.1186 22.8088 21.2734 22.8848 21.4471C22.9607 21.6208 23 21.8093 23 22C23 22.1907 22.9607 22.3792 22.8848 22.5529C22.8088 22.7266 22.698 22.8814 22.5597 23.0071L3 40.75" stroke="#985151" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className='text-[#985151] font-nunito font-bold text-left text-xl p-[20px]'>
                    Mobile Development
                  </div>
                  <div className='text-left text-xl text-[#AF9F9F] font-nunito font-medium text-left px-[20px]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                  </div>
                  <div className='flex text-left font-extrabold text-3xl text-[#513838] hover:text-[#FFFFFF] place-content-between px-[20px] pt-2'>
                    <div className='font-abhaya text-[#513838] hover:text-[#FFFFFF]'>
                      <Link color='transparent' className='text-[#513838] hover:text-[#FFFFFF]' to={"projects"}>Projects</Link>
                    </div>
                    <svg width="26" height="44" viewBox="0 0 26 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 3.25L22.5597 20.9929C22.698 21.1186 22.8088 21.2734 22.8848 21.4471C22.9607 21.6208 23 21.8093 23 22C23 22.1907 22.9607 22.3792 22.8848 22.5529C22.8088 22.7266 22.698 22.8814 22.5597 23.0071L3 40.75" stroke="#985151" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>

              </div>

            </animated.div>
          </Fragment>
        )
      }
      <MenuNavigation isOpen={drawerOpen} setOpen={(val) => setDrawerOpen(val)} />
    </animated.div>
  )
}

export default App
