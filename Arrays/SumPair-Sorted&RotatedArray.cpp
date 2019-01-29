//Given a sorted and rotated array, find if there is a pair with a given sum.
#include <iostream>
using namespace std;
int findPivot(int[], int, int);

int main() {
	
	int a[5] = {3, 4, 5, 1, 2};
	int n = sizeof(a)/sizeof(*a);
	int sum = 8;
	int pivot = findPivot(a, 0, n-1);
	cout<<"Pivot element found at "<<pivot<<"\n";
	
	int low = (pivot) % n;
	int high = low-1;
	cout<<"low: "<<low<<", high: "<<high<<"\n";
	while(low != high) {
		if(a[low] + a[high] == sum) {
			cout<<"Found pair at "<<low<<", "<<high<<"\n";
			break;
		}
		if(a[low] + a[high] < sum) 
			low = (low + 1) % n;
		else
			high = (n + high -1) % n;
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
