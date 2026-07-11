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
        const { data, error } = await sbClient.from('payment_settings').select('*').order('created_at', { ascending: false }).limit(1).single();
        if (error && error.code !== 'PGRST116') throw error;
        if (data) {
            paymentSettings = data;
            updatePaymentModalUI();
        }
    } catch (err) {
        console.error('Payment settings error:', err);
    }
}

function updatePaymentModalUI() {
    const nameEl = $('#vip-admin-name');
    const numberEl = $('#vip-admin-number');
    const networkEl = $('#vip-admin-network');
    if (nameEl) nameEl.textContent = paymentSettings.account_name || 'Admin';
    if (numberEl) numberEl.textContent = paymentSettings.payment_number || '0712345678';
    if (networkEl) networkEl.textContent = (paymentSettings.payment_network || 'vodacom').toUpperCase();
    const adminName = $('#admin-payment-name');
    const adminNumber = $('#admin-payment-number');
    const adminNetwork = $('#admin-payment-network');
    if (adminName) adminName.value = paymentSettings.account_name || '';
    if (adminNumber) adminNumber.value = paymentSettings.payment_number || '';
    if (adminNetwork) adminNetwork.value = paymentSettings.payment_network || 'vodacom';
}

async function savePaymentSettings() {
    try {
        if (!sbClient || !isAdmin) return;
        const name = $('#admin-payment-name');
        const number = $('#admin-payment-number');
        const network = $('#admin-payment-network');
        if (!name || !number || !network) return;
        const settings = {
            account_name: name.value.trim(),
            payment_number: number.value.trim(),
            payment_network: network.value,
            updated_at: new Date().toISOString()
        };
        const { error } = await sbClient.from('payment_settings').insert(settings);
        if (error) throw error;
        paymentSettings = settings;
        updatePaymentModalUI();
        showToast(getText('paymentSaved'), 'success');
    } catch (err) {
        console.error('Save payment settings error:', err);
        showToast(getText('error'), 'error');
    }
}

/* ===== CHAT STATUS ===== */
async function loadChatStatus() {
    try {
        if (!sbClient) return;
        const { data, error } = await sbClient.from('app_settings').select('*').eq('key', 'chat_closed').single();
        if (error && error.code !== 'PGRST116') throw error;
        if (data) {
            isChatClosed = data.value === true || data.value === 'true';
            updateChatStatusUI();
        }
    } catch (err) {
        console.error('Chat status error:', err);
    }
}

function updateChatStatusUI() {
    const chatInput = $('#chat-input');
    const chatSend = $('#chat-send');
    const chatStatusLabel = $('#admin-chat-status-label');
    if (isChatClosed && !isAdmin) {
        if (chatInput) { chatInput.disabled = true; chatInput.placeholder = getText('chatClosed'); }
        if (chatSend) chatSend.disabled = true;
    } else {
        if (chatInput) { chatInput.disabled = false; chatInput.placeholder = getText('typeMessage'); }
        if (chatSend) chatSend.disabled = false;
    }
    if (chatStatusLabel) {
        chatStatusLabel.textContent = isChatClosed ? getText('chatClosedAdmin') : getText('chatOpen');
        chatStatusLabel.style.color = isChatClosed ? 'var(--danger)' : 'var(--success)';
    }
}

async function toggleChatStatus() {
    try {
        if (!sbClient || !isAdmin) return;
        const newStatus = !isChatClosed;
        const { error } = await sbClient.from('app_settings').upsert({
            key: 'chat_closed',
            value: newStatus,
            updated_at: new Date().toISOString()
        });
        if (error) throw error;
        isChatClosed = newStatus;
        updateChatStatusUI();
        showToast(isChatClosed ? 'Chat closed' : 'Chat opened', 'success');
    } catch (err) {
        console.error('Toggle chat error:', err);
        showToast(getText('error'), 'error');
    }
}

function subscribeChatStatus() {
    try {
        if (!sbClient) return;
        chatStatusSubscription = sbClient.channel('app_settings_changes')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'app_settings', filter: 'key=eq.chat_closed' }, (payload) => {
                isChatClosed = payload.new.value === true || payload.new.value === 'true';
                updateChatStatusUI();
            })
            .subscribe();
    } catch (err) {
        console.error('Chat status subscription error:', err);
    }
}

/* ===== POSTS ===== */
async function loadPosts() {
    try {
        const feed = $('#posts-feed');
        if (!feed) return;
        feed.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i></div>';
        if (!sbClient) {
            feed.innerHTML = '<div class="empty-state"><i class="fas fa-plug"></i><p>' + getText('dbConnectionFailed') + '</p></div>';
            return;
        }
        let query = sbClient.from('posts').select(`
            id, user_id, content, category, likes_count, comments_count, status, is_vip, created_at,
            profiles:user_id (username, avatar_url, is_verified, role)
        `).order('created_at', { ascending: false });
        if (!isAdmin) {
            query = query.eq('status', 'approved');
        }
        const { data, error } = await query;
        if (error) {
            console.error('Posts query error:', error);
            if (error.message && error.message.includes('row-level security')) {
                showToast(getText('rlsError'), 'error');
            }
            throw error;
        }
        postsCache = data || [];
        postsCache.forEach(post => {
            if (!post.profiles) {
                post.profiles = { username: 'User', avatar_url: '', is_verified: false, role: 'user' };
            }
        });
        if (currentCategory !== 'all') {
            postsCache = postsCache.filter(p => p.category === currentCategory);
        }
        renderPosts(postsCache, feed);
    } catch (err) {
        console.error('Load posts error:', err);
        const feed = $('#posts-feed');
        if (feed) feed.innerHTML = '<div class="empty-state"><i class="fas fa-exclamation-circle"></i><p>' + getText('error') + '</p></div>';
    }
}

function renderPosts(posts, container) {
    if (!container) return;
    if (!posts || posts.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>' + getText('emptyPosts') + '</p></div>';
        return;
    }
    container.innerHTML = posts.map(post => createPostCard(post)).join('');
    bindPostActions();
}

