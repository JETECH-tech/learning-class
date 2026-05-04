// assignment 2

const name="Nigeria is awesome";
console.log(name);
const myName=name.substring(0,8);
console.log (myName);


// slice
const myAwesome=name.slice(11);
console.log (myAwesome);

const myIs=name.slice(8,11);
console.log (myIs);

// for Split
const names="John,Jane,Doe";
const arr=names.split(",");
console.log(arr);

const joinAll=arr.join(" ")
console.log(joinAll)

/// for path
const path="/user/home/docs";
const doc=path.split("/");
console.log(doc)

const home=path.split("/")[2];
console.log(home)

//for mix
const email="user@example.com";
console.log(email);
const user=email.split("@")[0];
console.log(user)

const book=email.endsWith(".com")
console.log(book)

const fire=email.replace("@", "AT")
console.log(fire)