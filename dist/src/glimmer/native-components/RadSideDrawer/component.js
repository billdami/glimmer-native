import Component from '@glimmer/component';
export default class RadSideDrawer extends Component {
    constructor() {
        super(...arguments);
        this.sideDrawer = null;
        this.sideElement = null;
        this.mainElement = null;
    }
    didInsertElement() {
        this.sideDrawer = this.bounds.firstNode;
        this.sideDrawer._nativeView.drawerContent = this.sideElement._nativeView;
        this.sideDrawer._nativeView.mainContent = this.mainElement._nativeView;
    }
    sideInserted(element) {
        this.sideElement = element;
    }
    mainInserted(element) {
        this.mainElement = element;
    }
}
