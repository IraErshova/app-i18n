import { Tariff } from './interfaces/tariff.interface';

export const tariffsMock: Tariff[] = [{
  title: 'Free',
  price: 0,
  users: 1,
  storage: 2,
  support: 1,
  helpCenter: true,
  type: 1
}, {
  title: 'Pro',
  price: 15,
  users: 20,
  storage: 5,
  support: 2,
  helpCenter: true,
  type: 2
}, {
  title: 'Enterprise',
  price: 29,
  users: 30,
  storage: 15,
  support: 3,
  helpCenter: true,
  type: 3
}];