function createPostCard(post) {
    const profile = post.profiles || {};
    const isVip = post.is_vip || false;
    const isOwner = currentUser && post.user_id === currentUser.id;
    const isLiked = likedPosts.has(post.id);
    const isSaved = savedPosts.has(post.id);
    const timeAgo = formatTime(post.created_at);
    const avatar = profile.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.username || 'U')}&background=ff4d79&color=fff`;
    const vipClass = isVip ? 'vip-card' : '';
    const hasPremiumAccess = currentProfile && (currentProfile.is_vip || currentProfile.payment_status === 'approved' || isAdmin);
    const isVipLocked = isVip && !hasPremiumAccess;
    const canCopy = !isVip || hasPremiumAccess;
    let bodyHtml = '';
    if (isVipLocked) {
        bodyHtml = `<div class="post-vip-overlay"><div class="post-body" style="filter:blur(4px);user-select:none;">${escapeHtml(post.content)}</div><button class="vip-unlock-btn" data-post="${post.id}"><i class="fas fa-crown"></i> ${getText('unlockPremium')}</button></div>`;
    } else {
        bodyHtml = `<div class="post-body">${escapeHtml(post.content)}</div>`;
    }
    const verifiedBadge = profile.is_verified ? '<i class="fas fa-check-circle verified" title="Verified Account"></i>' : '';
    const vipBadge = (profile.role === 'vip' || profile.is_vip || isVip) ? '<i class="fas fa-star vip-badge"></i>' : '';
    const ownerActions = isOwner ? `<div class="post-owner-actions"><button class="edit-post" data-post="${post.id}"><i class="fas fa-edit"></i></button><button class="delete-post" data-post="${post.id}"><i class="fas fa-trash"></i></button></div>` : '';
    const statusBadge = isAdmin && post.status === 'pending' ? '<span style="color:var(--warning);font-size:11px;margin-left:8px;"><i class="fas fa-clock"></i> Pending</span>' : '';
    return `<div class="post-card ${vipClass}" data-post-id="${post.id}">
        <div class="post-header">
            <img src="${avatar}" alt="" class="post-avatar" loading="lazy" onerror="this.src='https://ui-avatars.com/api/?name=U&background=ff4d79&color=fff'">
            <div class="post-meta">
                <div class="post-author">${escapeHtml(profile.username || 'User')} ${verifiedBadge} ${vipBadge} ${statusBadge}</div>
                <div class="post-time">${timeAgo}</div>
            </div>
            <span class="post-category-tag">${escapeHtml(post.category || 'Other')}</span>
        </div>
        ${bodyHtml}
        <div class="post-footer">
            <div class="post-actions">
                <button class="post-action like-btn ${isLiked ? 'liked' : ''}" data-post="${post.id}"><i class="${isLiked ? 'fas' : 'far'} fa-heart"></i><span>${post.likes_count || 0}</span></button>
                <button class="post-action comment-btn" data-post="${post.id}"><i class="far fa-comment"></i><span>${post.comments_count || 0}</span></button>
                <button class="post-action copy-btn ${!canCopy ? 'disabled' : ''}" data-post="${post.id}" ${!canCopy ? 'disabled' : ''}><i class="far fa-copy"></i></button>
                <button class="post-action share-btn" data-post="${post.id}"><i class="fas fa-share-alt"></i></button>
                <button class="post-action save-btn ${isSaved ? 'saved' : ''}" data-post="${post.id}"><i class="${isSaved ? 'fas' : 'far'} fa-bookmark"></i></button>
            </div>
            ${ownerActions}
        </div>
    </div>`;
}

function bindPostActions() {
    $$('.like-btn').forEach(btn => btn.addEventListener('click', () => handleLike(btn.dataset.post)));
    $$('.copy-btn:not([disabled])').forEach(btn => btn.addEventListener('click', () => handleCopy(btn.dataset.post)));
    $$('.share-btn').forEach(btn => btn.addEventListener('click', () => handleShare(btn.dataset.post)));
    $$('.save-btn').forEach(btn => btn.addEventListener('click', () => handleSave(btn.dataset.post)));
    $$('.delete-post').forEach(btn => btn.addEventListener('click', () => handleDeletePost(btn.dataset.post)));
    $$('.edit-post').forEach(btn => btn.addEventListener('click', () => handleEditPost(btn.dataset.post)));
    $$('.vip-unlock-btn').forEach(btn => btn.addEventListener('click', (e) => { e.stopPropagation(); openVipModal(); }));
}

async function handleLike(postId) {
    try {
        if (isBlocked && !isAdmin) { showToast(getText('blockedMessage'), 'warning'); return; }
        const post = postsCache.find(p => p.id === postId);
        if (!post) return;
        const isLiked = likedPosts.has(postId);
        if (isLiked) {
            likedPosts.delete(postId);
            post.likes_count = Math.max(0, (post.likes_count || 0) - 1);
        } else {
            likedPosts.add(postId);
            post.likes_count = (post.likes_count || 0) + 1;
        }
        const btn = $(`.like-btn[data-post="${postId}"]`);
        if (btn) {
            btn.classList.toggle('liked', !isLiked);
            const icon = btn.querySelector('i');
            const count = btn.querySelector('span');
            if (icon) icon.className = !isLiked ? 'fas fa-heart' : 'far fa-heart';
            if (count) count.textContent = post.likes_count;
        }
        if (sbClient) {
            await sbClient.from('posts').update({ likes_count: post.likes_count }).eq('id', postId);
        }
    } catch (err) {
        console.error('Like error:', err);
    }
}

async function handleCopy(postId) {
    try {
        const post = postsCache.find(p => p.id === postId);
        if (!post) return;
        if (post.is_vip && !(currentProfile && (currentProfile.is_vip || currentProfile.payment_status === 'approved' || isAdmin))) {
            showToast(getText('premiumLocked'), 'warning');
            return;
        }
        await navigator.clipboard.writeText(post.content);
        showToast(getText('copied'), 'success');
    } catch (err) {
        console.error('Copy error:', err);
        showToast(getText('error'), 'error');
    }
}

async function handleShare(postId) {
    try {
        const post = postsCache.find(p => p.id === postId);
        if (!post) return;
        const shareData = { title: 'Sms Tamu - Sweet Message', text: post.content, url: window.location.href };
        if (navigator.share) {
            await navigator.share(shareData);
        } else {
            await navigator.clipboard.writeText(post.content + ' - Shared from Sms Tamu');
            showToast(getText('copied'), 'success');
        }
    } catch (err) {
        console.error('Share error:', err);
    }
}

async function handleSave(postId) {
    try {
        const isSaved = savedPosts.has(postId);
        if (isSaved) savedPosts.delete(postId); else savedPosts.add(postId);
        const btn = $(`.save-btn[data-post="${postId}"]`);
        if (btn) {
            btn.classList.toggle('saved', !isSaved);
            const icon = btn.querySelector('i');
            if (icon) icon.className = !isSaved ? 'fas fa-bookmark' : 'far fa-bookmark';
        }
        if (currentProfileTab === 'saved') loadProfileTab();
    } catch (err) {
        console.error('Save error:', err);
    }
}

async function handleDeletePost(postId) {
    try {
        if (!confirm(getText('confirmDelete'))) return;
        if (!sbClient) return;
        const { error } = await sbClient.from('posts').delete().eq('id', postId);
        if (error) throw error;
        postsCache = postsCache.filter(p => p.id !== postId);
        const card = $(`.post-card[data-post-id="${postId}"]`);
        if (card) card.remove();
        showToast(getText('deleted'), 'success');
    } catch (err) {
        console.error('Delete error:', err);
        showToast(getText('error'), 'error');
    }
}

function handleEditPost(postId) {
    const post = postsCache.find(p => p.id === postId);
    if (!post) return;
    editingPostId = postId;
    const catSelect = $('#edit-post-category');
    const contentArea = $('#edit-post-content');
    if (catSelect) catSelect.value = post.category || 'Mengineyo';
    if (contentArea) contentArea.value = post.content || '';
    openModal('modal-edit-post');
}

async function handleCreatePost(e) {
    e.preventDefault();
    try {
        if (!currentUser) { showToast(getText('pleaseLogin'), 'warning'); return; }
        if (!sbClient) { showToast(getText('dbConnectionFailed'), 'error'); return; }
        if (isBlocked && !isAdmin) { showToast(getText('cannotPost'), 'warning'); return; }
        const category = $('#post-category');
        const content = $('#post-content');
        const vipCheck = $('#post-vip');
        if (!category || !content) return;
        const contentVal = content.value.trim();
        if (!contentVal) { showToast(getText('fillAllFields'), 'warning'); return; }
        const postData = {
            user_id: currentUser.id, content: contentVal, category: category.value,
            likes_count: 0, comments_count: 0, status: autoApprove ? 'approved' : 'pending',
            is_vip: vipCheck ? vipCheck.checked : false, created_at: new Date().toISOString()
        };
        const optimisticPost = {
            ...postData, id: 'temp-' + Date.now(),
            profiles: {
                username: currentProfile?.username || 'User',
                avatar_url: currentProfile?.avatar_url || '',
                is_verified: currentProfile?.is_verified || false,
                role: currentProfile?.role || 'user'
            }
        };
        postsCache.unshift(optimisticPost);
        if (currentCategory === 'all' || currentCategory === category.value) {
            const feed = $('#posts-feed');
            if (feed) {
                if (feed.querySelector('.empty-state')) feed.innerHTML = '';
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = createPostCard(optimisticPost);
                const newCard = tempDiv.firstElementChild;
                newCard.style.opacity = '0.7';
                newCard.style.border = '2px dashed var(--accent)';
                feed.insertBefore(newCard, feed.firstChild);
                bindPostActions();
            }
        }
        const { error } = await sbClient.from('posts').insert(postData);
        if (error) {
            postsCache = postsCache.filter(p => p.id !== optimisticPost.id);
            const card = $(`.post-card[data-post-id="${optimisticPost.id}"]`);
            if (card) card.remove();
            if (error.message && error.message.includes('row-level security')) {
                showToast(getText('rlsError'), 'error');
            }
            throw error;
        }
        content.value = '';
        if (vipCheck) vipCheck.checked = false;
        showToast(getText('postCreated'), 'success');
        switchAppPage('home');
        loadPosts();
    } catch (err) {
        console.error('Create post error:', err);
        showToast(err.message || getText('error'), 'error');
    }
}

async function handleUpdatePost(e) {
    e.preventDefault();
    try {
        if (!editingPostId || !sbClient) return;
        const category = $('#edit-post-category');
        const content = $('#edit-post-content');
        if (!category || !content) return;
        const { error } = await sbClient.from('posts').update({ category: category.value, content: content.value.trim() }).eq('id', editingPostId);
        if (error) throw error;
        editingPostId = null;
        closeModal();
        showToast(getText('updated'), 'success');
        loadPosts();
    } catch (err) {
        console.error('Update post error:', err);
        showToast(getText('error'), 'error');
    }
}

function handleSearch() {
    try {
        const input = $('#search-input');
        const results = $('#search-results');
        if (!input || !results) return;
        const query = input.value.trim().toLowerCase();
        if (!query) { results.innerHTML = ''; return; }
        const filtered = postsCache.filter(p =>
            (p.content && p.content.toLowerCase().includes(query)) ||
            (p.category && p.category.toLowerCase().includes(query))
        );
        renderPosts(filtered, results);
    } catch (err) {
        console.error('Search error:', err);
    }
}

/* ===== CHAT ===== */
async function loadChatMessages() {
    try {
        const container = $('#chat-messages');
        if (!container) return;
        if (!sbClient) {
            container.innerHTML = '<div class="empty-state"><i class="fas fa-plug"></i><p>' + getText('dbConnectionFailed') + '</p></div>';
            return;
        }
        const { data, error } = await sbClient.from('global_chat').select('*, profiles:user_id (username, avatar_url)')
            .order('created_at', { ascending: true }).limit(100);
        if (error) {
            if (error.message && error.message.includes('row-level security')) {
                showToast(getText('rlsError'), 'error');
            }
            throw error;
        }
        renderChatMessages(data || [], container);
    } catch (err) {
        console.error('Chat load error:', err);
        const container = $('#chat-messages');
        if (container) container.innerHTML = '<div class="empty-state"><i class="fas fa-exclamation-circle"></i><p>' + getText('error') + '</p></div>';
    }
}

function renderChatMessages(messages, container) {
    if (!container) return;
    if (!messages || messages.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-comments"></i><p>' + getText('emptyChat') + '</p></div>';
        return;
    }
    container.innerHTML = messages.map(msg => {
        const isOwn = currentUser && msg.user_id === currentUser.id;
        const profile = msg.profiles || {};
        const time = formatTime(msg.created_at);
        return `<div class="chat-bubble ${isOwn ? 'own' : 'other'}">${!isOwn ? '<div class="chat-author">' + escapeHtml(profile.username || 'User') + '</div>' : ''}<div>${escapeHtml(msg.message)}</div><div class="chat-time">${time}</div></div>`;
    }).join('');
    scrollChatToBottom();
}

function scrollChatToBottom() {
    const container = $('#chat-messages');
    if (container) container.scrollTop = container.scrollHeight;
}

async function handleSendChat() {
    try {
        if (isChatClosed && !isAdmin) { showToast(getText('chatClosed'), 'warning'); return; }
        if (isBlocked && !isAdmin) { showToast(getText('cannotChat'), 'warning'); return; }
        const input = $('#chat-input');
        if (!input || !input.value.trim()) return;
        if (!currentUser) { showToast(getText('pleaseLogin'), 'warning'); return; }
        if (!sbClient) { showToast(getText('dbConnectionFailed'), 'error'); return; }
        const message = input.value.trim();
        input.value = '';
        const container = $('#chat-messages');
        if (container) {
            const tempBubble = document.createElement('div');
            tempBubble.className = 'chat-bubble own';
            tempBubble.style.opacity = '0.6';
            tempBubble.innerHTML = `<div>${escapeHtml(message)}</div><div class="chat-time">Sending...</div>`;
            container.appendChild(tempBubble);
            scrollChatToBottom();
        }
        const { error } = await sbClient.from('global_chat').insert({
            user_id: currentUser.id, message: message, created_at: new Date().toISOString()
        });
        if (error) {
            if (error.message && error.message.includes('row-level security')) {
                showToast(getText('rlsError'), 'error');
            } else throw error;
        } else {
            showToast(getText('chatSent'), 'success');
            loadChatMessages();
        }
    } catch (err) {
        console.error('Chat send error:', err);
        showToast(err.message || getText('error'), 'error');
    }
}

function subscribeChat() {
    try {
        if (!sbClient) return;
        chatSubscription = sbClient.channel('global_chat_changes')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'global_chat' }, () => { loadChatMessages(); })
            .subscribe();
        loadChatMessages();
    } catch (err) {
        console.error('Chat subscription error:', err);
    }
}

function subscribePosts() {
    try {
        if (!sbClient) return;
        postsSubscription = sbClient.channel('posts_changes')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'posts' }, () => { loadPosts(); })
            .subscribe();
    } catch (err) {
        console.error('Posts subscription error:', err);
    }
}

function subscribeProfiles() {
    try {
        if (!sbClient) return;
        profilesSubscription = sbClient.channel('profiles_changes')
            .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'profiles' }, (payload) => {
                const updatedProfile = payload.new;
                let needsReRender = false;
                postsCache.forEach(post => {
                    if (post.profiles && post.user_id === updatedProfile.id) {
                        post.profiles = { ...post.profiles, ...updatedProfile };
                        needsReRender = true;
                    }
                });
                if (currentUser && updatedProfile.id === currentUser.id) {
                    currentProfile = { ...currentProfile, ...updatedProfile };
                    isAdmin = updatedProfile.role === 'admin';
                    isBlocked = updatedProfile.role === 'blocked';
                    updateProfileUI();
                    updateUIBasedOnRole();
                }
                if (needsReRender) {
                    const feed = $('#posts-feed');
                    if (feed && $('#page-home').classList.contains('active')) renderPosts(postsCache, feed);
                    if ($('#page-profile').classList.contains('active')) loadProfileTab();
                    if ($('#page-search').classList.contains('active')) handleSearch();
                }
            })
            .subscribe();
    } catch (err) {
        console.error('Profiles subscription error:', err);
    }
}

function subscribeAnnouncements() {
    try {
        if (!sbClient) return;
        announcementsSubscription = sbClient.channel('announcements_changes')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'announcements' }, () => { loadAnnouncements(); })
            .subscribe();
    } catch (err) {
        console.error('Announcements subscription error:', err);
    }
}

function subscribeBugReports() {
    try {
        if (!sbClient || !isAdmin) return;
        bugReportsSubscription = sbClient.channel('bug_reports_changes')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'bug_reports' }, () => {
                if ($('#page-admin').classList.contains('active')) loadAdminBugs();
            })
            .subscribe();
    } catch (err) {
        console.error('Bug reports subscription error:', err);
    }
}

function subscribePayments() {
    try {
        if (!sbClient || !isAdmin) return;
        paymentsSubscription = sbClient.channel('payments_changes')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'payments' }, () => {
                if ($('#page-admin').classList.contains('active')) loadAdminPayments();
            })
            .subscribe();
    } catch (err) {
        console.error('Payments subscription error:', err);
    }
}

/* ===== PROFILE ===== */
function updateProfileUI() {
    try {
        if (!currentProfile) return;
        const usernameEl = $('#profile-username');
        const bioEl = $('#profile-bio');
        const avatarEl = $('#profile-avatar');
        const followingEl = $('#profile-following');
        const followersEl = $('#profile-followers');
        if (usernameEl) usernameEl.textContent = currentProfile.username || 'User';
        if (bioEl) bioEl.textContent = currentProfile.bio || 'No bio yet';
        if (avatarEl) {
            avatarEl.src = currentProfile.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(currentProfile.username || 'U')}&background=ff4d79&color=fff`;
        }
        if (followingEl) followingEl.textContent = currentProfile.following_count || 0;
        if (followersEl) followersEl.textContent = currentProfile.followers_count || 0;
        const profileInfo = $('.profile-info');
        if (profileInfo) {
            let verifiedBadge = $('#profile-verified-badge');
            if (currentProfile.is_verified) {
                if (!verifiedBadge) {
                    verifiedBadge = document.createElement('span');
                    verifiedBadge.id = 'profile-verified-badge';
                    verifiedBadge.innerHTML = '<i class="fas fa-check-circle" style="color:var(--verified);margin-left:6px;font-size:18px;" title="Verified Account"></i>';
                    const h3 = profileInfo.querySelector('h3');
                    if (h3) h3.appendChild(verifiedBadge);
                }
            } else if (verifiedBadge) {
                verifiedBadge.remove();
            }
            let blockedBadge = $('#profile-blocked-badge');
            if (isBlocked) {
                if (!blockedBadge) {
                    blockedBadge = document.createElement('span');
                    blockedBadge.id = 'profile-blocked-badge';
                    blockedBadge.innerHTML = '<i class="fas fa-ban" style="color:var(--danger);margin-left:6px;font-size:16px;" title="Account Restricted"></i>';
                    const h3 = profileInfo.querySelector('h3');
                    if (h3) h3.appendChild(blockedBadge);
                }
            } else if (blockedBadge) {
                blockedBadge.remove();
            }
        }
    } catch (err) {
        console.error('Profile UI error:', err);
    }
}

