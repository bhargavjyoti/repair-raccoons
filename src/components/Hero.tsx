// Images
import Repair from '../assets/Hero_Image(BG_removed).png'
import Calander from '../assets/Calender(BG-removed).png'

type Props = {};

const Hero = (props: Props) => {
    return (
        <main className="bg-gradient-to-r from-primary to-secondary w-full" id='home'>
            <div className="mx-auto w-11/12">
                <div className="flex flex-col items-center min-h-screen">
                    <div className="mt-24 mb-12">
                        <h1 className="font-bold text-4xl text-textPrimary text-center md:text-6xl max-w-6xl lg:text-8xl">
                            Repairing <span className="text-textSecondary">Phones</span>
                            ,
                            <br />
                            Restoring Connections
                        </h1>
                        <p className="text-center text-textPrimary font-normal text-md mt-8 mb-4 md:text-lg max-w-6xl lg:text-xl">
                            Whether you have an iPhone, Samsung, or any other type of
                            phone, we are here to help. Come visit us today and
                            experience the best phone repair services in the city.
                        </p>
                        <div className="text-center">
                            <button className="text-center py-2 px-12 bg-textSecondary text-textPrimary rounded-md hover:scale-110 duration-300 lg:px-16 lg:text-2xl">Book Now</button>
                        </div>
                        <div className="flex justify-between items-center mt-12 md:items-end max-w-6xl">
                            <div className='flex items-end gap-4'>
                                <div className="flex flex-col items-center justify-around p-2 w-32 h-52 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-white rounded-xl md:justify-center">
                                    <img src={Repair} alt="repair-icon" className='w-24 h-24' />
                                    <p className='font-bold text-lg text-center leading-5 text-textPrimary md:hidden'>1000+ Successful Repairs</p>
                                </div>
                                <div className="hidden items-center justify-center p-2 w-32 h-28 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-white rounded-xl md:flex">
                                    <p className='font-bold text-lg text-center leading-5 text-textPrimary'>1000+ Successful Repairs</p>
                                </div>
                            </div>
                            {/* Second */}
                            <div className='flex items-end gap-4'>
                                <div className="hidden items-center justify-center p-2 w-32 h-28 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-white rounded-xl md:flex">
                                    <p className='font-bold text-lg text-center leading-5 text-textPrimary'>Since <br />2004</p>
                                </div>
                                <div className="flex flex-col items-center justify-around p-2 w-32 h-52 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-white rounded-xl md:justify-center">
                                    <img src={Calander} alt="repair-icon" className='w-24 h-24' />
                                    <p className='font-bold text-lg text-center leading-5 text-textPrimary md:hidden'>Since <br />2004</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </main>
    );
};

export default Hero;
