function insertionSort(arr) {
    // Traverse the array from the second element to the last
    for (let i = 1; i < arr.length; i++) {
        // Store the current element in a temporary variable
        let current = arr[i];
        let j = i - 1;

        // Compare current element with the sorted part of the array (arr[0] to arr[i-1])
        // Shift elements of arr[0..i-1], that are greater than current, to one position ahead
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into the correct position
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
const array = [12, 11, 13, 5, 6];
console.log("Sorted array:", insertionSort(array));