function loadProfileTab() {
    try {
        const container = $('#profile-content');
        if (!container) return;
        let posts = [];
        if (currentProfileTab === 'my-posts') posts = postsCache.filter(p => currentUser && p.user_id === currentUser.id);
        else if (currentProfileTab === 'liked') posts = postsCache.filter(p => likedPosts.has(p.id));
        else if (currentProfileTab === 'saved') posts = postsCache.filter(p => savedPosts.has(p.id));
        if (!posts || posts.length === 0) {
            const emptyKey = currentProfileTab === 'my-posts' ? 'emptyPosts' : currentProfileTab === 'liked' ? 'emptyLiked' : 'emptySaved';
            container.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>' + getText(emptyKey) + '</p></div>';
            return;
        }
        renderPosts(posts, container);
    } catch (err) {
        console.error('Profile tab error:', err);
    }
}

async function handleAvatarUpload(e) {
    try {
        const file = e.target.files[0];
        if (!file || !currentUser) return;
        if (file.size > 2 * 1024 * 1024) { showToast(getText('imageTooLarge'), 'warning'); return; }
        if (!sbClient) { showToast(getText('dbConnectionFailed'), 'error'); return; }
        const fileExt = file.name.split('.').pop();
        const fileName = `${currentUser.id}-${Date.now()}.${fileExt}`;
        const { error: uploadError } = await sbClient.storage.from('avatars').upload(fileName, file);
        if (uploadError) throw uploadError;
        const { data: { publicUrl } } = sbClient.storage.from('avatars').getPublicUrl(fileName);
        await sbClient.from('profiles').update({ avatar_url: publicUrl }).eq('id', currentUser.id);
        currentProfile.avatar_url = publicUrl;
        updateProfileUI();
        showToast(getText('avatarUpdated'), 'success');
    } catch (err) {
        console.error('Avatar upload error:', err);
        showToast(getText('uploadFailed'), 'error');
    }
}

