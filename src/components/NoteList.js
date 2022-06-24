import React from 'react'
import { useSelector } from 'react-redux'

function NoteList() {

    const notes = useSelector(state=>state.notes.search)

    return (
        <div className='notes'>
            {notes.map(note=>(
                <div className={`note ${note.color}`}>
                    {note.title}
                </div>
            ))}
        </div>
    )
}

export default NoteList