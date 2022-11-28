function validateForm(){
let FullName = document.querySelector('#fullname').value
let FullNameLength = FullName.length

console.log(FullName)
console.log(FullNameLength)

let PhoneNumber = document.querySelector('#phonenumber').value
let phoneNumberLength = PhoneNumber.length

console.log(phoneNumberLength)


let emailId = document.querySelector('#email').value
let emailIdLength = emailId.length
console.log(emailId)



if(FullNameLength <= 3){
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