import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
  
       <div className='flex justify-between items-center text-white bg-(--c2) py-6 px-10 cursor-pointer'>
        <Link to='/' className='text-xl font-medium'>Media Search</Link>
      

        <div className='flex justify-between items-center gap-5'>
          <Link className='text-base font-medium bg-(--c4) text-(--c1) rounded px-4 py-2 cursor-pointer' to='/'>Search</Link>
          <Link className='text-base font-medium bg-(--c4) text-(--c1) rounded px-4 py-2 cursor-pointer' to='/collection'>Collection</Link>
         
        </div>
         </div>
    
  )
}

export default Navbar
