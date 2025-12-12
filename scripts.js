// Melken Handyman Solutions - Website Scripts

// Google My Business API Configuration - MOVED TO SERVER SIDE FOR SECURITY
// DO NOT PUT API KEYS IN CLIENT-SIDE CODE!
const GOOGLE_API_CONFIG = {
    apiKey: '', // API key removed for security - implement server-side proxy
    accountId: '', // Account ID removed for security
    locationId: '', // Location ID removed for security
    maxReviews: 10 // Number of reviews to display
};

// Angi Reviews Data - Your actual Angi reviews
const angiReviewsData = {
    platform: 'Angi',
    rating: 5.0,
    reviewCount: 8,
    reviews: [
        {
            name: "Julian R.",
            initials: "JR",
            rating: 5,
            date: "1 day ago",
            text: "Kendall has been fantastic! Professional and courteous. He has done many projects in my house from electrical to woodworking. He even helped me with projects on my Airstream travel trailer! I highly recommend him and his work.",
            verified: true,
            platform: "Angi"
        },
        {
            name: "Mary B.",
            initials: "MB",
            rating: 5,
            date: "1 day ago",
            text: "Melken arrive at time promised. Disassembled my old desk and put together a new electronic standing desk. The removed all trash and spent time showing me how to operate my new standing desk. I would highly recommend them.",
            verified: true,
            platform: "Angi"
        },
        {
            name: "Dorothy A.",
            initials: "DA",
            rating: 5,
            date: "1 day ago",
            text: "Melken Solutions were very professional and listened to my questions and answered them clearly and made sure that my questions were answered to my satisfaction. They completed the little projects I needed done in a timely manner and cleaned up when they were done. I will use them again and plan to have them complete some projects for my mother-in-law.",
            verified: true,
            platform: "Angi"
        },
        {
            name: "Taryn W.",
            initials: "TW",
            rating: 5,
            date: "1 day ago",
            text: "Kendall is very knowledgeable, has a great attitude and is always willing to help. He is the first person we call when we need help.",
            verified: true,
            platform: "Angi"
        },
        {
            name: "Marykate B.",
            initials: "MKB",
            rating: 5,
            date: "2 days ago",
            text: "Melken was amazing. They installed my backyard fence for a great price and were done by dinner time. They left no mess and started two days after we said we needed a new fence. They were kind, not intrusive, and the fence looked perfect! They took their time to make sure the measurements were exact. This BIG project melken did for us helped to improved the curb appeal and will add to the return on investment for our home. Will definitely use again. Thank you Melken!!",
            verified: true,
            platform: "Angi"
        },
        {
            name: "Lonnie Y.",
            initials: "LY",
            rating: 5,
            date: "2 days ago",
            text: "More than handyman… knows electronic internet wi-fi stuff. Would highly recommend and would absolutely hire again!",
            verified: true,
            platform: "Angi"
        },
        {
            name: "Patty G.",
            initials: "PG",
            rating: 5,
            date: "2 days ago",
            text: "Very pleasant and knowledgeable to work with great communication completed a job well done. Would highly recommend",
            verified: true,
            platform: "Angi"
        },
        {
            name: "Melanie W.",
            initials: "MW",
            rating: 5,
            date: "2 days ago",
            text: "Needed repairs to the hinges to kitchen cabinets. Great service and professional work!",
            verified: true,
            platform: "Angi"
        }
    ]
};

// Combined reviews data
let allReviewsData = {
    googleRating: 0,
    googleCount: 0,
    angiRating: 0,
    angiCount: 0,
    overallRating: 0,
    totalReviews: 0,
    reviews: []
};

