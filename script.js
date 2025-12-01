function validateForm() {
    // 1. Name validation
    let name = document.forms["StemClubForm"]["name"].value;
    if (name.trim() === "") {
        alert("Name must be filled out");
        return false;
    }

    // 2. Grade level validation (Corrected variable name and alert message)
    let grade = document.forms["StemClubForm"]["grade"].value;
    if (grade.trim() === "") {
        alert("Grade level must be selected"); // Changed from 'Address must be filled out'
        return false;
    }

    // 3. Email validation
    let email = document.forms["StemClubForm"]["email"].value;
    if (email.trim() === "") {
        alert("Email must be filled out");
        return false;
    }
     if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address");
        return false;
    }

    // 4. Club selection validation (Added logic)
    const selectElement = document.getElementById('club');
    // Get all selected options from the dropdown
    const selectedOptions = Array.from(selectElement.options).filter(option => option.selected);

    if (selectedOptions.length === 0) {
        alert("At least one club must be selected");
        return false;
    }
    
    // If all validation passes
    return true; 
}

// Multi-select dropdown for clubs (This logic remains OUTSIDE the validation function 
// as it sets up a behavior, it doesn't perform validation on submit)
const selectElement = document.getElementById('club');

if (selectElement) {
    selectElement.addEventListener('mousedown', function (e) {
        if (e.target.tagName === 'OPTION') {
            e.preventDefault();
            const option = e.target;
            option.selected = !option.selected;
        }
    });
}