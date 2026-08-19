/**
 * CLB TÌNH NGUYỆN HOA SEN - MAIN FRONTEND JS (REAL-TIME ADMIN SYNCHRONIZATION & ULTRA-FAST 60FPS INTERACTIONS)
 */

const OFFICIAL_SLIDES = [
    'images/banner1.jpg',
    'images/banner2.jpg',
    'images/banner3.jpg',
    'images/banner4.jpg',
    'images/banner5.jpg',
    'images/banner6.jpg',
    'images/banner7.jpg',
    'images/banner8.jpg',
    'images/banner9.jpg'
];

const OFFICIAL_FB = 'https://www.facebook.com/share/1JYARBM1M1/?mibextid=wwXIfr';
const OFFICIAL_ZALO = 'https://zalo.me/g/bxsplwuxbc63rbsmizrt';

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    initBannerSlider();
    initAboutMediaSlider();
    initActivitiesSlider();
    initMemberSlider();
    initModals();
    initAccountLogin();
    initProtectedZaloLinks();
    initContactForm();
    initRegisterForm();
    refreshAllDynamicData();
    checkAccountLoginState();
});

/* INSTANT GLOBAL DELEGATION FOR ALL REGISTRATION & DYNAMIC ACTIVITY LINKS */
document.addEventListener('click', (e) => {
    const targetBtn = e.target.closest('.js-open-register');
    if (targetBtn) {
        e.preventDefault();
        e.stopPropagation();
        
        const isLogged = localStorage.getItem('ACCOUNT_LOGGED_IN') === 'true' || localStorage.getItem('ADMIN_SESSION_ACTIVE') === 'true';
        if (!isLogged) {
            showToast('⚠️ Bạn cần đăng ký / đăng nhập tài khoản trước khi gửi đơn đăng ký hoặc tham gia Zalo!', 'warning');
            const modal = document.getElementById('unifiedLoginModal');
            if (modal) modal.classList.add('active');
        } else {
            const registerModal = document.getElementById('registerModal');
            if (registerModal) registerModal.classList.add('active');
        }
    }
});

/* LIVE STORAGE SYNCHRONIZATION WITH ADMIN */
window.addEventListener('storage', (e) => {
    if (!e.key || e.key === 'CLB_HOA_SEN_APP_DATA' || e.key === 'CLB_REGISTERED_USERS') {
        refreshAllDynamicData();
    }
});

function refreshAllDynamicData() {
    loadDynamicContent();
    loadActivities();
    loadMembers();
}

/* PHONE & EMAIL VALIDATION REGEX & PRECISE URL LINK BLOCKING REGEX */
function isValidVNPhone(phone) {
    if (!phone) return false;
    const cleaned = phone.replace(/[\s\-\.\(\)]/g, '');
    const vnPhoneRegex = /^(0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/;
    return vnPhoneRegex.test(cleaned);
}

function isValidEmail(email) {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

function containsUrlLink(text) {
    if (!text) return false;
    const urlRegex = /(https?:\/\/|ftp:\/\/|www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,})/i;
    return urlRegex.test(text);
}

/* 1. HEADER SCROLL */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) header.classList.add('scrolled');
        else header.classList.remove('scrolled');

        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) link.classList.add('active');
        });
    });
}

/* 2. MOBILE MENU */
function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            toggleBtn.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (toggleBtn) toggleBtn.innerHTML = '☰';
            });
        });
    }
}

/* 3. HERO BANNER SLIDER (TRƯỢT SANG PHẢI MƯỢT MÀ) */
function initBannerSlider() {
    setInterval(() => {
        const slides = document.querySelectorAll('.banner-slide');
        if (slides.length <= 1) return;
        let activeIdx = Array.from(slides).findIndex(s => s.classList.contains('active'));
        if (activeIdx === -1) activeIdx = 0;

        slides[activeIdx].classList.remove('active');
        const nextIdx = (activeIdx + 1) % slides.length;
        slides[nextIdx].classList.add('active');
    }, 4500);
}

