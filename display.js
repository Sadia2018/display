//Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

class SLL {
    // constructor, other methods, removed for brevity
        display(node) {
        var runner = this.head
        var count = 0
    
        while (runner) {
            console.log('Number: ${count}, the value: ${runner.value}')
            count++
            runner = runner.next
    
        }
    
        return this
    }

