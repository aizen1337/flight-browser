import React from 'react'
type Props = {
    offer:  any
}
const Offer = (offer: Props) => {
  const originDetails = offer.offer.itineraries[0].segments
  const homecomingDetails = offer.offer?.itineraries[1]?.segments
  function polishDateFormatter(date: Date) {
    return new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/Warsaw' }).format(date)
  }
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 hover:bg-zinc-900 hover:text-white">
    <div className="flex items-baseline text-gray-500 m-4">
        <span className="text-5xl font-extrabold tracking-tight">{offer.offer.price.total} <small className='text-lg'>PLN</small></span>
        <span className="text-3xl font-semibold"> </span>
    </div>
    <section className='flex sm:flex-row flex-col w-full justify-between'>
    <section className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
    <h1 className="font-bold">Trasa docelowa:</h1>
    {originDetails.map((flight: any, index: number) => (
        <div key={index}>
        <p className='font-bold'>Wylot z {flight.departure.iataCode}</p>
        {polishDateFormatter(new Date(flight.departure.at))}
        <br/>
        <p className='font-bold'>Na miejscu w {flight.arrival.iataCode}</p>
        {polishDateFormatter(new Date(flight.arrival.at))}
        </div>
    ))}
    </section>
    <hr className='m-4'/>
    {homecomingDetails &&
    <>
    <section className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
    <h1 className="font-bold">Trasa powrotna:</h1> 
    {homecomingDetails.map((flight: any, index: number) => (
        <div key={index}>
        <p className='font-bold'>Wylot z {flight.departure.iataCode}</p>
        {polishDateFormatter(new Date(flight.departure.at))}
        <br/>
        <p className='font-bold'>Na miejscu w {flight.arrival.iataCode}</p>
        {polishDateFormatter(new Date(flight.arrival.at))}
        </div>
    ))}
    </section>
    </>
    }
    </section>
    <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Sprawdź ofertę</button>
</div>
  )
}

export default Offer