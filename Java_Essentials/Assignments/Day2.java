package letsupgrade;

public class Day2 {

    public static void main(String[] args) {
        Emplyoee e1 = new Emplyoee();
        Emplyoee e2 = new Emplyoee();
        e1.display();
        System.out.println("\n");
        e2.display();
    }    
}
class Emplyoee{
    String name = "Surendra";
    int age = 21;
    String city = "Rajahmundry";
        public void display(){
            System.out.println("The name is: "+name);
            System.out.println("The age is: "+age);
            System.out.println("The city is: "+city);
        }
}