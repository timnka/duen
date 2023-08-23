"use client"
import { useState } from 'react'

export default function interestForm() {
  const [input, setInput] = useState({ name: '', year: '', major: '', email: '' })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    alert('wioaejf')
    e.preventDefault();
    // Handle form submission using formState data
    
  }

  return (
    <main className='flex flex-col justify-center items-center'>
      <div className='min-h-fit flex justify-center items-center py-64'>
        <form>
          <div className='py-5'>
            <label className='block font-bold mb-1'>Please enter your name: </label>
            <input type='text' placeholder='Full Name' className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-lavender'></input>

          </div>

          <div className='py-5'>
            <label className='block font-bold mb-1'>Please enter your email: </label>
            <input type='email' placeholder='email@ucdavis.edu' className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-lavender'></input>
          </div>

          <div className='py-5'>
            <label className='block font-bold mb-1'>What year are you in your studies?</label>
            <select>
              <option value="none" selected disabled hidden>Select an Option</option>
              <option value='Freshman'>Freshman</option>
              <option value='Sophomore'>Sophomore</option>
              <option value='Junior'>Junior</option>
              <option value='Senior'>Senior</option>
            </select>
          </div>

          <div className='pt-5 pb-12'>
            <label className='block font-bold mb-1'>What is your major?</label>
            <select>
              <option value="none" selected disabled hidden>Select an Option</option>
              <option value='Other'>Other</option>
              <option value='Aerospace Science and Engineering'>Aerospace Science and Engineering</option>
              <option value='Biochemical Engineering'>Biochemical Engineering</option>
              <option value='Biological Systems Engineering '>Biological Systems Engineering </option>
              <option value='Biomedical Engineering '>Biomedical Engineering </option>
              <option value='Chemical Engineering'>Chemical Engineering</option>
              <option value='Civil Engineering'>Civil Engineering</option>
              <option value='Computer Engineering '>Computer Engineering </option>
              <option value='Computer Science'>Computer Science</option>
              <option value='Computer Science and Engineering'>Computer Science and Engineering</option>
              <option value='Electrical Engineering'>Electrical Engineering</option>
              <option value='Environmental Engineering'>Environmental Engineering</option>
              <option value='Materials Science and Engineering'>Materials Science and Engineering</option>
              <option value='Mechanical Engineering'>Mechanical Engineering</option>
            </select>
          </div>

          <input type="submit" value="Submit" onSubmit={handleSubmit} className='bg-gray-200 rounded-full text-black transition duration-200 hover:bg-purple hover:text-white hover:cursor-pointer hover:ease-in font-bold py-3 px-8 '></input>

        </form>
      </div>
    </main>
  )
}
