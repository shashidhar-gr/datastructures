/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
using namespace std;
void insertElement( int );
int heap[50] = {};
int arr[6] = {6, 7, 12, 10, 15, 17};
int arraySize = sizeof(arr)/sizeof(*arr);
int heapSize = sizeof(heap)/sizeof(*heap);
int pos = 0, first = 0, last = 0;

int main() {
    cout<<"Array size: "<<arraySize<<"\n";
    
    for(int i = 0; i < arraySize; i++) {
        insertElement(arr[i]);
    }
    return 0;
}

void insertElement(int num) {
    pos = last;
    heap[pos] = num;
    last++;
    int comp = 0, temp = 0;
    
    while(pos > first && pos != 0) {
        
        comp = pos/2;
        if(heap[comp] < heap[pos]) {
            temp = heap[comp];
            heap[comp] = heap[pos];
            heap[pos] = temp;
            pos = comp;
        }
        pos = last;
    }
    
    for(int i = 0; i < last; i++) {
        cout<<heap[i]<<" ";
    }
    cout<<"\n";
}






