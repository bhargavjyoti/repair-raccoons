// Importing Data
import features from '../data/features.json'

// Image
import FeatureImg from '../assets/features-img.png'
type Props = {}

const Features = (props: Props) => {
  return (
    <div className='bg-textPrimary w-full py-6'>
        <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-2xl text-center text-textSecondary mb-6 md:pb-0'>Some Of Our Features</h1>
            <div className='flex flex-col gap-4 md:flex-row md:justify-between'>
                {
                    features.map(feature => {
                        return (
                            <div key={feature.id} className='flex flex-col justify-center text-center p-2 bg-textSecondary text-textPrimary gap-2 rounded-xl'>
                                <h3 className='text-bold text-2xl'>{feature.title}</h3>
                                <hr />
                                <p className='text-normal text-md'>{feature.content}</p>
                            </div>
                        )
                    })
                }
            </div>
            {/* Image */}
            <div className='flex justify-center'>
                <img src={FeatureImg} alt="feature-image" className='hidden w-auto h-auto md:block mt-6' />
            </div>
        </div>
    </div>
  )
}

export default Features