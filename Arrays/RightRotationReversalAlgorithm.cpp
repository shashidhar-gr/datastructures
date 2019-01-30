/*
Reversal algorithm for right rotation of an array.

Given an array, right rotate it by k elements.

Input: arr[] = {1, 2, 3, 4, 5, 
                6, 7, 8, 9, 10}
          k = 3
Output: 8 9 10 1 2 3 4 5 6 7

Input: arr[] = {121, 232, 33, 43 ,5}
           k = 2
Output: 43 5 121 232 33
*/
#include <iostream>
using namespace std;
int* reverseArray(int[], int, int);
void printArray(int[], int);

int main(){
	int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
	int n = sizeof(a)/sizeof(*a);
	int k = 3;
	int *arrayPointer;
	
	arrayPointer = reverseArray(a, 0, n-1);
	arrayPointer = reverseArray(a, 0, k-1);
	arrayPointer = reverseArray(a, k, n-1);
	
	printArray( a, n );
	return 0;
}

int* reverseArray(int a[], int start, int end){
	int temp = 0;
	while(start < end){
		temp = a[start];
		a[start] = a[end];
		a[end] = temp;
		
		end--;
		start++;
	}
	return a;
}

//Generic method to print array elements.
void printArray( int a[], int n ) {
	for( int i = 0; i < n; i++ ) {
		cout<<a[i]<<"\t";
	}
	cout<<"\n";
	return;
}
