/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

using namespace std;

int main()
{
    cout<<"Hello World\n";

    int a[3] = { 1, 2, 3};
    
    cout<<"Array before reversing: ";
    
    int arraySize = sizeof(a)/sizeof(*a);
    
    for(int i = 0; i < arraySize; i++) {
        cout<<a[i]<<"\t";
    }
    
    cout<<"\n";
    
    int temp = 0, i = 0, j = arraySize -1;
    
    while(i != j) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;
        j--;
    }
    
    cout<<"Array after reversing: ";
    
    for(int i = 0; i < arraySize; i++) {
        cout<<a[i]<<"\t";
    }
    
    cout<<"\n";
    
    
    return 0;
    
}
