import java.io.*; 
import java.util.*;

public class CoinChange{
	public static void main(String[] args) {
		int amount = 5;
		int coins[] = {1, 2, 3};
		int a[] =  new int[amount+1];
		
		for(int i = 0; i <= amount; i++) {
			a[i] = Integer.MAX_VALUE;
		}
		
		a[0] = 0;
		int subProb = 0;
		for(int i = 1; i < a.length; i++) {
			for(int j = 0; j < coins.length; j++) {
				if(coins[j] <= i) {
					subProb = Math.abs(i - coins[j]);
					a[i] = Math.min(1+a[subProb], a[i]);
				}
			}
		}
		printArray(a);
	}
	
	private static void printArray(int[] a) {
		for(int i = 0; i < a.length; i++) {
			System.out.print(a[i]+"\t");
		}
	}
}