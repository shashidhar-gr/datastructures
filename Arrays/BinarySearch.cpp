#include <iostream>
using namespace std;
int binarySearch(int[], int, int, int);

int main() {
	
	int a[6] = {-2, -1, 0, 3, 4, 5};
	int element = -3;
	int n = sizeof(a)/sizeof(*a);
	cout<<"Elelement found at "<<binarySearch(a, element, 0, n);
	return 0;
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
