/*
Find maximum value of Sum( i*arr[i]) with only rotations on given array allowed.

Given an array, only rotation operation is allowed on array. We can rotate the array as many times as we want. 
Return the maximum possbile of summation of i*arr[i].

Examples:
Input: arr[] = {1, 20, 2, 10}
Output: 72
We can 72 by rotating array twice.
{2, 10, 1, 20}
20*3 + 1*2 + 10*1 + 2*0 = 72

Input: arr[] = {10, 1, 2, 3, 4, 5, 6, 7, 8, 9};
Output: 330
We can 330 by rotating array 9 times.
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
0*1 + 1*2 + 2*3 ... 9*10 = 330
*/
#include <iostream>
using namespace std;
void printArray(int[], int);
int gcd(int, int);

int main() {
	
	int a[10] = {10, 1, 2, 3, 4, 5, 6, 7, 8, 9};
	int* positions;
	int k = 1, d = 0, temp = 0, j = 0;
	int n = sizeof(a)/sizeof(*a);
	int sum = 0, highSum = 0;
	
	while(k <= n) {
		
		for(int i = 0; i < gcd(n, k); i++) {
			j = i;
			temp = a[i];
			while(1) {
				d = (j + k) % n;
				
				if(i == d)
					break;
				
				a[j] = a[d];
				j = d;
			}
			
			a[j] = temp;
		}
		
		for(int i = 0; i < n; i++) {
			sum = sum + ( i * a[i] );
		}
		
		if(highSum < sum){
			highSum = sum;
			positions = a;
		}
		cout<<"sum: "<<sum<<"\n"; 
		sum = 0;	
		k++;
	}
	cout<<"highSum: "<<highSum<<"\n"; 
	printArray(positions, n);
	
	return 0;
}

int gcd(int a, int b) {
	if(b == 0) 
		return a;
	else 
		return gcd(b, a%b);
}

//Generic method to print array elements.
void printArray( int a[], int n ) {
	for( int i = 0; i < n; i++ ) {
		cout<<a[i]<<"\t";
	}
	cout<<"\n";
	return;
}

