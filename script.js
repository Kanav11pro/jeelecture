document.addEventListener("DOMContentLoaded", function () {
    // Load checkbox states from localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const checkbox = document.getElementById(key);
        if (checkbox) {
            checkbox.checked = localStorage.getItem(key) === "true";
        }
    }

    // Toggle subject content on header click
    document.querySelectorAll(".subject-header").forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            content.classList.toggle("active");
        });
    });
});

// Save the checkbox state to localStorage
function saveStatus(id) {
    const checkbox = document.getElementById(id);
    localStorage.setItem(id, checkbox.checked);
}

// Toggle checkbox on lecture-item click
function toggleCheckbox(id) {
    const checkbox = document.getElementById(id);
    checkbox.checked = !checkbox.checked;
    saveStatus(id);
}
