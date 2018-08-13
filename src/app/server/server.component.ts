import {Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})


export class serverComponent implements OnInit {
  @Input() newServerName: string;  
  serverName :string = 'WindowsServer 2010';
  serverId :number = 25;
  serverState: boolean = false;
  allowNewServer : boolean = false;
  serverDescvalue  : string  = 'this server is for it deparment';
  serverList : any  = [{name:'server1'}];

  constructor () {
    setTimeout(()=>{
      this.allowNewServer = true
    },2000)
  }

  getServerId () {
    return this.serverId;
  }
  
  getColor (){
    return (this.serverState) ? 'green' : 'red'
  }
  changeState(){
    this.serverState = ! this.serverState;
  }

  updateServerName(event : any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
  addServer (serverName : HTMLInputElement) {
    this.serverList.push({name:serverName.value});
  }
  ngOnInit(){

  }
}