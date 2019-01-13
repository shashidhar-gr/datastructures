/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
using namespace std;
int hasArrayTwoCandidates( int[], int, int );
int* sortItems( int[], int );

int main() {
    int a[7] = {0, 2, 1, 1, -5, -4, 0};
    int arraySize = sizeof(a)/sizeof(*a);
    int sum = 0;
    
    hasArrayTwoCandidates(a, arraySize, sum);
    
    return 0;
}

int hasArrayTwoCandidates( int a[], int arraySize, int sum ) {
    cout<<"Calling hasArrayTwoCandidates function\n";
    
    bool found = false;
    int *p;
    
    cout<<"Before sorting..\n";
  
    for( int i = 0; i < arraySize; i++ ) {
        cout<< a[i] <<"\t";
    }
    cout<<"\n";
    p = sortItems(a, arraySize);
    cout<<"After sorting..\n";
    for( int i = 0; i < arraySize; i++ ) {
        cout<< *(p + i)<<"\t";
    }
    cout<<"\n";
    
    int l = 0, r = arraySize - 1;
    while(l < r) {
       if(*(p+l) + *(p+r) == sum) {
            cout<<"Found values that makeup sum: "<<sum<<" which are, "<<*(p+l)<<" "<<*(p+r);
            return l;
        }
        else if(*(p+l) + *(p+r) > sum) {
            r--;
        }
        else {
            l++;
        }
    } 
    cout<<"Coudn't find values that makeup sum: "<<sum;
    return -1;
}

int* sortItems(int a[], int arraySize) {

    int temp = 0;
    for( int i = 0; i < arraySize; i++ ) {
        for(int j = i + 1; j < arraySize; j++ ) {
            
            if(a[i] > a[j]) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    
    return a;
}
