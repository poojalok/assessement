
function generatePassword(firstName, middleName, lastName) {
    
    const firstChars = firstName.slice(0, 2);
    const middleChars = middleName.slice(0, 2);
    const lastChars = lastName.slice(0, 2);

 
    const randomNumber = Math.floor(Math.random() * 900) + 100;


    const password = `${firstChars}${middleChars}${lastChars}${randomNumber}`;

    return password;
}


const firstName = "pooja";
const middleName = "santaji";
const lastName = "lokhande";

const generatedPassword = generatePassword(firstName, middleName, lastName);
console.log("Generated Password:", generatedPassword);
