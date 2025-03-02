/* eslint-disable react/jsx-key */
import { useRef, useState, useEffect} from "react"
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {

 const Showref = useRef()
 const ref = useRef()
 const [form, setform] = useState({site:"", UserName:"", Password:""})
 const [passwardArray, setPasswardArray] = useState([])

 useEffect(() => {
 let passward = localStorage.getItem("passward")
 if(passward){
   setPasswardArray(JSON.parse(passward))
 }
   
 }, [])
 

  const ShowPassword = () => {
    // alert("it Working")
    if(Showref.current.src.includes("icons/hide.png")){
      Showref.current.src = "icons/view.png"
      ref.current.type = "text"
    }
    else{
      Showref.current.src = "icons/hide.png"
      ref.current.type = "Password"
    }
  }
  
  const copyText = (text) => {
    toast.success('Copy Successfully!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    navigator.clipboard.writeText(text)
  }
  

const SavePassword = () => {
  setPasswardArray([...passwardArray, {...form, id: uuidv4()}])
  localStorage.setItem("passward", JSON.stringify([...passwardArray, {...form, id: uuidv4()}]))
  setform({site: "", UserName: "", Password: ""});
  toast.success('Save Successfully!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}

const handeldelet = (id) => {
  let conform = confirm("Do you really want to Delete it")
  if(conform){
    toast.success('Delete Successfully!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   setPasswardArray(passwardArray.filter(item=>item.id!==id))
  localStorage.setItem("passward", JSON.stringify(passwardArray.filter(item=>item.id!==id)))
  }
}

const handeledit = (id) => {
  setform(passwardArray.filter(i=>i.id === id)[0])
  setPasswardArray(passwardArray.filter(item=>item.id!==id))
}

const HandelChange = (e) => {
  setform({...form, [e.target.name]: e.target.value})
}


  return (
    <>
    <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <div className='max-w-[900px] h-[670px] py-2 mx-auto px-4 rounded-3xl'>
    <div className='w-full m-auto text-center pt-6'>
    <div className="text-xl font-bold ">
        <span className='text-green-400' >&lt;</span>
        <span>Pass-</span>
        <span className='text-green-400'>Manage/&gt;</span>
    </div> 
        <p className='text-green-700'>Your Own Password Manager</p>
    </div>
     

     <div className='w-full flex flex-col justify-center mt-7 gap-3'>
        <input className="w-[90vw] lg:w-full h-[30px] rounded-3xl border border-green-700 mx-auto px-4" onChange={HandelChange} name="site" value={form.site} placeholder='Website Url...' type="text" />
        <div className='mx-auto flex flex-col sm:flex-row  gap-3 '>
        <input className="w-[90vw] sm:w-[58vw] lg:w-[546px] h-[30px] rounded-3xl border border-green-700 mx-auto px-4" onChange={HandelChange} name="UserName" value={form.UserName} placeholder='UserName' type="text" />
        <div className='relative'>
        <input className="w-[90vw] sm:w-[30vw] lg:w-[310px] h-[30px] rounded-3xl border border-green-700 mx-auto px-4" onChange={HandelChange} name="Password" value={form.Password} ref={ref}  placeholder='Password' type="Password" />
        <img className='absolute w-5 right-3 top-1.5 cursor-pointer' ref={Showref} onClick={ShowPassword} src="icons/hide.png" alt="" />
        </div>
        </div>
        <button 
  className="group flex items-center justify-center w-fit mx-auto bg-green-500 px-2 py-0.5 rounded-3xl cursor-pointer disabled:bg-green-400 font-semibold 
             transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-400"
  disabled={form.site.length < 3 || form.Password.length < 3} 
  onClick={SavePassword}
>
  <lord-icon
    src="https://cdn.lordicon.com/tsrgicte.json"
    trigger="loop-on-hover"
    colors="primary:#121331,secondary:#000000"
    class="group-hover:scale-110 transition-transform duration-300"
  >
  </lord-icon>
  Save
</button>

     </div>
     <h1 className='font-bold ml-2 mt-4'>All Docoments</h1>
     
     {passwardArray.length === 0 && <div className="mt-4 ml-2">No Docoment To Show</div>}
     {passwardArray.length != 0 && 
    <div className="mt-2 h-[400px] overflow-auto custom-scrollbar p-2">
    <table className="table-auto w-full rounded-xl overflow-hidden">
  <thead className="bg-green-800 text-white">
    <tr>
      <th className="font-semibold py-1"><div className="overflow-auto">Site</div></th>
      <th className="font-semibold py-1"><div className="overflow-auto">UserName</div></th>
      <th className="font-semibold py-1"><div className="overflow-auto">Password</div></th>
      <th className="font-semibold py-1"><div className="overflow-auto">Action</div></th>
    </tr>
  </thead>
  <tbody className="bg-green-200">
  {passwardArray.map((item, index) => {
    return <tr key={index}>
      <td className="text-center  w-50 border py-1.5 px-2 border-white"><div className="flex items-center justify-center gap-1"><a className="overflow-x-hidden" href={item.site} target="_blank">{item.site}</a><img  className="w-4 cursor-pointer hover:w-4.5" onClick={()=>copyText(item.site)} src="icons/copy.png" alt="" /></div></td>
      <td className="text-center  w-50 border py-1.5 px-2 border-white"><div className="flex items-center justify-center gap-1"><span className="overflow-x-hidden">{item.UserName}</span><img  className="w-4 cursor-pointer hover:w-4.5" onClick={()=>copyText(item.UserName)} src="icons/copy.png" alt="" /></div></td>
      <td className="text-center  w-50 border py-1.5 px-2 border-white"><div className="flex items-center justify-center gap-1"><span className="overflow-x-hidden pt-2">{"*".repeat(item.Password.length)}</span><img  className="w-4 cursor-pointer hover:w-4.5" onClick={()=>copyText(item.Password)} src="icons/copy.png" alt="" /></div></td>
      <td className="text-center  w-15 border py-1.5 px-2 border-white"><div className=" flex flex-col sm:flex-row items-center justify-center gap-3"><img className="w-5 cursor-pointer hover:w-5.5" onClick={()=>handeledit(item.id)} src="icons/edit.png" alt="" />
      <img className="w-5 cursor-pointer hover:w-5.5" src="icons/delete.png" onClick={()=>handeldelet(item.id)} alt="" />
      </div></td>
    </tr>
  })}
  </tbody>
   </table>
   </div>
     }


    </div>
    </>
  )
}

export default Manager
