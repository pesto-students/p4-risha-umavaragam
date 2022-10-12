let stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => undefined
console.log(stack.items)

function createStack() {
    let items = [];
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    };
}
