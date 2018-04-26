import {Injectable} from '@angular/core';
import {MENU} from './menu';
import {Menu} from '../models/Menu';

@Injectable()
export class MenuService {

  constructor() {
  }

  getMenu() {
    return MENU.menu.map(menuItem => new Menu(menuItem));
  }

}