async function handleEditProfile(e) {
    e.preventDefault();
    try {
        const username = $('#edit-username');
        const bio = $('#edit-bio');
        if (!username || !currentUser || !sbClient) return;
        const updates = { username: username.value.trim(), bio: bio ? bio.value.trim() : '' };
        const { error } = await sbClient.from('profiles').update(updates).eq('id', currentUser.id);
        if (error) throw error;
        currentProfile = { ...currentProfile, ...updates };
        updateProfileUI();
        closeModal();
        showToast(getText('profileUpdated'), 'success');
    } catch (err) {
        console.error('Edit profile error:', err);
        showToast(getText('error'), 'error');
    }
}

/* ===== ADMIN ===== */
async function loadAdminData() {
    try {
        if (!isAdmin) return;
        await loadPendingPosts();
        await loadAdminUsers();
        await loadAdminVipRequests();
        await loadAdminBugs();
        await loadAdminPayments();
        await loadPaymentSettings();
        updateChatStatusUI();
    } catch (err) {
        console.error('Admin load error:', err);
    }
}

async function loadPendingPosts() {
    try {
        const list = $('#admin-pending-list');
        if (!list || !sbClient) return;
        const { data, error } = await sbClient.from('posts').select('*, profiles:user_id (username)')
            .eq('status', 'pending').order('created_at', { ascending: false });
        if (error) throw error;
        if (!data || data.length === 0) {
            list.innerHTML = '<div class="admin-list-item"><div class="item-info">' + getText('noPending') + '</div></div>';
            return;
        }
        list.innerHTML = data.map(post => `<div class="admin-list-item"><div class="item-info"><strong>${escapeHtml(post.profiles?.username || 'User')}</strong><br><small>${escapeHtml((post.content || '').substring(0, 60))}${(post.content || '').length > 60 ? '...' : ''}</small></div><div class="item-actions"><button onclick="adminApprovePost('${post.id}')">${getText('approve')}</button><button class="danger" onclick="adminRejectPost('${post.id}')">${getText('reject')}</button></div></div>`).join('');
    } catch (err) {
        console.error('Pending posts error:', err);
    }
}

