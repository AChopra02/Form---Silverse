(function(){
    emailjs.init("2LQUhFoK3bFUC51Sy");
})();

document.getElementById('cabServiceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Collect form data
    const formData = {
        employeeName: document.getElementById('employeeName').value,
        employeeID: document.getElementById('employeeID').value,
        dropLocation: document.getElementById('dropLocation').value,
        mobileNumber: document.getElementById('mobileNumber').value,
        servicesRequired: document.getElementById('servicesRequired').value
    };
    
    // Send email
    emailjs.send("service_99p2v3l", "template_xfwwq27", formData)
        .then(function(response) {
            alert('Form submitted successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('Form submission failed. Please try again later.');
            console.log('FAILED...', error);
        });
});
