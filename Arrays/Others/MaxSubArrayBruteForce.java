import java.io.*; 
import java.util.*;

public class MaxSubArrayBruteForce{
	public static void main(String[] args) {
		int set[] = {-1, 3, 4, -5, 9, -2};
		ArrayList<Integer> indices = new ArrayList<Integer>();
		int maxSum = Integer.MIN_VALUE;
		int sum = 0;
		
		for(int i = 0; i < set.length ; i++) {
			sum = set[i];
			for(int j = i + 1; j < set.length; j++) {
				sum = sum + set[j];
				
				if(sum > maxSum){
					maxSum = sum;
					indices.clear();
					indices.add(i);
					indices.add(j);
				}
			}
		}
		
		System.out.println(maxSum);
		System.out.println(indices);
	}
}	