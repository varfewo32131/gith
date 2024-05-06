public class SumOfNaturalNumbers {
    public static void main(String[] args) {
        int n = 5, sum = 0, i = 1;
        while (i <= n) {
            sum += i;
            ++i;
        }
        System.out.println("Sum of first " + n + " natural numbers = " + sum);
    }
}