// Service data for modals
const serviceData = {
    'rental-property-turnover': {
        title: 'Rental Property Turnover',
        description: 'Complete turnover services to get your rental property ready for new tenants quickly and efficiently. We handle all the details so you can focus on finding great tenants.',
        features: [
            'Deep cleaning and sanitization',
            'Paint touch-ups and full repaints',
            'Minor repairs and maintenance',
            'Fixture replacements',
            'Move-in ready preparation',
            'Property inspection reports'
        ]
    },
    'smart-home-setup': {
        title: 'Smart Home Setup',
        description: 'Professional installation and setup of smart home devices to modernize and automate your living space. From thermostats to security systems, we make your home smarter.',
        features: [
            'Smart thermostat installation',
            'Security camera setup',
            'Smart doorbell installation',
            'Home automation systems',
            'Wi-Fi network optimization',
            'Device configuration and training'
        ]
    },
    'home-safety-accessibility': {
        title: 'Home Safety & Accessibility Improvements',
        description: 'Essential safety upgrades and accessibility modifications to make your home safer and more comfortable for all family members and visitors.',
        features: [
            'Grab bar installation',
            'Ramp construction',
            'Stair railings and handrails',
            'Non-slip surface installation',
            'Doorway widening',
            'Bathroom safety modifications'
        ]
    },
    'honey-do-list': {
        title: 'Honey-Do List Services',
        description: 'Tackle your entire honey-do list with our comprehensive handyman services. We handle all those pending projects so you can enjoy your free time.',
        features: [
            'Multiple small repairs',
            'Maintenance tasks',
            'Organization projects',
            'Seasonal preparations',
            'Custom project solutions',
            'Priority-based scheduling'
        ]
    },
    'home-efficiency-upgrades': {
        title: 'Home Efficiency Upgrades',
        description: 'Energy-saving improvements that reduce utility bills, increase comfort, and support environmental sustainability. Based on Energy Star recommendations for maximum impact and savings.',
        features: [
            'Air sealing and weatherization',
            'Insulation installation and upgrades',
            'Energy-efficient lighting conversion',
            'Smart thermostat installation',
            'Window and door weatherstripping',
            'Duct sealing and insulation',
            'Energy Star appliance installation',
            'Home energy assessment',
            'Utility rebate assistance',
            'Tax credit guidance'
        ]
    },
    'junk-removal': {
        title: 'Junk Removal',
        description: 'Efficient junk removal services to clear out unwanted items and declutter your space. We handle the heavy lifting and proper disposal.',
        features: [
            'Furniture removal',
            'Appliance disposal',
            'Construction debris cleanup',
            'Garage and basement cleanouts',
            'Eco-friendly disposal',
            'Same-day service available'
        ]
    },
    'drywall-repair': {
        title: 'Drywall Repair',
        description: 'Expert drywall repair services to restore your walls to perfect condition with precision and care. We handle everything from small holes to large damaged areas.',
        features: [
            'Hole and crack repair',
            'Texture matching',
            'Primer and paint touch-up',
            'Water damage restoration',
            'Professional finishing'
        ]
    },
    'interior-painting': {
        title: 'Interior Painting',
        description: 'Transform your home with professional interior painting services. We use high-quality paints and expert techniques for a flawless finish.',
        features: [
            'Room preparation and protection',
            'Premium paint selection',
            'Trim and detail work',
            'Color consultation',
            'Clean-up included'
        ]
    },
    'electrical-repair': {
        title: 'Electrical Repair',
        description: 'Safe and efficient electrical repairs ensuring your home\'s electrical system functions properly. All work performed by licensed professionals.',
        features: [
            'Outlet installation and repair',
            'Switch replacement',
            'GFCI installation',
            'Circuit troubleshooting',
            'Safety inspections'
        ]
    },
    'gutter-cleaning': {
        title: 'Gutter Cleaning',
        description: 'Professional gutter cleaning and maintenance to protect your home from water damage and ensure proper drainage.',
        features: [
            'Complete debris removal',
            'Downspout cleaning',
            'Gutter inspection',
            'Minor repair services',
            'Seasonal maintenance'
        ]
    },
    'window-repair': {
        title: 'Window Repair',
        description: 'Comprehensive window repair services to improve your home\'s energy efficiency and appearance.',
        features: [
            'Glass replacement',
            'Frame repair',
            'Weather stripping',
            'Hardware replacement',
            'Seal restoration'
        ]
    },
    'pressure-cleaning': {
        title: 'Pressure Cleaning',
        description: 'Professional pressure washing services to restore the beauty of your home\'s exterior surfaces.',
        features: [
            'Driveway and walkway cleaning',
            'Deck and patio restoration',
            'Siding cleaning',
            'Fence washing',
            'Eco-friendly solutions'
        ]
    },
    'plumbing-repair': {
        title: 'Plumbing Repair',
        description: 'Reliable plumbing repair solutions to fix leaks, clogs, and other common household plumbing issues.',
        features: [
            'Leak detection and repair',
            'Drain cleaning',
            'Faucet installation',
            'Toilet repair',
            'Pipe maintenance'
        ]
    },
    'light-fixture-installation': {
        title: 'Light Fixture Installation',
        description: 'Professional installation of light fixtures to enhance your home\'s lighting and ambiance.',
        features: [
            'Ceiling fan installation',
            'Chandelier mounting',
            'Recessed lighting',
            'Switch installation',
            'Electrical safety checks'
        ]
    },
    'door-repair': {
        title: 'Door Repair',
        description: 'Complete door repair and installation services for interior and exterior doors.',
        features: [
            'Hinge adjustment',
            'Lock installation',
            'Weather stripping',
            'Frame repair',
            'Door replacement'
        ]
    },
    'furniture-assembly': {
        title: 'Furniture Assembly',
        description: 'Professional furniture assembly to help you set up your new furniture quickly and correctly.',
        features: [
            'IKEA furniture assembly',
            'Office furniture setup',
            'Bedroom furniture',
            'Entertainment centers',
            'Tool and hardware included'
        ]
    },
    'appliance-repair': {
        title: 'Appliance Repair',
        description: 'Expert repair services for small household appliances to extend their lifespan and improve performance.',
        features: [
            'Diagnostic services',
            'Parts replacement',
            'Performance optimization',
            'Safety inspections',
            'Warranty on repairs'
        ]
    },
    'carpentry-repair': {
        title: 'Carpentry Repair',
        description: 'Skilled carpentry services for repairs, modifications, and custom woodwork projects.',
        features: [
            'Cabinet repair',
            'Trim installation',
            'Custom shelving',
            'Deck repairs',
            'Wood restoration'
        ]
    }
};

