// export function getFinalState(baseState, queue) {
//     let finalState = baseState;
  
//     // TODO: do something with the queue...
//     for(let i = 0; i < queue.length; i++) {
//         if (typeof queue[i]=== 'function') {
//             finalState = queue[i](finalState);
//           } else {
//             finalState = queue[i]
//           }
//     }
//     return finalState;
//   }

// function uncompress(str) {
//   // your code here
//   let res = "";
//   let numbers = [];
//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//     if(!isNaN(str[i])) {
//       let num = str[i] - '0';
//       while(!isNaN(str[i + 1])) {
//         num = num * 10 + (str[++i] - '0');
//       }
//       numbers.push(num);
//     }
//     else if(str[i] !== ')') {
//       stack.push(str[i]);
//     } else {
//         let letter = stack.pop();
//         let temp = "";
//         while(letter !== "(") {
//           console.log(letter);
//           temp = letter + temp;
//           letter = stack.pop();
//         }
//         let num = numbers.pop();
//         let temp2 = "";
//         while (num-- > 0) {
//           temp2 = temp2 + temp;
//         }
//         stack.push(temp2);
//       }
//     }

//   while (stack.length !== 0) {
//     let a = stack.pop();
//     res =  a + res;
//   }
//   return res;
// }

// console.log(uncompress('3(ab2(c))'));

// function list2tree(list, path) {
//   const paths = path.split('/');
//   function buildTree(data, layer) {
//     const key = paths[layer];
//     const groupData = {};
//     data.forEach(element => {
//       const item = element[key]
//       if(!groupData[item]){
//         groupData[item] = [];
//       } 
//       groupData[item].push(element);
//       // 四川:[] ，江苏:[]
//     });
//     const tree = Object.keys(groupData).map((key) => {
//       const subTree = groupData[key];
//       if(layer < paths.length - 1) {
//         return {[key]: buildTree(subTree, layer + 1)};
//       } else {
//         return {[key]: subTree};
//       }
//     })
//     return tree;
//   }
//   return buildTree(list, 0);
// }

// // 示例使用
// var userList = [
//   { name: 'user1', age: 18, province: '四川', city: '成都', district: '高新区' },
//   { name: 'user2', age: 19, province: '四川', city: '成都', district: '天府新区' },
//   { name: 'user3', age: 20, province: '四川', city: '南充', district: '顺庆区' },
//   { name: 'user4', age: 22, province: '江苏', city: '南京', district: '鼓楼区' },
//   { name: 'user5', age: 21, province: '江苏', city: '南京', district: '玄武区' },
//   { name: 'user6', age: 21, province: '江苏', city: '镇江', district: '京口区' },
// ];

// var userTree = list2tree(userList, 'province/city/district');
// console.log(userTree);

// let words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// var isAlienSorted = function(words, order) {
//   let alpha = new Map();
//   for(let i = 0; i < order.length; i++) {
//       alpha.set(order[i], i);
//   }
//   console.log(alpha);
//   for(let i = 0; i < words.length - 1; i++) {
//       for(let j = i + 1; j < words.length; j++) {
//           let f = 0;
//           while (words[i][f] && words[j][f] && (words[i][f] ===  words[j][f])){
//             f++;
//           }
//           let a = alpha.get(words[i][f]);
//           let b = alpha.get(words[j][f]);
//           if(a < b) continue;
//           if((words[i][f] && !words[j][f]) || (a > b)) {
//             return false;
//           } 
//       }
//   }
//   return true;
// };

// // console.log(isAlienSorted(words, order));

// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }

// async function async2() {
//   console.log('async2')
// }

// console.log('script start')

// setTimeout(function() {
//   console.log('setTimeout')
// }, 0)

// async1()

// new Promise(function(resolve) {
//   console.log('promise1')
//   resolve()
// }).then(function() {
//   console.log('promise2')
// })

// console.log('script end')

// function createCounter() {
//   let second = 0;
//   function counter() {
//     second++;
//   }
//   return counter;
// }

// const counter = createCounter();

// setInterval(() => {
//   counter();
// }, 1000)

// const coder = {
//   skills: ['js', 'css'],
//   run: function() {
//     for (let i = 0; i < this.skills.length; ++i) {
//       setTimeout(() => {
//         console.log(this.skills[i] + i);
//       }, 1000);
//     }

