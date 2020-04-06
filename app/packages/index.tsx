import PackageInterface from './package.interface';

export default class BasePackage implements PackageInterface {

    items = [];
    gameItems = [];

    constructor() {
    }

    private createRandomNumbers = (min: bigint, max: bigint, count: bigint) => {
        let randomNumbers = [];
        let ok = false;
        while (!ok) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
            const index = randomNumbers.findIndex(number => number === randomNumber)
            if (index == -1) {
                randomNumbers.push(randomNumber);
            }
            ok = randomNumbers.length >= count;
        }
        return randomNumbers
    }

    private shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    randomImages = (count: number) => {
        let randomNumbers = this.createRandomNumbers(0, this.items.length - 1, count/2);
        let randomItems = [];
        randomNumbers.forEach((rn => {
            randomItems.push(this.items[rn]);
            randomItems.push(this.items[rn]);
        }));
        this.shuffle(randomItems);
        this.gameItems = randomItems;
    }
}
