let map = new Map();
map.set("name", "john");
let keys = [...map.keys()];

console.log(map);
console.log(keys);
keys.push("more");
console.log(keys);

//زمانی بنویسیم keys = map.keys, این key ها در یک ساختار object سیو میشوند.
// پس به شکلی که در خط ۳ نوشته شده کد رو مینویسیم تا کلید ها در یک ساختار ارایه ای دخیره شوند و بشود متد های ارایه را روی ان اجرا کرد
