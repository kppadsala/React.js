/*
let str = "";
let row = 7
let count =  7

for (let i = count; i > 1; i--) {
  for (let j = 1; j < count; j++) {
    if (j > i) {
      str += "*";
    } else {
      str += " ";
    }
  }
  for (let j = count; j > i; j--) {
    if (j > i) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}
for (let i = 1; i < count; i++) {
  for (let j = 1; j < count; j++) {
    if (j > i) {
      str += "*";
    } else {
      str += " ";
    }
  }
  for (let j = count; j > i; j--) {
    if (j > i) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}
console.log(str);

const objConst = {
  name: "John",
  age: 30,
};

const objVar = {
  name: "max",
  age: 40,
};

function updateObject(obj) {
  obj.city = "New York";
}

updateObject(objConst);
updateObject(objVar);console.log(objConst);
// 1 - { name: "John", age: 30 };
// 2 - { name: "max", age: 40 };

console.log(objVar);

var a = 1;
var b = 0;
while (a <= 3) {
  a++;
  b += a * 2;
  console.log(a, b);
}
// 2, 4;
// 3, 10;
*/


let s = "000111";
let l = 0,
  r = s.length - 1, // 5
  ans = -1;
while (l <= r) {
  var mid = Math.floor((l + r) / 2);
  if (s[mid] == "1") {
    ans = mid;
    r = mid - 1;
  } else {
    l = mid + 1;
  }
}
console.log(ans);


const objConst = {
  name: "John",
  age: 30,
};

const objVar = {
  name: "max",
  age: 40,
};

function updateObject(obj) {
  obj.city = "New York";
}

updateObject(objConst);
updateObject(objVar);

console.log(objConst);
1 - { name: "John", age: 30 };
2 - { name: "max", age: 40 };

console.log(objVar);

var a = 1;
var b = 0;
while (a <= 3) {
  a++;
  b += a * 2;
  console.log(a, b);
}
2, 4;
3, 10;

//

let s = "000111";
let l = 0,
  r = s.length - 1, // 5
  ans = -1;
while (l <= r) {
  var mid = Math.floor((l + r) / 2);
  if (s[mid] == "1") {
    ans = mid;
    r = mid - 1;
  } else {
    l = mid + 1;
  }
}
console.log(ans);

//

let str = "";
let count = 8;
for (let i = 1; i < count; i++) {
  for (let j = 1; j < count; j++) {
    let space = Math.floor(count / i);
    if (j > i) {
      str += "*";
    } else {
      str += " ";
    }
  }

  for (let j = count; j < i; j--) {
    let space = Math.floor(count / i);
    if (j > i) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}
console.log(str);