export class MENU {
    idMenu: any;
    nameMenu: any;
    codeMenu: any;
    statusMenu: boolean;
    iconMenu: any;
    classMenu: any;
    typeMenu: any;// 1: menu chinh, 2: menu con , 3: menu admin
    constructor(idMenu, nameMenu, codeMenu, statusMenu, iconMenu, classMenu, typeMenu) {
        this.idMenu = idMenu;
        this.nameMenu = nameMenu;
        this.codeMenu = codeMenu;
        this.iconMenu = iconMenu;
        this.classMenu = classMenu;
        this.statusMenu = statusMenu;
        this.typeMenu = typeMenu;
    }
}