async function loadAdminUsers() {
    try {
        const list = $('#admin-users-list');
        if (!list || !sbClient) return;
        const { data, error } = await sbClient.from('profiles').select('*').order('created_at', { ascending: false }).limit(50);
        if (error) throw error;
        if (!data || data.length === 0) {
            list.innerHTML = '<div class="admin-list-item"><div class="item-info">' + getText('noUsers') + '</div></div>';
            return;
        }
        list.innerHTML = data.map(user => `<div class="admin-list-item"><div class="item-info"><strong>${escapeHtml(user.username || 'User')}</strong>${user.is_verified ? '<i class="fas fa-check-circle" style="color:var(--verified);margin-left:4px;"></i>' : ''}${user.role === 'blocked' ? '<i class="fas fa-ban" style="color:var(--danger);margin-left:4px;"></i>' : ''}<br><small>${user.followers_count || 0} followers | ${user.payment_status || 'none'}</small></div><div class="item-actions"><button onclick="adminVerifyUser('${user.id}', ${!user.is_verified})">${user.is_verified ? 'Unverify' : getText('verifyUser')}</button><button class="gold" onclick="adminAddFollowers('${user.id}')">${getText('addFollowers')}</button><button class="danger" onclick="adminBlockUser('${user.id}')">${user.role === 'blocked' ? getText('unblockUser') : getText('blockUser')}</button></div></div>`).join('');
    } catch (err) {
        console.error('Admin users error:', err);
    }
}

