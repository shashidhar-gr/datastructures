/*
K’th Smallest/Largest Element in Unsorted Array.

Given an array and a number k where k is smaller than size of array, 
we need to find the k’th smallest element in the given array. It is given that ll array elements are distinct.
Examples:
Input: arr[] = {7, 10, 4, 3, 20, 15}
       k = 3
Output: 7

Input: arr[] = {7, 10, 4, 3, 20, 15}
       k = 4
Output: 10

*/
#include <iostream>
using namespace std;
void printArray(int[], int);

int main() {

}

//Generic method to print array elements.
void printArray( int a[], int n ) {
	for( int i = 0; i < n; i++ ) {
		cout<<a[i]<<"\t";
	}
	cout<<"\n";
	return;
}
