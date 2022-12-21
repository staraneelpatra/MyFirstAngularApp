import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

allowNewServer : boolean = false;
newServerCreated: string = "No new Server Created..."
constructor() {
  
setTimeout(() => {
  this.allowNewServer =true;
}, 2000);
}

ngOnInit(){
  throw new Error('Method not implemented.');
}
CreateNewServer(){
  this.newServerCreated = "New Server Created !"
}
}
