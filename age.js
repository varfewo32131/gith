function createUser(name, age) {
    return {
        name: name,
        age: age,
        isAdmin: false
    };
}

const user = createUser('Alice', 30);
console.log(user); // Output: { name: 'Alice', age: 30, isAdmin: false }
