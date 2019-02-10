import { Component, OnInit } from '@angular/core';
import { tariffsMock } from '../mock-data';
import { Tariff } from '../interfaces/tariff.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tariffs: Tariff[] = tariffsMock;

  constructor() { }

  ngOnInit() {
  }

}