// Google My Business API Functions
async function fetchGoogleReviews() {
    try {
        console.log('Fetching Google reviews...');

        // Get reviews using the Google My Business API
        const reviewsUrl = `https://mybusiness.googleapis.com/v4/accounts/${GOOGLE_API_CONFIG.accountId}/locations/${GOOGLE_API_CONFIG.locationId}/reviews?key=${GOOGLE_API_CONFIG.apiKey}`;

        const reviewsResponse = await fetch(reviewsUrl);

        if (!reviewsResponse.ok) {
            throw new Error(`API Error: ${reviewsResponse.status} - ${reviewsResponse.statusText}`);
        }

        const reviewsData = await reviewsResponse.json();

        if (reviewsData.reviews && reviewsData.reviews.length > 0) {
            // Process Google reviews
            const processedReviews = reviewsData.reviews
                .slice(0, GOOGLE_API_CONFIG.maxReviews)
                .map(review => ({
                    name: review.reviewer?.displayName || 'Google User',
                    initials: getInitials(review.reviewer?.displayName || 'Google User'),
                    rating: review.starRating === 'FIVE' ? 5 :
                           review.starRating === 'FOUR' ? 4 :
                           review.starRating === 'THREE' ? 3 :
                           review.starRating === 'TWO' ? 2 : 1,
                    date: formatReviewDate(review.createTime),
                    text: review.comment || 'No comment provided',
                    verified: true,
                    platform: 'Google'
                }));

            // Calculate average rating
            const avgRating = processedReviews.reduce((sum, review) => sum + review.rating, 0) / processedReviews.length;

            // Update global data
            allReviewsData.googleRating = Math.round(avgRating * 10) / 10;
            allReviewsData.googleCount = reviewsData.totalReviewCount || processedReviews.length;

            // Add Google reviews to combined array
            allReviewsData.reviews = allReviewsData.reviews.filter(r => r.platform !== 'Google');
            allReviewsData.reviews.push(...processedReviews);

            console.log('Google reviews fetched successfully:', processedReviews.length);

            // Update display
            updateReviewsDisplay();

        } else {
            console.log('No Google reviews found');
        }

    } catch (error) {
        console.error('Error fetching Google reviews:', error);

        // Show user-friendly error message
        showReviewsError('Unable to load Google reviews. Please check your API configuration.');

        // Fall back to cached reviews if available
        loadCachedReviews();
    }
}

