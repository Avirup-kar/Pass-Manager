const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-around w-full gap-y-1.5 items-center p-2 bg-gray-900 text-white fixd bottom-10">
        <div className="text-xl font-bold">
        <span className='text-green-400' >&lt;</span>
        <span>Pass-</span>
        <span className='text-green-400'>Manage/&gt;</span>
        </div> 
        <div className="flex justify-center items-center gap-1.5">
        <span className='text-[18px] font-semibold'>Trusted by</span>
        <div>
        <span className='text-green-400 text-xl font-bold' >&lt;</span>
        <span className="text-xl font-bold">Avi-</span>
        <span className='text-green-400 text-xl font-bold'>Kar/&gt;</span>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Footer
