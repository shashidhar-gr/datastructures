//Search an element in a sorted and rotated array.
#include <iostream>
using namespace std;
int findPivot(int[], int, int);
int binarySearch(int[], int, int, int);
int main() {
	
	int a[8] = {6, 7, 8, 9, 10, 3, 4, 5};
	int n = sizeof(a)/sizeof(*a);
	int k = 5, position = -1;
	int pivot = findPivot(a, 0, n-1);
	cout<<"Pivot element found at "<<pivot<<"\n";
	
	if(pivot != -1) {
		
		if(k == a[pivot]){
			position = pivot;
			cout<<"Element found at position "<<position<<"\n";
		}
		else if(k >= a[pivot] && k <= a[n-1]) {
			position = binarySearch(a, k, pivot, n-1);
			cout<<"Element found at position "<<position<<"\n";
		}
		else {
			position = binarySearch(a, k, 0, pivot-1);
			cout<<"Element found at position "<<position<<"\n";
		}		
	}
	else {
		cout<<"Coudn't found pivot element.\n";
	}

	return 0;
}

int findPivot(int a[], int low, int high){
	int mid = 0;
	if(low <= high) {
		mid = (low + high)/2;
		
		if(a[mid] > a[mid+1]) {
			return mid + 1;			//Found pivot element.
		}
		
		if(a[low] > a[mid]) {
			return findPivot(a, low, mid-1);
		}
		else {
			return findPivot(a, mid+1, high);
		}		
	}
	else {
		return -1;
	}
}

int binarySearch(int a[], int element, int low, int high) {
	if(high >= low) {
		int mid = (low + high)/2;
	
		if(a[mid] == element)
			return mid;	
		else if(a[mid] > element)
			return binarySearch(a, element, low, mid-1);
		else if(a[mid] < element)
			return binarySearch(a, element, mid+1, high);
	}
	return -1; 
}
