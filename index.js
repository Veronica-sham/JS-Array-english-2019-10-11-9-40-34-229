// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
var AisArray = Array.isArray(a); //false
var BisArray = Array.isArray(b); //true


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
for (var i = 0; i < a.length; i++) {
  a[i] = a[i]*2;
}
// TODO should output [2,4,6,8,10]


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
var case1 = colors[0]+" "+colors[1]+" "+colors[2]+" "+colors[3]+" ";
var case2 = colors[0]+"+"+colors[1]+"+"+colors[2]+"+"+colors[3];
var case3 = colors;
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
var sortt = a.sort(function(a, b){return b-a});
//TODO should output: [10,8,5,4,1]


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
var ans = mode(a);
//TODO should output: 'a'