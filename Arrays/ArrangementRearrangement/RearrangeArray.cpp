/*
Rearrange an array such that arr[i] = i
*/

#include <iostream>
using namespace std;
void printArray(int[], int);

int main() {
	int a[10] = {-1, -1, 6, 1, 9, 3, 2, -1, 4, -1};
	//int a[20] = {19, 7, 0, 3, 18, 15, 12, 6, 1, 8, 11, 10, 9, 5, 13, 16, 2, 14, 17, 4};
	int n = sizeof(a)/sizeof(*a), x = 0, y = 0;

	for(int i = 0; i < n; i++) {
		
		if(a[i] != -1 && a[i] != i) {
			x = a[i];
			
			while(a[x] != -1 && a[x] != x) {
				y = a[x];
				a[x] = x;
				x = y;
			}
		}
		
		if(a[i])
	}
	cout<<"Array after rearranging\n";
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
