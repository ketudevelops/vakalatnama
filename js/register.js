document.addEventListener('DOMContentLoaded', (event) => {
    const selectElement = document.getElementById('exampleSelect');
    const outputSpan = document.getElementById('outputSpan');
    const form = document.getElementById('reg-form');
    selectElement.addEventListener('change', (event) => {
      const selectedValue = event.target.value;
      if (selectedValue == "1") {
          document.getElementById('head').innerHTML = "Advocate Registeration";
          outputSpan.innerHTML = `
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control bg-dark text-light border-light" id="name" placeholder="Enter name">
                    <div id="nameError" class="text-danger mt-1"></div>
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control bg-dark text-light border-light" id="email" placeholder="Enter email">
                    <div id="emailError" class="text-danger mt-1"></div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control bg-dark text-light border-light" id="password" placeholder="Password">
                    <div id="passwordError" class="text-danger mt-1"></div>
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" class="form-control bg-dark text-light border-light" id="confirmPassword" placeholder="Confirm Password">
          <div id="confirmPasswordError" class="text-danger mt-1"></div>
            </div>`;
            addValidation();
      }
      else if (selectedValue == "2") {
          document.getElementById('head').innerHTML = "Association Registeration";
       outputSpan.innerHTML = `<div class="form-group">
                      <label for="name">Name of Association</label>
                      <input type="text" class="form-control bg-dark text-light border-light" id="name" placeholder="Enter name">
                    <div id="nameError" class="text-danger mt-1"></div>
                      </div>
                    <div class="form-group">
                      <label for="email">Admin Email Address</label>
                      <input type="email" class="form-control bg-dark text-light border-light" id="email" placeholder="Enter email">
                    <div id="emailError" class="text-danger mt-1"></div>
                      </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control bg-dark text-light border-light" id="password" placeholder="Password">
                    <div id="passwordError" class="text-danger mt-1"></div>
                      </div>
                    <div class="form-group">
                      <label for="confirmPassword">Confirm Password</label>
                      <input type="password" class="form-control bg-dark text-light border-light" id="confirmPassword" placeholder="Confirm Password">
                    <div id="confirmPasswordError" class="text-danger mt-1"></div>
                      </div>`;
                      addValidation();
      }
      else if (selectedValue == "3") {
          document.getElementById('head').innerHTML = "Member of Association Registeration";
       outputSpan.innerHTML = `<div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" class="form-control bg-dark text-light border-light" id="name" placeholder="Enter name">
                    <div id="nameError" class="text-danger mt-1"></div>
                    </div>
                    <div class="form-group">
                      <label for="acode">Association Code</label>
                      <input type="text" class="form-control bg-dark text-light border-light" id="acode" placeholder="Enter association code">
                    <div id="acodeError" class="text-danger mt-1"></div>
                      </div>
                    <div class="form-group">
                      <label for="email">Your Email address</label>
                      <input type="email" class="form-control bg-dark text-light border-light" id="email" placeholder="Enter email">
                    <div id="emailError" class="text-danger mt-1"></div>
                    </div>
                    <div class="form-group">
                      <label for="password">Your Password</label>
                      <input type="password" class="form-control bg-dark text-light border-light" id="password" placeholder="Password">
                    <div id="passwordError" class="text-danger mt-1"></div>
                      </div>
                    <div class="form-group">
                      <label for="confirmPassword">Confirm Password</label>
                      <input type="password" class="form-control bg-dark text-light border-light" id="confirmPassword" placeholder="Confirm Password">
                    <div id="confirmPasswordError" class="text-danger mt-1"></div>
                      </div>`;
                      addValidation();
                  }else{
                       outputSpan.innerHTML = "";  
                    document.getElementById("submit").disabled = true;

                    }
                 
                });
                function addValidation() {
                    document.getElementById("submit").disabled = false;
                    form.addEventListener('submit', function (e) {
                        let isValid = true;
    
                        // Reset previous errors
                        const errorElements = document.querySelectorAll('.text-danger');
                        errorElements.forEach((el) => el.innerHTML = '');
    
                        const nameInput = document.getElementById('name');
                        const emailInput = document.getElementById('email');
                        const passwordInput = document.getElementById('password');
                        const confirmPasswordInput = document.getElementById('confirmPassword');
                        const acodeInput = document.getElementById('acode');
    
                        const nameValue = nameInput ? nameInput.value.trim() : '';
                        const emailValue = emailInput ? emailInput.value.trim() : '';
                        const passwordValue = passwordInput ? passwordInput.value.trim() : '';
                        const confirmPasswordValue = confirmPasswordInput ? confirmPasswordInput.value.trim() : '';
                        const acodeValue = acodeInput ? acodeInput.value.trim() : '';
    
                        if (nameInput) {
                            const nameRegex = /^[A-Za-z]+$/;
                             if(nameInput.value.trim() === ''){
                                document.getElementById('nameError').innerHTML = 'Name is required.';
                                isValid = false;
                            } else if (!nameRegex.test(nameValue)) {
                                document.getElementById('nameError').innerHTML = 'Name should contain only alphabets.';
                                isValid = false;
                            }
                        }
    
                        if (emailInput) {
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if(emailInput.value.trim() === ''){
                                document.getElementById('emailError').innerHTML = 'Email is required.';
                                isValid = false;
                            }else if (!emailRegex.test(emailValue)) {
                                document.getElementById('emailError').innerHTML = 'Invalid email format.';
                                isValid = false;
                            }
                        }
                        if (acodeInput) {
                             if(acodeInput.value.trim() === ''){
                                document.getElementById('acodeError').innerHTML = 'Association Code is required.';
                                isValid = false;
                            }
                        }
                        if (passwordInput) {
                            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                            if(passwordInput.value.trim() === ''){
                                document.getElementById('passwordError').innerHTML = 'Password is required.';
                                isValid = false;
                         } 
                         else if (!passwordRegex.test(passwordValue)) {
                            document.getElementById('passwordError').innerHTML = 'Password must be at least 8 characters long and include at least one number, one symbol, and one alphabet.';
                            isValid = false;
                        }
                    }
                        if (passwordInput && confirmPasswordInput) {
                            if (passwordValue !== confirmPasswordValue) {
                                document.getElementById('confirmPasswordError').innerHTML = 'Passwords do not match.';
                                isValid = false;
                            }
                        }
                       
                        if (!isValid) {
                            e.preventDefault(); // Prevent form submission if validation fails
                        document.getElementById("submit").classList.add('btn-danger');
                        }
                    });
                }
            });