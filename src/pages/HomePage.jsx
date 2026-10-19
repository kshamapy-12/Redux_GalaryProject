import Search from '../Components/Search'
import Tabs from '../Components/Tabs'
import ResultGrid from '../Components/ResultGrid'
import { useSelector } from 'react-redux'


const HomePage = () => {

   const { query } = useSelector((store) => store.search)

  return (
    <> 
        
        <Search/>
   {query.trim() !== '' && (
  <div>
    <Tabs />
    <ResultGrid />
  </div>
)}



       
        
    </>
  )
}

export default HomePage
  