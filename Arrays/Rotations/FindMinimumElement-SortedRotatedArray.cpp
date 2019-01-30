/*
Find the minimum element in a sorted and rotated array.

A sorted array is rotated at some unknown point, find the minimum element in it.

Following solution assumes that all elements are distinct.

Input: {5, 6, 1, 2, 3, 4}
Output: 1

Input: {1, 2, 3, 4}
Output: 1

Input: {2, 1}
Output: 1
*/

#include <iostream>
using namespace std;
int findPivotPosition(int[], int, int);

int main() {
	
	int a[7] = {5, 6, 0, 1, 2, 3, 4};
	int n = sizeof(a)/sizeof(*a);
	
	int minPos = findPivotPosition(a, 0, n-1);
	cout<<"Minimum element in array is "<<a[minPos];
	return 0;
}

int findPivotPosition(int a[], int low, int high) {
	
	if(high < low)
		return 0;
		
	if(high == low)
		return high;
		
	int mid = (low + high)/2;
	
	if(mid < high && a[mid] > a[mid+1])
		return mid+1;
	
	if(mid > low && a[mid] < a[mid-1])
		return mid;
	
	if(a[high] > a[mid])
		return findPivotPosition(a, low, mid-1);
	else
		return findPivotPosition(a, mid+1, high);	
}
