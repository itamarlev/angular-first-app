import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  username = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  showSecret = false;
  clicks = [];
  i = 0;
  mouseDown = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onRealeaseButton() {
    this.mouseDown = false;
  }

  onPressButton() {
    this.mouseDown = true;
    this.i += 1;
    this.clicks.push(this.i);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onResetButton() {
    this.username = '';
    this.serverCreated = false;
  }

  getColor() {
    return this.i < 4 ? 'red' : '';
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
  }

}
