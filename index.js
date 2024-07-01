document.getElementById('bicycle-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmation-container').classList.remove('hidden');
    document.getElementById('bicycle-form').classList.add('hidden');
});

document.getElementById('list-another').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('confirmation-container').classList.add('hidden');
    document.getElementById('bicycle-form').classList.remove('hidden');
    document.getElementById('bicycle-form').reset();
});

document.getElementById('view-listings').addEventListener('click', function(event) {
    event.preventDefault();
    // Here you can add the functionality to view all listings
    alert('Functionality to view all listings can be added here.');
});
