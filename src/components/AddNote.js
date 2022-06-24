import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/notes/notesSlice'

function AddNote() {
    const dispatch = useDispatch()

    const [note, setNote] = useState('')
    const [color, setColor] = useState('pink')

    const submitHandler = () => {
        const newNote={
            title:note,
            color:color
        }
        dispatch(addNote(newNote))
        setNote('')
    }

    return (
        <div className='add-note'>
            <div className="form-box">
                <form>
                    <textarea placeholder='Enter your note here...' rows={6} onChange={(e) => setNote(e.target.value)} value={note}></textarea>
                </form>
                <div className="footer">
                    <div className="colors">
                        <div onClick={() => setColor('pink')} className={`pink ${color === 'pink' ? 'pick' : ''}`}></div>
                        <div onClick={() => setColor('purple')} className={`purple ${color === 'purple' ? 'pick' : ''}`}></div>
                        <div onClick={() => setColor('yellow')} className={`yellow ${color === 'yellow' ? 'pick' : ''}`}></div>
                        <div onClick={() => setColor('blue')} className={`blue ${color === 'blue' ? 'pick' : ''}`}></div>
                        <div onClick={() => setColor('green')} className={`green ${color === 'green' ? 'pick' : ''}`}></div>
                    </div>
                    <div className="btn">
                        <button onClick={submitHandler}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNote