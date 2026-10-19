import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGifs } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../api/redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'


const ResultGrid = () => {

    const dispatch = useDispatch()
   const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
 
  useEffect(function(){
     const getData = async () => {
      if (!query.trim()) return <h1>Type the value to be searched!!</h1>
    

    try{
        dispatch(setLoading())
        let data = []
            if(activeTab === 'Photos'){
                let response = await fetchPhotos(query)
                data = response.results.map((item) => ({
                    id: item.id,
                    type: 'photo',
                    title: item.alt_description || 'photo',
                    thumbnail: item.urls.thumb,
                    src: item.urls.full,
                    url: item.links.download,
                }))
            } 
            if(activeTab === 'Videos'){
                let response = await fetchVideos(query)
                data = response.hits.map((item) => ({
                    id: item.id,
                    type: 'video',
                    title: item.name || 'video',
                    thumbnail: item.videos.large.thumbnail,
                    src: item.videos.large.url,
                   
                }))
            }
            if(activeTab === 'GIFs'){
                let response = await fetchGifs(query)
                data = response.data.map((item) => ({
                    id: item.id,
                    type: 'gifs',
                    title: item.title || 'GIF',
                    thumbnail: item.bitly_gif_url,
                    src: item.images.original.url,
                }))
            }
            dispatch(setResults(data))

    } catch(err){
        dispatch(setError(err.message))

    }

}
    getData()
  }, [query, activeTab, dispatch])

  if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading...</h1>
  
   return (
    <div className='flex flex-wrap h-[80%] gap-6 overflow-auto px-5 justify-start w-full'>
     {results.map((item, idx) => {
        return (
            <div key={idx}>
                <ResultCard item={item} />
            </div>
        )
     })}
    </div>
  )
}

export default ResultGrid
