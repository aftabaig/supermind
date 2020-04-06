import BasePackage from "../";

export default class LogoPackage extends BasePackage {

    images = [
        require('./images/1.png'),
        require('./images/2.png'),
        require('./images/3.png'),
        require('./images/4.png'),
        require('./images/5.png'),
        require('./images/6.png'),
        require('./images/7.png'),
        require('./images/8.png'),
        require('./images/9.png'),
        require('./images/10.png'),
        require('./images/11.png'),
        require('./images/12.png'),
        require('./images/13.png'),
        require('./images/14.png'),
        require('./images/15.png'),
        require('./images/16.png'),
        require('./images/17.png'),
        require('./images/18.png'),
        require('./images/19.png'),
        require('./images/20.png'),
        require('./images/21.png'),
        require('./images/22.png'),
        require('./images/23.png'),
        require('./images/24.png'),
        require('./images/25.png'),
        require('./images/26.png'),
        require('./images/27.png'),
        require('./images/28.png'),
        require('./images/29.png'),
        require('./images/30.png'),
        require('./images/31.png'),
        require('./images/32.png'),
        require('./images/33.png'),
        require('./images/34.png'),
        require('./images/35.png'),
        require('./images/36.png'),
        require('./images/37.png'),
        require('./images/38.png'),
        require('./images/39.png'),
        require('./images/40.png'),
    ];

    constructor() {
        super();
        this.randomImages(40);
    }
}
