package main

func canConstruct(ransomNote string, magazine string) bool {
	magazineMap := make(map[rune]int)

	for _, c := range magazine {
		magazineMap[c]++
	}

	for _, c := range ransomNote {

		if _, ok := magazineMap[c]; !ok || magazineMap[c] == 0 {
			return false
		}

		magazineMap[c]--
	}

	return true
}
