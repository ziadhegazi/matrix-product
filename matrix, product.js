let M = 3, N = 3, O = 4;

let a = [[1,1,1], 
         [2,2,2],
         [3,3,3]], 
    b = [[1,1,1,1], 
         [2,2,2,2],
         [3,3,3,3]], 
    c = [[0,0,0,0], 
         [0,0,0,0],
         [0,0,0,0]];
// console.log(c,b,a);
dot_product =(a, b)=> {
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < M; j++) {
            for (let k = 0; k < M; k++) {
                c[i][j] += a[i][k] * b[k][j];
}
            // console.log(c);
        }
    }
}
dot_product(a,b);
console.log(`this is the final c: ${c}`);