/* 4. ABOUT US MEDIA SLIDER */
function initAboutMediaSlider() {
    setInterval(() => {
        const slides = document.querySelectorAll('.about-media-slide');
        if (slides.length <= 1) return;
        let activeIdx = Array.from(slides).findIndex(s => s.classList.contains('active'));
        if (activeIdx === -1) activeIdx = 0;

        slides[activeIdx].classList.remove('active');
        const nextIdx = (activeIdx + 1) % slides.length;
        slides[nextIdx].classList.add('active');
    }, 3500);
}

/* 5. ACTIVITIES CAROUSEL SLIDER */
let currentActivitySlide = 0;
function initActivitiesSlider() {
    const slider = document.getElementById('activitiesGrid');
    if (!slider) return;

    function moveRight() {
        const cardWidth = slider.querySelector('.activity-card')?.offsetWidth || 300;
        const totalCards = slider.children.length;
        if (currentActivitySlide < totalCards - 3) {
            currentActivitySlide++;
        } else {
            currentActivitySlide = 0;
        }
        slider.style.transform = `translateX(-${currentActivitySlide * (cardWidth + 20)}px)`;
    }

    setInterval(moveRight, 4000);
}

/* 6. MEMBER CAROUSEL SLIDER */
let currentMemberSlide = 0;
function initMemberSlider() {
    const slider = document.getElementById('membersSlider');
    if (!slider) return;

    function moveRight() {
        const cardWidth = slider.querySelector('.member-card-slide')?.offsetWidth || 260;
        const totalCards = slider.children.length;
        if (currentMemberSlide < totalCards - 3) {
            currentMemberSlide++;
        } else {
            currentMemberSlide = 0;
        }
        slider.style.transform = `translateX(-${currentMemberSlide * (cardWidth + 18)}px)`;
    }

    setInterval(moveRight, 4000);
}

/* 7. SINGLE ACCOUNT LOGIN & REGISTRATION SYSTEM (STRICT AUTHENTICATION) */
function checkAccountLoginState() {
    const isAdminLogged = localStorage.getItem('ADMIN_SESSION_ACTIVE') === 'true';
    const isMemberLogged = localStorage.getItem('ACCOUNT_LOGGED_IN') === 'true';
    const userName = localStorage.getItem('ACCOUNT_NAME') || 'Tài khoản';
    const loginBtn = document.getElementById('openUnifiedLoginBtn');
    const headerActions = document.querySelector('.header-actions');

    const oldAdminReturnBtn = document.getElementById('adminReturnBtn');
    if (oldAdminReturnBtn) oldAdminReturnBtn.remove();

    if (isAdminLogged) {
        const adminReturnBtn = document.createElement('button');
        adminReturnBtn.id = 'adminReturnBtn';
        adminReturnBtn.className = 'btn btn-primary';
        adminReturnBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #047857 100%)';
        adminReturnBtn.innerHTML = '🔐 Quản trị Admin';
        adminReturnBtn.onclick = () => window.location.href = 'admin.html';
        
        if (headerActions && loginBtn) {
            headerActions.insertBefore(adminReturnBtn, loginBtn);
        }

        if (loginBtn) {
            loginBtn.innerHTML = `🔒 Đăng xuất`;
            loginBtn.onclick = handleAccountLogout;
        }
    } else if (isMemberLogged && loginBtn) {
        loginBtn.innerHTML = `👤 ${userName} (Đăng xuất)`;
        loginBtn.onclick = handleAccountLogout;
    } else if (loginBtn) {
        loginBtn.innerHTML = `🔑 Đăng nhập / Đăng ký`;
        loginBtn.onclick = () => {
            const modal = document.getElementById('unifiedLoginModal');
            if (modal) modal.classList.add('active');
        };
    }
}