async function loadAdminVipRequests() {
    try {
        const list = $('#admin-vip-list');
        if (!list) return;
        list.innerHTML = '<div class="admin-list-item"><div class="item-info">' + getText('noVipRequests') + '</div></div>';
    } catch (err) {
        console.error('VIP requests error:', err);
    }
}

async function loadAdminBugs() {
    try {
        const list = $('#admin-bug-list');
        if (!list || !sbClient) return;
        const { data, error } = await sbClient.from('bug_reports').select('*').order('created_at', { ascending: false }).limit(20);
        if (error) throw error;
        if (!data || data.length === 0) {
            list.innerHTML = '<div class="admin-list-item"><div class="item-info">' + getText('noBugs') + '</div></div>';
            return;
        }
        list.innerHTML = data.map(bug => `<div class="admin-list-item"><div class="item-info"><strong>${escapeHtml(bug.user_email || 'Anonymous')}</strong><br><small>${escapeHtml((bug.description || '').substring(0, 80))}${(bug.description || '').length > 80 ? '...' : ''}</small></div><div class="item-actions"><button class="danger" onclick="adminDeleteBug('${bug.id}')">Delete</button></div></div>`).join('');
    } catch (err) {
        console.error('Bug reports error:', err);
    }
}

async function loadAdminPayments() {
    try {
        const list = $('#admin-payments-list');
        if (!list || !sbClient) return;
        const { data, error } = await sbClient.from('payments').select('*, profiles:user_id (username, email)')
            .eq('status', 'pending').order('created_at', { ascending: false });
        if (error) throw error;
        if (!data || data.length === 0) {
            list.innerHTML = '<div class="admin-list-item"><div class="item-info">' + getText('noPayments') + '</div></div>';
            return;
        }
        list.innerHTML = data.map(payment => `<div class="admin-list-item"><div class="item-info"><strong>${escapeHtml(payment.profiles?.username || 'User')}</strong><br><small>${payment.phone_number} | ${payment.network} | ${formatTime(payment.created_at)}</small></div><div class="item-actions"><button class="gold" onclick="adminApprovePayment('${payment.id}', '${payment.user_id}')">Approve</button><button class="danger" onclick="adminRejectPayment('${payment.id}')">Reject</button></div></div>`).join('');
    } catch (err) {
        console.error('Admin payments error:', err);
    }
}

window.adminApprovePost = async function(postId) {
    try {
        if (!sbClient) return;
        await sbClient.from('posts').update({ status: 'approved' }).eq('id', postId);
        showToast(getText('postApproved'), 'success');
        loadPendingPosts(); loadPosts();
    } catch (err) {
        console.error(err);
        showToast(getText('error'), 'error');
    }
};

window.adminRejectPost = async function(postId) {
    try {
        if (!sbClient) return;
        await sbClient.from('posts').delete().eq('id', postId);
        showToast(getText('postRejected'), 'success');
        loadPendingPosts();
    } catch (err) {
        console.error(err);
        showToast(getText('error'), 'error');
    }
};

window.adminVerifyUser = async function(userId, verify) {
    try {
        if (!sbClient) return;
        await sbClient.from('profiles').update({ is_verified: verify }).eq('id', userId);
        showToast(verify ? getText('userVerified') : 'User unverified', 'success');
        loadAdminUsers(); loadPosts();
    } catch (err) {
        console.error(err);
        showToast(getText('error'), 'error');
    }
};

window.adminAddFollowers = async function(userId) {
    try {
        if (!sbClient) return;
        const num = prompt(getText('enterFollowers'), '1000');
        if (!num) return;
        const count = parseInt(num);
        if (isNaN(count) || count < 0) return;
        const { data } = await sbClient.from('profiles').select('followers_count').eq('id', userId).single();
        const newCount = (data?.followers_count || 0) + count;
        await sbClient.from('profiles').update({ followers_count: newCount }).eq('id', userId);
        showToast(getText('followersAdded'), 'success');
        loadAdminUsers();
    } catch (err) {
        console.error(err);
        showToast(getText('error'), 'error');
    }
};

window.adminBlockUser = async function(userId) {
    try {
        if (!sbClient) return;
        const { data } = await sbClient.from('profiles').select('role').eq('id', userId).single();
        const isCurrentlyBlocked = data?.role === 'blocked';
        const newRole = isCurrentlyBlocked ? 'user' : 'blocked';
        if (!isCurrentlyBlocked && !confirm(getText('confirmBlock'))) return;
        await sbClient.from('profiles').update({ role: newRole }).eq('id', userId);
        showToast(isCurrentlyBlocked ? getText('userUnblocked') : getText('userBlocked'), 'success');
        loadAdminUsers(); loadPosts();
    } catch (err) {
        console.error(err);
        showToast(getText('error'), 'error');
    }
};

window.adminDeleteBug = async function(bugId) {
    try {
        if (!sbClient) return;
        await sbClient.from('bug_reports').delete().eq('id', bugId);
        showToast('Bug report deleted', 'success');
        loadAdminBugs();
    } catch (err) {
        console.error(err);
        showToast(getText('error'), 'error');
    }
};

