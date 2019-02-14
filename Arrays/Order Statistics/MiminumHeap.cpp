/*


*/

#include <iostream>
#include <stdlib.h>
using namespace std;
void printArray(int[], int);
void insertElement(int, int);
int a[9] = {3, 1, 0, 5, 6, 4, 6, 4, 2};
int b[9] = {};

int main() {
	int pos = 0;
	//int a[5] = {1, 3, 6, 2, 0};
	int aSize = sizeof(a)/sizeof(*a);
	
	for(int i = 0; i < aSize; i++) {
		insertElement(i, a[i]);
	}
	
	int bSize = sizeof(b)/sizeof(*b);
	printArray(b, bSize);
	
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

/*

*/
void insertElement(int pos, int element) {

	b[pos] = element;
	int temp = 0;
	
	while(b[pos] < b[(pos-1)/2] && pos != 0) {
		temp = b[pos];
		b[pos] = b[pos-1/2];
		b[pos-1/2] = temp;
	}
	
	return;
}
