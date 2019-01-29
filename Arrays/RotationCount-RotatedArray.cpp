/*
Find the Rotation Count in Rotated Sorted array.

Description: Consider an array of distinct numbers sorted in increasing order. The array has been rotated (clockwise) k number of times. 
Given such an array, find the value of k.

Examples:
Input : arr[] = {15, 18, 2, 3, 6, 12}
Output: 2
Explanation : Initial array must be {2, 3,
6, 12, 15, 18}. We get the given array after 
rotating the initial array twice.

Input : arr[] = {7, 9, 11, 12, 5}
Output: 4

Input: arr[] = {7, 9, 11, 12, 15};
Output: 0
*/

#include <iostream>
using namespace std;
int findPivotPosition(int[], int, int, int);

int main() {
	
	int a[6] = {15, 18, 2, 3, 6, 12};
	int n = sizeof(a)/sizeof(*a);
	
	int pivotPosition = findPivotPosition(a, n, 0, n-1);
	cout<<"Pivot position: "<<pivotPosition<<"\n";
	cout<<"Number of rotations: "<<pivotPosition;
	return 0;
}

int findPivotPosition(int a[], int n, int low, int high) {
 
	int mid = 0;
	if( low <= high ) {
		mid = (low + high)/2;
		
		if(a[mid] > a[mid + 1])
			return (mid + 1)%n;
		
		if(a[low] > a[mid])
			return findPivotPosition(a, n, low, mid-1);
		else
			return findPivotPosition(a, n, mid + 1, high);
	}
	return -1;
}
