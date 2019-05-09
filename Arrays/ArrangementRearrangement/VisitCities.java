import java.io.*; 
import java.util.*; 

class VisitCities {

public static void main(String[] args) {
	System.out.println("Hello world!!");
	
	int n = 4, i = 0, petrolLeft = 0, citiesVisited = 0;
	ArrayList<Integer> petrol = new ArrayList<Integer>(4);
	petrol.add(1);
	petrol.add(2);
	petrol.add(10);
	petrol.add(8);
	
	ArrayList<Integer> cost = new ArrayList<Integer>(4);
	cost.add(4);
	cost.add(3);
	cost.add(9);
	cost.add(5);
	
	ArrayList<Integer> citiesOrder = new ArrayList<Integer>(4);
	
	path(i, n, cost, petrol, petrolLeft, citiesVisited, citiesOrder);
}

private static void path(int i, int n, ArrayList<Integer> cost, ArrayList<Integer> petrol, int petrolLeft, int citiesVisited, ArrayList<Integer> citiesOrder){
	if(n == 0 || citiesVisited == n || (i == n)) {
		System.out.println(citiesOrder);
		return;
	}
	
	if(petrolLeft + petrol.get(i) < cost.get(i))
		path((i+1)%n, n, cost, petrol, petrolLeft, citiesVisited, citiesOrder);
	
	petrolLeft = petrolLeft - cost.get(i);
	citiesVisited++;
	citiesOrder.add(i);
	path((i+1)%n, n, cost, petrol, petrolLeft, citiesVisited, citiesOrder);
}
}