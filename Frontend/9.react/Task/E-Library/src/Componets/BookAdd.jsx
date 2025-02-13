import React, { useContext } from 'react'
import { useState } from 'react'
import BookContext from '../Context/BookContext'
import { v4 as uuidv4 } from 'uuid';

const BookAdd = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [status, setStatus] = useState('')

    const id = uuidv4();


    const { setBook } = useContext(BookContext)
    const { book } = useContext(BookContext)

    const handleButton = (e) => {
        if ((title && author && status) == '') {
            alert("please enter a value")
        } else {     
            e.preventDefault()
            setBook([...book, {id, title, author, status }])
            setTitle('');
            setAuthor('');
            setStatus('');
            
            // alert("Your book is added in Book Card!!!")
        }
    }


    return (
        <div className='bg-black'>
            <div className='container mx-auto flex flex-col justify-center items-start pl-40 gap-6 h-screen ' >
                <div className='flex flex-col justify-center items-start gap-6 border-2 border-yellow-200 p-10 rounded-3xl '>
                    <label htmlFor="title" className='flex gap-5 items-center'>
                        <p className='text-white mr-5'> Title </p>
                        <input type="text" className='p-2' id='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Book Title' />
                    </label>

                    <label htmlFor="author" className='flex gap-5 items-center'>
                        <p className='text-white '> Author </p>
                        <input type="text" className='p-2' id='author' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Book Author' />
                    </label>

                    <label htmlFor="status" className='flex gap-5 items-center'>
                        <p className='text-white mr-1'> Status </p>
                        <input type="text" className='p-2' id='status' value={status} onChange={(e) => setStatus(e.target.value)} placeholder='Status' />
                    </label>
                    <button className='bg-blue-600 px-5 py-1 rounded border hover:border-blue-800 text-white hover:text-black hover:bg-white ' onClick={handleButton}>Add</button>
                </div>

              
            </div>
        </div>
    )
}

export default BookAdd