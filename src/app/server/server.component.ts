import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent{
    serverid : number = 10;
    serverstatus : string = "Offline"
    currenttime(){
        return new Date();
    }
     constructor() {
        this.serverstatus = Math.random()>0.5 ? "Online" : "Offline";
     }
     getColor(){
        return this.serverstatus === "Online" ? "lightgreen" : "pink";
     }
}