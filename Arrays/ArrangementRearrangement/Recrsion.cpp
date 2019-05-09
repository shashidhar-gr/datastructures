#include <iostream>
using namespace std;
void recur(int);
int main() {
	
	recur(10);
	
	return 0;
}

void recur(int n) {
	
	cout<<"Function with parameter n: "<<n<<"\n";

	if(n <= 0)
		return;
		
	return recur(n-1);
}