function initAccountLogin() {
    const loginForm = document.getElementById('unifiedLoginForm');
    const registerAccountForm = document.getElementById('unifiedCreateAccountForm');
    const tabLoginBtn = document.getElementById('tabLoginBtn');
    const tabRegisterAccountBtn = document.getElementById('tabRegisterAccountBtn');

    if (tabLoginBtn && tabRegisterAccountBtn && loginForm && registerAccountForm) {
        tabLoginBtn.addEventListener('click', () => {
            tabLoginBtn.style.background = '#ffffff';
            tabLoginBtn.style.color = 'var(--primary-dark)';
            tabLoginBtn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.06)';
            
            tabRegisterAccountBtn.style.background = 'transparent';
            tabRegisterAccountBtn.style.color = 'var(--text-muted)';
            tabRegisterAccountBtn.style.boxShadow = 'none';

            loginForm.style.display = 'block';
            registerAccountForm.style.display = 'none';
        });

        tabRegisterAccountBtn.addEventListener('click', () => {
            tabRegisterAccountBtn.style.background = '#ffffff';
            tabRegisterAccountBtn.style.color = 'var(--primary-dark)';
            tabRegisterAccountBtn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.06)';
            
            tabLoginBtn.style.background = 'transparent';
            tabLoginBtn.style.color = 'var(--text-muted)';
            tabLoginBtn.style.boxShadow = 'none';

            registerAccountForm.style.display = 'block';
            loginForm.style.display = 'none';
        });
    }

    if (registerAccountForm) {
        registerAccountForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = document.getElementById('newAccFullName').value.trim();
            const user = document.getElementById('newAccUser').value.trim();
            const pass = document.getElementById('newAccPass').value.trim();
            const passConfirm = document.getElementById('newAccPassConfirm').value.trim();

            if (pass !== passConfirm) {
                showToast('⚠️ Mật khẩu xác nhận không khớp! Vui lòng kiểm tra lại.', 'warning');
                return;
            }

            if (pass.length < 4) {
                showToast('⚠️ Mật khẩu phải có ít nhất 4 ký tự!', 'warning');
                return;
            }

            let usersList = JSON.parse(localStorage.getItem('CLB_REGISTERED_USERS') || '[]');
            
            const existing = usersList.find(u => u.user.toLowerCase() === user.toLowerCase());
            if (existing) {
                showToast('⚠️ Tên đăng nhập / Số điện thoại này đã được đăng ký từ trước!', 'warning');
                return;
            }

            usersList.push({ fullName, user, pass, createdAt: new Date().toISOString() });
            localStorage.setItem('CLB_REGISTERED_USERS', JSON.stringify(usersList));

            localStorage.setItem('ACCOUNT_LOGGED_IN', 'true');
            localStorage.setItem('ACCOUNT_NAME', fullName);
            checkAccountLoginState();

            showToast(`🎉 Đăng ký tài khoản thành công! Chào mừng ${fullName}.`, 'success');
            document.getElementById('unifiedLoginModal').classList.remove('active');
            registerAccountForm.reset();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = document.getElementById('accountUser').value.trim();
            const pass = document.getElementById('accountPass').value.trim();

            if (user === 'admin' && pass === 'admin123') {
                localStorage.setItem('ADMIN_SESSION_ACTIVE', 'true');
                localStorage.setItem('ACCOUNT_LOGGED_IN', 'true');
                localStorage.setItem('ACCOUNT_NAME', 'Admin');
                showToast('🔓 Đăng nhập Admin thành công! Đang chuyển trang...', 'success');
                setTimeout(() => window.location.href = 'admin.html', 800);
            } else {
                let usersList = JSON.parse(localStorage.getItem('CLB_REGISTERED_USERS') || '[]');
                const foundUser = usersList.find(u => (u.user.toLowerCase() === user.toLowerCase() || u.fullName.toLowerCase() === user.toLowerCase()) && u.pass === pass);

                if (!foundUser) {
                    showToast('❌ Tài khoản chưa đăng ký hoặc Mật khẩu không đúng! Vui lòng chọn tab "Đăng Ký Tài Khoản" để tạo tài khoản mới.', 'warning');
                    return;
                }

                localStorage.setItem('ACCOUNT_LOGGED_IN', 'true');
                localStorage.setItem('ACCOUNT_NAME', foundUser.fullName);
                checkAccountLoginState();
                showToast(`🎉 Đăng nhập tài khoản thành công! Chào mừng ${foundUser.fullName}.`, 'success');
                document.getElementById('unifiedLoginModal').classList.remove('active');
                loginForm.reset();
            }
        });
    }
}

function handleAccountLogout() {
    localStorage.removeItem('ACCOUNT_LOGGED_IN');
    localStorage.removeItem('ACCOUNT_NAME');
    localStorage.removeItem('ADMIN_SESSION_ACTIVE');
    checkAccountLoginState();
    showToast('🔒 Đã đăng xuất khỏi tài khoản!', 'info');
}

