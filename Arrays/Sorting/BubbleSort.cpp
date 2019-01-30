/*
Bubble Sort.
*/

#include <iostream>
using namespace std;
void printArray(int[], int);

int main() {
	
	int a[10] = {-1, -1, -2, -3, -5, 0, 0, 5, 4, 100};
	int n = sizeof(a)/sizeof(*a), temp = 0;
	
	for(int i = 0; i < n; i++){
		for(int j = 0; j < n - 1; j++) {
			if(a[j] > a[j+1]){
				temp = a[j];
				a[j] = a[j+1];
				a[j+1] = temp;
			}
		}
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
