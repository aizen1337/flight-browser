import React from 'react'
import {useState} from 'react'
type Props = {
    round: boolean
    setRound: React.Dispatch<React.SetStateAction<boolean>>
}

const RoundTripRadio = (props: Props) => {
    const [checked,setChecked] = useState<string>()
  return (
    <ul className="grid w-full gap-2 md:grid-cols-2 m-4">
    <li>
        <input type="radio" id="one-way-trip" name="one-way-trip" value="false" className="hidden peer" onChange={() => {
            setChecked("false")
            props.setRound(false)
        }} checked={checked === "false"}/>
        <label htmlFor="one-way-trip"  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div className="block">
                <div className="w-full text-lg font-semibold">Podróż w jedną stronę?</div>
            </div>
            <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </label>
    </li>
    <li>
        <input type="radio" id="round-trip" name="round-trip" value="true" className="hidden peer" onChange={() => {
            setChecked("true")
            props.setRound(true)
        }}  checked={checked === "true"}/>
        <label htmlFor="round-trip" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block">
                <div className="w-full text-lg font-semibold">Czy może w obie?</div>
            </div>
            <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </label>
    </li>
</ul>
  )
}

export default RoundTripRadio