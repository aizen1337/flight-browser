import React from 'react'
type Props = {
    type: 'from' | 'to'
    onChange: any
    error: string | null
}
const Input = (props: Props) => {
  return (
    <div className='w-full m-5'>
    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">{props.type == 'from' ? 'Skąd' : "Dokąd"}</label>
        <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" onInput={(event:any) => event.target.value = event.target.value.toUpperCase()} onChange={props.onChange} id="search" className={`block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${props.error && 'border-red-600'}`} placeholder={props.type == 'from' ? 'Skąd (Kod IATA lotniska lub miasta)' : "Dokąd (Kod IATA lotniska lub miasta)"} maxLength={3} required/>
        </div>
        {props.error && props.error !== null && <p className='text-red-700 text-lg'>{props.error}</p>}
    </div>
  )
}

export default Input