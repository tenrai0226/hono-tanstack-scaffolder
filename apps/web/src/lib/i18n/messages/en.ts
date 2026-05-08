/**
 * English translation messages
 */
import betterAuthEn from './betterAuth/en'
import componentsEn from './components/en'

const en = {
  // Common translations (only keep used ones)
  common: {
    welcome: 'Welcome',
    dashboard: 'Dashboard',
    languages: {
      'zh': 'Chinese',
      'zh-CN': 'Chinese (Simplified)',
      'zh-TW': 'Chinese (Traditional)',
      'en': 'English',
      'ja': 'Japanese',
    },
  },
  HomePage: {
    title: 'Discover Japan\'s Top 100',
    subtitle: 'Experience the authentic taste of Japan with our curated list of Hyakumeiten restaurants. Map-driven, AI-powered, and multi-language.',
    startExploring: 'Start Exploring',
    learnMore: 'Learn More',
  },
  discovery: {
    searchPlaceholder: 'Search top 100 spots in area...',
    searchArea: 'Search this area',
    drawerTitle: 'Nearby spots',
    drawerFoundCount: 'Found {count} curated spots',
    drawerSort: 'Sort',
    outOfJapan: 'This product only covers Japan. Let\'s explore Tokyo!',
    unnamedRestaurant: 'Unnamed Restaurant',
    nearby: 'Nearby',
    viewDetails: 'View Details',
    sidebarTitle: 'Explore Tokyo\'s <br /> Top 100',
    saved: 'Saved',
    openNow: 'Open Now',
    budget: 'Budget',
    favoriteError: 'Failed to update favorites',
    favoriteAdded: 'Added to favorites',
    favoriteRemoved: 'Removed from favorites',
    loginRequiredForFavorite: 'You must be logged in to favorite shops',
    save: 'Save',
    addNote: 'Add Note',
    viewMap: 'View map',
    viewRestaurants: 'View {n} restaurants',
    locateMe: 'Locate me',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    allCategories: 'All',
    removeFavorite: 'Remove from favorites',
    addFavorite: 'Add to favorites',
    filters: 'Filters',
    cuisineCategories: 'Cuisine Categories',
    reset: 'Reset',
    applyFilters: 'Apply Filters',
    quickView: {
      copyAddress: 'Copy Address',
      addressCopied: 'Address copied!',
      viewDetails: 'View Full Details',
      openTabelog: 'Open on Tabelog',
      tabelogWarning: 'Redirecting to a Japanese website...',
      favoritesComingSoon: 'Coming Soon',
      reviews: 'reviews',
      highlights: 'Highlights',
      privateNote: 'Private Note',
      address: 'Address',
      businessHours: 'Business Hours',
      budget: 'Budget',
      lunch: 'Lunch',
      dinner: 'Dinner',
      capacity: 'Seats',
      seats: '{n} seats',
    },
    authGuardModal: {
      title: 'Sign in to continue',
      subtitle: 'Sign in to save favorites and add private notes.',
    },
    privateNoteModal: {
      title: 'Add Private Note',
      placeholder: 'Write your private thoughts here...',
      characters: 'characters',
      cancel: 'Cancel',
      save: 'Save Note',
    },
    noteEditor: {
      title: 'Private Note for',
      placeholder: 'Write your private thoughts here...',
      empty: 'No note added yet.',
      close: 'Close',
      save: 'Save',
      edit: 'Edit Note',
    },
    sidebar: {
      empty: 'No restaurants in this area. Try panning the map.',
    },
  },
  shopDetail: {
    notFound: 'Restaurant not found',
    backToMap: 'Back to Discovery Map',
    lunchBudget: 'Lunch',
    dinnerBudget: 'Dinner',
    businessHours: 'Business Hours',
    address: 'Address',
    access: 'Access',
    capacity: 'Capacity',
    capacityUnit: 'seats',
    facilities: 'Facilities',
    privateRoom: 'Private Room',
    parking: 'Parking',
    kidsAllowed: 'Kids Allowed',
    smokingNonSmoking: 'Non-Smoking',
    smokingSeparated: 'Separated',
    smokingAllowed: 'Smoking OK',
    onlineBooking: 'Online Booking',
    payment: 'Payment',
    creditCard: 'Credit Card',
    electronicMoney: 'E-Money',
    qrCode: 'QR Code',
    openInGoogleMaps: 'Open in Google Maps',
    bookOnTabelog: 'Book on Tabelog',
    tabelogWarning: 'You are being redirected to a Japanese website. We recommend using your browser\'s translation feature.',
    highlights: 'Highlights',
    menu: 'Menu',
    reviews: 'reviews',
    originalName: 'Japanese Name',
    copyAddress: 'Copy Address',
    addressCopied: 'Address copied!',
    scoreBreakdown: {
      title: 'Score Breakdown',
      taste: 'Taste',
      service: 'Service',
      atmosphere: 'Atmosphere',
      drinks: 'Drinks',
      cp: 'Value (CP)',
    },
    story: {
      title: 'About this Restaurant',
    },
    menuSection: {
      title: 'Menu',
      showAll: 'Show all {n} items',
      showLess: 'Show less',
      marketPrice: 'Market price',
    },
  },
  errors: {
    maintenance: {
      title: 'We\'ll be back soon',
      description: 'Our system is currently undergoing scheduled maintenance. Dashboard access and account operations are temporarily paused to ensure data integrity. Please check back later.',
      footer: 'You can still browse our static pages and documentation.',
      banner: 'System is currently under maintenance. Dashboard operations are temporarily paused to ensure data integrity.',
    },
  },
  footer: {
    slogan: 'Let AI make cross-language calls for you, breaking communication boundaries.',
    nav: {
      products: {
        title: 'Products',
        features: 'AI Features',
        pricing: 'Pricing',
        dining: 'Dining Reservations',
        healthcare: 'Healthcare Appointments',
      },
      support: {
        title: 'Support',
        faq: 'FAQ',
        about: 'About BukAI',
      },
      legal: {
        title: 'Legal',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        cookie: 'Cookie Policy',
      },
    },
  },
  // ─────────────────────────────────────────────────────────

  // All component-related translations (unified management)
  components: componentsEn,
  // Neon Auth UI component localization (passed to NeonAuthUIProvider)
  // Based on Better Auth UI AuthLocalization API reference:
  // https://better-auth-ui.com/api-reference/auth-localization
  betterAuth: betterAuthEn,
} as const

export default en
