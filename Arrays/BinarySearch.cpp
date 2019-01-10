/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
using namespace std;
int binarySearch( int[], int, int, int, int  );

int main() {
    int a[3] = { 1, 2, 3};
    int high = sizeof(a)/sizeof(*a) - 1, low = 0, mid = ( high + low )/2, pivot = 0;
    
    int position = binarySearch( a, low, mid, high, pivot );
    cout<<"Pivot found @"<<position;
    return 0;
}

int binarySearch( int n[], int low, int mid, int high, int pivot ) {
    cout<<"Calling binarySearch function\n";
    cout<<low<<mid<<high<<pivot<<"\n";
    if( n[mid] == pivot ) {
        cout<<"Found pivot at mid position\n";
        return mid;
    }
    else if( pivot < n[mid] ) {
        cout<<"Finding pivot in first half of array\n";
        cout<<low<<mid<<high<<pivot<<"\n";
        mid = mid - 1;
        high = ( low+( mid - 1 ) )/2;
        binarySearch(n, low, mid, high, pivot );
    }
    else if( pivot > n[mid] ){
        cout<<"Finding pivot in second half of array\n";
        cout<<mid + 1<<(mid + 1 + high)/2<<high<<pivot<<"\n";
        low = mid + 1;
        mid = (mid + 1+ high)/2;
        cout<<mid<<"\n";
        binarySearch(n, low, mid, high, pivot);
    }
    else {
        return -1;
    }
}

