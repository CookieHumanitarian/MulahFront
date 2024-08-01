//Page 1 details
document.getElementById('check-points').addEventListener('click', function() {
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Allow only numerical input
    if (!/^\d+$/.test(phoneNumber)) {
        alert('Please enter a valid numerical mobile number.');
        return;
    }

    // Check if the number matches +60173527250
    var fullNumber = countryCode + phoneNumber;
    if (fullNumber === '+60173527250') {
        // Store the phone number for use on page 3
        localStorage.setItem('phoneNumber', fullNumber);

        // Hide page 1 and show page 2
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'block';
    } else {
        alert('This number is not allowed to check loyalty points.');
    }
});

document.getElementById('continue').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var email = document.getElementById('email').value;
    var noEmail = document.getElementById('no-email').checked;

    // Basic validation
    if (!name || !day || !month || !year || (!email && !noEmail)) {
        alert('Please fill in all required fields.');
        return;
    }

    // Store the registration details for use on page 3
    localStorage.setItem('name', name);
    localStorage.setItem('birthday', `${day}-${month}-${year}`);
    localStorage.setItem('email', noEmail ? 'No email address' : email);

    // Display user details on page 3
    var phoneNumber = localStorage.getItem('phoneNumber');
    var userDetails = `
        Phone Number: ${phoneNumber}<br>
        Name: ${name}<br>
        Birthday: ${day}-${month}-${year}<br>
        Email: ${noEmail ? 'No email address' : email}
    `;
    document.getElementById('userDetails').innerHTML = userDetails;

    // Hide page 2 and show page 3
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
});
