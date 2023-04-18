export default interface FlightOptions {
    originLocationCode: string,
    destinationLocationCode: string,
    departureDate: string,
    returnDate?: string,
    adults: number, 
    children?: number,
    infants?: number
    max?: number,
    travelClass?: FlightClass
    nonStop?: boolean,
    includedAirlineCodes?: string | string[],
}
export type FlightClass = "ECONOMY" | "PREMIUM_ECONOMY" | "BUSINESS" | "FIRST"