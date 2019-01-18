/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
using namespace std;
void insertElement( int );
int heap[50] = {};
int arr[4] = {6, 7, 12, 10};
int arraySize = sizeof(arr)/sizeof(*arr);
int heapSize = sizeof(heap)/sizeof(*heap);
int pos = 1, first = 1, last = 1;

int main() {
    cout<<"Array size: "<<arraySize<<"\n";
    
    for(int i = 0; i < arraySize; i++) {
        insertElement(arr[i]);
    }
    return 0;
}

void insertElement(int num) {
    cout<<"Inserting "<<num<<"\n";
    pos = last;
    heap[pos] = num;
    last++;
    int comp = 0, temp = 0;
    cout<<"last: "<<last<<", pos: "<<pos<<"\n";
    while(pos > first && pos != 0) {
        cout<<"In loop.....";
        comp = pos/2;
        //cout<<"comp: "<<comp<<"\n";
        //cout<<"comparing "<<heap[comp]<<" and "<<heap[pos]<<"\n";
        if(heap[comp] < heap[pos]) {
            cout<<"swapping "<<heap[comp]<<" and "<<heap[pos]<<"\n";
            temp = heap[comp];
            heap[comp] = heap[pos];
            heap[pos] = temp;
            
            cout<<"position "<<comp<<" has "<<heap[comp]<<" and position "<<pos<< " has "<<heap[pos]<<"\n";
        
            pos = comp;
            
            cout<<"new pos is "<<pos<<"\n";
            
        }
        else {
        	break;
		}
    }
    //cout<<"Last before printing array: "<<last<<"\n";
    for(int i = 0; i < last; i++) {
        cout<<heap[i]<<" ";
    }
    cout<<"\n";
}
