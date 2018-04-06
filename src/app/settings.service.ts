import {Injectable} from '@angular/core';

@Injectable()
export class SettingsService {
  constructor() {}
  saveSettings(key, value) {
    localStorage.setItem(key, value);
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
}
