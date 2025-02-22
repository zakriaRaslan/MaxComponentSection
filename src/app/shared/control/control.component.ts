import { Component, contentChild, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{
    class: 'control', // this will add a class "control" to all the <app-control/> in the project
    '(click)':'onClickFunc()', // this will listen to the event click to run the Function (onclickFunc)
  }
})
export class ControlComponent {
  // @HostBinding('class') ClassName ="control" // this will work like host: at the directive but the host is better

  // @HostListener('click') onClickFormDecorator(){
  //   console.log("clicked from decorator")
  // }
label = input.required<string>();
// @ContentChild('input') private inputContent? :ElementRef<HTMLInputElement | HTMLTextAreaElement>
private inputContent = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

onClickFunc(){
  console.log("Clicked");
  console.log(this.inputContent())
}

}
