function sum() {
  let num = 0;
  for (let i = 1; i <= 1000; i++) {
    num = num + i;
  }
  console.log(num);
}

sum();

function rervse(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr
}
console.log(rervse([1, 2, 3, 4, 5]));

function even() {
  let even_num = 0;
  let odd_num = 0
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      even_num += i
    } else {
      odd_num += i
    }
  }
  return { even_num, odd_num }
}

let obj = even();
console.log(obj);

function rervse(arr) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

      }
    }
  }
  return arr
}
console.log(rervse([3, 1, 5, 9, 2]));

function max(...arr) {
  let max = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
console.log(max(1, 2, 3, 100, 5, 6));

function xhs() {
  let xhs = []
  for (let i = 100; i < 1000; i++) {
    let a = parseInt(i / 100);
    let b = parseInt(i / 10 % 10);
    let c = parseInt(i % 10);
    if (a * a * a + b * b * b + c * c * c == i) {
      xhs.push(i)
    }
  }
  return xhs
}
console.log(xhs());

function nine() {
  let str = ''
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${j}×${i}＝${j * i}\t`
    }
    str += '\n'
  }
  return str
}
console.log(nine());

{
  let str = 'dsaffsfawffdfsfff';
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  let mix = '';
  let num = 0;
  for (o in obj) {
    if (obj[o] > num) {
      mix = o;
      num = obj[o]
    }
  }
  console.log(`出现最多的是${mix},出现次数为${num}`);
}

{
  let arr = [1, 2, 3, 4, 5, 2, 3, 4, 10];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i])
    }
  }
  console.log(newArr);
}

{
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(new Array())
    for (let j = 0; j < 3; j++) {
      arr[i][j] = 5;
    }
  }
  console.log(arr);
}

{
  let arr = [3, 99, 8, 6, 21, 77];
  arr.sort((a, b) => a - b)
  arr.sort((a, b) => b - a)
  console.log(arr);
  arr.reverse();
  console.log(arr);
  let arr1 = ['a', 'b', 'c']
  arr_con = arr.concat(arr1)
  console.log(arr_con);
  let arr_num = arr.concat([155, 333, 222, 666], 1111, 111111);
  console.log(arr_num);
  console.log(arr);
  let arr_delete = arr.slice(-5, -4);
  console.log(arr_delete);
  let arr2 = arr.splice(3);  
  console.log(arr2);  
  let arra = [1,2,3,4,5];   
  arra.splice(2);  
  console.log(arra);  
  let arrb = [1,2,3,4,5];  
  arrb.splice(2,1,1000);  
  console.log(arrb);    
  let arrc = [1,2,3,4,5];     
  arrc.splice(3,0,1000,2000);  
  console.log(arrc);  
  let arrd = [3, 99, 8, 6, 21, 77];  
  let a = arrd.join('-');  
  console.log(a);
  
}  

{
  let arr = [1,2,3,4,5,6,7,8,9,];
  let newArr = [];   
  arr.forEach(item => {
    if(item > 6) {
      newArr.push(item)
    }
    return newArr
  })
  console.log(newArr);

 //let arr1 = arr.filter(item => item > 5);  
 let arr2 = arr.filter(item => !(item > 5))  
 console.log(arr2);   

 let arr_map = arr.map(item => item * 3);  
 console.log(arr_map);  

 let arr_some = arr.some(item => item > 5);  
 console.log(arr_some);  

 let arr_every = arr.every(item => item > 0);  
 console.log(arr_every);  

 let arr_dex = arr.indexOf(100);  
 console.log(arr_dex);  

 let arr_includes = arr.includes(5);  
 console.log(arr_includes);  

 let arr_includess = arr.includes(100);  
 console.log(arr_includess);  

 let arr_find = arr.find(item => item > 5);  
 console.log(arr_find);  

 let arr_findIndex = arr.findIndex(item => item > 5);  
 console.log(arr_findIndex);
}    

{
  let str = 'abcdefg';  
  let a = str.indexOf('b');  
  console.log(a);  
  let b = str.charCodeAt('d');  
  console.log(b);    
  let c = str.substr(3,1);  
  console.log(c);   
  let str_slice = str.slice(3,5);  
  console.log(str_slice);  
  let str_replace = str.replace('fg','bbq')  
  console.log(str_replace);
  
  let str_startswith = str.startsWith('abc')   
  let str_endswith = str.endsWith('fg') 
  console.log(str_startswith);  
  console.log(str_endswith);  
  let str_repeat = str.repeat('3')  
  console.log(str_repeat);  
  let str_split = str.split('').reverse().join('') 
  console.log(str_split);
} 

{
  function Foo(name,old) {
    this.name = name;  
    this.old = old;
  };  
  Foo.prototype.revers = function(name) {
    let a = name.split('').reverse().join('');
    return a
  }  
  let tjh = new Foo('唐剑豪',18);  
  console.log(tjh.name);  
  
  let a = tjh.revers('唐剑豪');  
  console.log(a);
}  

{ //resove,reject
  let promise = new Promise(a => {
    setTimeout(() => a('ok'),2000)
  })
  .then(item => {
    return item + 'no'
  }).then(item => {console.log(item);})
}

{
  function test() {
   let a = new Promise((resolve,reject) => {
      setTimeout(() => {
       // resolve(1);  
        reject('err')
      },3000)
    }).then(item => {
      return item + 1
    }).then(item => {
      return item + 1
    })  
   return a
  }  
  test().then(item => console.log(item)).catch(item => console.log(item))
}  

{
  let str1 = 'adafaaaaadfrfa';   
  let index = str1.indexOf('a'); 
  let num = 0; 
  while(index !== -1) {
    console.log(index);
    num++;  
    index = str1.indexOf('a',index + 1)
  }  
  console.log('a出现的次数为' + num);
}

{
  let arr = ['a','c','a','b','d','a'];  
  let index = arr.indexOf('a');  
  let num = 0;  
  while(index !== -1) {
      console.log(index);  
      num++;  
      index = arr.indexOf('a',index + 1)
  } 
  console.log('a出现的次数为:'+ num);
}  

{
  function test(str) {
    let index = str.indexOf('a');  
    let num = 0;  
    while(index !== -1) {
     num++;  
     index = str.indexOf('a',index + 1);  
    }
    return `aaaa出现的次数为${num}`
  }   
  let a = test('aadadadada');  
  console.log(a);
}
