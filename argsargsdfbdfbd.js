public class ArrayIndexOf {
    public static void main(String[] args) {
        int[] array = {10, 20, 30, 40, 50};
        int target = 30;
        int index = -1;
        for (int i = 0; i < array.length; i++) {
            if (array[i] == target) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            System.out.println("Index of " + target + " in the array: " + index);
        } else {
            System.out.println(target + " is not present in the array.");
        }
    }
}
