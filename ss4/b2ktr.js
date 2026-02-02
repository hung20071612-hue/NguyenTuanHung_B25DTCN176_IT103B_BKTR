let result = 0;
for(let i = 1; i <= 50; i++) {
    if(i % 3 === 0 && i % 5 !== 0){
        console.log(`Fizz`);
        result += i;
    } else if (i % 3 !== 0 && i % 5 === 0) {
        console.log(`Buzz`);
    } else if (i % 3 === 0 && i % 5 === 0 ) {
        console.log(`FizzBuzz`);
    }
}
console.log(`Tổng của tất cả các số đã in ra chữ "Fizz" là: ${result}`);
