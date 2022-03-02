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

/**
 * space complexity: O() ????
 * time complexity: O(n log n)
 * @param array
 */
export function mergeSort(array: number[]): number[] {
    const merge = (...arrays: number[][]) => {
        const indices = new Array(arrays.length).fill(0);
        const isFinished = () =>
            arrays.every((array, index) => array.length === indices[index]);

        const result: number[] = [];

        while (!isFinished()) {
            let smallest, smallestIndex;
            arrays.forEach((array, index) => {
                if (array.length <= 0) return;

                const value = array[indices[index]]

                if (smallest === undefined || value < smallest) {
                    smallest = value;
                    smallestIndex = index;
                }
            });

            result.push(smallest);
            indices[smallestIndex]++;
        }

        return result;
    }

    const _mergeSort = (array: number[]): number[] => {
        if (array.length <= 1) return array;

        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle, array.length);

        return merge(_mergeSort(left), _mergeSort(right));
    };

    return _mergeSort(array);
}
