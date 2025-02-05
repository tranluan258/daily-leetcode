class Solution {
    public boolean areAlmostEqual(String s1, String s2) {
      if(s1.equals(s2)) return true;
      for(int i=0; i< s1.length(); i++) {
          if(s1.charAt(i) != s2.charAt(i)) {
              for(int j=i+1; j< s1.length(); j++) {
                  if(s1.charAt(i) != s2.charAt(j)) {
                        char[] s2Array = s2.toCharArray();
                        char temp = s2Array[i];
                        s2Array[i] = s2Array[j];
                        s2Array[j] = temp;
                      if(s1.equals(String.valueOf(s2Array))) {
                          return  true;
                      } else {
                          return  false;
                      }
                  }
              }
          }
      }
        return false;
    }
}
