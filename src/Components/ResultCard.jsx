import { useDispatch } from "react-redux"
import { addCollection, addedToast } from "../api/redux/features/collectionSlice"



const ResultCard = ({item}) => {
  const dispatch = useDispatch()
  const addToCollection = (item) => {
        dispatch(addCollection(item))
        dispatch(addedToast())
    }

  return (
    <div className='w-80 h-80 bg-white rounded-xl overflow-hidden relative'>
       <div className='h-full'>
 <a href={item.type === 'photo' ? item.url : item.src} target='_blank'>{item.type === 'photo' ? <img src={item.src} className='h-full w-full object-cover object-center'/> : ''}
        {item.type === 'video' ? <video autoPlay loop muted src={item.src} className='h-full w-full object-cover object-center'></video> : ''}
        {item.type === 'gifs' ? <img src={item.src} className='h-full w-full object-cover object-center'/> : ''}</a>

       </div>
       <div id='bottom' className='w-full absolute bottom-0 px-4 py-5 text-white flex justify-between items-center gap-3'>
        <h2 className='text-lg font-normal capitalize h-14 overflow-hidden'>{item.title}</h2>
        <button 
        onClick={() => {
            addToCollection(item)
        }}
        className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-2 font-medium cursor-pointer'>Save</button>
       </div>
     
    </div>
  )
}

export default ResultCard
