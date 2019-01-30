/*
Quickly find multiple left rotations of an array | Set 1

Given an array of size n and multiple values around which we need to left rotate the array. How to quickly find multiple left rotations?

Input : arr[] = {1, 3, 5, 7, 9}
        k1 = 1
        k2 = 3
        k3 = 4
        k4 = 6
Output : 3 5 7 9 1
         7 9 1 3 5
         9 1 3 5 7
         3 5 7 9 1

Input : arr[] = {1, 3, 5, 7, 9}
        k1 = 14 
Output : 9 1 3 5 7

*/
#include <iostream>
using namespace std;

int main() {
	
	int a[5] = {1, 3, 5, 7, 9};
	int n = sizeof(a)/sizeof(*a);
	int k = 7;
	
	for(int i = k; i < (n+k); i = i + 1 ) {
		cout<<a[i%n]<<"\t";
	}

	return 0;
}
