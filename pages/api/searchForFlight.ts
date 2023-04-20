import FlightOptions from "@/types/FlightOptions"
import { NextApiRequest, NextApiResponse } from "next"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Content-Type", "application/json")
    res.setHeader("Access-Control-Allow-Origin", "*")
    const query: FlightOptions = JSON.parse(req.body)
    const apiEndpoint = process.env.NODE_ENV == "development" ? "http://localhost:3000/api/login" : "https://flight-browser.vercel.app/api/login"
    const auth = await fetch(apiEndpoint, {
        method: "POST"
    })
    .then(async (response) => {
        const access = await response.json()
        return access.token
    })
    .catch((error) => {
        console.log("Login error:")
        console.log(error)
    })
    const url = new URL("https://test.api.amadeus.com/v2/shopping/flight-offers?")
    for(let [param,value] of Object.entries(query)) {
        url.searchParams.set(param.toString(), value)
    }
    url.searchParams.set("max", '10')
    url.searchParams.set('currencyCode', "PLN")
    async function searchForFlights(url: URL, token: string) {
        await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
          }).then(async (flightOffers) => {
            if(flightOffers.ok) {
                console.log("Response ok")
                const response = await flightOffers.json()
                res.send({flightOffers: response})
            }
            else {
                console.log("Response not cool")
                res.send({flightOffers: await flightOffers.json()})
            }
          })
          .catch((error) => {
                console.log("API error:")
                console.log(error)
                res.send({error: error.message})
          })   
    }
    searchForFlights(url , await auth)
}
