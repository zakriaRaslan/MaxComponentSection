import { Component } from '@angular/core';
import { ControllComponent } from "../../../shared/controll/controll.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControllComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
