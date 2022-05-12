import { binarySearch } from '../search';

describe('binarySearch', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    it('searches target', () => {
        array.forEach(
            (value, index) => expect(binarySearch(array, value)).toBe(index)
        );
    });

    it('returns null if not found', () => {
        [-1, 0, 11, 12].forEach(
            (value) => expect(binarySearch(array, value)).toBeNull()
        );
    });
});
