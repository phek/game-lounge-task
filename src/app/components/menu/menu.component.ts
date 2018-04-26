import {Component, OnInit} from '@angular/core';
import {Menu} from '../../models/Menu';
import {MenuService} from '../../api/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // Menu with null values. Allows us to compare selectedItem with other Menu items (Instead of having to check for null).
  private none: Menu = new Menu();

  showMenu = false;
  menu: Array<Menu> = [];
  selectedItem: Menu = this.none;

  constructor(private menuService: MenuService) {
  }

  /**
   * Get menu data when the component is initiated
   */
  ngOnInit() {
    this.menu = this.menuService.getMenu(); // "API call"
  }

  /**
   * Toggles the menu. (Deselects sub-menu if hiding)
   */
  toggleMenu() {
    if (this.showMenu) {
      this.selectedItem = this.none;
    }
    this.showMenu = !this.showMenu;
  }

  /**
   * Shows the sub menu for the targeted item.
   * @param item The targeted item.
   */
  showSubMenu(item) {
    this.showMenu = true;
    if (this.selectedItem.id === item.id) {
      this.selectedItem = this.none;
    } else {
      this.selectedItem = item;
    }
  }

}
