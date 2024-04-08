public class LCM {
    public static void main(String[] args) {
        int num1 = 12, num2 = 20;
        int lcm = (num1 * num2) / gcd(num1, num2);
        System.out.println("LCM of " + num1 + " and " + num2 + " is " + lcm);
    }

    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
