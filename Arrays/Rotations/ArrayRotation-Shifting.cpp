/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
using namespace std;
void printArray(int[], int);

int main() {
	int a[5] = {1, 2, 3, 4, 5 };
	int d = 5, temp = 0, j = 0;
	int n = sizeof(a)/sizeof(*a);
	
	for(int i = 0; i < d; i++) {
		temp = a[0];
		for(j = 0; j < n-1; j++) {
			a[j] = a[j+1];
		}
		a[j] = temp;
	}
	
	cout<<"Array after shifting\n";
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
