/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
using namespace std;
int* rotateArray(int[], int, int);
void printArray(int[], int);

int main() {
	int a[7] = { 1, 2, 3, 4, 5, 6, 7 };
	int d = 5;
	int n = sizeof(a)/sizeof(*a);
	int *p;
	p = rotateArray( a, d, n );	
	return 0;
}

int* rotateArray( int a[], int d, int n ) {
	int temp[2];
	
	//Copying d elements into temporary array.
	for( int i = 0; i < d; i++ ) {
		temp[i] = a[i];
	}
	
	cout<<"Printing temporary array elements \n";
	printArray( temp, sizeof(temp)/sizeof(*temp) );
		
	cout<<"Shifting array elements by "<<d<<" position left\n";
	for( int j = d; j < n; j++ ) {
		a[j-d] = a[j];
	}
	
	cout<<"Array after shifting\n";
	printArray( a, n );
	
	for(int i = n - d, j = 0; i < n && j < d; i++, j++) {
		a[i] = temp[j];
	}
	
	cout<<"Array after rotation\n";
	printArray( a, n );
	
	return a;
}

//Generic method to print array elements.
void printArray( int a[], int n ) {
	for( int i = 0; i < n; i++ ) {
		cout<<a[i]<<"\t";
	}
	cout<<"\n";
	return;
}



