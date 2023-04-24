// Images
import About_img from '../assets/About_Img.png'

type Props = {}

const About = (props: Props) => {
  return (
    <section className='bg-textPrimary w-full py-6'>
      <div className='w-11/12 mx-auto'>
      <h1 className='font-bold text-2xl text-center text-textSecondary pb-6 md:pb-0'>About Us</h1>
        <div className="flex flex-col-reverse items-center md:flex-row md:items-center md:min-h-screen md:justify-between">
          <div className='flex flex-col w-full gap-2'>
              <h3 className='font-normal text-textSecondary text-sm md:text-base'>We Are</h3>
              <h1 className='font-bold text-textSecondary text-3xl md:text-4xl lg:text-5xl'>Repair <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Raccoons</span></h1>
              <p className='font-normal text-[#707374] text-sm md:w-2/3 lg:w-1/2 lg:text-lg text-justify'>Welcome to our mobile repair website! We are a team of experienced 
              technicians dedicated to providing high-quality mobile repair services. We understand the inconvenience and frustration that comes with a damaged or malfunctioning mobile device, and we strive to make the repair process as smooth and hassle-free as possible.</p>
              <div className='flex items-center gap-5 mt-6'>
                <button className="text-center py-2 px-12 bg-textSecondary text-textPrimary rounded-md hover:scale-110 duration-300 lg:px-16 lg:text-2xl">Book Now</button>
                <a href="#" className='font-nomal text-textSecondary text-xs lg:text-base'>Learn More</a>
              </div>
          </div>
            <img src={About_img} alt="about_image" className='w-64 h-80 md:w-72 md:h-96 lg:w-auto lg:h-auto' />
        </div>
      </div>
    </section>
  )
}

export default About