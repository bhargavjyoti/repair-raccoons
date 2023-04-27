// Importing Customers
import customers from '../data/customers.json'

type Props = {}

const Customers = (props: Props) => {
  return (
    <div className='w-full py-6 bg-textPrimary'>
        <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-2xl text-center text-textSecondary mb-6 md:pb-0'>Our Happy Customers</h1>
            <div className='flex flex-col gap-4 md:flex-row'>
                {
                    customers.map(customer => {
                        return <div key={customer.id} className='flex flex-col justify-between bg-gradient-to-r from-primary to-secondary p-2 text-textPrimary text-center rounded-lg h-40 md:h-48 md:w-1/3'>
                            <p className='font-normal text-md lg:text-xl'>{customer.content}</p>
                            <div>
                                <h2 className='font-bold text-xl lg:text-2xl'>{customer.name}</h2>
                                <p className='font-normal text-sm lg:text-md'>{customer.city}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Customers