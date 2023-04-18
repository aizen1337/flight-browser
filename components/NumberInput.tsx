import React from 'react'
type Props = {
  type: 'Dorośli' | 'Dzieci' | 'Niemowlęta'
  onChange: any
}
const NumberInput = (props: Props) => {
  return (
    <input type="number" onChange={props.onChange} className="bg-gray-50 m-1 border border-gray-300 text-gray-900 w-1/8 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.type} min={props.type == "Dorośli" ? 1 : 0} defaultValue={props.type == "Dorośli" ? 1 : undefined} required/>
  )
}

export default NumberInput