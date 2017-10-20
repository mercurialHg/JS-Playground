var obj = new Object();

var ref = obj;

console.log(ref, obj); // {} {}

obj.test = 'test'

console.log(ref, obj);// { test: 'test' } { test: 'test' }

obj = {
  test2 : 'test2'
}

console.log(ref, obj); // { test: 'test' } { test2: 'test2' }

//How thing work: 

var obj = new Object(); // create a reference named obj to an new Object instance (we will name it A)

var ref = obj; // a reference named ref points now to A

obj.test = 'test' // obj now updates A with a .test property

obj = { test2 : 'test2' } // obj now points to a new Object instance, created with literals, that we will name B

ref === obj // false: because ref  points to A and obj points to B
