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

export interface IScheduleData {
    scheduleId: number
    vendorId: number
    busName: string
    busVehicleNo: string
    fromLocation: number
    toLocation: number
    departureTime: string
    arrivalTime: string
    scheduleDate: string
    price: number
    totalSeats: number
}

export class SignupRequest {
    userId: number
    userName: string
    emailId: string
    fullName: string
    role: string
    createdDate: string
    password: string
    projectName: string
    refreshToken: string
    refreshTokenExpiryTime: string

    constructor() {
        this.userId = 0,
            this.userName = '',
            this.emailId = '',
            this.fullName = '',
            this.role = 'Customer',
            this.createdDate = '2025-05-16T16:15:31.35',
            this.password = '',
            this.projectName = 'BusBooking',
            this.refreshToken = 'string',
            this.refreshTokenExpiryTime = '2025-05-16T12:50:35.853'
    }
}