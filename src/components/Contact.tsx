import ContactImg from '../assets/contact-img.png'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='bg-gradient-to-r from-primary to-secondary w-full py-12' id='contact'>
      <div className='w-11/12 mx-auto'>
        <h1 className='font-bold text-2xl text-center text-textPrimary mb-6 md:pb-0'>Still Got Questions?</h1>
        <div className='flex flex-col-reverse md:flex-row md:w-full md:justify-between md:items-center'>
          <form className='w-full'>
            <div className='flex flex-col gap-4 md:w-1/2'>
              <div className='flex flex-col gap-1 mt-6'>
                <label htmlFor="name" className='text-textPrimary font-normal text-lg'>Name</label>
                <input type="text" name="name" id="name" className='bg-textPrimary p-2 rounded-lg outline-none border-0 text-textSecondary w-full'/>
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='text-textPrimary font-normal text-lg'>Email</label>
                <input type="email" name="email" id="email" className='bg-textPrimary p-2 rounded-lg outline-none border-0 text-textSecondary'/>
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="message" className='text-textPrimary font-normal text-lg'>Message</label>
                <textarea name="message" id="message" className='bg-textPrimary p-2 rounded-lg outline-none border-0'></textarea>
              </div>
              <button className="text-center py-2 px-12 w-1/2 bg-textSecondary text-textPrimary rounded-md hover:scale-110 duration-300 lg:px-16 lg:text-2xl">Book Now</button>
            </div>
          </form>
          <div>
            <img src={ContactImg} alt="contact-image" className='w-80 h-80 mx-auto lg:w-auto lg:h-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact