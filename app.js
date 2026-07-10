/* ===== SMS TAMU - Main Application ===== */
const SUPABASE_URL = 'https://lvfvdzmabmokivpmkxuq.supabase.co';
const SUPABASE_KEY = 'sb_publishable_0aiiuU-He1wJJVdgNwdKYg_HeTfu1wh';

const i18n = {
    en: {
        landingDesc: 'Share sweet, romantic, and engaging text messages with the world.',
        getStarted: 'Get Started', login: 'Login', signUp: 'Sign Up',
        noAccount: "Don't have an account?", hasAccount: 'Already have an account?',
        back: 'Back', home: 'Home', search: 'Search', chat: 'Chat', profile: 'Profile',
        all: 'All', catApology: 'Apology', catPraise: 'Praise', catFlirt: 'Flirt', catOther: 'Other',
        newPost: 'New Post', category: 'Category', message: 'Message', vipPost: 'VIP Message (Premium)',
        post: 'Post', globalChat: 'Global Chat', typeMessage: 'Type a message...',
        following: 'Following', followers: 'Followers', editProfile: 'Edit Profile',
        myPosts: 'My Posts', liked: 'Liked', saved: 'Saved', save: 'Save',
        username: 'Username', bio: 'Bio', adminPanel: 'Admin Panel',
        autoApprove: 'Auto Approve Posts', pendingQueue: 'Pending Queue',
        manageUsers: 'Manage Users', announcements: 'Announcements', send: 'Send',
        vipRequests: 'VIP Requests', bugReports: 'Bug Reports', reportBug: 'Report a Bug',
        description: 'Description', submit: 'Submit', editPost: 'Edit Post',
        unlockPremium: 'Unlock Premium', vipDesc: 'Unlock exclusive premium messages and features.',
        network: 'Network', phoneNumber: 'Phone Number', payNow: 'Pay Now',
        searchPlaceholder: 'Search messages...', copied: 'Copied to clipboard!',
        posted: 'Posted successfully!', deleted: 'Deleted successfully!',
        updated: 'Updated successfully!', error: 'An error occurred', loading: 'Loading...',
        emptyPosts: 'No posts yet', emptyLiked: 'No liked posts', emptySaved: 'No saved posts',
        emptyChat: 'No messages yet', emptySearch: 'No results found',
        verifyUser: 'Verify', blockUser: 'Block', unblockUser: 'Unblock', addFollowers: 'Add Followers',
        approve: 'Approve', reject: 'Reject', logout: 'Logged out',
        sessionExpired: 'Session expired, please login again',
        confirmDelete: 'Are you sure you want to delete this?', online: 'Online',
        settings: 'Settings', appearance: 'Appearance', darkMode: 'Dark Mode',
        language: 'Language', support: 'Support', account: 'Account', logOut: 'Log Out',
        themeChanged: 'Theme updated', pleaseLogin: 'Please login first',
        postCreated: 'Post created!', chatSent: 'Message sent!',
        profileUpdated: 'Profile updated!', avatarUpdated: 'Avatar updated!',
        announcementSent: 'Announcement sent!', bugReported: 'Bug reported! Thank you.',
        userVerified: 'User verified', userBlocked: 'User blocked', userUnblocked: 'User unblocked',
        followersAdded: 'Followers added', postApproved: 'Post approved',
        postRejected: 'Post rejected', paymentProcessing: 'Payment processing...',
        fillAllFields: 'Please fill in all fields', imageTooLarge: 'Image too large (max 2MB)',
        uploadFailed: 'Upload failed', welcomeBack: 'Welcome back!',
        checkEmail: 'Account created! Please check your email.', authFailed: 'Authentication failed',
        dbConnectionFailed: 'Database connection failed', noPending: 'No pending posts',
        noUsers: 'No users found', noBugs: 'No bug reports', noVipRequests: 'No VIP requests',
        confirmBlock: 'Are you sure you want to block this user?',
        enterFollowers: 'Enter number of followers to add:',
        paymentDemo: 'Payment request sent! Waiting for admin approval.',
        rlsError: 'Permission denied. Please check database policies.',
        networkError: 'Network error. Please check your connection.',
        chatClosed: 'Chat is temporarily closed by admin.',
        blockedMessage: 'Your account has been restricted. You can only view posts.',
        paymentPending: 'Your payment is pending admin approval.',
        paymentApproved: 'Payment approved! You now have premium access.',
        adminPaymentSettings: 'Payment Settings', adminChatControl: 'Chat Control',
        adminCloseChat: 'Close Chat', adminOpenChat: 'Open Chat',
        paymentDetails: 'Payment Details', accountName: 'Account Name',
        paymentNumber: 'Payment Number', paymentNetwork: 'Payment Network',
        savePayment: 'Save Payment Details', paymentSaved: 'Payment details saved!',
        adminPayments: 'Payment Approvals', approvePayment: 'Approve Payment',
        noPayments: 'No pending payments', chatStatus: 'Chat Status',
        chatOpen: 'Chat is Open', chatClosedAdmin: 'Chat is Closed',
        premiumLocked: 'Premium features locked. Complete payment to unlock.',
        viewOnly: 'View Only Mode', cannotPost: 'You cannot post while blocked.',
        cannotChat: 'You cannot send messages while blocked.',
        paymentRequired: 'Payment required to access this feature.'
    },
    sw: {
        landingDesc: 'Shiriki ujumbe mtamu, wa kimapenzi na wa kuvutia na ulimwengu.',
        getStarted: 'Anza', login: 'Ingia', signUp: 'Jiandikishe',
        noAccount: 'Huna akaunti?', hasAccount: 'Una akaunti tayari?', back: 'Rudi',
        home: 'Nyumbani', search: 'Tafuta', chat: 'Mazungumzo', profile: 'Wasifu',
        all: 'Zote', catApology: 'Kuomba Msamaha', catPraise: 'Kusifia', catFlirt: 'Kuvutia', catOther: 'Mengineyo',
        newPost: 'Ujumbe Mpya', category: 'Kategoria', message: 'Ujumbe', vipPost: 'Ujumbe wa VIP (Premium)',
        post: 'Chapisha', globalChat: 'Mazungumzo ya Ulimwengu', typeMessage: 'Andika ujumbe...',
        following: 'Unafuatilia', followers: 'Wafuasi', editProfile: 'Hariri Wasifu',
        myPosts: 'Ujumbe Wangu', liked: 'Uliopenda', saved: 'Ulihifadhi', save: 'Hifadhi',
        username: 'Jina la Mtumiaji', bio: 'Wasifu', adminPanel: 'Paneli ya Msimamizi',
        autoApprove: 'Kubali Ujumbe Kiotomatiki', pendingQueue: 'Orodha ya Unayosubiri',
        manageUsers: 'Simamia Watumiaji', announcements: 'Tangazo', send: 'Tuma',
        vipRequests: 'Maombi ya VIP', bugReports: 'Ripoti za Hitilafu', reportBug: 'Ripoti Hitilafu',
        description: 'Maelezo', submit: 'Wasilisha', editPost: 'Hariri Ujumbe',
        unlockPremium: 'Fungua Kuntu', vipDesc: 'Fungua ujumbe wa kipekee wa premium na vipengele.',
        network: 'Mtandao', phoneNumber: 'Namba ya Simu', payNow: 'Lipa Sasa',
        searchPlaceholder: 'Tafuta ujumbe...', copied: 'Imenakiliwa!',
        posted: 'Imechapishwa!', deleted: 'Imefutwa!', updated: 'Imesasishwa!',
        error: 'Hitilafu imetokea', loading: 'Inapakia...',
        emptyPosts: 'Hakuna ujumbe bado', emptyLiked: 'Hakuna ujumbe uliopendwa',
        emptySaved: 'Hakuna ujumbe ulihifadhi', emptyChat: 'Hakuna ujumbe bado', emptySearch: 'Hakuna matokeo',
        verifyUser: 'Thibitisha', blockUser: 'Zuia', unblockUser: 'Fungua', addFollowers: 'Ongeza Wafuasi',
        approve: 'Kubali', reject: 'Kataa', logout: 'Umetoka',
        sessionExpired: 'Kipindi kimeisha, tafadhali ingia tena',
        confirmDelete: 'Una uhakika unataka kufuta hii?', online: 'Mtandaoni',
        settings: 'Mipangilio', appearance: 'Mwonekano', darkMode: 'Hali ya Giza',
        language: 'Lugha', support: 'Msaada', account: 'Akaunti', logOut: 'Toka',
        themeChanged: 'Mandhari imesasishwa', pleaseLogin: 'Tafadhali ingia kwanza',
        postCreated: 'Ujumbe umeundwa!', chatSent: 'Ujumbe umetumwa!',
        profileUpdated: 'Wasifu umesasishwa!', avatarUpdated: 'Picha imesasishwa!',
        announcementSent: 'Tangazo limetumwa!', bugReported: 'Hitilafu imeripotiwa! Asante.',
        userVerified: 'Mtumiaji amethibitishwa', userBlocked: 'Mtumiaji amezuiwa', userUnblocked: 'Mtumiaji amefunguliwa',
        followersAdded: 'Wafuasi wameongezwa', postApproved: 'Ujumbe umekubaliwa',
        postRejected: 'Ujumbe umekataliwa', paymentProcessing: 'Malipo yanafanyika...',
        fillAllFields: 'Tafadhali jaza sehemu zote', imageTooLarge: 'Picha kubwa mno (kubwa zaidi 2MB)',
        uploadFailed: 'Upakiaji umeshindwa', welcomeBack: 'Karibu tena!',
        checkEmail: 'Akaunti imeundwa! Tafadhali angalia barua pepe.', authFailed: 'Uthibitishaji umeshindwa',
        dbConnectionFailed: 'Muunganiko wa hifadhidata umeshindwa', noPending: 'Hakuna ujumbe unayosubiri',
        noUsers: 'Hakuna watumiaji', noBugs: 'Hakuna ripoti za hitilafu', noVipRequests: 'Hakuna maombi ya VIP',
        confirmBlock: 'Una uhakika unataka kuzuia mtumiaji huyu?',
        enterFollowers: 'Weka idadi ya wafuasi wa kuongeza:',
        paymentDemo: 'Ombi la malipo limetumwa! Linangoja kuidhinishwa na msimamizi.',
        rlsError: 'Ruhusa imekataliwa. Tafadhali angalia sera za hifadhidata.',
        networkError: 'Hitilafu ya mtandao. Tafadhali angalia muunganiko wako.',
        chatClosed: 'Mazungumzo yamefungwa kwa muda na msimamizi.',
        blockedMessage: 'Akaunti yako imezuiwa. Unaweza kuona tu ujumbe.',
        paymentPending: 'Malipo yako yanangoja kuidhinishwa na msimamizi.',
        paymentApproved: 'Malipo yamekubaliwa! Sasa una ufikiaji wa premium.',
        adminPaymentSettings: 'Mipangilio ya Malipo', adminChatControl: 'Udhibiti wa Mazungumzo',
        adminCloseChat: 'Funga Mazungumzo', adminOpenChat: 'Fungua Mazungumzo',
        paymentDetails: 'Maelezo ya Malipo', accountName: 'Jina la Akaunti',
        paymentNumber: 'Namba ya Malipo', paymentNetwork: 'Mtandao wa Malipo',
        savePayment: 'Hifadhi Maelezo ya Malipo', paymentSaved: 'Maelezo ya malipo yamehifadhiwa!',
        adminPayments: 'Idhini za Malipo', approvePayment: 'Kubali Malipo',
        noPayments: 'Hakuna malipo yanayosubiri', chatStatus: 'Hali ya Mazungumzo',
        chatOpen: 'Mazungumzo Yamefunguliwa', chatClosedAdmin: 'Mazungumzo Yamefungwa',
        premiumLocked: 'Vipengele vya premium vimefungwa. Kamilisha malipo kuvifungua.',
        viewOnly: 'Hali ya Kutazama Tu', cannotPost: 'Huwezi kuchapisha ukiwa umezuiwa.',
        cannotChat: 'Huwezi kutuma ujumbe ukiwa umezuiwa.',
        paymentRequired: 'Malipo yanahitajika kufikia kipengele hiki.'
    }
};

let currentLang = 'en';
let isDarkTheme = true;
let sbClient = null;
let currentUser = null;
let currentProfile = null;
let isAdmin = false;
let isBlocked = false;
let isChatClosed = false;
let postsCache = [];
let likedPosts = new Set();
let savedPosts = new Set();
let chatSubscription = null;
let postsSubscription = null;
let profilesSubscription = null;
let announcementsSubscription = null;
let bugReportsSubscription = null;
let paymentsSubscription = null;
let chatStatusSubscription = null;
let currentCategory = 'all';
let currentProfileTab = 'my-posts';
let editingPostId = null;
let autoApprove = true;
let appInitialized = false;
let paymentSettings = { account_name: 'Admin', payment_number: '0712345678', payment_network: 'vodacom' };

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

document.addEventListener('DOMContentLoaded', () => {
    try {
        loadTheme();
        initSupabase();
        bindEvents();
        setTimeout(() => { if (!appInitialized) checkSession(); }, 500);
        applyLanguage();
    } catch (err) {
        console.error('Initialization error:', err);
        showToast('Failed to initialize app', 'error');
    }
});

function initSupabase() {
    try {
        if (window.supabase && typeof window.supabase.createClient === 'function') {
            sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        } else if (typeof createClient !== 'undefined') {
            sbClient = createClient(SUPABASE_URL, SUPABASE_KEY);
        }
        if (sbClient) {
            sbClient.auth.onAuthStateChange((event, session) => {
                console.log('Auth state:', event);
                if (event === 'SIGNED_OUT') {
                    currentUser = null; currentProfile = null; isAdmin = false; isBlocked = false;
                    showLanding();
                } else if (event === 'SIGNED_IN' && session) {
                    currentUser = session.user;
                    loadProfile().then(() => {
                        showMainApp();
                        showToast(getText('welcomeBack'), 'success');
                    });
                } else if (event === 'INITIAL_SESSION' && session) {
                    currentUser = session.user;
                    loadProfile().then(() => showMainApp());
                } else if (event === 'INITIAL_SESSION' && !session) {
                    showLanding();
                }
            });
        }
    } catch (err) {
        console.error('Supabase init error:', err);
        showToast(getText('dbConnectionFailed'), 'error');
    }
}

function loadTheme() {
    try {
        const saved = localStorage.getItem('sms-tamu-theme');
        if (saved === 'light') {
            isDarkTheme = false;
            document.body.classList.add('light-theme');
        }
        const themeToggle = $('#theme-toggle');
        if (themeToggle) themeToggle.checked = isDarkTheme;
    } catch (e) {
        console.error('Theme load error:', e);
    }
}

function toggleTheme() {
    try {
        isDarkTheme = !isDarkTheme;
        if (isDarkTheme) {
            document.body.classList.remove('light-theme');
            localStorage.setItem('sms-tamu-theme', 'dark');
        } else {
            document.body.classList.add('light-theme');
            localStorage.setItem('sms-tamu-theme', 'light');
        }
        const themeToggle = $('#theme-toggle');
        if (themeToggle) themeToggle.checked = isDarkTheme;
        showToast(getText('themeChanged'), 'success');
    } catch (err) {
        console.error('Theme toggle error:', err);
    }
}

async function checkSession() {
    try {
        if (!sbClient) return;
        appInitialized = true;
        const { data: { session }, error } = await sbClient.auth.getSession();
        if (error) throw error;
        if (session) {
            currentUser = session.user;
            await loadProfile();
            showMainApp();
        } else {
            showLanding();
        }
    } catch (err) {
        console.error('Session check error:', err);
        showLanding();
    }
}

async function loadProfile() {
    try {
        if (!currentUser || !sbClient) return;
        const { data, error } = await sbClient.from('profiles').select('*').eq('id', currentUser.id).single();
        if (error && error.code !== 'PGRST116') {
            console.warn('Profile fetch error:', error.message);
        }
        if (data) {
            currentProfile = data;
            isAdmin = data.role === 'admin';
            isBlocked = data.role === 'blocked';
        } else {
            const newProfile = {
                id: currentUser.id,
                username: currentUser.email ? currentUser.email.split('@')[0] : 'User',
                bio: '', avatar_url: '', is_verified: false, role: 'user',
                followers_count: 0, following_count: 0, is_vip: false, payment_status: 'none'
            };
            const { error: insertError } = await sbClient.from('profiles').insert(newProfile);
            if (insertError) console.warn('Profile insert error:', insertError.message);
            currentProfile = newProfile;
        }
        updateProfileUI();
        if (isAdmin) {
            const adminBtn = $('#header-admin');
            if (adminBtn) adminBtn.classList.remove('hidden');
        }
    } catch (err) {
        console.error('Profile load error:', err);
    }
}

async function handleAuth(e) {
    e.preventDefault();
    try {
        const email = $('#auth-email');
        const password = $('#auth-password');
        if (!email || !password) return;
        const emailVal = email.value.trim();
        const passwordVal = password.value;
        if (!emailVal || !passwordVal) {
            showToast(getText('fillAllFields'), 'warning');
            return;
        }
        const isLogin = $('#auth-title').textContent === getText('login');
        if (isLogin) {
            const { data, error } = await sbClient.auth.signInWithPassword({ email: emailVal, password: passwordVal });
            if (error) throw error;
            currentUser = data.user;
            await loadProfile();
            showMainApp();
            showToast(getText('welcomeBack'), 'success');
        } else {
            const { data, error } = await sbClient.auth.signUp({ email: emailVal, password: passwordVal });
            if (error) throw error;
            showToast(getText('checkEmail'), 'success');
            toggleAuthMode();
        }
    } catch (err) {
        console.error('Auth error:', err);
        showToast(err.message || getText('authFailed'), 'error');
    }
}

