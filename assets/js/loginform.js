// Form switching
const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');
const loginIn = document.getElementById('login-in');
const loginUp = document.getElementById('login-up');

signUp.addEventListener('click', () => {
    loginIn.classList.add('none');
    loginUp.classList.remove('none');
});

signIn.addEventListener('click', () => {
    loginIn.classList.remove('none');
    loginUp.classList.add('none');
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeToggle.classList.remove('bx-moon');
        themeToggle.classList.add('bx-sun');
    }
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.classList.remove('bx-sun');
        themeToggle.classList.add('bx-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.classList.remove('bx-moon');
        themeToggle.classList.add('bx-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// Password visibility toggle
const passwordToggles = document.querySelectorAll('.password-toggle');
passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const input = toggle.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            toggle.classList.remove('bx-hide');
            toggle.classList.add('bx-show');
        } else {
            input.type = 'password';
            toggle.classList.remove('bx-show');
            toggle.classList.add('bx-hide');
        }
    });
});

// Form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        
        // Reset all error messages
        form.querySelectorAll('.error-message').forEach(error => {
            error.style.display = 'none';
        });

        // Reset success message
        form.querySelector('.success-message').style.display = 'none';

        // Validate each input
        form.querySelectorAll('.login__input').forEach(input => {
            if (input.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    const errorMsg = input.parentElement.querySelector('.error-message');
                    errorMsg.style.display = 'block';
                    isValid = false;
                }
            } else if (input.type === 'password') {
                if (input.value.length < 6) {
                    const errorMsg = input.parentElement.querySelector('.error-message');
                    errorMsg.style.display = 'block';
                    isValid = false;
                }
            } else if (input.placeholder === 'Username') {
                if (input.value.length < 3) {
                    const errorMsg = input.parentElement.querySelector('.error-message');
                    errorMsg.style.display = 'block';
                    isValid = false;
                }
            }
        });

        // Show success message if form is valid
        if (isValid) {
            const successMsg = form.querySelector('.success-message');
            successMsg.style.display = 'block';
            
            // Clear form inputs
            form.querySelectorAll('.login__input').forEach(input => {
                input.value = '';
            });

            // Hide success message after 3 seconds
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 3000);

            // Add animation to success message
            successMsg.style.animation = 'fadeInOut 3s';
        }
    });
});

// Add input focus effects
const inputs = document.querySelectorAll('.login__input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.borderColor = 'var(--primary-color)';
    });

    input.addEventListener('blur', () => {
        input.parentElement.style.borderColor = 'transparent';
    });
});

// Add loading state to buttons
const buttons = document.querySelectorAll('.login__button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.form.checkValidity()) {
            button.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Processing...';
            setTimeout(() => {
                button.innerHTML = button.getAttribute('data-original-text') || 'Submit';
            }, 2000);
        }
    });
    // Store original button text
    button.setAttribute('data-original-text', button.innerHTML);
});

// Remember user preference for dark mode
function setInitialTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark') {
            themeToggle.classList.remove('bx-moon');
            themeToggle.classList.add('bx-sun');
        }
    } else if (prefersDark) {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.classList.remove('bx-moon');
        themeToggle.classList.add('bx-sun');
        localStorage.setItem('theme', 'dark');
    }
}

// Call the function when page loads
setInitialTheme();

// Add smooth transition when switching forms
function addFormTransition() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.style.transition = 'opacity 0.3s ease-in-out';
    });
}

addFormTransition();

// Add keypress support for form submission
forms.forEach(form => {
    form.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            form.querySelector('.login__button').click();
        }
    });
});

// Add social media hover animations
const socialIcons = document.querySelectorAll('.login__social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-3px)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0)';
    });
});