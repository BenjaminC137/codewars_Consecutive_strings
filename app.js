

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)



function longestConsec(strarr, k) {
	var n = strarr.length;
	if (n = 0 || k > n || k <= 0) {return ""}

	var slicedArray = strarr.slice(0, n-k+1);
	
	slicedArray.sort(function(a, b){
		return b.length - a.length
	});
//	console.log(slicedArray);
	var longestString = slicedArray[0];
		console.log(longestString);

	
	return slicedArray;
}




//
//You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//
//#Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//
//n being the length of the string array, if n = 0 or k > n or k <= 0 return "".