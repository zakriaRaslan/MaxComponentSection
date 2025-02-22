import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { InputTicketData, Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
Tickets:Ticket[] = []


  onAddTicket(ticketData:InputTicketData){
   let newTicket:Ticket ={
      id : Math.random().toString(),
      title:ticketData.title,
      request:ticketData.request,
      status:"open"
    }

    this.Tickets.push(newTicket);
  }

  onTicketCompleted(ticketId:string){
    this.Tickets = this.Tickets.map((ticket) =>{
      if(ticket.id === ticketId){
        return {...ticket , status:"closed"}
      }
      return ticket
    })
  }
}
