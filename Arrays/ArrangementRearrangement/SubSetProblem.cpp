/*
Subset Problem.
*/

#include <iostream>
using namespace std;
void printArray(int[], int);
int* findSubSet(int[], int, int[], int);

int main() {
	
	int set[3] = {5, 10, 3};
	int n = sizeof(set)/sizeof(*set);
	int subSet[5];
	int w = 8;
	
	int* newSubSet;
	
	newSubSet = findSubSet(set, n, subSet, w);
	
	cout<<"Subset elements\n";
	printArray(newSubSet, 5 );
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

int* findSubSet(int set[], int n, int subSet[], int w) {
	
	if(w == 0)
		return subSet;
	
	if(n == 0 && w != 0)
		return subSet;
		
	if(set[n-1] > w)
		return findSubSet(set, n-1, subSet, w);
		
	findSubSet(set, n-1, subSet, w);		
	
	subSet[3-n] = set[n-1];
	w = w - set[n-1];
	findSubSet(set, n-1, subSet, w);	
}
