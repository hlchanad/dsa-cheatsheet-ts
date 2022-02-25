import { quickSort } from "../sort";

describe('Quick Sort', () => {
    it('sorts array', () => {
        const array = [6,5,4,1,2,2,7,8,3];
        expect(quickSort([...array])).toEqual(array.sort());
    });
});
