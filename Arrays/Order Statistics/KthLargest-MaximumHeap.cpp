/*
K’th Smallest/Largest Element in Unsorted Array.

Given an array and a number k where k is smaller than size of array, we need to find the k’th largest element in the given array. It is given that ll array elements are distinct.

Examples:

Input: arr[] = {7, 10, 4, 3, 20, 15}
       k = 3
Output: 7

Input: arr[] = {7, 10, 4, 3, 20, 15}
       k = 4
Output: 10

*/

#include <iostream>
#include <stdlib.h>
using namespace std;
void printArray(int[], int);
void insertElement(int, int);
void removeElement();
int a[6] = {7, 10, 4, 3, 20, 15};
int b[6] = {};
int heapSize = sizeof(b)/sizeof(*b);

int main() {
	int pos = 0;
	int aSize = sizeof(a)/sizeof(*a);
	
	for(int i = 0; i < aSize; i++) {
		insertElement(i, a[i]);
	}
	
	int k = 2;

	for(int i = 0; i < k -1; i++) {
		removeElement();
	}
	cout<<"\n"<<k<<"th largest element is "<<b[0]<<"\n"; 
	return 0;
}

/*
Function to insert new element to heap and also heapify.
*/
void insertElement(int pos, int element) {

	b[pos] = element;
	int temp = 0, parent = (pos-1)/2;
	
	while(b[pos] > b[parent] && pos >= 0) {
		temp = b[pos];
		b[pos] = b[parent];
		b[parent] = temp;
		parent = (parent-1)/2;
		pos = (pos-1)/2;
	}
	
	return;
}

/*
Function to delete root element and also heapify.
*/
void removeElement() {
	int temp = 0, k = 0, leftNode = 0, rightNode = 0;
	
	if(heapSize <= 0)
		return;
	
	//Swapping last element with root.
	temp = b[k];
	b[k] = b[heapSize-1];
	b[heapSize-1] = temp;
	
	//Decreasing heap size by one.
	heapSize = heapSize - 1;
	
	//Heapifying after removing root element.
	while( (k*2)+1 < heapSize && (k*2)+2 < heapSize ) {
		leftNode = (k*2)+1;
		rightNode = (k*2)+2;
		if( b[k] < b[leftNode] && b[leftNode] > b[rightNode] )  {
			temp = b[k];
			b[k] = b[leftNode];
			b[leftNode] = temp;
			k = leftNode;
		}
		else {
			temp = b[k];
			b[k] = b[rightNode];
			b[rightNode] = temp;
			k = rightNode;
		}		
	}
	
	leftNode = (k*2)+1;
	if(leftNode < heapSize && b[k] < b[leftNode] ) {
		temp = b[k];
		b[k] = b[leftNode];
		b[leftNode] = temp;
	}
	
	printArray(b, heapSize);

	return;
}

//Generic method to print array elements.
void printArray( int a[], int n ) {
	for( int i = 0; i < n; i++ ) {
		cout<<a[i]<<"\t";
	}
	cout<<"\n";
	return;
}

