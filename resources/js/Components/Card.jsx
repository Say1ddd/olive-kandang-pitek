const Card = ({title, value, icon}) => {
  return (
    <div className="relative rounded-xl shadow-sm bg-slate-200 p-5 border-slate-300 hover:border-blue-500 duration-300 border-solid border-2 flex items-center">
        <div className="flex-grow">
            <p className='font-bold text-3xl'>{title}</p>
            {value}
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            {icon}
        </div>
    </div>
  )
}

export default Card