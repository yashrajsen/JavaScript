let restaurant = {
    name: 'Hotel Delight',
    guestCapacity: 30,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let availableSeats = this.guestCapacity - partySize

        this.guestCapacity = availableSeats
        this.guestCount = this.guestCount + partySize

        if (availableSeats > 0) {
            console.log(`${availableSeats} Seats are available`)
            return true
        }
        else {
            console.log(`${availableSeats} Seats are unavailable`)
            return false
        }
        // console.log(this)    //prints the current object

    }
}

console.log(restaurant.checkAvailability(15))
console.log(restaurant.checkAvailability(8))
console.log(restaurant.checkAvailability(4))
