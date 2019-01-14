/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
using namespace std;
int* sortItems( int[], int );

int main() {
    int a[7] = {0, 2, 1, 1, -5, -4, 0};
    int arraySize = sizeof(a)/sizeof(*a);
    int k = 7;
    int *p;
    p = sortItems(a, arraySize);
    
    cout<<"After sorting..\n";
    for( int i = 0; i < arraySize; i++ ) {
        cout<< *(p + i)<<"\t";
    }
    cout<<"\n";
    cout<<k<<"th smallest element in array is: "<<*(p+k-1);
    
    return 0;
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



