import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
const NotesListPage = () => {

    let [Notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('/api/notes/')
        let data = await response.json()
        setNotes(data)
    }

    return (
            <div>
                <div className='notes-list'>
                    {Notes.map((note, index) => (
                        <ListItem key={index} note={note} />
                    ))}
                </div>
            </div>
    )
}

export default NotesListPage
