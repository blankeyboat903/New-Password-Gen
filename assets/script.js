// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function genanddispassword() {
  const lett = 'abcdefghijklmnopqrstuvwxyz';
  const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const num = '1234567890';
  const specials = ',.!@#$%^&*';
  const options = [lett, caps, lett, caps, lett, caps, specials, num, num, num, num, specials];
  let opt, choose;
  let pass = "";
  for ( let i = 0; i < 12; i++ ) {
    opt = Math.floor(Math.random() * options.length);
    choose = Math.floor(Math.random() * (options[opt].length));
    pass = pass + options[opt][choose];
    options.splice(opt, 1);
  }
  let password = document.querySelector('#password');
  password.innerHTML = pass
}
// Add event listener to generate button
generateBtn.addEventListener("click", genanddispassword);