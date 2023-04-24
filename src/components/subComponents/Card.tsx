type cardProps = {
    img: string,
    text: string,
    step: string
}

const Card = ({img, text, step}: cardProps) => {
  return (
    <div className={`flex flex-col items-center justify-around p-2 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-white rounded-xl`}>
        <img src={img} alt="card-icon" className='w-24 h-24 lg:w-48 lg:h-48 md:w-40 md:h-40' />
        <h3 className="text-center font-normal text-xl text-textPrimary mb-3">{step}</h3>
        <p className='font-bold text-2xl text-center text-textPrimary'>{text}</p>
    </div>
  )
}

export default Card