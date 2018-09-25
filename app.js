

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);


longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1);

longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2);



longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2);



function longestConsec(strarr, k) {
	var n = strarr.length;
	if (n = 0 || k > n || k <= 0) {return ""}

	if(k>1){
	var slicedArray = strarr.slice(0, n-k+1);
	console.log(slicedArray);
	}
	else{
		var slicedArray = strarr;
	}
	slicedArray.sort(function(a, b){
		return b.length - a.length
	});
	console.log(slicedArray);
	
	var longestString = slicedArray[0];
	console.log(longestString);
	
	if(k == 1){
		return longestString;
	}

	var finalString = longestString;
	longestStringIndex = strarr.indexOf(longestString);
	console.log(longestStringIndex);
	
	for(i = longestStringIndex; i < k; i++){
	finalString += strarr[i+1];	
	}
	
	return finalString;
	
}




//
//You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//
//#Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//
//n being the length of the string array, if n = 0 or k > n or k <= 0 return "".