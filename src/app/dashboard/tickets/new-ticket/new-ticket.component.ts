import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
@ViewChild('form') form?:ElementRef<HTMLFormElement>

  onSubmit(title:string , textarea:string){

    console.log(title + "*****" + textarea);
    this.form?.nativeElement.reset();
  }
}
