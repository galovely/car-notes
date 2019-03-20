import { Component } from '@angular/core';

@Component({
  selector: 'dealerships',
  templateUrl: './dealerships.component.html'
})
export class DealershipsComponent {
    editField: string;
    personList: Array<any> = [
      { id: 1, retailer: 'Bentley Manchester (Norwich, UK)', serviceRep: 'Gemma Star', phoneNumber: '44-123-456-7890' },
    ];

    awaitingPersonList: Array<any> = [
      {},
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