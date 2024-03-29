import FlightOptions from '@/types/FlightOptions'
import NumberInput from '@/components/NumberInput'
import React from 'react'
import FlightClasses from './FlightClasses'
import StopsRadio from './StopsRadio'
type Props = {
    isOpen: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setQueryOptions:  React.Dispatch<React.SetStateAction<FlightOptions>>
}
const AdvancedOptionsDrawer = ({isOpen,setOpen,setQueryOptions}: Props) => {
  return (
    <>
    <main
      className={
        "mt-14 fixed overflow-hidden z-10 bg-zinc-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-zinc-900 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col items-center space-y-6 overflow-y-auto h-full text-center" id='drawer'>
          <header className="p-4 font-bold text-lg text-white w-full flex align-middle items-center justify-around text">
            <p className='p-4 font-bold text-lg text-white'>Wybierz klasę i liczbę pasażerów</p>
            <p onClick={() => setOpen(false)}><svg aria-hidden="true" className="w-5 h-5 cursor-pointer"fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></p>
          </header>
          <div className='flex flex-col items-center justify-evenly w-4/5'>
            <div className="passengers w-full">
                <NumberInput type="Dorośli" apiType="adults" onChange={setQueryOptions}/>
                <NumberInput type="Dzieci" apiType="children" onChange={setQueryOptions}/>
                <NumberInput type="Niemowlęta" apiType="infants" onChange={setQueryOptions}/>
            </div>
            <div className="flight-class w-full">
              <p className='p-4 font-bold text-lg text-white'>Wybierz klasę podróży</p>
              <FlightClasses setQueryOptions={setQueryOptions}/>
            </div>
            <div className="stops w-full">
              <p className='p-4 font-bold text-lg text-white'>Z przesiadkami?</p>
              <StopsRadio setQueryOptions={setQueryOptions}/>
            </div>
            <button type="button" onClick={() => setOpen(false)}className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10">Zatwierdź</button>
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full"
        onClick={() => {
          setOpen(false);
        }}
      ></section>
    </main>
    </>
  )
}

export default AdvancedOptionsDrawer