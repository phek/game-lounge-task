import {Injectable} from '@angular/core';
import {MENU} from './menu';
import {MenuItem} from '../models/MenuItem';

@Injectable()
export class MenuService {

  /**
   * Fake API call for getting menu items.
   * @returns MenuItem[] A list of MenuItems.
   */
  getMenu() {
    return MENU.menu.map(menuItem => new MenuItem(menuItem));
  }
}
