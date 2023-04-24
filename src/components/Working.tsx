// components
import Card from './subComponents/Card'

// Images
import Pickup from '../assets/Pickup.png'
import Repair from '../assets/Repair.png'
import Delivery from '../assets/Delivery.png'

type Props = {}

const Working = (props: Props) => {
  return (
    <section className='bg-gradient-to-r from-primary to-secondary w-full rounded-t-xl py-6'>
        <div className="mx-auto w-11/12">
            <h1 className='font-bold text-2xl text-center text-textPrimary pb-6 md:pb-0'>About Us</h1>
            <div className="flex items-center justify-center gap-2 mb-6">
                <hr className='w-6'/>
                <h3 className='font-normal text-center text-textPrimary text-lg'>3 Simple Steps To Go </h3>
                <hr className='w-6'/>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:justify-between md:items-center">
                <Card img={Pickup} text="Pickup" step="Step 1"/>
                {/* Arrow Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-textPrimary hidden md:block md:w-12 md:h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
                <Card img={Repair} text="Repair" step="Step 2"/>
                {/* Arrow Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-textPrimary hidden md:block md:w-12 md:h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
                <Card img={Delivery} text="Delivery" step="Step 3" />
            </div>
        </div>
    </section>
  )
}

export default Working