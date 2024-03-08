import java.util.ArrayList;
import java.util.Scanner;

public class TodoList {
    public static void main(String[] args) {
        // Create a new ArrayList to store the todo items
        ArrayList<String> todoItems = new ArrayList<>();

        Scanner scanner = new Scanner(System.in);
        String choice;

        // Main loop for interacting with the todo list
        do {
            // Display menu
            System.out.println("Todo List:");
            System.out.println("1. Add Todo");
            System.out.println("2. View Todo List");
            System.out.println("3. Remove Todo");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextLine();

            switch (choice) {
                case "1":
                    // Add todo
                    System.out.print("Enter the todo item: ");
                    String todoItem = scanner.nextLine();
                    todoItems.add(todoItem);
                    System.out.println("Todo added successfully!");
                    break;
                case "2":
                    // View todo list
                    if (todoItems.isEmpty()) {
                        System.out.println("Todo list is empty.");
                    } else {
                        System.out.println("Todo List:");
                        for (int i = 0; i < todoItems.size(); i++) {
                            System.out.println((i + 1) + ". " + todoItems.get(i));
                        }
                    }
                    break;
                case "3":
                    // Remove todo
                    if (todoItems.isEmpty()) {
                        System.out.println("Todo list is empty.");
                    } else {
                        System.out.print("Enter the index of the todo item to remove: ");
                        int index = Integer.parseInt(scanner.nextLine());
                        if (index >= 1 && index <= todoItems.size()) {
                            String removedItem = todoItems.remove(index - 1);
                            System.out.println("'" + removedItem + "' removed successfully!");
                        } else {
                            System.out.println("Invalid index!");
                        }
                    }
                    break;
                case "4":
                    // Exit
                    System.out.println("Exiting the todo list application. Goodbye!");
                    break;
                default:
                    System.out.println("Invalid choice. Please enter a valid option.");
            }
        } while (!choice.equals("4"));

        scanner.close();
    }
}
