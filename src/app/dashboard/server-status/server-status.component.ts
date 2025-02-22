import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit  {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private interval?: ReturnType<typeof setInterval>
  private destroyRef = inject(DestroyRef)

  constructor(){
    // console.log(this.currentStatus()); // this will not subscribe the currentStatus
    // to subscribe the signals in angular you need to use effect()
    // effect(()=>{
    //   console.log(this.currentStatus());
    // })
  }

  ngOnInit(){
  const interval = setInterval(() => {
      var rnd = Math.random() // this will return random number between 0 to 0.99999
      if(rnd<.5){
        this.currentStatus.set('online')
      } else if(rnd<.9){
        this.currentStatus.set('offline')
      }else{
        this.currentStatus.set('unknown')
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
