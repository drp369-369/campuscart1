// Simple and Minimalistic JavaScript

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Button event listeners
const btnSignIn = document.getElementById('btnSignIn');
const btnSell = document.getElementById('btnSell');

if (btnSignIn) {
  btnSignIn.addEventListener('click', function() {
    alert('Sign In feature coming soon!');
  });
}

if (btnSell) {
  btnSell.addEventListener('click', function() {
    alert('Sell Item feature coming soon!');
  });
}

// Search form functionality
const searchForm = document.querySelector('.search-form');
if (searchForm) {
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchInput = document.querySelector('.search-input').value;
    const categorySelect = document.querySelector('.search-select').value;
    alert(`Searching for: ${searchInput} in category: ${categorySelect || 'All'}`);
  });
}

// Item card click handlers
document.querySelectorAll('.btn-view-item, .item-card .btn-outline').forEach(button => {
  button.addEventListener('click', function() {
    alert('Item details view coming soon!');
  });
});

// Add hover effects to navigation
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.color = '#2c3e50';
  });
});

console.log('CampusCart loaded successfully!');