async function handleLogout() {
    try {
        unsubscribeAllChannels();
        await sbClient.auth.signOut();
        currentUser = null; currentProfile = null; isAdmin = false; isBlocked = false;
        postsCache = []; likedPosts.clear(); savedPosts.clear();
        showLanding();
        showToast(getText('logout'), 'success');
        closeModal();
    } catch (err) {
        console.error('Logout error:', err);
        showToast(getText('error'), 'error');
    }
}

function unsubscribeAllChannels() {
    [chatSubscription, postsSubscription, profilesSubscription, announcementsSubscription, bugReportsSubscription, paymentsSubscription, chatStatusSubscription].forEach(sub => {
        if (sub) { try { sub.unsubscribe(); } catch (e) {} }
    });
    chatSubscription = postsSubscription = profilesSubscription = announcementsSubscription = bugReportsSubscription = paymentsSubscription = chatStatusSubscription = null;
}

function showLanding() { switchPage('landing-page'); }
function showAuth() { switchPage('auth-page'); }

async function showMainApp() {
    switchPage('main-app');
    await loadPaymentSettings();
    await loadChatStatus();
    loadPosts();
    loadAnnouncements();
    if (!chatSubscription) subscribeChat();
    if (!postsSubscription) subscribePosts();
    if (!profilesSubscription) subscribeProfiles();
    if (!announcementsSubscription) subscribeAnnouncements();
    if (!chatStatusSubscription) subscribeChatStatus();
    if (isAdmin) {
        if (!bugReportsSubscription) subscribeBugReports();
        if (!paymentsSubscription) subscribePayments();
    }
    updateUIBasedOnRole();
}

function updateUIBasedOnRole() {
    const addBtn = $('.nav-add');
    if (addBtn) {
        if (isBlocked) { addBtn.style.display = 'none'; }
        else { addBtn.style.display = 'flex'; }
    }
    if (isBlocked && !isAdmin) {
        showToast(getText('blockedMessage'), 'warning');
    }
}

function switchPage(pageId) {
    $$('.page').forEach(p => p.classList.remove('active'));
    const page = $('#' + pageId);
    if (page) page.classList.add('active');
}

function switchAppPage(pageName) {
    if (pageName === 'add' && isBlocked && !isAdmin) {
        showToast(getText('cannotPost'), 'warning');
        return;
    }
    $$('.app-page').forEach(p => p.classList.remove('active'));
    const page = $('#page-' + pageName);
    if (page) page.classList.add('active');
    $$('.nav-item').forEach(n => n.classList.remove('active'));
    const navItem = $(`.nav-item[data-page="${pageName}"]`);
    if (navItem) navItem.classList.add('active');
    if (pageName === 'home') loadPosts();
    if (pageName === 'profile') loadProfileTab();
    if (pageName === 'chat') {
        if (isChatClosed && !isAdmin) {
            showToast(getText('chatClosed'), 'warning');
        }
        loadChatMessages();
        scrollChatToBottom();
    }
    if (pageName === 'admin' && isAdmin) loadAdminData();
}

/* ===== PAYMENT SETTINGS ===== */
async function loadPaymentSettings() {
    try {
        if (!sbClient) return;
        const { data, error } = await sbClient.from('payment_settings').select('*').order(
