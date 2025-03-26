import java.util.Scanner;

 class SimpleCalculator {
    public double add(double a, double b) {
        return a + b;
    }

    public double subtract(double a, double b) {
        return a - b;
    }

    public double multiply(double a, double b) {
        return a * b;
    }

    public double divide(double a, double b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero.");
        }
        return a / b;
    }
}

public class calc {
    public static void main(String[] args) {
        SimpleCalculator calc = new SimpleCalculator();
        Scanner scanner = new Scanner(System.in);

        
        System.out.println("Select operation:");
        System.out.println("1. Addition");
        System.out.println("2. Subtraction");
        System.out.println("3. Multiplication");
        System.out.println("4. Division");

        while (true) {
            System.out.print("Enter choice (1/2/3/4): ");
            String choice = scanner.nextLine();

            if (choice.equalsIgnoreCase("q")) {
                System.out.println("Exiting the calculator. Goodbye!");
                break;
            }

            if ("1234".contains(choice)) {
                try {
                    System.out.print("Enter first number: ");
                    double num1 = Double.parseDouble(scanner.nextLine());
                    System.out.print("Enter second number: ");
                    double num2 = Double.parseDouble(scanner.nextLine());

                    switch (choice) {
                        case "1":
                            System.out.println(num1 + " + " + num2 + " = " + calc.add(num1, num2));
                            break;
                        case "2":
                            System.out.println(num1 + " - " + num2 + " = " + calc.subtract(num1, num2));
                            break;
                        case "3":
                            System.out.println(num1 + " * " + num2 + " = " + calc.multiply(num1, num2));
                            break;
                        case "4":
                            System.out.println(num1 + " / " + num2 + " = " + calc.divide(num1, num2));
                            break;
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Invalid input. Please enter numeric values.");
                } catch (IllegalArgumentException e) {
                    System.out.println(e.getMessage());
                }
            } else {
                System.out.println("Invalid choice. Please select a valid operation.");
            }
        }

        scanner.close();
    }
}


