var sort = function bubbleSort(arr) {
	for(var i = 0;i < arr.length;i++) {
  	for(j = 0;j < arr.length -1 -i;j++) {
    	if(arr[j] > arr[j+1]) {
      	//swap
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  document.write(arr);
  return arr;
}
sort([5,4,3,2,8,1]);