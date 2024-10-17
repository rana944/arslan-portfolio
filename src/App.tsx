import './App.css'
import { Fragment } from 'react';
import github from './assets/github.svg'
import linkedIn from './assets/linkedin.svg'
import facebook from './assets/facebook.svg'
import { useMediaQuery } from 'react-responsive'
import profilePicture from './assets/profileImage.png'

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  console.log("Is Desktop", isDesktopOrLaptop, "Is Big Screen", isBigScreen, "Is Retina", isRetina);

  return (
    <div className='m-0 p-10 grid w-screen h-screen content-between'>
      {
        (isDesktopOrLaptop || isBigScreen) && (
          <Fragment>
            <div className='grid grid-cols-2'>
              <div className='font-nunito'>
                <ul className='text-left font-bold sm:text-xl md:text-4xl lg:text-6xl'>ARSLAN AHMAD</ul>
                <div className='h-5 sm:h-5 md:h-10 lg:h-10 xl:lg-15 2xl:lg-15' />
                <li className='text-left font-semibold sm:text-sm md:text-2xl lg:text-4xl'>Web App Development</li>
                <li className='text-left font-semibold sm:text-sm md:text-2xl lg:text-4xl'>Native App Development</li>
                <li className='text-left font-semibold sm:text-sm md:text-2xl lg:text-4xl'>React Native App Development</li>
              </div>
              <div>
                <img src={profilePicture} className='profilePicture rounded-full' />
              </div>
            </div>
            <div className='grid grid-cols-12 items-center'>
              <a href='http://github.com/rana944'>
                <img src={github} className='iconSmall' />
              </a>
              <a href='https://linkedin.com/in/arslan-ahmad-b763a9170'>
                <img src={facebook} className='icon' />
              </a>
              <a href='https://linkedin.com/in/arslan-ahmad-b763a9170'>
                <img src={linkedIn} className='icon' />
              </a>
            </div>
          </Fragment>
        )
      }

      {
        (isTabletOrMobile && isPortrait) && (
          <Fragment>
            <div className='grid grid-cols-1 place-items-center'>
              <img src={profilePicture} className='profilePicture rounded-full' />
              <div className='h-8' />
              <div className='font-nunito'>
                <ul className='text-center font-bold sm:text-xl md:text-4xl lg:text-6xl'>ARSLAN AHMAD</ul>
                <div className='h-5 sm:h-5 md:h-10 lg:h-10 xl:lg-15 2xl:lg-15' />
                <li className='text-center font-semibold sm:text-sm md:text-2xl lg:text-4xl'>Web App Development</li>
                <li className='text-center font-semibold sm:text-sm md:text-2xl lg:text-4xl'>Native App Development</li>
                <li className='text-center font-semibold sm:text-sm md:text-2xl lg:text-4xl'>React Native App Development</li>
              </div>
            </div>
            <div className='grid grid-cols-3 place-items-center'>
              <a href='http://github.com/rana944'>
                <img src={github} className='w-10 h-10' />
              </a>
              <a href='https://linkedin.com/in/arslan-ahmad-b763a9170'>
                <img src={facebook} className='w-20 h-20' />
              </a>
              <a href='https://linkedin.com/in/arslan-ahmad-b763a9170'>
                <img src={linkedIn} className='w-12 h-12' />
              </a>
            </div>
          </Fragment>
        )
      }
    </div>
  )
}

export default App
