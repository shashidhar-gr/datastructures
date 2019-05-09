import java.io.*; 
import java.util.*; 

class Combinations{

public static void main(String[] args) {
	int n = 3, sum = 0;
	ArrayList<String> set = new ArrayList<String>(3);
	ArrayList<String> subSet = new ArrayList<String>(8);
	String c = "";
	set.add("a");
	set.add("b");
	set.add("c");
	
	getCombinations(set, n, subSet, sum, c);
}

private static void getCombinations(ArrayList<String> set, int n, ArrayList<String> subSet, int sum, String c){
	if(n == 0){
		System.out.println(c);
		subSet.add(c);
		return;
	}
	
	getCombinations(set, n-1, subSet, sum, c);
	
	c = c + set.get(n-1);
	getCombinations(set, n-1, subSet, sum, c);
}
}
