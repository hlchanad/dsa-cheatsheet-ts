/**
 * @return index of target OR null
 */
export function binarySearch (
    array: number[],
    target: number,
    start = 0,
    end = array.length
): number | null {
    if (start > end) {
        return null;
    }

    const middleIndex = Math.floor((start + end) / 2);

    if (array[middleIndex] === target) {
        return middleIndex;
    }

    if (array[middleIndex] > target) {
        return binarySearch(array, target, start, middleIndex - 1);
    } else {
        return binarySearch(array, target, middleIndex + 1, end);
    }
}
