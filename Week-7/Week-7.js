// a linked list

	var head; // head of list
	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}

	function reverse(head) {
		if (head == null || head.next == null)
			return head;

		/*
		* reverse the rest list and put the first element at the end
		*/
		var rest = reverse(head.next);
		head.next.next = head;

		head.next = null;

		/* fix the head pointer */
		return rest;
	}

	/* Function to print linked list */
	function print() {
	var temp = head;
		while (temp != null) {
			console.log(temp.data)
			temp = temp.next;
		}
	}

	function push(data) {
	var temp = new Node(data);
		temp.next = head;
		head = temp;
	}

	/* Driver program to test above function */
	
		/* Start with the empty list */

		push(20);
		push(4);
		push(15);
		push(85);

		 console.log("Given linked list<br/>")
		print();

		head = reverse(head);

		console.log("<br/>Reversed Linked list<br/>")
		print();

