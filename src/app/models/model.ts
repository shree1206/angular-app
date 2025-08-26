export class searchBus {
    fromLocationID: string;
    toLocationID: string;
    date: string;

    constructor() {
        this.fromLocationID = '',
            this.toLocationID = '',
            this.date = ''
    }
}

export interface ISearchBus {
    availableSeats: number
    totalSeats: number
    price: number
    arrivalTime: string
    scheduleId: number
    departureTime: string
    busName: string
    busVehicleNo: string
    fromLocationName: string
    toLocationName: string
    vendorName: string
    scheduleDate: string
    vendorId: number
}
