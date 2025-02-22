import { Component, ElementRef, EventEmitter, output, Output, ViewChild, viewChild } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { InputTicketData } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
// @ViewChild('form') private form?:ElementRef<HTMLFormElement>
private form =  viewChild.required<ElementRef<HTMLFormElement>>('form');
// @Output() addTicket = new EventEmitter<InputTicketData>();
addTicket = output<InputTicketData>()


onSubmit(title:string , textarea:string){


   this.addTicket.emit({title : title , request : textarea});
    this.form()?.nativeElement.reset();
  }
}
