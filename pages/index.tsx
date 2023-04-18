import NavbarComponent from '@/components/NavbarComponent'
import { Options } from '@/components/DatepickerOptions'
import { useState } from 'react'
import Datepicker from "tailwind-datepicker-react"
import Input from '@/components/Input'
import FlightOptions from '@/types/FlightOptions'
import Head from 'next/head'
import { SearchButton } from '@/components/SearchButton'
import AdvancedOptionsDrawer from '@/components/AdvancedOptionsDrawer'
import Spinner from '@/components/Spinner'
import LoadingSkeleton from '@/components/LoadingSkeleton'
import Link from 'next/link'
import Offer from '@/components/Offer'
import RoundTripRadio from '@/components/RoundTripRadio'
import { Alert } from 'flowbite-react'
export default function Home() {
  const [leftShow,setLeftShow] = useState(false)
  const [open,setOpen] = useState(false)
  const [rightShow,setRightShow] = useState(false)
  const [homecomingDate,setHomecomingDate] = useState(Options)
  const [roundTrip, setRoundTrip] = useState(true)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  const [destinationError,setDestinationError] = useState<string | null>(null)
  const [originError,setOriginError] = useState<string | null>(null)
  const [dateError, setDateError] = useState<string | null>(null)
  const [offers,setOffers] = useState<any>()
  const handleLeftClose = (state: boolean) => {
		setLeftShow(state)
	}
  const handleRightClose  = (state: boolean) => {
    setRightShow(state)
	}
  const [formData,setFormData] = useState<FlightOptions>(
    {
      originLocationCode: '',
      destinationLocationCode: '',
      departureDate: new Date().toISOString().slice(0,10),
      adults: 1
    }
  )
  async function search(form_data: FlightOptions) {
    setOffers(null)
    if(form_data.originLocationCode === '') {
      setOriginError("Wybierz lotnisko wylotu")
      return
    }
    else if(form_data.destinationLocationCode === '') {
      setDestinationError("Wybierz lotnisko przylotu")
      return
    }
    else if(form_data.returnDate && new Date(form_data.returnDate).getMilliseconds() < new Date(form_data.departureDate).getMilliseconds()) {
      setDateError("Data powrotu powinna być późniejsza niż data odlotu")
      return
    }
    else {
    setLoading(true)
    const url = new URL('http://localhost:3000/api/searchForFlight?')
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(form_data)
    })
    .then((res) => res.json())
    .then(async (data) => 
      {
      let currentOffers = await data.flightOffers
      setOffers(currentOffers)
      setLoading(false)
      })
    .catch((error) => {
      setError(error.message)
      setLoading(false)
    })
    }
  }
  return (
    <>
    {dateError && <Alert>{dateError}</Alert>}
    <Head>
      <title>Zadanie rekrutacyjne</title>
    </Head>
    <NavbarComponent/>
    <main className="flex h-full flex-col items-center mt-20">
        <section className="flex flex-col items-center justify-center w-8/10">
          <RoundTripRadio setRound={setRoundTrip} round={roundTrip}/>
          <div className="flex md:w-2/4 items-center justify-evenly gap-2">
            <Datepicker show={leftShow} setShow={handleLeftClose} onChange={(date) => {
              setFormData(prevState => ({...prevState, departureDate: date.toISOString().slice(0,10)}))
              setHomecomingDate(prevState => ({...prevState, minDate: date, defaultDate: date}))
            }} options={Options}/>
            {roundTrip && <Datepicker show={rightShow} setShow={handleRightClose} onChange={(date) => {
              setFormData(prevState => ({...prevState, returnDate: date.toISOString().slice(0,10)}))
              console.log(homecomingDate)
            }} options={homecomingDate}/>}
          </div>
          <div className="flex w-full flex-col items-center justify-center md:flex-row">
          <Input error={originError} type='from' onChange={(e: any ) => setFormData(prevState => ({...prevState, originLocationCode: e.target.value}))}/>
          <Input error={destinationError} type='to' onChange={(e: any) => setFormData(prevState => ({...prevState, destinationLocationCode: e.target.value}))}/>
          <button type="button" onClick={() => setOpen(true)} className="text-white bg-gradient-to-br p-4 pl-10 h-14 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg w-full text-sm px-5 py-2.5 text-center">Klasa podróży i pasażerowie (opcjonalnie)</button>
          <AdvancedOptionsDrawer isOpen={open} setOpen={setOpen} setQueryOptions={setFormData}/>
          </div>
          <SearchButton onClick={async () => await search(formData)}/>
        </section>
        {loading && 
        <>
        <p className='p-4 font-bold text-lg'>
        Wyszukujemy dla ciebie najlepsze oferty z {formData.originLocationCode} do {formData.destinationLocationCode}
        </p>
        <Spinner/> 
        </>}
        {error && <p className='p-4 font-bold text-lg text-red'>Wystąpił błąd - {error}</p>}
        {offers && 
        <h1 className='p-4 font-bold text-lg'>Znaleźliśmy dla ciebie ponad {offers?.meta?.count} ofert</h1>
        }
        <section className='grid grid-cols-1 gap-3 md:w-1/2 w-full'>
        {loading && 
        <LoadingSkeleton/>
        }
        {offers && offers?.data?.map((offer: any) => (
          <Link key={offer.id} className='flex items-center justify-center' href={`${offer.id}`}>
            <Offer offer={offer}/>
          </Link>
        ))}
        </section>
    </main>
    </>
  )
}