/* 8. PROTECTED ZALO RECRUITMENT LINK */
function initProtectedZaloLinks() {
    const zaloBtns = document.querySelectorAll('.js-protected-zalo');

    zaloBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const isLogged = localStorage.getItem('ACCOUNT_LOGGED_IN') === 'true' || localStorage.getItem('ADMIN_SESSION_ACTIVE') === 'true';

            if (!isLogged) {
                e.preventDefault();
                showToast('⚠️ Bạn cần đăng ký / đăng nhập tài khoản trước khi tham gia nhóm Zalo ứng tuyển!', 'warning');
                const modal = document.getElementById('unifiedLoginModal');
                if (modal) modal.classList.add('active');
            }
        });
    });
}

/* 9. CONTACT FORM WITH INSTANT RESPONSE & VALIDATION */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        if (!isValidVNPhone(phone)) {
            showToast('⚠️ Số điện thoại không hợp lệ! Vui lòng nhập đúng 10 chữ số (ví dụ: 0912345678).', 'warning');
            return;
        }

        if (!isValidEmail(email)) {
            showToast('⚠️ Địa chỉ Email không hợp lệ! Vui lòng nhập đúng dạng name@example.com.', 'warning');
            return;
        }

        if (containsUrlLink(name) || containsUrlLink(message)) {
            showToast('⚠️ Vì lý do an toàn, hệ thống không cho phép chèn liên kết (URL / Link web) vào nội dung tin nhắn!', 'warning');
            return;
        }

        const saved = localStorage.getItem('CLB_HOA_SEN_APP_DATA');
        let data = saved ? JSON.parse(saved) : {};
        if (!data.messages) data.messages = [];

        const newMsg = {
            id: Date.now(),
            hoTen: name,
            email: email,
            soDienThoai: phone,
            noiDung: message,
            ngayGui: new Date().toISOString().slice(0, 10)
        };

        data.messages.push(newMsg);
        localStorage.setItem('CLB_HOA_SEN_APP_DATA', JSON.stringify(data));

        showToast('✅ Đã gửi lời nhắn! Ban Chủ Nhiệm CLB Hoa Sen sẽ phản hồi sớm nhất.', 'success');
        contactForm.reset();
    });
}

/* 10. REGISTER FORM WITH INSTANT RESPONSE & VALIDATION */
function initRegisterForm() {
    const registerForm = document.getElementById('registerForm');
    const registerModal = document.getElementById('registerModal');
    if (!registerForm) return;

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('regName').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const deptEl = document.getElementById('regDepartment');
        const dept = deptEl ? deptEl.value : 'Tình nguyện viên chung';
        const uni = document.getElementById('regUniversity').value.trim();
        const mot = document.getElementById('regMotivation').value.trim();

        if (!isValidVNPhone(phone)) {
            showToast('⚠️ Số điện thoại không hợp lệ! Vui lòng nhập đúng 10 chữ số (ví dụ: 0912345678).', 'warning');
            return;
        }

        if (!isValidEmail(email)) {
            showToast('⚠️ Địa chỉ Email không hợp lệ! Vui lòng nhập đúng dạng name@example.com.', 'warning');
            return;
        }

        if (containsUrlLink(name) || containsUrlLink(mot) || containsUrlLink(uni)) {
            showToast('⚠️ Vì lý do an toàn, hệ thống không cho phép chèn liên kết (URL / Link) vào thông tin đăng ký!', 'warning');
            return;
        }

        const saved = localStorage.getItem('CLB_HOA_SEN_APP_DATA');
        let data = saved ? JSON.parse(saved) : {};
        if (!data.registrations) data.registrations = [];

        const newReg = {
            id: Date.now(),
            hoTen: name,
            soDienThoai: phone,
            email: email,
            banDangKy: dept,
            truongChuyenNganh: uni,
            ghiChu: mot,
            ngayDangKy: new Date().toISOString().slice(0, 10)
        };

        data.registrations.push(newReg);
        localStorage.setItem('CLB_HOA_SEN_APP_DATA', JSON.stringify(data));

        showToast('🎉 Đăng ký thành công! Dữ liệu đã chuyển đến Ban Chủ Nhiệm.', 'success');
        registerForm.reset();
        if (registerModal) registerModal.classList.remove('active');
    });
}

