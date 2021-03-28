// Bai 1
function findOppositeNumber(n, inputNumber) {
  if (n % 2 == 0 && 4 <= n && n <= 20) {
    for (oppositeNumber = n - 1; 0 <= oppositeNumber; oppositeNumber--) {
      let a = oppositeNumber - inputNumber;
      if (Math.abs(a) == n / 2) {
        return oppositeNumber;
      }
    }
  }
}

let x = findOppositeNumber(20, 2);
console.log(x);

// Bai 2

function merge2String(s1, s2) {
    s1 = s1.split('');
    s2 = s2.split('');
  let newString = "";
  for (i = 0; i < s1.length; i++) {
      if(!s1[i]) {
          s1[i]= "";
      } else if (!s2[i]) {
          s2[i] ="";
      }
      console.log(s1[i],s2[i]);
    newString += s1[i] + s2[i];
  }
  console.log(newString);
}
merge2String("abcd", "123");


// Bai 3
``
