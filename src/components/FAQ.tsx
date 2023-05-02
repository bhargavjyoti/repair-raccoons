import { useState } from 'react'

// Importing FAQ Data
import faqs from '../data/faqs.json'

type Props = {}

const FAQ = (props: Props) => {

    const [selected, setSelected] = useState<null | number>(null)

    const toggleContent = (i: number) => {
       if(selected === i) {
        setSelected(null)
       }

       setSelected(i)
    }
    
    return (
        <div className='bg-textPrimary w-full py-6' id='faq'>
            <div className='w-11/12 mx-auto'>
                <h1 className='font-bold text-2xl text-center text-textSecondary mb-6 md:pb-0'>Still Got Questions?</h1>
                <div className="flex flex-col justify-center items-center min-h-screen gap-4">
                    {
                        faqs.map((faq, i) => {
                            return <div key={faq.id} className=" bg-textSecondary text-textPrimary max-w-5xl w-full p-4 rounded-md lg:w-2/3">
                                <div onClick={() => toggleContent(i)} className='flex justify-between items-center cursor-pointer'>
                                    <h3 className='font-bold text-sm md:text-md lg:text-lg w-9/12'>{faq.title}</h3>
                                    <span className='text-lg'>{selected === i ? '-' : '+'}</span>
                                </div>
                                <p className={`font-normal text-md pt-2 w-11/12 ${selected === i ? 'block' : 'hidden'} `}>{faq.content}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQