export interface Ticket{
  id:string,
  title:string,
  request:string,
  status:"open" | "closed"
}

export interface InputTicketData{
  title:string,
  request:string
}
