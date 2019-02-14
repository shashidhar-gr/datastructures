/*
Selection Sort.
*/

#include <iostream>
using namespace std;
void printArray(int[], int);

int main() {
	
	int a[10] = {-1, -1, -2, -3, -5, 0, 0, 5, 4, 100};
	int n = sizeof(a)/sizeof(*a), temp = 0, min = 0, pos = 0;
	
	for(int i = 0; i < n-1; i++) {
		min = a[i];
		for(int j = i + 1; j < n; j++) {
			if(a[j] < min) {
				min = a[j];
				pos = j;
			}
		}
		temp = a[i];
		a[i] = min;
		a[pos] = temp; 
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