/* 11. DYNAMIC CONTENT, HERO BANNER, ACTIVITIES & MEMBERS (PERSISTENT DATA LOAD) */
async function loadDynamicContent() {
    const saved = localStorage.getItem('CLB_HOA_SEN_APP_DATA');
    if (saved) {
        try {
            let fullData = JSON.parse(saved);
            let data = fullData.content || {};

            if (!data.HERO_SLIDES || data.HERO_SLIDES.length === 0) {
                data.HERO_SLIDES = OFFICIAL_SLIDES;
            }
            if (!data.ABOUT_IMAGES || data.ABOUT_IMAGES.length === 0) {
                data.ABOUT_IMAGES = OFFICIAL_SLIDES;
            }

            if (!data.HERO_TITLE || data.HERO_TITLE.includes('Lan tỏa yêu thương')) {
                data.HERO_TITLE = 'CLB TÌNH NGUYỆN HOA SEN – Mọi thứ sẽ qua đi, chỉ còn tình người ở lại';
            }
            data.SOCIAL_FB = OFFICIAL_FB;
            fullData.content = data;
            localStorage.setItem('CLB_HOA_SEN_APP_DATA', JSON.stringify(fullData));

            const currentHeroSlides = data.HERO_SLIDES || OFFICIAL_SLIDES;
            const currentAboutImages = data.ABOUT_IMAGES || OFFICIAL_SLIDES;

            if (data.TEN_CLB) document.querySelectorAll('.js-clb-name').forEach(el => el.textContent = data.TEN_CLB);
            
            // Hero Title & Subtitle
            if (data.HERO_TITLE && document.getElementById('heroTitleDisplay')) {
                let htmlTitle = data.HERO_TITLE;
                if (htmlTitle.includes(' – ') && !htmlTitle.includes('<span>')) {
                    const parts = htmlTitle.split(' – ');
                    htmlTitle = `${parts[0]} – <span>${parts.slice(1).join(' – ')}</span>`;
                } else if (htmlTitle.includes(' - ') && !htmlTitle.includes('<span>')) {
                    const parts = htmlTitle.split(' - ');
                    htmlTitle = `${parts[0]} - <span>${parts.slice(1).join(' - ')}</span>`;
                }
                document.getElementById('heroTitleDisplay').innerHTML = htmlTitle;
            }
            if (data.HERO_SUBTITLE && document.getElementById('heroSubtitleDisplay')) {
                document.getElementById('heroSubtitleDisplay').textContent = data.HERO_SUBTITLE;
            }

            // Stats
            if (data.STAT_MEMBERS && document.getElementById('statMembersDisplay')) document.getElementById('statMembersDisplay').textContent = data.STAT_MEMBERS;
            if (data.STAT_CAMPAIGNS && document.getElementById('statCampaignsDisplay')) document.getElementById('statCampaignsDisplay').textContent = data.STAT_CAMPAIGNS;
            if (data.STAT_GIFTS && document.getElementById('statGiftsDisplay')) document.getElementById('statGiftsDisplay').textContent = data.STAT_GIFTS;

            // Address & Social
            if (data.CONTACT_ADDRESS) document.querySelectorAll('.js-contact-address').forEach(el => el.textContent = data.CONTACT_ADDRESS);
            document.querySelectorAll('.js-social-fb').forEach(el => el.href = OFFICIAL_FB);
            document.querySelectorAll('.js-protected-zalo').forEach(el => el.href = OFFICIAL_ZALO);
            
            if (data.ABOUT_TITLE && document.getElementById('aboutTitleDisplay')) document.getElementById('aboutTitleDisplay').textContent = data.ABOUT_TITLE;
            if (data.ABOUT_LEAD && document.getElementById('aboutLeadDisplay')) document.getElementById('aboutLeadDisplay').textContent = data.ABOUT_LEAD;
            if (data.ABOUT_TEXT && document.getElementById('aboutTextDisplay')) document.getElementById('aboutTextDisplay').textContent = data.ABOUT_TEXT;

            // Render Hero Banner Slides
            const bannerCarousel = document.querySelector('.banner-carousel');
            if (bannerCarousel && currentHeroSlides) {
                bannerCarousel.innerHTML = currentHeroSlides.map((imgUrl, idx) => `
                    <div class="banner-slide ${idx === 0 ? 'active' : ''}" style="background-image: url('${imgUrl}');"></div>
                `).join('');
            }

            // Render About Us Gallery Images
            const mediaWrapper = document.querySelector('.media-wrapper');
            if (mediaWrapper && currentAboutImages) {
                mediaWrapper.innerHTML = currentAboutImages.map((imgUrl, idx) => `
                    <div class="about-media-slide ${idx === 0 ? 'active' : ''}" style="background-image: url('${imgUrl}');"></div>
                `).join('');
            }
        } catch (e) {}
    } else {
        document.querySelectorAll('.js-social-fb').forEach(el => el.href = OFFICIAL_FB);
    }
}

