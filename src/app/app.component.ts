import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  appStatus = new Promise( (resolve, reject) => {
   setTimeout( () => { resolve('stable'); }, 3000)
  });

  selectedStatus = 'all';

  servers = [
    {
      instanceType: 'MEDIUM',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'SMALL',
      name: 'Staging Server',
      status: 'critical',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'Large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'Small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'SMALL',
      name: 'Testing',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

}

