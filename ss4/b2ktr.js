let result = 0;
for(let i = 1; i <= 50; i++) {
    if(i % 3 === 0 && i % 5 !== 0){
        console.log(`Số ${i} in ra: Fizz`);
        result += i;
    } else if (i % 3 !== 0 && i % 5 === 0) {
        console.log(`Số ${i} in ra: Buzz`);
    } else if (i % 3 === 0 && i % 5 === 0 ) {
        console.log(`Số ${i} in ra: FizzBuzz`);
    } else {
        console.log(`Số ${i} không in`);
    }
}
console.log(`Tổng của tất cả các số đã in ra chữ "Fizz" là: ${result}`);