async function loadActivities() {
    const grid = document.getElementById('activitiesGrid');
    if (!grid) return;
    const saved = localStorage.getItem('CLB_HOA_SEN_APP_DATA');
    if (saved) {
        try {
            let fullData = JSON.parse(saved);
            let list = fullData.activities || [];
            
            let needsSave = false;
            if (list.some(a => a.tenHoatDong && a.tenHoatDong.includes('Phát cháo từ thiện'))) {
                list.forEach(a => {
                    if (a.tenHoatDong.includes('Phát cháo từ thiện')) {
                        a.tenHoatDong = 'Dòng chảy bếp hồng';
                    }
                });
                needsSave = true;
            }
            if (list.some(a => a.tenHoatDong && a.tenHoatDong.includes('Hội thảo khoa học'))) {
                list = list.filter(a => !a.tenHoatDong.includes('Hội thảo khoa học'));
                needsSave = true;
            }
            if (!list.some(a => a.tenHoatDong === 'Xuân ấm tình thương')) {
                list.push({ id: 5, tenHoatDong: 'Xuân ấm tình thương', moTaNgan: 'Trao tặng những phần quà Tết ý nghĩa, áo ấm và nhu yếu phẩm đến các hộ gia đình và trẻ em có hoàn cảnh khó khăn.', hinhAnh: 'images/xuanam.jpg', status: 'Còn hoạt động' });
                needsSave = true;
            }
            if (!list.some(a => a.tenHoatDong && a.tenHoatDong.includes('cà rốt'))) {
                list.unshift({ id: 6, tenHoatDong: '🥕 Chung tay hỗ trợ tiêu thụ cà rốt Hải Phòng', moTaNgan: 'Chung tay cùng bà con nông dân kết nối, thu mua và hỗ trợ tiêu thụ nông sản cà rốt Hải Phòng.', hinhAnh: 'images/carrots_support.jpg', status: 'Còn hoạt động' });
                needsSave = true;
            }
            if (needsSave) {
                fullData.activities = list;
                localStorage.setItem('CLB_HOA_SEN_APP_DATA', JSON.stringify(fullData));
            }

            if (list) {
                grid.innerHTML = list.filter(a => a.status !== 'Ẩn').map(act => `
                    <div class="activity-card">
                        <div class="card-img-holder">
                            <img src="${act.hinhAnh}" alt="${act.tenHoatDong}">
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">${act.tenHoatDong}</h3>
                            <p class="card-text">${act.moTaNgan}</p>
                            <a href="javascript:void(0)" class="card-link js-open-register">Đồng hành ngay ➔</a>
                        </div>
                    </div>
                `).join('');
            }
        } catch (e) {}
    }
}

