// Fungsi untuk registrasi user
function registerUser() {
    const fullname = document.getElementById('regFullname').value;
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (localStorage.getItem(username)) {
        alert('Username sudah terdaftar!');
    } else {
        localStorage.setItem(username, password);
        alert('Registrasi berhasil! - Silakan login di sini...');
        window.location.href = 'index.html'; // Redirect ke halaman login setelah registrasi
    }
}

// Fungsi untuk login user
function loginUser() {
    const username = document.getElementById('logUsername').value;
    const password = document.getElementById('logPassword').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        alert('Login berhasil!');
        localStorage.setItem('loggedInUser', username); // Simpan data sesi pengguna yang sedang login
        window.location.href = 'dashboard.html'; // Redirect ke halaman dashboard setelah login
    } else {
        alert('Username atau password salah!');
    }
}

// Fungsi untuk logout user
function logoutUser() {
    localStorage.removeItem('loggedInUser'); // Hapus data sesi pengguna yang sedang login
    alert('Anda telah logout.');
    window.location.href = 'index.html'; // Redirect ke halaman login setelah logout
}

// Fungsi untuk menampilkan greeting di halaman Dashboard
function displayGreeting() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const greetingElement = document.getElementById('greeting');
        greetingElement.textContent = `Selamat datang, ${loggedInUser}!`;
    } else {
        window.location.href = 'index.html'; // Redirect ke halaman login jika tidak ada pengguna yang login
    }
}

// Fungsi untuk menampilkan semua user terdaftar dalam format tabel
function displayRegisteredUsers() {
    const users = Object.keys(localStorage).filter(key => key !== 'loggedInUser');
    const userTable = document.getElementById('userTable');

    userTable.innerHTML = '';

    // Membuat header tabel
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Username</th><th>Password</th><th>Aksi</th>';
    userTable.appendChild(headerRow);

    users.forEach(function(username) {
        const userPassword = localStorage.getItem(username);
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${username}</td>
            <td>${userPassword}</td>
            <td>
                <button class="edit" onclick="editUser('${username}')">Edit</button>
                <button class="delete" onclick="deleteUser('${username}')">Hapus</button>
            </td>
        `;
        userTable.appendChild(row);
    });
}

// Fungsi untuk menghapus user dari localStorage
function deleteUser(username) {
    if (confirm(`Apakah Anda yakin ingin menghapus user ${username}?`)) {
        localStorage.removeItem(username);
        displayRegisteredUsers(); // Refresh daftar user setelah penghapusan
    }
}

// Fungsi untuk mengedit user di localStorage
function editUser(username) {
    const newPassword = prompt(`Masukkan password baru untuk user ${username}:`);
    if (newPassword) {
        localStorage.setItem(username, newPassword);
        displayRegisteredUsers(); // Refresh daftar user setelah pengeditan
    }
}

// Fungsi untuk menampilkan nama pengguna yang sedang login
function displayUserName() {
    const loggedInUser = localStorage.getItem('loggedInUser') || 'Nama Kamu';
    const userButton = document.querySelector('.dropbtn');
    if (userButton) {
        userButton.textContent = loggedInUser;
    }
}

// Fungsi untuk logout user
function logoutUser() {
    localStorage.removeItem('loggedInUser'); // Hapus data sesi pengguna yang sedang login
    alert('Anda telah logout.');
    window.location.href = '../Admin/index.html'; // Redirect ke halaman login setelah logout
}
