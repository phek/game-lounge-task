export class Menu {
  id: number;
  name: string;
  icon: string;
  sub: Array<MenuItem>;

  constructor(menu = null) {
    this.id = menu ? menu.id : null;
    this.name = menu ? menu.name : null;
    this.icon = menu ? menu.icon : null;
    this.sub = menu ? menu.sub.map(subItem => new MenuItem(subItem)) : null;
  }
}

class MenuItem {
  id: number;
  name: string;
  href: string;
  thumb: string;

  constructor(subMenu = null) {
    this.id = subMenu ? subMenu.id : null;
    this.name = subMenu ? subMenu.name : null;
    this.href = subMenu ? subMenu.href : null;
    this.thumb = subMenu ? subMenu.thumb : null;
  }
}
