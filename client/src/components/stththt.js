
arr = [1,2,3,4,5,6,7,8,9,10]
var arr2;
var c; 
for (var i = 0; i < arr.length; i++) {
	obj= {};
	c = Math.floor(Math.random() * (arr.length -1));
	obj.student1 = arr[c];
	arr.splice(c,1);
	c = Math.floor(Math.random() * (arr.length -1));
	obj.student1 = arr[c];
	arr.splice(c,1);
	arr2.push(obj)
}


