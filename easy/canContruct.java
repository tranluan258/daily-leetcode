import java.util.HashMap;
import java.util.Map;

class Solution {

    public boolean canConstruct(String ransomNote, String magazine) {
        Map<String, Integer> magazineHashMap = new HashMap<>();
        
        for(char c : magazine.toCharArray()) {
            String key = String.valueOf(c);
            magazineHashMap.put(key, magazineHashMap.getOrDefault(key, 0) + 1);
        }

        for(char c : ransomNote.toCharArray()) {
            String key = String.valueOf(c);
            if(!magazineHashMap.containsKey(key) || magazineHashMap.get(key) == 0) {
                return false;
            }
            magazineHashMap.put(key, magazineHashMap.get(key) - 1);
        } 

        return true; 
    }
}
