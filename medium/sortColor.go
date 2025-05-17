func sortColors(nums []int) {
	qs(nums, 0, len(nums)-1)
}

func qs(arr []int, low int, high int) {
	if low >= high {
		return
	}

	pivotIdx := partition(arr, low, high)
	qs(arr, 0, pivotIdx-1)
	qs(arr, pivotIdx+1, high)
}

// partition function takes the last element as pivot, places the pivot element at its correct position in sorted array,
func partition(arr []int, low int, high int) int {
	pivot := arr[high]

	idx := low - 1

	for i := low; i < high; i++ {
		if arr[i] <= pivot {
			idx++
			arr[idx], arr[i] = arr[i], arr[idx]
		}
	}

	idx++
	arr[idx], arr[high] = arr[high], arr[idx]

	return idx
}