// Helper function to get initials from name
function getInitials(name) {
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .slice(0, 2)
        .join('');
}

// Helper function to format review date
function formatReviewDate(dateString) {
    const reviewDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - reviewDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return '1 week ago';
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 60) return '1 month ago';
    return `${Math.floor(diffDays / 30)} months ago`;
}

// Function to show error message
function showReviewsError(message) {
    const reviewsGrid = document.querySelector('.reviews-grid');
    if (reviewsGrid) {
        reviewsGrid.innerHTML = `
            <div class="reviews-error">
                <p>${message}</p>
                <button onclick="fetchGoogleReviews()" class="button secondary">Retry</button>
            </div>
        `;
    }
}

// Function to load cached reviews
function loadCachedReviews() {
    const cached = localStorage.getItem('melkenReviewsCache');
    if (cached) {
        try {
            allReviewsData = JSON.parse(cached);
            updateReviewsDisplay();
            console.log('Loaded cached reviews');
        } catch (error) {
            console.error('Error loading cached reviews:', error);
        }
    }
}

// Function to cache reviews
function cacheReviews() {
    localStorage.setItem('melkenReviewsCache', JSON.stringify(allReviewsData));
    localStorage.setItem('melkenReviewsLastUpdate', Date.now().toString());
}

// Function to update reviews display
function updateReviewsDisplay() {
    // Calculate overall rating and counts
    calculateOverallRating();

    // Update rating display
    const ratingNumber = document.querySelector('.rating-number');
    const reviewCount = document.querySelector('.review-count');

    if (ratingNumber) {
        ratingNumber.textContent = allReviewsData.overallRating;
    }

    if (reviewCount) {
        const googleText = allReviewsData.googleCount > 0 ? `${allReviewsData.googleCount} Google` : '';
        const angiText = allReviewsData.angiCount > 0 ? `${allReviewsData.angiCount} Angi` : '';
        const separator = googleText && angiText ? ' • ' : '';
        reviewCount.textContent = `Based on ${googleText}${separator}${angiText} Reviews`;
    }

    // Generate reviews grid
    const reviewsGrid = document.querySelector('.reviews-grid');
    if (reviewsGrid && allReviewsData.reviews.length > 0) {
        reviewsGrid.innerHTML = ''; // Clear existing reviews

        // Sort reviews by date (most recent first)
        const sortedReviews = [...allReviewsData.reviews].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });

        sortedReviews.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';

            const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
            const platformBadge = review.platform ? `<span class="platform-badge ${review.platform.toLowerCase()}">${review.platform}</span>` : '';

            reviewCard.innerHTML = `
                <div class="review-header">
                    <div class="reviewer-info">
                        <div class="reviewer-avatar">
                            <span>${review.initials}</span>
                        </div>
                        <div class="reviewer-details">
                            <h4>${review.name}${review.verified ? ' <span class="verified-badge">✓</span>' : ''} ${platformBadge}</h4>
                            <div class="review-stars">
                                ${stars.split('').map(star => `<span class="star">${star}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="review-date">${review.date}</div>
                </div>
                <div class="review-content">
                    <p>"${review.text}"</p>
                </div>
            `;

            reviewsGrid.appendChild(reviewCard);
        });

        // Cache the reviews
        cacheReviews();
    }
}

// Function to calculate overall rating
function calculateOverallRating() {
    const googleReviews = allReviewsData.reviews.filter(r => r.platform === 'Google');
    const angiReviews = allReviewsData.reviews.filter(r => r.platform === 'Angi');

    allReviewsData.googleCount = googleReviews.length;
    allReviewsData.angiCount = angiReviews.length;
    allReviewsData.totalReviews = allReviewsData.reviews.length;

    if (allReviewsData.totalReviews > 0) {
        const totalRating = allReviewsData.reviews.reduce((sum, review) => sum + review.rating, 0);
        allReviewsData.overallRating = Math.round((totalRating / allReviewsData.totalReviews) * 10) / 10;
    } else {
        allReviewsData.overallRating = 0;
    }
}

// Function to add Angi reviews to the display
function loadAngiReviews() {
    // Load saved Angi reviews from localStorage
    const savedAngiReviews = localStorage.getItem('melkenAngiReviews');
    if (savedAngiReviews) {
        try {
            const parsedAngiReviews = JSON.parse(savedAngiReviews);
            Object.assign(angiReviewsData, parsedAngiReviews);
        } catch (error) {
            console.log('Error loading saved Angi reviews:', error);
        }
    }

    // Add Angi reviews to combined array
    allReviewsData.reviews = allReviewsData.reviews.filter(r => r.platform !== 'Angi');
    allReviewsData.reviews.push(...angiReviewsData.reviews);

    console.log('Angi reviews loaded:', angiReviewsData.reviews.length);
    updateReviewsDisplay();
}

// Admin panel functions for Angi reviews
function updateAngiReviews() {
    try {
        const rating = parseFloat(document.getElementById('angiRating').value);
        const reviewCount = parseInt(document.getElementById('angiReviewCount').value);
        const reviewsText = document.getElementById('angiReviews').value;

        if (reviewsText.trim()) {
            const reviews = JSON.parse(reviewsText);

            // Update Angi reviews data
            angiReviewsData.rating = rating;
            angiReviewsData.reviewCount = reviewCount;
            angiReviewsData.reviews = reviews.map(review => ({
                ...review,
                platform: 'Angi'
            }));

            // Reload the reviews display
            loadAngiReviews();

            // Save to localStorage for persistence
            localStorage.setItem('melkenAngiReviews', JSON.stringify(angiReviewsData));

            alert('Angi reviews updated successfully!');
            closeAngiAdmin();
        } else {
            alert('Please enter review data in JSON format');
        }
    } catch (error) {
        alert('Error parsing JSON. Please check your format: ' + error.message);
    }
}

function closeAngiAdmin() {
    document.getElementById('angiAdminPanel').style.display = 'none';
}

function openAngiAdmin() {
    const adminPanel = document.getElementById('angiAdminPanel');
    adminPanel.style.display = 'flex';

    // Pre-fill current data
    document.getElementById('angiRating').value = angiReviewsData.rating;
    document.getElementById('angiReviewCount').value = angiReviewsData.reviewCount;
    document.getElementById('angiReviews').value = JSON.stringify(angiReviewsData.reviews, null, 2);
}

// Check for admin access and initialize reviews
function initializeReviews() {
    // Load cached reviews first
    loadCachedReviews();

    // Google API disabled for security - API keys should not be in client-side code
    console.log('Google API integration disabled for security. Implement server-side proxy for production.');
    showSecurityMessage();

    // Always load Angi reviews (manual)
    loadAngiReviews();

    // Check for admin access
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
        openAngiAdmin();
    }
}

// Function to show security message
function showSecurityMessage() {
    const reviewsGrid = document.querySelector('.reviews-grid');
    if (reviewsGrid && allReviewsData.reviews.length === 0) {
        reviewsGrid.innerHTML = `
            <div class="security-message">
                <h3>🔒 Security Notice</h3>
                <p>Google Reviews API integration has been disabled for security reasons.</p>
                <p><strong>API keys should never be exposed in client-side code.</strong></p>
                <p>For production use, implement a server-side proxy to securely fetch reviews.</p>
                <div class="security-recommendations">
                    <h4>Recommended Solutions:</h4>
                    <ul>
                        <li>Create a backend API endpoint to fetch reviews</li>
                        <li>Use environment variables for API keys</li>
                        <li>Implement server-side caching</li>
                        <li>Or use the manual Angi reviews system (Admin Panel)</li>
                    </ul>
                </div>
                <button onclick="openAngiAdmin()" class="button primary">Add Angi Reviews</button>
            </div>
        `;
    }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize reviews system
    initializeReviews();
    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close mobile menu when clicking on a link
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Image error handling
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            if (this.classList.contains('logo')) {
                this.style.display = 'none';
                const fallback = this.nextElementSibling;
                if (fallback && fallback.classList.contains('logo-fallback')) {
                    fallback.style.display = 'flex';
                }
            } else if (this.closest('.gallery-item')) {
                // For gallery images, show a styled placeholder
                this.style.background = '#f8f9fa';
                this.style.border = '2px dashed #dee2e6';
                this.style.color = '#6c757d';
                this.style.display = 'flex';
                this.style.alignItems = 'center';
                this.style.justifyContent = 'center';
                this.style.fontSize = '1rem';
                this.innerHTML = '<div style="text-align: center; padding: 2rem;"><div style="font-size: 2rem; margin-bottom: 1rem;">📷</div><div>Image Coming Soon</div></div>';
            } else {
                // For other images, show a placeholder
                this.style.background = '#f8f9fa';
                this.style.border = '2px dashed #dee2e6';
                this.style.color = '#6c757d';
                this.style.display = 'flex';
                this.style.alignItems = 'center';
                this.style.justifyContent = 'center';
                this.style.minHeight = '300px';
                this.style.fontSize = '1rem';
                this.innerHTML = this.alt + ' - Image coming soon';
            }
        });
    });
    // Handle smooth scrolling for navigation links
    const anchorLinks = document.querySelectorAll('nav a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Handle CTA button clicks
    const ctaButtons = document.querySelectorAll('.button[href="#requestForm"]');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Track CTA button clicks in Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    event_category: 'engagement',
                    event_label: 'get_estimate_button',
                    value: 1
                });
            }

            const formSection = document.querySelector('#requestForm');
            if (formSection) {
                formSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Gallery functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryModal = document.getElementById('galleryModal');
    const galleryModalImg = document.getElementById('galleryModalImg');
    const galleryModalTitle = document.getElementById('galleryModalTitle');
    const galleryModalDescription = document.getElementById('galleryModalDescription');
    const galleryClose = document.querySelector('.gallery-close');
    const galleryPrev = document.getElementById('galleryPrev');
    const galleryNext = document.getElementById('galleryNext');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let currentGalleryIndex = 0;
    let filteredItems = Array.from(galleryItems);

    // Gallery filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });

            // Update filtered items array
            if (filter === 'all') {
                filteredItems = Array.from(galleryItems);
            } else {
                filteredItems = Array.from(galleryItems).filter(item =>
                    item.getAttribute('data-category') === filter
                );
            }

            // Track filter usage in Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'gallery_filter', {
                    event_category: 'engagement',
                    event_label: filter,
                    value: 1
                });
            }
        });
    });

    // Gallery item click functionality
    galleryItems.forEach((item) => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('h3').textContent;
            const description = this.querySelector('p').textContent;

            galleryModalImg.src = img.src;
            galleryModalImg.alt = img.alt;
            galleryModalTitle.textContent = title;
            galleryModalDescription.textContent = description;

            currentGalleryIndex = filteredItems.indexOf(this);
            galleryModal.style.display = 'block';
            document.body.style.overflow = 'hidden';

            // Track gallery image view in Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'gallery_image_view', {
                    event_category: 'engagement',
                    event_label: title.toLowerCase().replace(/\s+/g, '_'),
                    value: 1
                });
            }
        });
    });

    // Gallery modal navigation
    function showGalleryImage(index) {
        if (index >= 0 && index < filteredItems.length) {
            const item = filteredItems[index];
            const img = item.querySelector('img');
            const title = item.querySelector('h3').textContent;
            const description = item.querySelector('p').textContent;

            galleryModalImg.src = img.src;
            galleryModalImg.alt = img.alt;
            galleryModalTitle.textContent = title;
            galleryModalDescription.textContent = description;
            currentGalleryIndex = index;
        }
    }

    galleryPrev.addEventListener('click', function() {
        const newIndex = currentGalleryIndex > 0 ? currentGalleryIndex - 1 : filteredItems.length - 1;
        showGalleryImage(newIndex);
    });

    galleryNext.addEventListener('click', function() {
        const newIndex = currentGalleryIndex < filteredItems.length - 1 ? currentGalleryIndex + 1 : 0;
        showGalleryImage(newIndex);
    });

    // Close gallery modal
    galleryClose.addEventListener('click', function() {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close gallery modal when clicking outside
    galleryModal.addEventListener('click', function(event) {
        if (event.target === galleryModal) {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Keyboard navigation for gallery
    document.addEventListener('keydown', function(event) {
        if (galleryModal.style.display === 'block') {
            if (event.key === 'Escape') {
                galleryModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            } else if (event.key === 'ArrowLeft') {
                galleryPrev.click();
            } else if (event.key === 'ArrowRight') {
                galleryNext.click();
            }
        }
    });

    // Reviews section functionality
    const reviewCards = document.querySelectorAll('.review-card');
    const googleReviewsLink = document.querySelector('a[href*="google.com/search"]');

    // Add click tracking for review cards
    reviewCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            // Track review card clicks in Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'review_card_click', {
                    event_category: 'engagement',
                    event_label: `review_${index + 1}`,
                    value: 1
                });
            }
        });
    });

    // Track Google Reviews link clicks
    if (googleReviewsLink) {
        googleReviewsLink.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'google_reviews_click', {
                    event_category: 'external_link',
                    event_label: 'google_reviews_page',
                    value: 1
                });
            }
        });
    }

    // Animate reviews on scroll
    if ('IntersectionObserver' in window) {
        const reviewObserver = new IntersectionObserver(function(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100); // Stagger animation
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        reviewCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            reviewObserver.observe(card);
        });
    }

    // Service modal functionality
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const closeBtn = document.querySelector('#serviceModal .close');
    const serviceItems = document.querySelectorAll('.service-item');

    // Add click event to service items
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceKey = this.getAttribute('data-service');
            const service = serviceData[serviceKey];

            if (service) {
                // Populate modal content
                modalTitle.textContent = service.title;
                modalDescription.textContent = service.description;

                // Clear and populate features list
                modalFeatures.innerHTML = '';
                service.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    modalFeatures.appendChild(li);
                });

                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling

                // Track service click in Google Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'service_click', {
                        event_category: 'engagement',
                        event_label: service.title.toLowerCase().replace(/\s+/g, '_'),
                        value: 1
                    });
                }
            }
        });
    });

    // Close modal functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Service modal close button clicked');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    } else {
        console.error('Service modal close button not found');
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                console.log('Service modal background clicked');
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
        });
    }

    // Close service modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal && modal.style.display === 'block') {
            console.log('Service modal closed with Escape key');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    // Handle modal CTA button clicks
    const modalCta = document.querySelector('.modal-cta');
    if (modalCta) {
        modalCta.addEventListener('click', function(e) {
            e.preventDefault();

            // Close modal first
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';

            // Track modal CTA click
            if (typeof gtag !== 'undefined') {
                gtag('event', 'modal_cta_click', {
                    event_category: 'engagement',
                    event_label: 'service_modal_estimate_button',
                    value: 1
                });
            }

            // Scroll to form
            const formSection = document.querySelector('#requestForm');
            if (formSection) {
                formSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Add loading state for Jobber form
    const formContainer = document.querySelector('#b44c6628-bedb-4fef-ba53-8a664d11ed6f');
    if (formContainer) {
        // Add a loading indicator
        formContainer.innerHTML = '<div style="text-align: center; padding: 2rem; color: #666;">Loading form...</div>';

        // Check if form has loaded every 500ms
        const checkFormLoaded = setInterval(() => {
            if (formContainer.querySelector('form') || formContainer.querySelector('.work-request-form')) {
                clearInterval(checkFormLoaded);
                console.log('Jobber form loaded successfully');
            }
        }, 500);

        // Clear interval after 10 seconds to prevent infinite checking
        setTimeout(() => clearInterval(checkFormLoaded), 10000);
    }

    // Add click tracking for phone and email links
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Phone link clicked:', this.href);
            // Track phone clicks in Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_click', {
                    event_category: 'contact',
                    event_label: 'phone_number',
                    value: 1
                });
            }
        });
    });

    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Email link clicked:', this.href);
            // Track email clicks in Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'email_click', {
                    event_category: 'contact',
                    event_label: 'email_address',
                    value: 1
                });
            }
        });
    });

    // Enhanced FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');

    // Initialize FAQ items as collapsed on mobile, expanded on desktop
    const isMobile = window.innerWidth <= 768;

    faqItems.forEach((item, index) => {
        const question = item.querySelector('h4');
        const answer = item.querySelector('p');

        if (question && answer) {
            // Set initial state
            if (isMobile) {
                item.classList.add('collapsed');
                answer.style.display = 'none';
            } else {
                item.classList.add('active');
                answer.style.display = 'block';
            }

            // Add click event listener
            question.addEventListener('click', function(e) {
                e.preventDefault();

                // Toggle the item
                const isCollapsed = item.classList.contains('collapsed');

                if (isCollapsed) {
                    // Expand
                    item.classList.remove('collapsed');
                    item.classList.add('active');
                    answer.style.display = 'block';
                } else {
                    // Collapse
                    item.classList.remove('active');
                    item.classList.add('collapsed');
                    answer.style.display = 'none';
                }

                // Track FAQ interaction in Google Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'faq_toggle', {
                        event_category: 'engagement',
                        event_label: `faq_${index + 1}_${isCollapsed ? 'expanded' : 'collapsed'}`,
                        value: 1
                    });
                }
            });
        }
    });

    // Handle window resize to adjust FAQ behavior
    window.addEventListener('resize', function() {
        const newIsMobile = window.innerWidth <= 768;

        faqItems.forEach(item => {
            const answer = item.querySelector('p');
            if (answer) {
                if (newIsMobile) {
                    // On mobile, collapse all by default
                    if (!item.classList.contains('collapsed') && !item.classList.contains('active')) {
                        item.classList.add('collapsed');
                        answer.style.display = 'none';
                    }
                } else {
                    // On desktop, expand all by default
                    if (!item.classList.contains('active')) {
                        item.classList.remove('collapsed');
                        item.classList.add('active');
                        answer.style.display = 'block';
                    }
                }
            }
        });
    });

    // Add intersection observer for animations (optional enhancement)
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe sections for fade-in animation
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }
});

// Handle form submission tracking for Jobber form
window.addEventListener('message', function(event) {
    // Listen for messages from the Jobber form
    if (event.data && (event.data.type === 'form_submitted' || event.data.type === 'jobber_form_submitted')) {
        console.log('Form submitted successfully');

        // Track form submission in Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                event_category: 'lead_generation',
                event_label: 'estimate_request_form',
                value: 1
            });
        }

        // Optional: Show success message or redirect
        // alert('Thank you! Your request has been submitted. We\'ll contact you soon.');
    }
});

// Listen for Jobber form events
document.addEventListener('DOMContentLoaded', function() {
    // Wait for Jobber form to load and add event listeners
    setTimeout(() => {
        const jobberForm = document.querySelector('#b44c6628-bedb-4fef-ba53-8a664d11ed6f form');
        if (jobberForm) {
            jobberForm.addEventListener('submit', function() {
                console.log('Jobber form submission detected');

                // Track form submission in Google Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        event_category: 'lead_generation',
                        event_label: 'estimate_request_form',
                        value: 1
                    });
                }
            });
        }
    }, 2000);
});

// Add error handling for missing images
function handleImageError(img) {
    img.style.display = 'none';
    const fallback = img.nextElementSibling;
    if (fallback && fallback.classList.contains('logo-fallback')) {
        fallback.style.display = 'flex';
    }
}

// Email protection function
function openEmail() {
    // Construct email address to avoid bot scraping
    const user = 'kfelder';
    const domain = 'melkenhandyman.com';
    const email = user + '@' + domain;

    // Open email client
    window.location.href = 'mailto:' + email;

    // Track email clicks in Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'email_click', {
            event_category: 'contact',
            event_label: 'protected_email_link',
            value: 1
        });
    }
}

// Utility function to track button clicks
function trackButtonClick(buttonText, destination) {
    console.log(`Button clicked: ${buttonText} -> ${destination}`);

    // Track button clicks in Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'button_click', {
            event_category: 'engagement',
            event_label: buttonText.toLowerCase().replace(/\s+/g, '_'),
            custom_parameter_1: destination
        });
    }
}

// Track page view on load
document.addEventListener('DOMContentLoaded', function() {
    // Track page view
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href
        });
    }
});