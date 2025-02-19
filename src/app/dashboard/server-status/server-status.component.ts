import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit  {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // private interval?: ReturnType<typeof setInterval>
  private destroyRef = inject(DestroyRef)

  ngOnInit(){
  const interval = setInterval(() => {
      var rnd = Math.random() // this will return random number between 0 to 0.99999
      if(rnd<.5){
        this.currentStatus = 'online'
      } else if(rnd<.9){
        this.currentStatus = 'offline'
      }else{
        this.currentStatus = 'unknown'
      }
    }, 3000);

    this.destroyRef.onDestroy(()=>{
     clearInterval(interval);
    })
  }
  //  this is the traditional way in angular but in V16 and newer you can use DestroyRef
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval); // this to clear the interval after the component removed to avoid the memory leaks
  // }

}
