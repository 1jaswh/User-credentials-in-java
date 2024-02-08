function validateCredentials(email, password){
    const correctEmail = "kiberujoshua@gmail.com";
    const correctPassword = "21/U/19419/ps@2024";

// We use 'email.trim()' to remove any leading or trailing whitespace from the user-provided email

    if (email.trim() == correctEmail && password == correctPassword){
        console.log('User email is ${email}, login successfully!');
    }   else {
        console.log("Incorrect user credentials!");
    }
}