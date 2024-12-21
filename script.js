document.addEventListener('DOMContentLoaded', function() {
    // Populate dropdowns
    const cropSelect = document.getElementById('crop');
    const monthSelect = document.getElementById('month');
    const stateSelect = document.getElementById('state');

    function populateSelect(select, options) {
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            select.appendChild(optionElement);
        });
    }

    populateSelect(cropSelect, CROPS);
    populateSelect(monthSelect, MONTHS);
    populateSelect(stateSelect, STATES);

    // Form validation and submission
    const form = document.getElementById('agricultureForm');
    const pincode = document.getElementById('pincode');

    pincode.addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '').slice(0, 6);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            crop: cropSelect.value,
            month: monthSelect.value,
            language: document.getElementById('language').value,
            country: document.getElementById('country').value,
            state: stateSelect.value,
            pincode: pincode.value
        };

        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
        form.reset();
        document.getElementById('country').value = 'India'; // Reset but keep India as country
    });
});