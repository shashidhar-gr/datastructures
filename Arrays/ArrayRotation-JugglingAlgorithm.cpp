#include <iostream>
using namespace std;
void printArray(int[], int);
int gcd(int, int);

int main() {
	
	int a[5] = {1, 2, 3, 4, 5};
	int k = 1, d = -1, temp = 0, j = 0;
	int n = sizeof(a)/sizeof(*a);
	
	for(int i = 0; i < gcd(n, k); i++) {
		temp = a[i];
		j = i;
		while(1) {
			d = (j+k)%n;
			
			if(d == i)
				break;
				
			a[j] = a[d];
			j = d;
		}
		a[j] = temp;
	}
	
	cout<<"Printing array after shifting \n";
	printArray(a, n);
	
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

int gcd(int a, int b) {
	if(b == 0) 
		return a;
	else 
		return gcd(b, a%b);
}

