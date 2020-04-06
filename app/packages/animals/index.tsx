import BasePackage from "../";

export default class AnimalPackage extends BasePackage {

    items = [
        { id: 1, image: require('./images/1.png') },
        { id: 2, image: require('./images/2.png') },
        { id: 3, image: require('./images/3.png') },
        { id: 4, image: require('./images/4.png') },
        { id: 5, image: require('./images/5.png') },
        { id: 6, image: require('./images/6.png') },
        { id: 7, image: require('./images/7.png') },
        { id: 8, image: require('./images/8.png') },
        { id: 9, image: require('./images/9.png') },
        { id: 10, image: require('./images/10.png') },
        { id: 11, image: require('./images/11.png') },
        { id: 12, image: require('./images/12.png') },
        { id: 13, image: require('./images/13.png') },
        { id: 14, image: require('./images/14.png') },
        { id: 15, image: require('./images/15.png') },
        { id: 16, image: require('./images/16.png') },
        { id: 17, image: require('./images/17.png') },
        { id: 18, image: require('./images/18.png') },
        { id: 19, image: require('./images/19.png') },
        { id: 20, image: require('./images/20.png') },
        { id: 21, image: require('./images/21.png') },
        { id: 22, image: require('./images/22.png') },
        { id: 23, image: require('./images/23.png') },
        { id: 24, image: require('./images/24.png') },
        { id: 25, image: require('./images/25.png') },
        { id: 26, image: require('./images/26.png') },
        { id: 27, image: require('./images/27.png') },
        { id: 28, image: require('./images/28.png') },
        { id: 29, image: require('./images/29.png') },
        { id: 30, image: require('./images/30.png') },
        { id: 31, image: require('./images/31.png') },
        { id: 32, image: require('./images/32.png') },
        { id: 33, image: require('./images/33.png') },
        { id: 34, image: require('./images/34.png') },
        { id: 35, image: require('./images/35.png') },
        { id: 36, image: require('./images/36.png') },
        { id: 37, image: require('./images/37.png') },
        { id: 38, image: require('./images/38.png') },
        { id: 39, image: require('./images/39.png') },
        { id: 40, image: require('./images/40.png') },
        { id: 41, image: require('./images/41.png') },
        { id: 42, image: require('./images/42.png') },
        { id: 43, image: require('./images/43.png') },
        { id: 44, image: require('./images/44.png') },
        { id: 45, image: require('./images/45.png') },
        { id: 46, image: require('./images/46.png') },
        { id: 47, image: require('./images/47.png') },
        { id: 48, image: require('./images/48.png') },
        { id: 49, image: require('./images/49.png') },
        { id: 50, image: require('./images/50.png') },
    ];

    constructor() {
        super();
        this.randomImages(40);
    }
}
