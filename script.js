document.getElementById('apply-filters').addEventListener('click', () => {
    const role = document.getElementById('filter-role').value;
    const sortBy = document.getElementById('sort-by').value;
    
    window.location.href = '/profiles.html?role=${role}&sortBy=${sortBy}';
});