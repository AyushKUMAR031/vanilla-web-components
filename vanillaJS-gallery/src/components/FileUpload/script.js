// document.addEventListener('DOMContentLoaded',()=>{
//     const fileinput = document.getElementById('fileinput');
//     const fileInfo = document.getElementById('fileinfo');

//     fileinput.addEventListener('change', (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             fileInfo.textContent = `Selected file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
//         } else {
//             fileInfo.textContent = "No file selected";
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileinput');
    const fileInfo = document.getElementById('fileinfo');
    const errorMessage = document.getElementById('error-message');
    const browseBtn = document.getElementById('browseBtn');
    const fileDropZone = document.getElementById('fileDropZone');

    // Allowed file types & size
    const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];
    const maxSize = 2 * 1024 * 1024; // 2MB

    // Trigger file input when button is clicked
    browseBtn.addEventListener('click', () => fileInput.click());

    // Handle file selection
    fileInput.addEventListener('change', handleFile);

    // Handle drag & drop
    fileDropZone.addEventListener('dragover', (event) => {
        event.preventDefault();
        fileDropZone.style.borderColor = '#0056b3';
    });

    fileDropZone.addEventListener('dragleave', () => {
        fileDropZone.style.borderColor = '#007bff';
    });

    fileDropZone.addEventListener('drop', (event) => {
        event.preventDefault();
        fileDropZone.style.borderColor = '#007bff';
        fileInput.files = event.dataTransfer.files;
        handleFile();
    });

    function handleFile() {
        const file = fileInput.files[0];

        if (file) {
            // Check file type
            if (!allowedTypes.includes(file.type)) {
                showError("Invalid file type. Please select PNG, JPG, or PDF.");
                return;
            }

            // Check file size
            if (file.size > maxSize) {
                showError("File is too large. Maximum allowed size is 2MB.");
                return;
            }

            // If valid, show file details
            fileInfo.textContent = `Selected file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
            errorMessage.style.display = 'none'; // Hide error
        } else {
            fileInfo.textContent = "No file selected";
        }
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        fileInfo.textContent = ""; // Clear file info on error
    }
});