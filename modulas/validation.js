
export function validateStudent(data) {
    const errors = {};

    
    if (!data.name || data.name.trim() === '') {
        errors.name = 'Name is required';
    } else if (data.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || data.email.trim() === '') {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(data.email)) {
        errors.email = 'Please enter a valid email address';
    }

   
    if (!data.major || data.major.trim() === '') {
        errors.major = 'Major is required';
    } else if (data.major.trim().length < 2) {
        errors.major = 'Major must be at least 2 characters';
    }

    // 4. Validate GPA
    const gpa = parseFloat(data.gpa);
    if (data.gpa === '' || data.gpa === null || data.gpa === undefined) {
        errors.gpa = 'GPA is required';
    } else if (isNaN(gpa)) {
        errors.gpa = 'GPA must be a number';
    } else if (gpa < 0 || gpa > 4) {
        errors.gpa = 'GPA must be between 0 and 4';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}


export function clearErrors() {
    const inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(input => {
        input.classList.remove('error');
    });

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
}

export function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.add('error');

       
        const existingError = field.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

      
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        field.parentElement.appendChild(errorDiv);
    }
}