async function loadMembers() {
    const saved = localStorage.getItem('CLB_HOA_SEN_APP_DATA');
    if (!saved) return;
    try {
        let fullData = JSON.parse(saved);
        let list = fullData.members || [];
        
        let needsSave = false;
        if (list.some(m => m.hoTen && m.hoTen.includes('Trần Thị Nguyên'))) {
            list = list.filter(m => !m.hoTen.includes('Trần Thị Nguyên'));
            needsSave = true;
        }
        const officialAvatarMap = {
            'bùi cẩm trang': 'images/trang.jpg',
            'mạc thị cẩm ly': 'images/ly1.jpg',
            'nguyễn văn thuận': 'images/thuan.jpg',
            'trần kim khánh': 'images/khanh.png',
            'lê thanh minh': 'images/minh.jpg',
            'nguyễn đức anh': 'images/danh.jpg',
            'chu thị phúc': 'images/phuc.jpg'
        };

        list.forEach(m => {
            if (m.id === 3 || m.hoTen === 'Đ/c Bùi Thuận An') {
                if (m.hoTen !== 'Đ/c Nguyễn Văn Thuận') {
                    m.hoTen = 'Đ/c Nguyễn Văn Thuận';
                    needsSave = true;
                }
            }
            if (m.id === 4 || m.hoTen.includes('Trần Kim Khánh')) {
                if (m.chucVu !== 'Trưởng Ban Nhiệm Vụ') {
                    m.chucVu = 'Trưởng Ban Nhiệm Vụ';
                    needsSave = true;
                }
            }
            if (m.id === 8 || m.hoTen.includes('Chu Thị Phúc')) {
                if (m.chucVu !== 'Thủ Quỹ - Ban Thủ Quỹ - Bán Hàng') {
                    m.chucVu = 'Thủ Quỹ - Ban Thủ Quỹ - Bán Hàng';
                    needsSave = true;
                }
            }
            if (m.hoTen) {
                const nameClean = m.hoTen.replace('Đ/c ', '').trim().toLowerCase();
                if (officialAvatarMap[nameClean]) {
                    if (!m.hinhAnh || m.hinhAnh.includes('pres.jpg') || m.hinhAnh.includes('vpres.jpg') || m.hinhAnh.includes('charity.jpg') || m.hinhAnh.includes('workshop.jpg') || m.hinhAnh.includes('student.jpg') || m.hinhAnh.includes('env.jpg')) {
                        m.hinhAnh = officialAvatarMap[nameClean];
                        needsSave = true;
                    }
                }
            }
        });

        if (needsSave) {
            fullData.members = list;
            localStorage.setItem('CLB_HOA_SEN_APP_DATA', JSON.stringify(fullData));
        }

        // DYNAMICALLY UPDATE THE ORG CHART TREE (SƠ ĐỒ PHÂN CẤP CLB) AVATARS & DETAILS
        const orgCards = document.querySelectorAll('.org-tree-container .org-card');
        orgCards.forEach(card => {
            const nameEl = card.querySelector('.org-name');
            if (!nameEl) return;
            const nameText = nameEl.textContent.trim();

            const matchedMember = list.find(m => {
                if (!m || !m.hoTen) return false;
                const cleanM = m.hoTen.replace('Đ/c ', '').trim().toLowerCase();
                const cleanCard = nameText.replace('Đ/c ', '').trim().toLowerCase();
                return cleanM === cleanCard || cleanCard.includes(cleanM) || cleanM.includes(cleanCard);
            });

            if (matchedMember) {
                const imgEl = card.querySelector('.org-avatar img');
                if (imgEl && matchedMember.hinhAnh) {
                    imgEl.src = matchedMember.hinhAnh;
                }
                const quoteEl = card.querySelector('.org-quote');
                if (quoteEl && matchedMember.cauNoi) {
                    quoteEl.textContent = `"${matchedMember.cauNoi}"`;
                }
            }
        });

        // UPDATE SLIDER IF PRESENT
        const slider = document.getElementById('membersSlider');
        if (slider && list) {
            slider.innerHTML = list.map(m => `
                <div class="member-card-slide">
                    <div class="member-avatar">
                        <img src="${m.hinhAnh}" alt="${m.hoTen}">
                    </div>
                    <h3 class="member-name">${m.hoTen}</h3>
                    <div class="member-role">${m.chucVu}</div>
                    <p class="member-quote">"${m.cauNoi}"</p>
                </div>
            `).join('');
        }
    } catch (e) {}
}

function initModals() {
    document.querySelectorAll('.js-open-login-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = document.getElementById('unifiedLoginModal');
            if (modal) modal.classList.add('active');
        });
    });

    document.querySelectorAll('.modal-close, .js-modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        });
    });
}

function showToast(msg, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerHTML = `<span>${msg}</span>`;
    container.appendChild(t);
    setTimeout(() => {
        t.style.opacity = '0';
        setTimeout(() => t.remove(), 350);
    }, 4000);
}
