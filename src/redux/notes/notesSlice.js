import { createSlice } from '@reduxjs/toolkit'

const initialItems=[
    {
        title: 'Note 1',
        color: 'yellow'
    },
    {
        title: 'Note 2',
        color: 'blue'
    },
    {
        title: 'Note 3',
        color: 'green'
    }
]

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: initialItems,
        search: initialItems
    },
    reducers: {
        addNote: (state, action) => {
            state.items.unshift(action.payload)
            state.search.unshift(action.payload)
        },
        search: (state, action) => {
            const newItems=[]
            state.items.map(item => {
                if (item.title.includes(action.payload)) {
                    newItems.push(item)
                }
            })
            state.search=newItems
        }
    }
})


export const { addNote, search } = notesSlice.actions
export default notesSlice.reducer