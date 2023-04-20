import React, { useEffect, useState } from 'react'
import FlightOptions from '@/types/FlightOptions'
type Props = {
  apiType: 'adults' | 'children' | 'infants'
  type: 'Dorośli' | 'Dzieci' | 'Niemowlęta'
  onChange:  React.Dispatch<React.SetStateAction<FlightOptions>>
}
const NumberInput = (props: Props) => {
  const [counter,setCounter] = useState(props.type === 'Dorośli' ? 1 : 0)
  useEffect(() => {
    props.onChange(prevState => ({...prevState , [props.apiType]: counter }))
  },[counter])
  function decrement() {
    if(props.type !== "Dorośli" && counter == 1) {
      setCounter(0)
    }
    else if(counter > 1) {
      setCounter(counter - 1)
    }
  }
  function increment() {
    if(counter <= 4) {
      setCounter(counter + 1)
    }
  }
  return (
    <>
    <p>{props.type}</p>
    <div className='flex w-full justify-evenly mt-2'>
    <button type="button" onClick={() => decrement()} className="text-blue-500 border border-blue-500 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl p-3 text-center inline-flex items-center  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
      <svg fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
      </svg>
    </button>
    <input type="number" className="w-1/2 bg-gray-50 m-1 border border-gray-300 text-gray-900 w-1/8 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.type} min={props.type == "Dorośli" ? 1 : 0} defaultValue={counter} max={5} required/>
    <button type="button" onClick={() => increment()} className="text-blue-500 border border-blue-500 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl p-3 text-center inline-flex items-center  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
      <svg fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
    </div>
    </>
  )
}

export default NumberInput