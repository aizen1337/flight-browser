import { NextApiRequest, NextApiResponse } from "next"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `grant_type=client_credentials&client_id=${process.env.API_KEY}&client_secret=${process.env.API_SECRET}`
  }).then(async (fetchResponse) => {
    if(fetchResponse.ok) {
        const accessToken = await fetchResponse.json()
        res.status(200).send({token: accessToken.access_token})
    }
    else {
        res.status(400).send({error: fetchResponse.statusText})
    }
  })
  .catch((error) => {
        console.log(error)
        res.status(400).send({error: error.message})
  })
}