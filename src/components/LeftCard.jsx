import image from '/public/image.jpg'
import {BiSun, BiMoon, BiEnvelope, BiCurrentLocation, BiPhone, BiLogoGithub, BiLogoLinkedin, BiLogoTwitter} from 'react-icons/bi';


// eslint-disable-next-line react/prop-types
const LeftCard = ({darkMode, toggleDarkMode}) => {
  return (
    <div className='min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700'>
      <div className='flex flex-col gap-5'>
      <div className='flex flex-col items-center justify-center gap-5'>
      <img src={image} alt='Profile Picture' className='w-32 rounded-full'/>

      <div className='text-center space-y-1'>
      <h1 className='text-4xl font-light'>Alex <span className='font-semibold'>Harper👋</span></h1>
      <h3 className='text-xl font-light'>Software Dev</h3>
      </div>

      <button className='absolute right-10 top-10' onClick={toggleDarkMode}>
      {
        darkMode ? (
          <BiSun className='text-2xl'/>
        ) : (
          <BiMoon className='text-2xl'/>
        )
      }
      </button>
      </div>

      <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
        <ul className='space-y-3'>
          <li className='flex items-center gap-2'>
            <BiCurrentLocation className='text-xl'/>
            <span>Williams St. 256 Los Angeles</span>
          </li>

          <li className='flex items-center gap-2'>
              <BiEnvelope className='text-xl'/>
              <span>user@user.com</span>
          </li>

          <li className='flex items-center gap-2'>
            <BiPhone className='text-xl'/>
            <span>123-456-789</span>
          </li>
        </ul>
      </div>

      <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
        <h1 className='text-baes font-semibold md:text-2xl'>SOCIAL</h1>

        <ul className='space-y-3'>
          <li className='flex items-center gap-2'>
            <BiLogoGithub className='text-xl'/>
            <a href='https://github.com/'><span>@githubuser</span></a>
          </li>
          <li className='flex items-center gap-2'>
            <BiLogoTwitter className='text-xl'/>
            <a href='https://x.com/'><span>@twitteruser</span></a>
          </li>
          <li className='flex items-center gap-2'>
            <BiLogoLinkedin className='text-xl'/>
            <a href='https://linkedin.com/'><span>@linkedinuser</span></a>
          </li>
        </ul>
      </div>

      <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
        <h1 className='ext-baes font-semibold md:text-2xl'>EDUCATION</h1>

        <ul>
          <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
            <span className='font-semibold md:text-lg'>BS - Computer Science</span>
            <span className='font-light'>MIT</span>
            <span className='text-sm text-gray-400'>2016-2020</span>
          </li>

          <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
            <span className='font-semibold md:text-lg'>MS - Computer Science</span>
            <span className='font-light'>Stanford University</span>
            <span className='text-sm text-gray-400'>2020-2024</span>
          </li>

          <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
            <span className='font-semibold md:text-lg'>Full Stack Dev Camp</span>
            <span className='font-light'>FreeCodeCamp</span>
            <span className='text-sm text-gray-400'>2022-2024</span>
          </li>
        </ul>
      </div>

      <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
        <h1 className='text-base font-semibold md:text-2xl'>SKILLS</h1>

      <div className='flex flex-wrap gap-3'>
      <div className='flex flex-wrap gap-3'>
          <div className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>React JS</div>
          <div className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>Next JS</div>
          <div className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>TailWind CSS</div>
          <div className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>HTML</div>
        </div>
        <div className='flex flex-wrap gap-3'>
          <div className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>CSS</div>
          <div className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>JavaScript</div>
          <div className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>TypeScript</div>
          <div className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>MongoDB</div>
          <div className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>PostGRE </div>
          <div className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>SQL</div>
        </div>
        <div className='flex flex-wrap gap-3'>
          <div className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>Solidity</div>
          <div className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>MOVE</div>
        </div>
      </div>
      </div>

      <div className='flex flex-col items-start justify-start gap-5 broder-b p-5 dark:border-gray-700'>
      <h1 className='text-base font-semibold md:text-2xl'>HOBBIES</h1>

        <div className='flex flex-wrap gap-16 p-3'> 
          <ul className='flex list-disc flex-col gap-3'>
            <li>Skiing</li>
            <li>Reading Books</li>
            <li>Workout</li>
          </ul>
          <ul className='flex list-disc flex-col gap-3'>
            <li>Boxing</li>
            <li>Playing Games</li>
            <li>Writing Code</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
        <h1 className='text--base font-semibold md:text-2xl'>LANGUAGES</h1>

        <ul className='flex list-disc flex-wrap gap-12'>
          <li>English</li>
          <li>Hindi</li>
          <li>Spanish</li>
          <li>French</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default LeftCard;