// learning strings .length
let stringName ="         James Ebube Tn    "
console.log(stringName.length)


// to upper case and lower case 
let capitalcase = stringName.toUpperCase()
let smallLetters = stringName.toLowerCase()
console.log(smallLetters)
console.log(capitalcase)


let book ="                   flying home oknd   kjnvdn  bv         "
console.log(book.trim())
console.log(book.trimEnd())
/*let fBook=book.trim()
let gBook =book.trimEnd()
let yBook=book.trimStart()
console.log(fBook)
console.log(gBook)
console*/


let signUpName ="    Jet";
let signInName ="Jet"

if ((signUpName.trim()) ===signInName){
    console.log("welcome Jet")
}else{
    console.log("wrong login details")
}


// indexOf and include 
let myEmail= "thankgodchike456gmail.com"
let the_email=myEmail.indexOf("456")// return a number when the statement 
console.log(the_email)

if(myEmail.includes("@")){
    console.log("welcome on board")
}else{
    console.log("please enter a valid email")
}



/*let forEmail= myEmail.includes("thank")// returns a boolean 
console.log(forEmail)*/



// StartWith()  and EndsWith()
let login_details = "Jettech 7"


/*let student_name= login_details.startsWith("Jettech ")
console.log(student_name)*/

/*if (login_details.startsWith(Jettech)) {
    console.log("welcome soldier")
}else if (login_details.endsWith(7)) {
    console.log("welcome my man")
}else {
    console.log("please find you way")
}

*/
// SLICE AND SUBSTRINGS

let text_string= "just follow God"

let slice_string= text_string.slice(0,7)
let sub_strings = text_string.substring(0,8)
console.log(slice_string)
console.log(sub_strings)


let next_for_slice=text_string.slice(-8)
let next_for_substrings=text_string.substring(-9)
console.log(next_for_slice)
console.log(next_for_substrings)


// Replace()  and Replaceall()
let message = "food is good and food is neccesary to sustain a person"
let replace_message =message.replace("food","Prayer")
let replace_all_message =message.replaceAll("food","Praye")
console.log(replace_message)
console.log(replace_all_message)


//real life example
let phone= "08161451730"
let replace_number=phone.replace("61451730","********0")
console.log(replace_number)


//class work
const mgs= "       HELLOW WORLD!     "
let Whitespace=mgs.trim();
let end_trim=mgs.trimStart();
let start_trim=mgs.trimEnd();
let start_with= mgs.startsWith("HELLOW");
let end_with =mgs.endsWith("WORLD");
let convertion=mgs.toLowerCase();
let position=mgs.indexOf("WORLD");
let check= mgs.includes("HELLOW");
let rep=mgs.replace("WORLD","NIGERIA");
let rep_2=mgs.replaceAll("L","1");
let findings=mgs.slice(3,8); 

console.log(Whitespace)
console.log(end_trim)
console.log(start_trim)
console.log(start_with)
console.log(end_with)
console.log(convertion)
console.log(position)
console.log(check)
console.log(rep)
console.log(rep_2)
console.log(findings)



// SPLIT  the return date type of a split is an array
const sentence= "Language: Javascript, Python, Nodejs, Html"
let by_coma =sentence.split(",")
let by_space=sentence.split(" ")
let by_letters = sentence.split("")

console.log(by_coma)
console.log(by_space)
console.log(by_letters)


let join_f=by_coma.join("-")
console.log(join_f)





// EXTRACTION BY SPLIT

let extaction= " Holy Spirit my Lover"
let split_3= extaction.split(" ")
console.log(split_3)
console.log(split_3[0])
console.log(split_3[1])





// 


//                    REAL LIFE PRACTICES 


// ========== SPLIT ==========
// splitting a full name into separate parts (like a registration form)
let fullName = "John Doe Smith"
let nameParts = fullName.split(" ")
console.log(nameParts)        // ["John", "Doe", "Smith"]
console.log(nameParts[0])     // "John"  (first name)
console.log(nameParts[2])     // "Smith" (last name)


// ========== TOUPPERCASE ==========
// making username always uppercase (like a user ID or ticket number)
let username = "john_doe"
let userId = username.toUpperCase()
console.log(userId)           // "JOHN_DOE"


// ========== TOLOWERCASE ==========
// email login - no matter how user types it, convert to lowercase
let emailInput = "JOHN.DOE@GMAIL.COM"
let email = emailInput.toLowerCase()
console.log(email)            // "john.doe@gmail.com"


// ========== INDEXOF ==========
// checking the position of @ in an email (to validate it)
let userEmail = "john@gmail.com"
let atPosition = userEmail.indexOf("@")
console.log(atPosition)       // 4  (@ is at position 4)

if (atPosition === -1) {
    console.log("Invalid email! No @ found")
} else {
    console.log("Valid email!")  // this runs
}


// ========== INCLUDES ==========
// checking if a message contains a banned word (like a chat app)
let userMessage = "I will hack your account"
let hasBadWord = userMessage.includes("hack")
console.log(hasBadWord)       // true

if (hasBadWord) {
    console.log("Message blocked!")   // this runs
}


// ========== STARTSWITH ==========
// checking if a phone number starts with the right country code
let phoneNumber = "08161451730"
let isNigerian = phoneNumber.startsWith("0")
console.log(isNigerian)       // true

if (isNigerian) {
    console.log("Nigerian number detected!")  // this runs
}


// ========== ENDSWITH ==========
// checking if an email ends with the right domain
let workEmail = "john@company.com"
let isWorkEmail = workEmail.endsWith(".com")
console.log(isWorkEmail)      // true

if (isWorkEmail) {
    console.log("Valid work email!")   // this runs
}


// ========== TRIM ==========
// removing accidental spaces when user types in a form
let inputName = "   John Doe   "
let cleanName = inputName.trim()
console.log(inputName)        // "   John Doe   "  (with spaces)
console.log(cleanName)        // "John Doe"  (spaces removed)