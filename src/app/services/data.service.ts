import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  users:string[] = [
    'mary',
    'john',
    'lucy',
    'mark',
    'kate'
  ];

  constructor() { }
}

