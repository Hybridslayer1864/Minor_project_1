for (let i = 0; i < 80; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDuration = Math.random() * 2 + 1 + "s";
    document.body.appendChild(star);
  }

  // Form Submit Logic (for demo)
  const uid=document.querySelector("#Username");
  const password=document.querySelector("#Password");
  const confirm=document.querySelector("#cpass");
  async function signUp(e) {
    e.preventDefault();
    const response=await fetch("/signup",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({username:uid.value,password:password.value,cpassword:confirm.value})
    });
    const value= await response.json();
    if(value.status==="success"){
      alert("Welcome aboard! 🌼 Let's start this journey together.");
      window.location.href = "\\";
    }
    else if(value.err==="confirmation"){
      alert("Aww Sweetie. Check ur password🌸");
    }
  }