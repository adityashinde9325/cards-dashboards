// edit profile

const userProfileBtn = document.getElementById('userProfileBtn');
const userDropdown = document.getElementById('userDropdown');

userProfileBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    userDropdown.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!userProfileBtn.contains(event.target) && !userDropdown.contains(event.target)) {
        userDropdown.classList.add('hidden');
    }
});
// edit profile


// open side bar

const sidebar = document.getElementById('cta-button-sidebar');
const toggleBtn = document.getElementById('sidebarToggle');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
});

// open side bar




// cards live priview

function updatePreview() {
    document.getElementById("previewCardName").innerText = document.getElementById("cardNameInput").value || "Card Name";
    document.getElementById("previewFirstName").innerText = (document.getElementById("firstNameInput").value + " " + document.getElementById("lastNameInput").value).trim() || "First Name Last Name";
    document.getElementById("previewPronouns").innerText = document.getElementById("pronounsInput").value || "Pronouns";
    document.getElementById("previewOfficeAddress").innerText = document.getElementById("officeAddressInput").value || "Office Address";
    document.getElementById("previewPhone").innerText = document.getElementById("phoneInput").value || "Phone";
    document.getElementById("previewSocialLinks").innerText = document.getElementById("socialLinksInput").value || "Social Links";

    let avatarInput = document.getElementById("avatarInput").files[0];
    if (avatarInput) {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("previewAvatar").src = e.target.result;
        }
        reader.readAsDataURL(avatarInput);
    }
}

function togglePreview() {
    let previewSection = document.getElementById("previewSection");
    let editSection = document.getElementById("editSection");

    // Only toggle in mobile view
    if (window.innerWidth < 768) {
        previewSection.classList.toggle("hidden");
        editSection.classList.toggle("hidden");
    }
}

// cards live priview




// logout model js

  const logoutButtons = document.querySelectorAll('.logout-btn');
  const logoutModal = document.querySelector('.logout-modal');
  const confirmLogout = document.querySelector('.confirm-logout');
  const cancelLogout = document.querySelector('.cancel-logout');

  let logoutTarget = null;

  // Show modal when any logout button is clicked
  logoutButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          logoutTarget = event.target; // Store clicked button
          logoutModal.classList.remove('hidden'); // Show modal
      });
  });

  // Hide modal when "No" is clicked
  cancelLogout.addEventListener('click', () => {
      logoutModal.classList.add('hidden');
  });

  // Confirm logout action
  confirmLogout.addEventListener('click', () => {
      alert('Logging out...'); 
      window.location.href = 'logout.php'; // Modify with actual logout logic
  });

// logout model js




// faq js 


  const editModal = document.querySelector('.edit-modal');
  const openModalBtn = document.querySelector('.open-edit-modal');
  const closeModalBtn = document.querySelector('.close-edit-modal');

  // Open modal
  openModalBtn.addEventListener('click', () => {
      editModal.classList.remove('hidden');
  });

  // Close modal
  closeModalBtn.addEventListener('click', () => {
      editModal.classList.add('hidden');
  });

  // Close modal when clicking outside content
  editModal.addEventListener('click', (e) => {
      if (e.target === editModal) {
          editModal.classList.add('hidden');
      }
  });

// faq js 