import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({
  selector: 'devices',
  templateUrl: './devices.component.html'
})
export class DevicesComponent {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    editField: string;
    personList: Array<any> = [
      { id: 1, vin: '1H6T87DE23JOV321', serialNumber: '78EF2W33IKJ', ssid: '3993 CC', password: 'myPassw0rd', downloadSpeed: 'Turbo-charged V8 Engine', uploadSpeed: '8', serviceExpires: '13 Oct 2020' },
    ];

    awaitingPersonList: Array<any> = [
      { id: 2, vin: '1H6T87DE23JOV322', serialNumber: '78EF2W33IKM', ssid: '3993 CC', password: 'myPassw0rd', downloadSpeed: 'Turbo-charged V8 Engine', uploadSpeed: '8', serviceExpires: '13 Sept 2020' },
      { id: 3, vin: '1H6T87DE23JOV323', serialNumber: '78EF2W33ILB', ssid: '3993 CC', password: 'myPassw0rd', downloadSpeed: 'Turbo-charged V8 Engine', uploadSpeed: '8', serviceExpires: '13 Aug 2020' },
      { id: 4, vin: '1H6T87DE23JOV324', serialNumber: '78EF2W33WUN', ssid: '3993 CC', password: 'myPassw0rd', downloadSpeed: 'Turbo-charged V8 Engine', uploadSpeed: '8', serviceExpires: '13 Jan 2020' },
      { id: 5, vin: '1H6T87DE23JOV325', serialNumber: '78EF2W33AFL', ssid: '3993 CC', password: 'myPassw0rd', downloadSpeed: 'Turbo-charged V8 Engine', uploadSpeed: '8', serviceExpires: '13 Nov 2020' },
    ];

    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.personList[id][property] = editField;
    }

    remove(id: any) {
      this.awaitingPersonList.push(this.personList[id]);
      this.personList.splice(id, 1);
    }

    add() {
      if (this.awaitingPersonList.length > 0) {
        const person = this.awaitingPersonList[0];
        this.personList.push(person);
        this.awaitingPersonList.splice(0, 1);
      }
    }

    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }
}