import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../api/redux/features/searchSlice'

const Search = () => {
const [text, setText] = useState('')
const dispatch = useDispatch()


const submitHandler = (e) => {
e.preventDefault()
dispatch(setQuery(text))
setText('')
}

  return (
    <div>
      <form 
      onSubmit={(e) => {
        submitHandler(e)
      }}
      className='flex bg-(--c1) p-10 gap-5'>
        <input 
        value={text}
        onChange={(e) => {
            setText(e.target.value)
        }}
        required
        className='w-full border-2 px-4 py-2 text-xl rounded outline-none'
        type="text" placeholder='Search Anything...' />
        <button 
        className='border-2 px-4 py-2 text-xl rounded cursor-pointer outline-none active:scale-95'>Search</button>
      </form>
    </div>
  )
}

export default Search
