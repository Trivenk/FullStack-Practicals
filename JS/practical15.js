function check()
{
    const text = document.querySelector('.text1');
    const email = document.querySelector('.email');
    const pass = document.querySelector('.pass');
    const show = document.querySelector('.show');
    checkText(text);
    chechEmail(email);
    checkPass(pass);
    checkShow(show);
}

function checkText(val)
{
    let s = val.value.trim();
    if(s==="")
    {
        document.getElementById('1').innerText = "Username cannot be empty";
        val.style.border = '2px solid red';
        document.getElementById("icon4").style.visibility = "visible";
    }
    else{
        val.style.border = '2px solid green';
        document.getElementById("icon").style.visibility = "visible";
        document.getElementById("icon").style.marginTop = "15px";
        document.getElementById("icon4").style.visibility = "hidden";
        document.getElementById('1').innerText = "";
    }
}

function chechEmail(val)
{
    let s = val.value.trim();
    if(s==="")
    {
        document.getElementById('2').innerText = "Email cannot be empty";
        val.style.border = '2px solid red';
        document.getElementById("icon5").style.visibility = "visible";
        // document.getElementById("icon5").style.marginTop = "15px";

    }
    else if(validateEmail(val.value))
    {
        val.style.border = '2px solid green';
        document.getElementById("icon1").style.visibility = "visible";
        document.getElementById("icon1").style.marginTop = "15px";
        document.getElementById("icon5").style.visibility = "hidden";
        document.getElementById('2').innerText = "";
    }
    else{
        document.getElementById('2').innerText = "Invalid Email";
        val.style.border = '2px solid red';
        document.getElementById("icon5").style.visibility = "visible";
        document.getElementById("icon1").style.visibility = "hidden";
    }
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function checkPass(val)
  {
      let s = val.value;
      if(s==="")
      {
          document.getElementById('3').innerText = "Password1 cannot be empty";
          val.style.border = '2px solid red';
          document.getElementById("icon6").style.visibility = "visible";
      }
      else if(s!=document.querySelector('.show').value)
      {
        document.getElementById('3').innerText = "Password1 doesnot match with Password2";
        val.style.border = '2px solid red';
        document.getElementById("icon6").style.visibility = "visible";
        document.getElementById("icon2").style.visibility = "hidden";
      }

      else{
        val.style.border = '2px solid green';
        document.getElementById("icon2").style.visibility = "visible";
        document.getElementById("icon2").style.marginTop = "15px";
        document.getElementById("icon6").style.visibility = "hidden";
        document.getElementById('3').innerText = "";
      }
  }

  function checkShow(val)
  {
      let s = val.value;
      if(s==="")
      {
          document.getElementById('4').innerText = "Password2 cannot be empty";
          val.style.border = '2px solid red';
          document.getElementById("icon7").style.visibility = "visible";
      }
      else if(s!=document.querySelector('.pass').value)
      {
        document.getElementById('4').innerText = "Password2 doesnot match with Password1";
        val.style.border = '2px solid red';
        document.getElementById("icon7").style.visibility = "visible";
        document.getElementById("icon3").style.visibility = "hidden";
      }
      else{
        val.style.border = '2px solid green';
        document.getElementById("icon3").style.visibility = "visible";
        document.getElementById("icon3").style.marginTop = "15px";
        document.getElementById("icon7").style.visibility = "hidden";
        document.getElementById('4').innerText = "";
      }
  }