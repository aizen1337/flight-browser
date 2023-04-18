import React from 'react'

type Props = {
    onClick: any
}

export const SearchButton = (props: Props) => {
  return (
    <button type="button" onClick={props.onClick} className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm p-5 text-center m-5">Szukaj lotów</button>
  )
}