window.adminApprovePayment = async function(paymentId, userId) {
    try {
        if (!sbClient) return;
        await sbClient.from('payments').update({ status: 'approved' }).eq('id', paymentId);
        await sbClient.from('profiles').update({ is_vip: true, payment_status: 'approved' }).eq('id', userId);
        showToast(getText('paymentApproved'), 'success');
        loadAdminPayments();
    } catch (err) {
        console.error(err);
        showToast(getText('error'), 'error');
    }
};

window.adminRejectPayment = async function(paymentId) {
    try {
        if (!sbClient) return;
        await sbClient.from('payments').update({ status: 'rejected' }).eq('id', paymentId);
        showToast('Payment rejected', 'success');
        loadAdminPayments();
    } catch (err) {
        console.error(err);
        showToast(getText('error'), 'error');
    }
};

/* ===== ANNOUNCEMENTS ===== */
async function loadAnnouncements() {
    try {
        const banner = $('#announcement-banner');
        const text = $('#announcement-text');
        if (!banner || !text || !sbClient) return;
        const { data, error } = await sbClient.from('announcements').select('*')
            .order('created_at', { ascending: false }).limit(1).single();
        if (error && error.code !== 'PGRST116') throw error;
        if (data && data.content) {
            text.textContent = data.content;
            banner.classList.remove('hidden');
        } else {
            banner.classList.add('hidden');
        }
    } catch (err) {
        console.error('Announcements error:', err);
    }
}

async function handleAnnouncement() {
    try {
        const input = $('#admin-announcement');
        if (!input || !input.value.trim() || !sbClient) return;
        const { error } = await sbClient.from('announcements').insert({
            content: input.value.trim(), created_at: new Date().toISOString()
        });
        if (error) throw error;
        input.value = '';
        showToast(getText('announcementSent'), 'success');
        loadAnnouncements();
    } catch (err) {
        console.error('Announcement error:', err);
        showToast(getText('error'), 'error');
    }
}

window.adminDeleteAnnouncements = async function() {
    try {
        if (!sbClient || !isAdmin) return;
        if (!confirm('Delete all announcements? This will clear the banner for all users.')) return;
        const { error } = await sbClient.from('announcements').delete().neq('id', '00000000-0000-0000-0000-000000000000');
        if (error) throw error;
        showToast('All announcements deleted', 'success');
        loadAnnouncements();
    } catch (err) {
        console.error(err);
        showToast(getText('error'), 'error');
    }
};

/* ===== BUG REPORT ===== */
async function handleBugReport(e) {
    e.preventDefault();
    try {
        const desc = $('#bug-desc');
        if (!desc || !desc.value.trim()) return;
        if (!sbClient) { showToast(getText('dbConnectionFailed'), 'error'); return; }
        const { error } = await sbClient.from('bug_reports').insert({
            user_id: currentUser ? currentUser.id : null,
            user_email: currentUser ? currentUser.email : 'anonymous',
            description: desc.value.trim(), created_at: new Date().toISOString()
        });
        if (error) throw error;
        desc.value = '';
        closeModal();
        showToast(getText('bugReported'), 'success');
    } catch (err) {
        console.error('Bug report error:', err);
        showToast(getText('error'), 'error');
    }
}

/* ===== VIP / PAYMENT ===== */
function openVipModal() {
    updatePaymentModalUI();
    openModal('modal-vip');
}

async function handleVipPayment() {
    try {
        if (!currentUser || !sbClient) { showToast(getText('pleaseLogin'), 'warning'); return; }
        const phone = $('#vip-phone');
        const network = $('#vip-network');
        if (!phone || !phone.value.trim()) { showToast(getText('fillAllFields'), 'warning'); return; }

        const paymentData = {
            user_id: currentUser.id,
            phone_number: phone.value.trim(),
            network: network ? network.value : 'vodacom',
            status: 'pending',
            amount: 1000,
            created_at: new Date().toISOString()
        };

        const { error } = await sbClient.from('payments').insert(paymentData);
        if (error) throw error;

        // Update user payment status to pending
        await sbClient.from('profiles').update({ payment_status: 'pending' }).eq('id', currentUser.id);
        currentProfile.payment_status = 'pending';

        phone.value = '';
        closeModal();
        showToast(getText('paymentDemo'), 'success');
    } catch (err) {
        console.error('Payment error:', err);
        showToast(getText('error'), 'error');
    }
}

/* ===== MODALS ===== */
function openModal(modalId) {
    const overlay = $('#modal-overlay');
    const modal = $('#' + modalId);
    if (!overlay || !modal) return;
    $$('.modal').forEach(m => m.classList.add('hidden'));
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal() {
    const overlay = $('#modal-overlay');
    if (!overlay) return;
    overlay.classList.add('hidden');
    $$('.modal').forEach(m => m.classList.add('hidden'));
}

/* ===== LANGUAGE ===== */
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'sw' : 'en';
    const btn = $('#lang-toggle');
    const settingsLangBtn = $('#settings-lang-toggle');
    if (btn) btn.textContent = currentLang.toUpperCase();
    if (settingsLangBtn) settingsLangBtn.textContent = currentLang.toUpperCase();
    applyLanguage();
}

function applyLanguage() {
    try {
        const dict = i18n[currentLang];
        if (!dict) return;
        $$('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.textContent = dict[key];
        });
        $$('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) el.placeholder = dict[key];
        });
    } catch (err) {
        console.error('Language error:', err);
    }
}

function getText(key) {
    return i18n[currentLang]?.[key] || i18n['en']?.[key] || key;
}

/* ===== TOASTS ===== */
function showToast(message, type) {
    try {
        const container = $('#toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast ' + type;
        const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle';
        toast.innerHTML = `<i class="fas ${icon}"></i> ${escapeHtml(message)}`;
        container.appendChild(toast);
        setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 3000);
    } catch (err) {
        console.error('Toast error:', err);
    }
}

/* ===== UTILITIES ===== */
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatTime(dateString) {
    try {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now - date;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        if (seconds < 60) return 'Just now';
        if (minutes < 60) return minutes + 'm ago';
        if (hours < 24) return hours + 'h ago';
        if (days < 7) return days + 'd ago';
        return date.toLocaleDateString();
    } catch (err) {
        return dateString || '';
    }
}

