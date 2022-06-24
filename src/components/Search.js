import React from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/notes/notesSlice'

function Search() {
  const dispatch = useDispatch()

  return (
    <div className='search'>
      <div className="search-box">
        <input onChange={(e)=>dispatch(search(e.target.value))} type="text" placeholder='Search...' name='search' />
      </div>
    </div>
  )
}

export default Search