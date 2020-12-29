import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]', // attribute selector
  selector: '.app-servers', // class selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  AllowNewServer = false;
  ServerCreationStatus = "No Server Created"
  serverName = "Test Server";
  serverCreated = false;
  servers = ['Test server 1', 'Test Sever 2'];

  constructor() { 
    setTimeout(()=>{this.AllowNewServer = true}, 1000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.ServerCreationStatus = "Server Created " + this.serverName;
    this.serverCreated = true;

    this.servers.push(this.serverName);
    
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
