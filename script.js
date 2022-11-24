function validateForm(){
let fullName = document.querySelector('#fullname').value
let fullNameLength = fullName.length

console.log(fullName)
console.log(fullNameLength)

let phoneNumber = document.querySelector('#phonenumber').value
let phoneNumberLength = phoneNumber.length

console.log(phoneNumberLength)


let emailId = document.querySelector('#email').value
let emailIdLength = emailId.length
console.log(emailId)



if(fullNameLength <= 3){
    document.querySelector('.error_message').innerText = 'Name is required with minium 4 characters!!'

} else if(phoneNumberLength !== 10){
    document.querySelector('.error_message').innerText = 'Phone number should be 10 digit'
}

// else if(emailIdLength >= 1){
//     document.querySelector('.error message').innerText = 'Email Id is Required'
// }

else{
    document.querySelector('.error_message').innerText = ''
}

}