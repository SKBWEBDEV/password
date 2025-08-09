const item = () => {
    const input = document.getElementById('inputPass').value
  const password = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+-'

  if( !input || input.value == ''){
    alert('দয়া করে কিছু সংখ্যা লিখুন')
  }

  number = ""


  for(let i = 0; i < input; i++){
    const randomPassword = Math.round(Math.random()* password.length)
    console.log(randomPassword);

   const okey = password[randomPassword]
   number += okey
    
  }
  document.getElementById('cool').innerText = number
}