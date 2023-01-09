function tickets(tickets, sortCriteria){
    class Ticket{
        constructor(destinationName, price, status){
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    for (const ticket of tickets) {
        let ticketsInfo = ticket.split('|');

        let destinationName = ticketsInfo[0];
        let price = Number(ticketsInfo[1]);
        let status = ticketsInfo[2];

        let ticketObj = new Ticket(destinationName, price, status);
        result.push(ticketObj);
    }

    if (sortCriteria === "destination") {
        console.log(result[0].destination);
        result.sort((a,b) => (a.destination > b.destination) ? 1 : ((b.destination > a.destination) ? -1 : 0));
    } else if (sortCriteria === "price") {
        result.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
    } else if(sortCriteria === "status"){
        result.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0))
    }
    return result;
}

let result = tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');

console.log(result);