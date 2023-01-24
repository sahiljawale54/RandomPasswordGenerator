const btnEl = document.querySelector(".btn")
const inputEl = document.getElementById("input")
const copyIcon = document.querySelector(".fa-copy")
const alertEl = document.querySelector(".alert-container")

btnEl.addEventListener("click", ()=>{
  createPassword()
})

copyIcon.addEventListener("click",()=>{
  copyPassword()
  if(inputEl.value){
    alertEl.classList.remove("active");
    setTimeout(()=>{
      alertEl.classList.add("active");
  },2000)
  }
})

createPassword = ()=> {
  const chars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+{}?:";
  const passwordlen = 14;
  let password = "";

  for (let index = 0; index < passwordlen; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  
}

copyPassword = ()=>{
  inputEl.select();
  inputEl.setSelectionRange(0 , 9999);
  navigator.clipboard.writeText(inputEl.value);
  alertEl.innerText = "Password Copied !!";
}

