import java.io.*; 
import java.util.*;

public class Knapsak{
	public static void main(String[] args) {
		//Knapsak problem.
		/*int wt[] = {1, 2, 3, 4, 5, 6};	//Weights of Items.
		int val[] = {2, 3, 8, 10, 12, 13};	//Values of Items.
		int C = 10;					//Maximum capacity of Knapsak.
		int N = wt.length;			//Number of Items to pick.
		*/
		
		//Rod cutting problem.
		int wt[] = {1, 2, 3, 4, 5, 6};	//Weights of Items.
		int val[] = {2, 3, 8, 10, 12, 13};	//Values of Items.
		int C = 10;					//Maximum capacity of Knapsak.
		int N = wt.length;			//Number of Items to pick.
		
		//Declaring two dimensional array with N+1(Number of Items + 1) as row capacity and C+1(Maximum capacity of Knapsak + 1) as column capacity.
		int[][] v = new int[N+1][C+1]; 
		
		//Filling array with trivial values.
		for(int col = 0; col <= C; col++){
			v[0][col] = 0;
		}
		
		for(int row = 0; row <= N; row++) {
			v[row][0] = 0;
		}
		
		System.out.println();
		
		//Matrix after initializing with trivial values.
		System.out.println("\t\t Matrix after initializing with trivial values.");
		printMatrix(N, C, v);
		System.out.println();
		
		//Logic to fill the values in v.
		for(int item = 1; item <= N; item++) {
			for(int weight = 1; weight <= C; weight++) {
				
				if(wt[item-1] <= weight) {
					v[item][weight] = java.lang.Math.max(val[item-1]+v[item-1][weight-wt[item-1]], v[item-1][weight]);
				}
				else {
					v[item][weight] = v[item-1][weight];
				}
			}
		}
		
		//Matrix after filling values to array v.
		System.out.println("\t\t Matrix after filling values.");
		printMatrix(N, C, v);
		System.out.println();
		
		//Logic to pick items.
		int item = N;
		int weight = C;
		int maxValue = 0;
		System.out.println("\t\t Items we are picking.");
		
		while(item > 0 && weight > 0) {
			//System.out.println("\t Item: "+ item +", weight:"+weight+"\n");
			if(v[item][weight] != v[item-1][weight]) {
				System.out.print("\t"+ (wt[item-1]));
				maxValue = maxValue + val[item-1];
				weight = weight - wt[item-1];
				item--;
			}
			else {
				item--;
			}
		}
		
		System.out.println("\t\t Max value we got: "+maxValue);
	}
	
	//Function to print the any two dimensional array/Matrix with two dimension.
	public static void printMatrix(int rowLength, int columnLength, int matrix[][]) {
		for(int row = 0; row <= rowLength; row++) {
			for(int col = 0; col <= columnLength; col++){
				System.out.print("\t"+matrix[row][col]);
			}
			System.out.println();
		}
	}
}