var matrizes = [
	{
		name: "mean removal - sharpen",
		data:[[-1, -1, -1,],
			  [-1, 9, -1,],
			  [-1, -1, -1,]]
	},

	{
		name: 'sharpen',
		data:
		 [[ 0, -2,  0],
		  [-2, 11, -2],
		  [ 0, -2,  0]]
  	},

  	{
	    name: 'blur',
	    data:
	     [[ 1,  2,  1],
	      [ 2,  4,  2],
	      [ 1,  2,  1]]
  	},

  	{
	    name: 'emboss',
	    data:
	     [[ 2,  0,  0],
	      [ 0, -1,  0],
	      [ 0,  0, -1]],
	    offset: 127,
  	},

  	{
	    name: 'emboss subtle',
	    data:
	     [[ 1,  1, -1],
	      [ 1,  3, -1],
	      [ 1, -1, -1]],
  	},

  	{
	    name: 'edge detect',
	    data:
	     [[ 1,  1,  1],
	      [ 1, -7,  1],
	      [ 1,  1,  1]],
  	},

  	{
	    name: 'edge detect 2',
	    data:
	     [[-5,  0,  0],
	      [ 0,  0,  0],
	      [ 0,  0,  5]],
  	}
];


