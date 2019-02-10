import { Tariff } from './interfaces/tariff.interface';

export const tariffsMock: Tariff[] = [{
  title: 'Free',
  price: 0,
  users: 10,
  storage: 2,
  support: 1,
  helpCenter: true
}, {
  title: 'Pro',
  price: 15,
  users: 20,
  storage: 5,
  support: 2,
  helpCenter: true
}, {
  title: 'Enterprise',
  price: 29,
  users: 30,
  storage: 15,
  support: 3,
  helpCenter: true
}];
