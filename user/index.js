let userDatabase = {
  'ozioma' : {
    firstname: 'ozioma',
    lastname: 'iwunze',
    email: 'eunyben4@gmail.com',
    accountactivated: true,
    password: 'eunicepass'
  },

  'chikapea' : {
    firstname: 'chika',
    lastname: 'iwunze',
    email: 'chika4@gmail.com',
    accountactivated: true,
    password: 'chikapass'
  },

  'ngozible' : {
    firstname: 'ngozi',
    lastname: 'iwunze',
    email: 'ngozi4@gmail.com',
    accountactivated: true,
    password: 'ngozipass'
  }
};

function showUserDetails() {

  // Enter username
  let username = prompt("Enter your username");

  while (validateUsername(username) == false) {
    username = prompt("Enter your username again");
  }
 

  if (username == null) {
    return
  }

  // Enter password
  let password = prompt("Enter your password");
    
  while (validatePassword(password) == false) {
      password = prompt("Enter your password again")
  }
  

  if (password == null) {
    return;
  }

  // confirm password

  let passwordConfirm  = prompt('Confirm your password');

  while (passwordConfirm !== password) {
    passwordConfirm  = prompt('Password do not match, Confirm your password again')

    if (passwordConfirm == null) {
      return;
    }
  }

  

  const user = userDatabase[username];
  
  if (user == undefined) {
    alert("User not found, please register");
    return
  }
  if (user.password !== password) {
    confirmPasswd();
    if (password !== passwordConfirm) {
      confirmPasswd();
    }
  }
 
      console.log(user)
      alert(`
      user found with details\n
      firstname: ${user.firstname}
      lastname: ${user.lastname}
      email: ${user.email}
      account activated: ${user.accountactivated}`
    )
  
}

showUserDetails()
alert('finished')

// confirm and reconfirm password
function confirmPasswd() {
  password = prompt('Enter the correct password')
  if (password == null) {
    return;
  }
  passwordConfirm = prompt('Confirm the password')
  if (passwordConfirm == null) {
    return;
  }
}

// validate username function
function validateUsername(username) {
  if (username == null) {
    return true;
  }
  if (username.length > 10) {
    return false
  } else {
    return true;
  }
}

// validate password function
function validatePassword(password) {
  if (password == null) {
    return true;
  }
  if (password.length < 6) {
    return false;
  }else {
    return true;
  }
}