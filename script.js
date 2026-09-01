/**
 * CampusCart — Client JavaScript Foundation
 * Phase 1: Landing Page Vanilla JS Interactions
 * Author: Chethan (chethansbsc24@rvu.edu.in)
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('🎓 CampusCart initialized successfully — Phase 1 Landing Page');

  // Static Listings Demo Data Store for Item Preview Modal & Filters
  const demoListingsData = {
    '1': {
      title: 'Engineering Mathematics — 2nd Edition',
      category: 'Books & Textbooks',
      catKey: 'books',
      price: '₹650',
      origPrice: '₹2,200',
      saved: 'Save 70%',
      condition: '✨ Like New (9/10)',
      sellerName: 'Deep P.',
      sellerDept: 'Computer Science Dept • Class of 2026',
      sellerAvatar: 'DP',
      avatarClass: '',
      location: 'Central Campus Library Reception',
      description: 'Erwin Kreyszig (10th / 2nd Indian Edition). Crystal clean condition with no highlighter ink or folded pages. Perfect for 1st & 2nd year core mathematics courses. Comes with a free laminated formula sheet.',
      specs: ['Erwin Kreyszig (Author)', 'Paperback Edition', 'All 1,200 pages intact', 'Zero water marks']
    },
    '2': {
      title: 'Casio FX-991CW ClassWiz Scientific Calculator',
      category: 'Calculators',
      catKey: 'calculators',
      price: '₹950',
      origPrice: '₹1,800',
      saved: 'Save 48%',
      condition: '📦 Open Box (10/10)',
      sellerName: 'Bhavana N.',
      sellerDept: 'Biotechnology Dept • Class of 2025',
      sellerAvatar: 'BN',
      avatarClass: 'avatar-bhavana',
      location: 'North Quad Student Lounge',
      description: 'Latest model approved for university exams. Features high-resolution 4-gradation display, spreadsheet calculation, and equation solver. Hard slide-on casing and warranty card included.',
      specs: ['Approved for University Semester Exams', 'Solar + Battery Powered', '540+ Functions', 'Hard Protective Case']
    },
    '3': {
      title: 'Dell 24" Full HD IPS Monitor (75Hz)',
      category: 'Electronics & Tech',
      catKey: 'electronics',
      price: '₹4,800',
      origPrice: '₹11,500',
      saved: 'Save 58%',
      condition: '👌 Excellent Condition',
      sellerName: 'Chethan S.',
      sellerDept: 'ECE Dept • Class of 2024',
      sellerAvatar: 'CS',
      avatarClass: 'avatar-chethan',
      location: 'Hostel Block B Common Room',
      description: 'Used for 1 semester in hostel. Ultrathin bezel, IPS wide viewing angles, AMD FreeSync, 75Hz refresh rate. Includes original high-speed HDMI cable and power adapter. Tested with zero dead pixels.',
      specs: ['24-inch 1080p IPS Panel', 'HDMI & VGA Ports', '75Hz Refresh Rate', 'Flicker-Free Anti-Glare']
    },
    '4': {
      title: 'Ergonomic Mesh Study Chair with Lumbar Cushion',
      category: 'Dorm Furniture',
      catKey: 'furniture',
      price: '₹1,800',
      origPrice: '₹4,500',
      saved: 'Save 60%',
      condition: '👌 Good Condition',
      sellerName: 'Chinmayee B.',
      sellerDept: 'AI & Data Science • Class of 2024',
      sellerAvatar: 'CB',
      avatarClass: 'avatar-chinmayee',
      location: 'Hostel Block A Main Lobby',
      description: 'High-density foam seat with breathable Korean mesh backrest. Heavy-duty nylon base with smooth 360-degree caster wheels. Relocating hostel room, so looking for a quick handover before finals.',
      specs: ['Hydraulic Class-4 Gas Lift', 'Adjustable Lumbar Support', 'Padded Armrests', 'Breathable Mesh Back']
    },
    '5': {
      title: 'Data Structures & Algorithms Handwritten Notes Bundle',
      category: 'Study Materials',
      catKey: 'notes',
      price: '₹350',
      origPrice: '₹1,200',
      saved: 'Save 70%',
      condition: '📝 Topper Notes (Crisp)',
      sellerName: 'Deep P.',
      sellerDept: 'Computer Science Dept • Class of 2026',
      sellerAvatar: 'DP',
      avatarClass: '',
      location: 'Campus Food Court & Cafeteria',
      description: 'Comprehensive 180-page spiral-bound notes covering Arrays, Linked Lists, Binary Trees, Graphs, Dynamic Programming, and Greedy Algorithms. Contains past 5 years university exam questions with step-by-step proofs.',
      specs: ['180 Spiral-bound Pages', 'Color-coded Diagrams', 'Time Complexity Cheatsheet', 'Past Exam Solved Problems']
    },
    '6': {
      title: 'Wireless Over-Ear Bluetooth Headphones',
      category: 'Electronics & Tech',
      catKey: 'electronics',
      price: '₹750',
      origPrice: '₹1,999',
      saved: 'Save 62%',
      condition: '✨ Like New',
      sellerName: 'Bhavana N.',
      sellerDept: 'Biotechnology Dept • Class of 2025',
      sellerAvatar: 'BN',
      avatarClass: 'avatar-bhavana',
      location: 'Student Sports & Activity Hub',
      description: 'Deep bass sound with 50mm drivers, built-in microphone for online team meetings, and up to 20 hours battery life. Includes Type-C charging cable, 3.5mm Aux cord, and soft velvet carry pouch.',
      specs: ['Bluetooth 5.2 + 3.5mm Aux', '20hr Battery Life', 'Passive Noise Isolation', 'Foldable Compact Design']
    },
    '7': {
      title: 'Engineering Drawing Board (A2) + Mini Drafter Kit',
      category: 'Other Essentials',
      catKey: 'other',
      price: '₹490',
      origPrice: '₹1,500',
      saved: 'Save 67%',
      condition: '👌 Complete Kit',
      sellerName: 'Chethan S.',
      sellerDept: 'ECE Dept • Class of 2024',
      sellerAvatar: 'CS',
      avatarClass: 'avatar-chethan',
      location: 'Mechanical Engineering Lab Block',
      description: 'Mandatory 1st & 2nd semester engineering graphics drawing board made of seasoned pinewood. Includes precision stainless-steel mini drafter with clamp, sheet clips, and protective carry bag.',
      specs: ['A2 Size Wooden Board (65x47cm)', 'Precision Mini Drafter', '4x Stainless Board Clips', 'Waterproof Carry Case']
    },
    '8': {
      title: 'Concepts of Physics by HC Verma (Vol 1 & 2 Complete Set)',
      category: 'Books & Textbooks',
      catKey: 'books',
      price: '₹420',
      origPrice: '₹1,100',
      saved: 'Save 62%',
      condition: '✨ Like New (Set of 2)',
      sellerName: 'Chinmayee B.',
      sellerDept: 'AI & Data Science • Class of 2024',
      sellerAvatar: 'CB',
      avatarClass: 'avatar-chinmayee',
      location: 'Central Library Lawn Entrance',
      description: 'Both Volume 1 and Volume 2 of the legendary HC Verma physics textbook. Clear conceptual theory and solved numerical exercises for university mechanics, electromagnetism, and optics modules.',
      specs: ['Complete 2-Volume Bundle', 'Crisp Spine Binding', 'Unmarked Problem Sets', 'Standard Bharti Bhawan Print']
    }
  };

  // --- 1. Toast Notification Utility ---
  function showToast(message, icon = '🎓', duration = 3800) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-msg">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-out');
      toast.addEventListener('animationend', () => {
        toast.remove();
      });
    }, duration);
  }

  // --- 2. Mobile Navigation Drawer ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileDrawer?.classList.add('open');
    mobileOverlay?.classList.add('open');
    mobileToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer?.classList.remove('open');
    mobileOverlay?.classList.remove('open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', openMobileMenu);
  mobileCloseBtn?.addEventListener('click', closeMobileMenu);
  mobileOverlay?.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // --- 3. Sticky Header Glassmorphic Styling & Scrollspy ---
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header background elevation
    if (scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Scrollspy active anchor update
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // --- 4. Real-Time Listing Search & Category Filter ---
  const listingCards = document.querySelectorAll('.listing-card');
  const filterPills = document.querySelectorAll('.filter-pill');
  const heroSearchInput = document.getElementById('heroSearchInput');
  const heroCategorySelect = document.getElementById('heroCategorySelect');
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  const emptySearchState = document.getElementById('emptySearchState');
  const btnResetFilters = document.getElementById('btnResetFilters');
  const quickTags = document.querySelectorAll('.quick-tag');
  const categoryCards = document.querySelectorAll('.category-card');

  let activeCategoryFilter = 'all';
  let activeSearchQuery = '';

  function applyListingFilters() {
    let visibleCount = 0;
    const query = activeSearchQuery.toLowerCase().trim();

    listingCards.forEach(card => {
      const itemCategory = card.getAttribute('data-category') || '';
      const itemTitle = (card.getAttribute('data-title') || '').toLowerCase();
      const itemLocation = (card.getAttribute('data-location') || '').toLowerCase();
      const itemSeller = (card.getAttribute('data-seller') || '').toLowerCase();
      const cardText = card.textContent.toLowerCase();

      // Category matching
      const matchesCategory = (activeCategoryFilter === 'all') || (itemCategory === activeCategoryFilter);

      // Text query matching
      const matchesQuery = !query || 
                           itemTitle.includes(query) || 
                           itemCategory.includes(query) || 
                           itemLocation.includes(query) || 
                           itemSeller.includes(query) ||
                           cardText.includes(query);

      if (matchesCategory && matchesQuery) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Update filter pills active state
    filterPills.forEach(pill => {
      if (pill.getAttribute('data-filter') === activeCategoryFilter) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Empty state visibility
    if (emptySearchState) {
      if (visibleCount === 0) {
        emptySearchState.style.display = 'block';
      } else {
        emptySearchState.style.display = 'none';
      }
    }
  }

  // Filter pill click handler
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      activeCategoryFilter = pill.getAttribute('data-filter') || 'all';
      if (heroCategorySelect) {
        heroCategorySelect.value = activeCategoryFilter;
      }
      applyListingFilters();
    });
  });

  // Hero Search Input handler (Live search)
  heroSearchInput?.addEventListener('input', (e) => {
    activeSearchQuery = e.target.value;
    applyListingFilters();
  });

  // Hero Category Dropdown change
  heroCategorySelect?.addEventListener('change', (e) => {
    activeCategoryFilter = e.target.value;
    applyListingFilters();
  });

  // Hero Search Button click
  heroSearchBtn?.addEventListener('click', () => {
    activeSearchQuery = heroSearchInput?.value || '';
    activeCategoryFilter = heroCategorySelect?.value || 'all';
    applyListingFilters();

    const listingsSection = document.getElementById('listings');
    if (listingsSection) {
      listingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Quick Tags Click
  quickTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const searchTerm = tag.getAttribute('data-search') || '';
      if (heroSearchInput) {
        heroSearchInput.value = searchTerm;
      }
      activeSearchQuery = searchTerm;
      applyListingFilters();

      const listingsSection = document.getElementById('listings');
      if (listingsSection) {
        listingsSection.scrollIntoView({ behavior: 'smooth' });
      }

      showToast(`Filtered listings for "${searchTerm}"`, '🔍', 2500);
    });
  });

  // Category Cards Click (Smooth Scroll + Filter)
  categoryCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = card.getAttribute('data-category') || 'all';
      activeCategoryFilter = cat;
      if (heroCategorySelect) {
        heroCategorySelect.value = cat;
      }
      applyListingFilters();

      const listingsSection = document.getElementById('listings');
      if (listingsSection) {
        listingsSection.scrollIntoView({ behavior: 'smooth' });
      }

      showToast(`Showing category: ${card.querySelector('.category-name')?.textContent || cat}`, '📂', 2500);
    });
  });

  // Footer Category Link Clicks
  document.querySelectorAll('.footer-links [data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.getAttribute('data-category') || 'all';
      activeCategoryFilter = cat;
      if (heroCategorySelect) {
        heroCategorySelect.value = cat;
      }
      applyListingFilters();

      const listingsSection = document.getElementById('listings');
      if (listingsSection) {
        listingsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Reset Filters Button
  btnResetFilters?.addEventListener('click', () => {
    activeCategoryFilter = 'all';
    activeSearchQuery = '';
    if (heroSearchInput) heroSearchInput.value = '';
    if (heroCategorySelect) heroCategorySelect.value = 'all';
    applyListingFilters();
    showToast('Listing filters reset to show all items', '🔄', 2500);
  });

  // --- 5. Item Detail Preview Modal ---
  const itemModal = document.getElementById('itemModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');

  function openItemModal(itemId) {
    const data = demoListingsData[itemId];
    if (!data || !modalBody || !itemModal) return;

    modalBody.innerHTML = `
      <div class="modal-item-header">
        <span class="modal-cat-tag">${data.category}</span>
        <span class="modal-condition-tag">${data.condition}</span>
      </div>

      <h3 class="modal-title">${data.title}</h3>

      <div class="modal-price-box">
        <span class="modal-price-main">${data.price}</span>
        <span class="modal-price-orig">${data.origPrice}</span>
        <span class="modal-save-tag">${data.saved}</span>
      </div>

      <div class="modal-desc-box">
        <h4>Item Description</h4>
        <p>${data.description}</p>
      </div>

      <div class="modal-desc-box">
        <h4>Verified Specs</h4>
        <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
          ${data.specs.map(spec => `<li>${spec}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-seller-box">
        <div class="modal-seller-avatar ${data.avatarClass}">${data.sellerAvatar}</div>
        <div class="modal-seller-meta">
          <span class="modal-seller-name">${data.sellerName} <span class="v-tick" style="color: var(--primary);">✓ Verified Student</span></span>
          <span class="modal-seller-sub">${data.sellerDept}</span>
        </div>
      </div>

      <div class="modal-pickup-spot">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary);"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span><strong>Preferred Exchange Hub:</strong> ${data.location}</span>
      </div>

      <div class="modal-actions">
        <button type="button" class="btn btn-primary" id="btnModalChat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Chat with ${data.sellerName.split(' ')[0]}
        </button>
        <button type="button" class="btn btn-secondary" id="btnModalSave">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
          Save to Wishlist
        </button>
      </div>
    `;

    itemModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Hook modal action buttons
    document.getElementById('btnModalChat')?.addEventListener('click', () => {
      showToast(`💬 Direct student messaging with ${data.sellerName} opens in Phase 2!`, '🤝', 4000);
    });

    document.getElementById('btnModalSave')?.addEventListener('click', () => {
      showToast(`⭐ "${data.title.substring(0, 24)}..." saved to your local session!`, '⭐', 3000);
    });
  }

  function closeItemModal() {
    itemModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Hook "View" buttons on cards
  document.querySelectorAll('.btn-view-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.getAttribute('data-item-id') || '1';
      openItemModal(itemId);
    });
  });

  modalCloseBtn?.addEventListener('click', closeItemModal);

  itemModal?.addEventListener('click', (e) => {
    if (e.target === itemModal) {
      closeItemModal();
    }
  });

  // ESC key to close modal & drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeItemModal();
      closeMobileMenu();
    }
  });

  // --- 6. Quick Action Button Feedback ---
  const sellButtons = [
    document.getElementById('btnSellTop'),
    document.getElementById('btnMobileSell'),
    document.getElementById('btnHeroSell'),
    document.getElementById('btnCtaSell')
  ];

  sellButtons.forEach(btn => {
    btn?.addEventListener('click', () => {
      showToast('🚀 Seller Listing Wizard: Student seller flow ready to connect to database in Phase 2!', '📝', 4500);
    });
  });

  const signInButtons = [
    document.getElementById('btnSignIn'),
    document.getElementById('btnMobileSignIn')
  ];

  signInButtons.forEach(btn => {
    btn?.addEventListener('click', () => {
      showToast('🔒 Student SSO Login: University email authentication (@campus.edu) configured for Phase 2!', '🛡️', 4500);
    });
  });
});