function toggleAuthMode() {
    try {
        const title = $('#auth-title');
        const submit = $('#auth-submit');
        const toggleText = $('#auth-toggle-text');
        const toggleLink = $('#auth-toggle-link');
        if (!title || !submit) return;
        const isLogin = title.textContent === getText('login');
        title.textContent = isLogin ? getText('signUp') : getText('login');
        submit.textContent = isLogin ? getText('signUp') : getText('login');
        if (toggleText) toggleText.textContent = isLogin ? getText('hasAccount') : getText('noAccount');
        if (toggleLink) toggleLink.textContent = isLogin ? getText('login') : getText('signUp');
    } catch (err) {
        console.error('Auth toggle error:', err);
    }
}

/* ===== EVENT BINDING ===== */
function bindEvents() {
    try {
        const getStarted = $('#get-started-btn');
        if (getStarted) getStarted.addEventListener('click', showAuth);
        const langToggle = $('#lang-toggle');
        if (langToggle) langToggle.addEventListener('click', toggleLanguage);
        const authForm = $('#auth-form');
        if (authForm) authForm.addEventListener('submit', handleAuth);
        const authToggle = $('#auth-toggle-link');
        if (authToggle) authToggle.addEventListener('click', (e) => { e.preventDefault(); toggleAuthMode(); });
        const authBack = $('#auth-back');
        if (authBack) authBack.addEventListener('click', showLanding);
        $$('.nav-item').forEach(item => {
            item.addEventListener('click', () => { const page = item.dataset.page; if (page) switchAppPage(page); });
        });
        const settingsBtn = $('#header-settings');
        if (settingsBtn) settingsBtn.addEventListener('click', () => openModal('modal-settings'));
        const adminBtn = $('#header-admin');
        if (adminBtn) adminBtn.addEventListener('click', () => switchAppPage('admin'));
        $$('.cat-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                $$('.cat-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.dataset.cat || 'all';
                loadPosts();
            });
        });
        const addPostForm = $('#add-post-form');
        if (addPostForm) addPostForm.addEventListener('submit', handleCreatePost);
        const editPostForm = $('#edit-post-form');
        if (editPostForm) editPostForm.addEventListener('submit', handleUpdatePost);
        const searchInput = $('#search-input');
        if (searchInput) searchInput.addEventListener('input', debounce(handleSearch, 300));
        const chatSend = $('#chat-send');
        if (chatSend) chatSend.addEventListener('click', handleSendChat);
        const chatInput = $('#chat-input');
        if (chatInput) chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSendChat(); });
        const profileEditBtn = $('#profile-edit-btn');
        if (profileEditBtn) profileEditBtn.addEventListener('click', () => {
            const username = $('#edit-username');
            const bio = $('#edit-bio');
            if (username) username.value = currentProfile?.username || '';
            if (bio) bio.value = currentProfile?.bio || '';
            openModal('modal-edit-profile');
        });
        const profileSettingsBtn = $('#profile-settings-btn');
        if (profileSettingsBtn) profileSettingsBtn.addEventListener('click', () => openModal('modal-settings'));
        const editProfileForm = $('#edit-profile-form');
        if (editProfileForm) editProfileForm.addEventListener('submit', handleEditProfile);
        const avatarInput = $('#avatar-input');
        if (avatarInput) avatarInput.addEventListener('change', handleAvatarUpload);
        const avatarEdit = $('#avatar-edit');
        if (avatarEdit) avatarEdit.addEventListener('click', () => { if (avatarInput) avatarInput.click(); });
        $$('.profile-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                $$('.profile-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentProfileTab = tab.dataset.tab || 'my-posts';
                loadProfileTab();
            });
        });
        const autoApproveToggle = $('#admin-auto-approve');
        if (autoApproveToggle) autoApproveToggle.addEventListener('change', (e) => { autoApprove = e.target.checked; });
        const announceBtn = $('#admin-announce-btn');
        if (announceBtn) announceBtn.addEventListener('click', handleAnnouncement);
        const themeToggle = $('#theme-toggle');
        if (themeToggle) themeToggle.addEventListener('change', toggleTheme);
        const settingsLangToggle = $('#settings-lang-toggle');
        if (settingsLangToggle) settingsLangToggle.addEventListener('click', toggleLanguage);
        const settingsReportBtn = $('#settings-report-btn');
        if (settingsReportBtn) settingsReportBtn.addEventListener('click', () => { closeModal(); setTimeout(() => openModal('modal-bug'), 300); });
        const settingsLogoutBtn = $('#settings-logout-btn');
        if (settingsLogoutBtn) settingsLogoutBtn.addEventListener('click', handleLogout);
        const bugForm = $('#bug-report-form');
        if (bugForm) bugForm.addEventListener('submit', handleBugReport);
        $$('.modal-close').forEach(btn => btn.addEventListener('click', closeModal));
        const modalOverlay = $('#modal-overlay');
        if (modalOverlay) modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
        const announceClose = $('#announcement-close');
        if (announceClose) {
            announceClose.addEventListener('click', () => {
                if (isAdmin) {
                    const banner = $('#announcement-banner');
                    if (banner) banner.classList.add('hidden');
                } else {
                    showToast('Only admin can remove announcements', 'warning');
                }
            });
        }
        // VIP payment
        const vipPayBtn = $('#vip-pay-btn');
        if (vipPayBtn) vipPayBtn.addEventListener('click', handleVipPayment);
        // Admin payment settings save
        const savePaymentBtn = $('#admin-save-payment-btn');
        if (savePaymentBtn) savePaymentBtn.addEventListener('click', savePaymentSettings);
        // Admin chat toggle
        const chatToggleBtn = $('#admin-chat-toggle-btn');
        if (chatToggleBtn) chatToggleBtn.addEventListener('click', toggleChatStatus);
    } catch (err) {
        console.error('Event binding error:', err);
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => { clearTimeout(timeout); func(...args); };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
