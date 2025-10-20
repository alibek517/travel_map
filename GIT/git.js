function saveProfileToLocalStorage(profiles) {
    localStorage.setItem('profiles', JSON.stringify(profiles));
}

function getProfilesFromLocalStorage() {
    const profiles = localStorage.getItem('profiles');
    return profiles ? JSON.parse(profiles) : [];
}

function renderProfiles() {
    const profiles = getProfilesFromLocalStorage();

    const profileContainer = document.getElementById('profileContainer');
    profileContainer.innerHTML = '';

    profiles.forEach((profile, index) => {
        const profileItem = document.createElement('li');
        profileItem.classList.add('profileItem');

        if (profile.isPremium) {
            profileItem.classList.add('premium-profile');
        }

        profileItem.innerHTML = `
            <p><strong>Ism:</strong> ${profile.name} ${profile.surname}</p>
            <p><strong>Git Tili:</strong> ${profile.language}</p>
            <p><strong>Telefon Raqami:</strong> ${profile.phone}</p>
            <p><strong>Ishlash Vaqti:</strong> ${profile.workTime}</p>
            <p><strong>Narx (soatiga):</strong> ${profile.price} so'm</p>
            <div class="button-container">
                <button class="edit-btn" onclick="editProfile(${index})">Tahrirlash</button>
                <button class="delete-btn" onclick="deleteProfile(${index})">O'chirish</button>
                <button class="premium-btn" onclick="togglePremium(${index})">${profile.isPremium ? 'Premium - O\'chirish' : 'Premium - Qo\'shish'}</button>
            </div>
        `;
        profileContainer.appendChild(profileItem);
    });
}

function editProfile(index) {
    const profiles = getProfilesFromLocalStorage();
    const profileToEdit = profiles[index];

    document.getElementById('name').value = profileToEdit.name;
    document.getElementById('surname').value = profileToEdit.surname;
    document.getElementById('language').value = profileToEdit.language;
    document.getElementById('phone').value = profileToEdit.phone;
    document.getElementById('workTime').value = profileToEdit.workTime;
    document.getElementById('price').value = profileToEdit.price;
    document.getElementById('isPremium').checked = profileToEdit.isPremium;

    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.innerText = 'Tahrirlashni saqlash';

    document.getElementById('translatorForm').setAttribute('data-editing-index', index);
}

function deleteProfile(index) {
    const profiles = getProfilesFromLocalStorage();
    profiles.splice(index, 1); 
    saveProfileToLocalStorage(profiles);
    renderProfiles();
    showSuccessMessage('Profil muvaffaqiyatli o\'chirildi!');
}

function togglePremium(index) {
    const profiles = getProfilesFromLocalStorage();
    const profile = profiles[index];

    profile.isPremium = !profile.isPremium;

    saveProfileToLocalStorage(profiles);
    renderProfiles();
    showSuccessMessage(profile.isPremium ? 'Profil premium bo\'ldi!' : 'Profil premium holatini yo\'qotdi!');
}

document.getElementById('translatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const language = document.getElementById('language').value;
    const phone = document.getElementById('phone').value;
    const workTime = document.getElementById('workTime').value;
    const price = document.getElementById('price').value;
    const isPremium = document.getElementById('isPremium').checked;

    const newProfile = {
        name: name,
        surname: surname,
        language: language,
        phone: phone,
        workTime: workTime,
        price: price,
        isPremium: isPremium
    };

    const profiles = getProfilesFromLocalStorage();

    const editingIndex = document.getElementById('translatorForm').getAttribute('data-editing-index');

    if (editingIndex !== null) {
        profiles[editingIndex] = newProfile;
        document.getElementById('translatorForm').removeAttribute('data-editing-index');
        document.querySelector('button[type="submit"]').innerText = 'Yuborish';
    } else {
        profiles.push(newProfile);
    }

    saveProfileToLocalStorage(profiles);
    document.getElementById('translatorForm').reset();
    renderProfiles();
    showSuccessMessage(editingIndex !== null ? 'Profil tahrirlandi!' : 'Profil muvaffaqiyatli qo\'shildi!');
});

function showSuccessMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.innerText = message;
    document.body.appendChild(successMessage);
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

window.onload = function() {
    renderProfiles();
};
