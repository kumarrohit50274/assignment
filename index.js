function findOdd(arr) {
    const count = (arr, val) => arr.filter((item) => item === val).length;
    let num = 0;
    arr.forEach((arrnum) => {
      if (count(arr, arrnum) % 2 !== 0) {
        num = arrnum;
      }
    });
    return num;
  }

// const arr = [1,2,2,3,3,3,4,3,3,3,2,2,1] output : 4
// const arr = [0,1,0,1,0] output : 0
// const arr = [1,1,2] output : 2
// const arr = [7] output : 7
// console.log(findOdd(arr));