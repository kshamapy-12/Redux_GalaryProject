import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../Components/CollectionCard"
import { clearCollection } from "../api/redux/features/collectionSlice"


const CollectionPage = () => {
 
  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch()
  const clearAll = () => {
    dispatch(clearCollection())
  }
  return (
    <div className="overflow-auto px-5 py-6">
       {
          collection.length > 0 ? 
          <div className="flex justify-between mb-6 items-center">
              <h2 className="text-2xl font-medium">Your Collection</h2>
              <button 
              onClick={() => {
                clearAll()
              }} 
              className="active:scale-95 bg-red-600 cursor-pointer px-8 py-3 text-lg font-medium rounded">Clear Collection</button>
          </div> : 
      <div className="flex justify-center mb-6 items-center">
        <h2 className="text-2xl font-medium">Collection Is Empty</h2>
      </div>
        }
    
      <div className='flex flex-wrap h-[80%] gap-6 justify-start w-full'>
      
      {collection.map((item, idx) => {
        return <div key={idx}>
          <CollectionCard item={item} />
        </div>
      })}
    </div>
    </div>
   
  )
}

export default CollectionPage
