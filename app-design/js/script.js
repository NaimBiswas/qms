document.addEventListener('DOMContentLoaded', function() {
    // Initialize calendar only if element exists
    if (document.getElementById('calendar')) {
        flatpickr("#calendar", {
            inline: true,
            static: true,
            enableTime: true,
            defaultDate: "tomorrow",
            onDayCreate: function(dObj, dStr, fp, dayElem) {
                
            }
        });
    }
});