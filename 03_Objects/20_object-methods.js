let restaurant = {
    name: 'Hotel Delight',
    guestCapacity: 30,
    guestCount: 0,
    checkAvailability: function (partySize) {
        if (partySize <= this.guestCapacity) {
            return `For the party size of ${partySize}, Resturant has ${this.guestCapacity} seats available`
        }
        else {
            return `Sorry :(   | For the party size of ${partySize}, Resturant needs ${partySize - this.guestCapacity} more seats`
        }
    },
    
    seatParty: function (partySize) {
        if (partySize <= this.guestCapacity) {
            this.guestCount = this.guestCount + partySize;
            this.guestCapacity = this.guestCapacity - partySize
            return `New party of size ${partySize} have been seated`
        }
        else {
            return `Seats are unavailable to accomodate the new party`
        }
    },
    
    removeParty: function(partySize) {
       this.guestCount = this.guestCount - partySize;
       this.guestCapacity = this.guestCapacity + partySize
       return `${partySize} seats have been removed`
    }
}

console.log(restaurant.checkAvailability(20))
console.log(restaurant.seatParty(20))
console.log(restaurant.checkAvailability(15))
console.log(restaurant.seatParty(15))
console.log(restaurant.removeParty(6))
console.log(restaurant.seatParty(15))
