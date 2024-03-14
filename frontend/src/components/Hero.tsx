
import heroImg from '../assets/hero.png'

const Hero = () => {
  return (
    <div>
       <img src={heroImg} alt='hero' className='w-full max-h-[600px] object-cover' />
    </div>
  )
}

export default Hero