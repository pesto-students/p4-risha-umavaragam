	// Simple JavaScript program to print
	// next greater elements in a
	// given array

	/* prints element and NGE pair
	for all elements of arr[] of size n */
	function printNGE(arr, n)
	{
		var next, i, j;
		for (i = 0; i < n; i++)
		{
		next = -1;
		for (j = i + 1; j < n; j++)
		{
			if (arr[i] < arr[j])
			{
			next = arr[j];
			break;
			}
		}
		console.log(arr[i] + " -- " + next);
		console.log("<br>");
		}
	}

	// Driver Code
	var arr = [11, 13, 21, 3];
	var n = arr.length;
	printNGE(arr, n);
	
