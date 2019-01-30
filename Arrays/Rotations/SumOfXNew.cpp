//Given an array A[] and a number x, check for pair in A[] with sum as x.
#include <iostream>
using namespace std;

int main(){
	int a[6] = {-2, -1, 0, 3, 4, 5};
	int n = sizeof(a)/sizeof(*a);
	int sum = 11;
	int i = 0, j = n-1;
	
	while(i <= j) {
		if(a[i] + a[j] == sum){
			cout<<"Sum pair identified at position "<<i<<", "<<j<<"\n";
			break;
		}
		if(a[i] + a[j] < sum)
			i++;
		else
			j--;
	}
	
	return 0;
}
