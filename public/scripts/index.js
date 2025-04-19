 for (let i = 0; i < 80; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDuration = Math.random() * 2 + 1 + "s";
    document.body.appendChild(star);
  }

  // Form Submit Logic (for demo)
  const un=document.querySelector("#Username");
  const pswd=document.querySelector("#Password");
  
  async function login(e) {
    e.preventDefault();
    const response=await fetch("/login",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        username:un.value,
        password:pswd.value
      })
    })
    const data=await response.json();
    if(data.status=="success"){
    alert("Welcome back! 🌼 Let's log those thoughts.");
    window.location.href="/dashboard";
  }
  else{
    alert("Aww shucks. Try again baby girll🌸")
  }
  }