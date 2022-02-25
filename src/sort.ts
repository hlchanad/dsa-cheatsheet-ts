function swap(array: number[], a: number, b: number) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

/**
 * space complexity: O(1)
 * time complexity: O(nlog n)
 * @param array
 */
export function quickSort(array: number[]): number[] {
    // in-place rearrange array as : smaller items, pivot, larger items
    // and return pivot index
    const partition = (low: number, high: number): number => {
        const pivot = array[high];
        let left = low, right = high - 1;

        while (left < right) {
            while (array[left] < pivot) left++;
            while (array[right] > pivot) right--;

            if (left < right) {
                swap(array, left, right);
                left++;
                right--;
            }
        }

        swap(array, left, high);

        return left;
    }

    const _quickSort = (low: number, high: number) => {
        if (low >= high) return;

        const pivotIndex = partition(low, high);

        _quickSort(low, pivotIndex - 1);
        _quickSort(pivotIndex + 1, high);
    }

    _quickSort(0, array.length - 1);
    return array;
}
