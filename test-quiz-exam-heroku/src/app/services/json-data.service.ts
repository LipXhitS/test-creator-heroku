import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor() { }

  saveToStorage(key: string, obj: any): void {
    sessionStorage.setItem(key, JSON.stringify(obj));
  }

  retrieveFromStorage(key: string): any {
    let obj = null;
    let ObjStr = sessionStorage.getItem(key);
    return ObjStr ? ObjStr : obj;
  }
}
