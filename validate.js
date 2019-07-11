function validateForm() {
  let role = document.getElementById("role");
  let selectedRole = role.options[role.selectedIndex].value;
  let gender = document.getElementById("gender");
  let selectedGender =gender.options[gender.selectedIndex].value;
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(demo.emailAddr.value))){
      alert("Please enter a valid email address");
  }
  else if (selectedRole=="default") {
    alert("Choose a role");
  }
  else if (!(/^[a-zA-Z]+$/.test(demo.fname.value))){
    alert("Invalid FirstName");
  }
  else if (!(/^[a-zA-Z]+$/.test(demo.lname.value))){
    alert("Invalid LastName");
  }
  else if (selectedGender=="default") {
    alert("Choose a Gender");
  }
  else if(!(/^\d{10}$/.test(demo.phnnum.value))){
    alert("Enter valid ContactNumber");
  }
  else{
    alert("Entry Successful!");
  }
}
