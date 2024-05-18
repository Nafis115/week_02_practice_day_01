function monthly_saving(arr, n) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3000) {
            let r1 = arr[i] * 20 / 100;
            arr[i] = arr[i] - r1;
        }
        sum += arr[i];
    }

    const saving = sum-n;
    if (saving < 0) {
        return "earn more money";
    } else {
        return saving;
    }
}

let arr = [1000, 2000, 3000];

console.log(monthly_saving(arr,5400))

let arr1 = [1000, 2000, 2500];

console.log(monthly_saving(arr1,5000))

let arr11 = [900, 2700, 3400];

console.log(monthly_saving(arr11,10000));

let arr12 = [900, 2700, 3400];

console.log(monthly_saving(5400,arr12));