//   }
// }

// console.log(coder.run());

// const B = {
//   f1: function() {
//     return this.A
//   },
//   f2: () => {
//     return this.A
//   },
//   A: 10
// }

// var A = 2;

// console.log(B.f1(), B.f2());
// const f1 = B.f1,
//   f2 = B.f2;
// console.log(f1(), f2());

// function foo() {
//   return () => {
//     console.log(this.a)
//   }
// }

// var obj1 = {
//   a: 2
// }

// var obj2 = {
//   a: 3
// }

// var bar = foo.call(obj1) 
// bar.call(obj2) // 2

// function foo() {
//   console.log(this.a)
// }

// function doFoo(fn) {
//   fn()
// }

// var obj = {
//   a: 2,
//   foo
// }

// var a = 3 
// doFoo(obj.foo)

// function longestUniqueSubstr(str) {
//   // your code here
//   let set = new Set();
//   let left = 0;
//   let max = 0;
//   let start = 0;
//   for(let i = 0; i < str.length; i++) {
//     while(set.has(str[i])) {
//       set.delete(left);
//       left++;
//     }
//     if(i - left + 1 > max) {
//       max = i - left + 1;
//       start = left;
//     }
//     set.add(str[i]);
//   }
//   return str.slice(start, start + max + 1);
// }

// console.log(longestUniqueSubstr('a12#2'));

// function validate(str) {
//   // your code here
//   let stack = [];
//   let close = '}])';
//   let open = ['{','[','']
//   for(let char of str) {
//     if(!close.includes(char)) {
//       stack.push(char);
//     }
//     // if(char && stack.length === 0) return false;
//     if(char === '}') {
//       const o = stack.pop();
//       if(o === open[0]) continue;
//       return false;
//     }
//     if(char === ']') {
//       const o = stack.pop();
//       if(o === open[1]) continue;
//       return false;
//     }
//     if(char === ')') {
//       console.log(stack);
//       const o = stack.pop();
//       if(o === open[2]) continue;
//       return false;
//     }
//   }
  
//   return stack.length === 0 ?  true : false;
// }

// console.log(validate('{}}'));

// function mergeTwoArray(arr1, arr2) {
//   let res = [];
//   let i = 0;
//   let j = 0;
//   while(i < arr1.length || j < arr2.length) {
//     if(arr1[i] < arr2[j] || j >= arr2.length) {
//       res.push(arr1[i]);
//       i++
//     } else {
//       res.push(arr2[j]);
//       j++;
//     }
//   }
//   return res;
// }

// console.log(mergeTwoArray([1,1,1,100,1000,10000],
//   [2,3,3]))

// function foo() {
//     console.log(this.a)
//   }
  
//   var obj = {
//     a: 2,
//     foo
//   }
  
//   var a = 3
//   var bar = obj.foo
//   bar() // 3

// const buildMap = (map, eq, vals) => {
//   for (let i = 0; i < eq.length; i ++) {
//       const a = eq[i][0];
//       const b = eq[i][1];
//       const val = vals[i];
//       if(!map.get(a)) {
//           map.set(a, []);
//       }  
//       if(!map.get(b)) {
//         map.set(b, []);
//       }
//       map.get(a).push([b, val])
//       map.get(b).push([a, 1/val]);
//   }
//   return map;
// }

// console.log(buildMap(new Map(), [["a","b"],["b","c"]], [2.0,3.0]))

// inner = "window"
// function say() {
//   console.log(inner);
//   console.log(this.inner);
// }
// var obj = (function() {
//     var inner = '1-1'
//     return {
//       inner:'1-2',
//       say: function() {
//         console.log(inner)
//         console.log(this.inner)
//       }
//     }
// })()

// say()
// obj.say()
// obj.say = say
// obj.say()

function addSerial(arr) {
  var result = [];
  let map = {};
  arr.forEach((s, index) => {
    map[s] = map[s] || {
      length: 0,
      index,
      nums:[]
    }
    map[s].length++;
    map[s].nums.push(map[s].length);
  });
  result = arr.map(item => {
    return `${item}${ map[item].length === 1 ? '' : map[item].nums.shift()}`
  });
  return result
}
console.log(addSerial(['ab', 'c', 'ab', 'd', 'c']))


