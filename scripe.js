let mevalar = ["olma", "anor", "uzum", "nok"];

let a = []
let b = []

for (let item of mevalar) {
    if (item.includes("m")){
        a.push(item);
    } else {
        b.push(item)
    }
}

console.log(a);
console.log(b);
