import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Chance } from 'chance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private afs: AngularFirestore) { }

  addRecord() {
    const chance = new Chance();

    const data = {
      name: chance.name(),
      country: chance.country({ full: true }),
      joined: chance.date({ year: 2018 }),
      phone: chance.phone(),
      email: chance.email(),
      lat: chance.latitude(),
      lng: chance.longitude(),
      orderTotal: chance.integer({ min: 20, max: 1000 }),
    }

    this.afs.collection('customers').add(data)
  }
}

