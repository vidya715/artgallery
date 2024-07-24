// Open the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  // Close the modal
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  
  // Close the modal when clicking outside the modal content
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = "none";
    }
  }
  
  // Form submission handling
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form values
    var username = document.getElementById('username').value;
    var mobile = document.getElementById('mobile').value;
    var comment = document.getElementById('comment').value;
  
    // Example validation (you can expand this as needed)
    if (username.trim() === '' || mobile.trim() === '' || comment.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Simulate sending data (replace with actual submission logic)
    alert('Form submitted successfully:\nUsername: ' + username + '\nMobile: ' + mobile + '\nComment: ' + comment);
  
    // Clear form fields after submission (optional)
    document.getElementById('username').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('comment').value = '';
  });
  