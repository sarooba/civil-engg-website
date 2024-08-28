window.addEventListener('load', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role') || 'all';
    const sortBy = urlParams.get('sortBy') || 'name';
    
    const response = await fetch('/profiles?role=${role}&sortBy=${sortBy}');
    const profiles = await response.json();
    
    const profileContainer = document.getElementById('profile-container');
    profileContainer.innerHTML = '';
    
    profiles.forEach(profile => {
        const profileCard = document.createElement('div');
        profileCard.className = 'profile-card';
        profileCard.innerHTML = `
            <h3>${profile.name}</h3>
            <p>Role: ${profile.role}</p>
            <p>Date Joined: ${profile.dateJoined}</p>
        `;
        profileContainer.appendChild(profileCard);
    });
});