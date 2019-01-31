/*
Recursive Bubble Sort.
*/
#include <iostream>
using namespace std;
void printArray(int[], int);
void bubbleSort(int[], int);

int main() {

	int a[12] = {101, -1, -1, -2, -3, -5, 0, 0, 5, 4, 100, -10};
	int n = sizeof(a)/sizeof(*a);
	
	bubbleSort(a, n);
	printArray(a, n);
	return 0;
}

void bubbleSort(int a[], int n) {
	if(n == 1)
		return;
	
	int temp = 0;	
		
	for(int i = 0; i < n-1; i++) {
		if(a[i] > a[i+1]) {
			temp = a[i];
			a[i] = a[i+1];
			a[i+1] = temp;
		}
	}
	
	return bubbleSort(a, n-1);
}

//Generic method to print array elements.
void printArray( int a[], int n ) {
	for( int i = 0; i < n; i++ ) {
		cout<<a[i]<<"\t";
	}
	cout<<"\n";
	return;
}

