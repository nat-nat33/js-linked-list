/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator(){
			var head = null;
			var tail = null;

	function getHead(){
			return head;
		}

	function getTail(){
			return tail;
		}

	function add(value){
			var newNode = {
				value: value,
				next: null,
			};

			if(head === null && tail === null){
				head = newNode;
				tail = newNode;
			} else {
				tail.next = newNode;
				tail = newNode;
			} 
			return newNode;
		}

	function remove(n){
		var count = 0;
		var match = false;

		if(head === null){
			return false;
		}
		if(n === 0){
			var aHead = head;
			head = head.next;
			if(head === null){
			tail = null;
		}
			return aHead;
		}

	
		var currentNode = head;
		while(currentNode.next !== null){
			count ++;
			currentNode = currentNode.next;

			if(count === n){
				match= true;
				var previous = get(n -1);
				
			if(get(n).next === null){
				previous.next = null;
				tail = previous;
			}
			else {
				previous.next = get(n + 1);
			 }
		 	}
		
		}
		if(!match){
			return match;
	}
}
	

	function get(n){
		
		var count = 0;
		var current = head;

		if(n === 0){
			return head;
		}
		
		var currNode = head;
		while (currNode.next !== null){
			 count++;
			 currNode = currNode.next;

			if(count === n){
				return currNode;
			}
		} 
		return false;

	}

	function insert(value, index){
		var previous = get(index -1);
		var nodeAdd= {
			value: value,
			next: get(index)
		};

		previous.next = nodeAdd;

		if(index === 0){
			head = nodeAdd;
		} else {
		return false;
	}
}

return {
	getHead: getHead,
	getTail: getTail,
	add: add,
	remove: remove,
	get: get,
	insert: insert,
};

}

var newList = linkedListGenerator();
