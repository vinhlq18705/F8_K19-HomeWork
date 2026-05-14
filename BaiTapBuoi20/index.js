// Bài 1

function findSecondLargest(numbers) {

    if (numbers.length < 2) {
        return null
    }

    let largestNumber = -Infinity
    let secondLargestNumber = -Infinity

    for (const currentNumber of numbers) {

        if (currentNumber > largestNumber) {
            secondLargestNumber = largestNumber
            largestNumber = currentNumber
        }

        else if (
            currentNumber > secondLargestNumber &&
            currentNumber !== largestNumber
        ) {
            secondLargestNumber = currentNumber
        }
    }

    return secondLargestNumber
}

const numbers = [9, 8, 3, 5, 6, 2, 7, 9]

console.log(findSecondLargest(numbers))

//Bài 2

const classAStudentIds = [15, 2, 8, 10]
const classBStudentIds = [8, 11, 2, 5, 9]

function mergeUniqueAndSort(firstClassIds, secondClassIds) {

    // Merge two arrays into one array
    const mergedStudentIds = [
        ...firstClassIds,
        ...secondClassIds
    ]

    // Store unique student IDs
    const uniqueStudentIds = []

    // Object used to track existing IDs
    const existingStudentIds = {}

    // Remove duplicate IDs
    for (const studentId of mergedStudentIds) {

        // Add ID only if it does not exist
        if (!existingStudentIds[studentId]) {
            existingStudentIds[studentId] = true
            uniqueStudentIds.push(studentId)
        }
    }

    // Sort unique IDs using Quick Sort
    return quickSort(uniqueStudentIds)
}

function quickSort(numbers) {

    // Stop recursion if array has 0 or 1 element
    if (numbers.length <= 1) {
        return numbers
    }

    // Get middle index
    const middleIndex = Math.floor(numbers.length / 2)

    // Select middle value as pivot
    const pivotValue = numbers[middleIndex]

    const leftValues = []
    const rightValues = []
    const equalValues = []

    // Split values based on pivot
    for (const currentValue of numbers) {

        // Values smaller than pivot
        if (currentValue < pivotValue) {
            leftValues.push(currentValue)
        }

        // Values greater than pivot
        else if (currentValue > pivotValue) {
            rightValues.push(currentValue)
        }

        // Values equal to pivot
        else {
            equalValues.push(currentValue)
        }
    }

    // Recursively sort left and right arrays
    return [
        ...quickSort(leftValues),
        ...equalValues,
        ...quickSort(rightValues)
    ]
}

const sortedStudentIds = mergeUniqueAndSort(
    classAStudentIds,
    classBStudentIds
)

console.log(sortedStudentIds)