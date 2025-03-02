
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-around items-center p-2 bg-gray-900 text-white">
        <div className="text-xl font-bold">
        <span className='text-green-400' >&lt;</span>
        <span>Pass-</span>
        <span className='text-green-400'>Manage/&gt;</span>
        </div> 
        <div className="bg-white p-1 rounded-3xl">
            <a href="https://github.com/Avirup-kar/Pass-Manager.git" target="_blank" className='flex items-center gap-1'>
            <img className='w-[35px]' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
            <p className='text-black font-semibold'>GitHub</p>
            </a>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
