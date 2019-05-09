#include <iostream>
#include <stdlib.h>
using namespace std;
void printMatrix(int[][2], int, int);

int main() {
	
	int a[2][2] = {0 ,1, 2, 3};
	int b[2][2] = {0, 1, 2, 3};
	
	int c[2][2] = {};
	
	for(int i = 0; i < 2; i++) {
		for(int j = 0; j < 2; j++) {
			c[i][j] = a[i][j] + b[i][j];
		}
	}
	
	printMatrix(c, 2, 2);
	
	return 0;
}

//Generic method to print array elements.
void printMatrix( int a[][2], int row, int col ) {
	for( int i = 0; i < row; i++ ) {
		for(int j = 0; j < col; j++) {
			cout<<a[i][j]<<"\t";
		}
		cout<<"\n";
	}
	cout<<"\n";
	return;
}

