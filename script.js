const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (username && email && password) {
            localStorage.setItem('user', JSON.stringify({
                name: username,
                email: email,
                password: password
            }));
            
            alert('Регистрация успешна!');
            window.location.href = 'dashboard.html';
        } else {
            alert('Заполните все поля');
        }
    });
}

const displayNameSpan = document.getElementById('displayName');
if (displayNameSpan) {
    const userData = localStorage.getItem('user');
    if (userData) {
        const user = JSON.parse(userData);
        displayNameSpan.textContent = user.name;
    } else {
        displayNameSpan.textContent = 'гость';
    }
}

// КНОПКА ВЫХОДА
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('user');
        window.location.href = 'index.html';
    });
}