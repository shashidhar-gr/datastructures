/*
Insertion Sort.
Insertion sort is used when number of elements is small. It can also be useful when input array is almost sorted, 
only few elements are misplaced in complete big array.
*/

#include <iostream>
using namespace std;
void printArray(int[], int);

int main() {
	int a[12] = {101, -1, -1, -2, -3, -5, 0, 0, 5, 4, 100, -10};
	int n = sizeof(a)/sizeof(*a), temp = 0;
	
	int j = 0, key = 0;
	for(int i = 1; i < n; i++) {
		j = i - 1;
		key = a[i];	
		while(j >= 0 && a[j] > key) {
			a[j+1] = a[j];
			j--;
		}
		a[j+1] = key;
	}
	cout<<"Array after sorting\n";
	printArray( a, n );

	return 0;
}

//Generic method to print array elements.
void printArray( int a[], int n ) {
	for( int i = 0; i < n; i++ ) {
		cout<<a[i]<<"\t";
	}
	cout<<"\n";
	return;
}
