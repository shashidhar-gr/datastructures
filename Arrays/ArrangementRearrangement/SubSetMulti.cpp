#include <algorithm> 
#include <array> 
#include <iostream> 
#include <iterator> 
#include <string> 
using namespace std;

void printArray(int[], int);
char* findSubSet(char[], int, int[], int, char);

int main() {

	array<char, 3> set{'a', 'b', 'c'}; 
  	array<char, 8> subSet = {}; 
	int sum = 0;
	char c = '';
	int n = 3;
	int* newSubSet;
	
	findSubSet(set, n, subSet, sum, c)
	
	return 0;
}

char* findSubSet(char set[], int n, char subSet[], int sum, char c) {
	if(n == 0){
		cout<<c<<"\n";
		subSet.fill(c);
		return;
	}
	
	findSubSet(set, n-1, subSet, sum, c);
	
	c = c + set[n];
	findSubSet(set, n-1, subSet, sum, c);
}

//Generic method to print array elements.
void printArray( int a[], int n ) {
	for( int i = 0; i < n; i++ ) {
		cout<<a[i]<<"\t";
	}
	cout<<"\n";
	return;
}

