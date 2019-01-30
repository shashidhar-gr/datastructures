/*
K’th Smallest/Largest Element in Unsorted Array | Set 1.

Given an array and a number k where k is smaller than size of array, we need to find the k’th smallest element in the given array. It is given that ll array elements are distinct.

Input: arr[] = {7, 10, 4, 3, 20, 15}
       k = 3
Output: 7

Input: arr[] = {7, 10, 4, 3, 20, 15}
       k = 4
Output: 10
*/

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
