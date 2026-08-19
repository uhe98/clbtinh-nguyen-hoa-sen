/**
 * CLB TÌNH NGUYỆN HOA SEN - ADMIN LOGIC (HERO BANNER FILE UPLOADER & PREVIEW)
 */

const DEFAULT_ADMIN_USER = 'admin';
const DEFAULT_ADMIN_PASS = 'admin123';

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

const INITIAL_MEMBERS = [
    { id: 1, hoTen: 'Đ/c Bùi Cẩm Trang', chucVu: 'Phó Bí thư Đoàn trường, Chủ nhiệm CLB', banNganh: 'Ban Chủ Nhiệm', cauNoi: 'Lãnh đạo bằng tình yêu thương và trách nhiệm vì cộng đồng.', hinhAnh: 'images/pres.jpg' },
    { id: 2, hoTen: 'Đ/c Mạc Thị Cẩm Ly', chucVu: 'Phó Chủ nhiệm CLB, Trưởng Ban Tổ Chức - Kế Hoạch', banNganh: 'Ban Chủ Nhiệm', cauNoi: 'Kế hoạch chu đáo là nền tảng cho mọi hành trình tình nguyện thành công.', hinhAnh: 'images/vpres.jpg' },
    { id: 3, hoTen: 'Đ/c Nguyễn Văn Thuận', chucVu: 'Phó Chủ nhiệm CLB', banNganh: 'Ban Chủ Nhiệm', cauNoi: 'Đồng lòng cống hiến, lan tỏa sức trẻ tình nguyện.', hinhAnh: 'images/pres.jpg' },
    { id: 4, hoTen: 'Đ/c Trần Kim Khánh', chucVu: 'Trưởng Ban Nhiệm Vụ', banNganh: 'Ban Chủ Nhiệm', cauNoi: 'Sẵn sàng nhận nhiệm vụ, sẵn sàng cống hiến hết mình.', hinhAnh: 'images/charity.jpg' },
    { id: 5, hoTen: 'Đ/c Lê Thanh Minh', chucVu: 'Trưởng Ban Phong Trào - Truyền Thông', banNganh: 'Ban Truyền Thông', cauNoi: 'Lan tỏa câu chuyện tử tế đến với hàng triệu trái tim.', hinhAnh: 'images/workshop.jpg' },
    { id: 6, hoTen: 'Đ/c Nguyễn Đức Anh', chucVu: 'Trưởng Ban Thể Thao', banNganh: 'Ban Thể Thao', cauNoi: 'Rèn luyện thể lực, thắt chặt tinh thần đồng đội nhiệt huyết.', hinhAnh: 'images/student.jpg' },
    { id: 8, hoTen: 'Đ/c Chu Thị Phúc', chucVu: 'Thủ Quỹ - Ban Thủ Quỹ - Bán Hàng', banNganh: 'Ban Thủ Quỹ - Bán Hàng', cauNoi: 'Minh bạch, cẩn trọng trong từng nguồn quỹ từ thiện.', hinhAnh: 'images/vpres.jpg' }
];

let appData = {
    content: {
        TEN_CLB: 'CLB TÌNH NGUYỆN HOA SEN - TDU',
        HERO_TITLE: 'CLB TÌNH NGUYỆN HOA SEN – Mọi thứ sẽ qua đi, chỉ còn tình người ở lại',
        HERO_SUBTITLE: 'Kết nối những trái tim nhiệt huyết, cùng mang nụ cười và hy vọng đến khắp mọi miền Tổ quốc.',
        STAT_MEMBERS: '50+',
        STAT_CAMPAIGNS: '20+',
        STAT_GIFTS: '100+',
        CONTACT_EMAIL: 'clbhoasen@email.com',
        CONTACT_PHONE: '(+84) 123 456 789',
        CONTACT_ADDRESS: 'Số 3 Vũ Công Đán, phường Tứ Minh, TP. Hải Phòng',
        SOCIAL_FB: 'https://www.facebook.com/share/1JYARBM1M1/?mibextid=wwXIfr',
        SOCIAL_ZALO: 'https://zalo.me/g/jnkxkg639',
        LOGO_IMG: 'images/logo.png',
        HERO_SLIDES: OFFICIAL_SLIDES,
        ABOUT_TITLE: 'Hành trình nhiệt huyết của tuổi trẻ',
        ABOUT_LEAD: 'CLB TÌNH NGUYỆN HOA SEN - TDU quy tụ lực lượng thanh niên năng động, lấy tinh thần cống hiến vì cộng đồng làm kim chỉ nam.',
        ABOUT_TEXT: 'Chúng tôi liên tục tổ chức các chiến dịch hiến máu nhân đạo, chương trình ấm áp cho thiếu nhi và hỗ trợ người lao động nghèo trên địa bàn TP. Hải Phòng.',
        ABOUT_IMAGES: OFFICIAL_SLIDES
    },
    activities: [
        { id: 6, tenHoatDong: '🥕 Chung tay hỗ trợ tiêu thụ cà rốt Hải Phòng', moTaNgan: 'Chung tay cùng bà con nông dân kết nối, thu mua và hỗ trợ tiêu thụ nông sản cà rốt Hải Phòng.', hinhAnh: 'images/carrots_support.jpg', status: 'Còn hoạt động' },
        { id: 1, tenHoatDong: 'Dòng chảy bếp hồng', moTaNgan: 'Nấu và phân phát hàng trăm suất cháo dinh dưỡng nóng hổi cho bệnh nhân và người có hoàn cảnh khó khăn.', hinhAnh: 'images/banner1.jpg', status: 'Còn hoạt động' },
        { id: 2, tenHoatDong: 'Hiến máu tình nguyện', moTaNgan: 'Giọt máu cho đi - Một đời ở lại. Ngày hội hiến máu trao niềm hy vọng cho các bệnh nhân cần máu điều trị.', hinhAnh: 'images/banner2.jpg', status: 'Còn hoạt động' },
        { id: 3, tenHoatDong: 'Trung thu cho em', moTaNgan: 'Mang đến không khí Tết Trung thu rộn ràng, lồng đèn lung linh và những phần quà ý nghĩa cho các em nhỏ.', hinhAnh: 'images/banner3.jpg', status: 'Còn hoạt động' },
        { id: 4, tenHoatDong: 'Kỷ niệm 5 năm thành lập', moTaNgan: 'Lễ kỷ niệm chặng đường 5 năm cống hiến vì cộng đồng của CLB Tình Nguyện Hoa Sen - Cơm An.', hinhAnh: 'images/banner4.jpg', status: 'Còn hoạt động' },
        { id: 5, tenHoatDong: 'Xuân ấm tình thương', moTaNgan: 'Trao tặng những phần quà Tết ý nghĩa, áo ấm và nhu yếu phẩm đến các hộ gia đình và trẻ em có hoàn cảnh khó khăn.', hinhAnh: 'images/xuanam.jpg', status: 'Còn hoạt động' }
    ],
    members: INITIAL_MEMBERS,
    registrations: [
        { id: 101, hoTen: 'Nguyễn Thùy Linh', maSinhVien: 'SV202601', email: 'thuylinh@email.com', soDienThoai: '0987654321', truongChuyenNganh: 'ĐH Hải Phòng - QTKD', banDangKy: 'Ban Thủ Quỹ - Bán Hàng', ngayDangKy: '2026-08-12' },
        { id: 102, hoTen: 'Trần Văn Hoàng', maSinhVien: 'SV202602', email: 'vanhoang@email.com', soDienThoai: '0912345678', truongChuyenNganh: 'ĐH Hải Phòng - CNTT', banDangKy: 'Ban Phong Trào - Truyền Thông', ngayDangKy: '2026-08-12' }
    ],
    messages: [
        { id: 201, hoTen: 'Lê Minh Tâm', email: 'minhtam@email.com', soDienThoai: '0934567890', noiDung: 'Tôi muốn tìm hiểu về hoạt động hiến máu tình nguyện đợt sắp tới của CLB.', ngayGui: '2026-08-12' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    loadLocalStore();
    checkAuthSession();
    initAdminNavigation();
    renderActivitiesTable();
    renderMembersTable();
    renderRegistrationsTable();
    renderUserAccountsTable();
    renderMessagesTable();
    populateAboutUsForm();
    populateCategoryImagesForm();
});

function loadLocalStore() {
    const saved = localStorage.getItem('CLB_HOA_SEN_APP_DATA');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            appData = parsed;
            if (!appData.content.HERO_SLIDES || appData.content.HERO_SLIDES.length === 0) {
                appData.content.HERO_SLIDES = OFFICIAL_SLIDES;
            }
            if (!appData.content.ABOUT_IMAGES || appData.content.ABOUT_IMAGES.length === 0) {
                appData.content.ABOUT_IMAGES = OFFICIAL_SLIDES;
            }
            if (!appData.members || appData.members.length === 0) {
                appData.members = INITIAL_MEMBERS;
            }
        } catch (e) {
            saveLocalStore();
        }
    } else { saveLocalStore(); }
}

function saveLocalStore() {
    try {
        localStorage.setItem('CLB_HOA_SEN_APP_DATA', JSON.stringify(appData));
    } catch (e) {
        console.error("LocalStorage save error:", e);
    }
    fetch('/api/admin/save-all', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appData)
    }).catch(err => console.log('Offline/Local Mode Active'));
}

function exportMembersJsonConfig() {
    const jsonStr = JSON.stringify(appData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CLB_Hoa_Sen_Full_Config_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('📤 Đã tải xuống file cấu hình dữ liệu và hình ảnh!', 'success');
}

function importMembersJsonConfig(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const importedData = JSON.parse(event.target.result);
            if (importedData) {
                appData = importedData;
                saveLocalStore();
                if (typeof renderMembersTable === 'function') renderMembersTable();
                if (typeof renderActivitiesTable === 'function') renderActivitiesTable();
                showToast('🎉 Đã nhập và áp dụng toàn bộ cấu hình ảnh & dữ liệu thành công!', 'success');
            }
        } catch (err) {
            showToast('⚠️ File JSON không hợp lệ! Vui lòng chọn đúng file cấu hình đã xuất.', 'warning');
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

function compressImageFile(file, maxWidth = 1200, maxHeight = 1200, quality = 0.75) {
    return new Promise((resolve) => {
        if (!file || !file.type.startsWith('image/')) {
            resolve(null);
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                let width = img.width;
                let height = img.height;
                if (width > maxWidth || height > maxHeight) {
                    if (width / height > maxWidth / maxHeight) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    } else {
                        width = Math.round((width * maxHeight) / height);
                        height = maxHeight;
                    }
                }
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', quality));
            };
            img.onerror = () => resolve(e.target.result);
            img.src = e.target.result;
        };
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(file);
    });
}

function checkAuthSession() {
    const isLogged = localStorage.getItem('ADMIN_SESSION_ACTIVE');
    const lockScreen = document.getElementById('adminAuthLock');
    if (isLogged === 'true') {
        if (lockScreen) lockScreen.style.display = 'none';
    } else {
        if (lockScreen) lockScreen.style.display = 'flex';
    }
}

function handleAdminLogin(e) {
    if (e) e.preventDefault();
    const u = document.getElementById('loginUser').value.trim();
    const p = document.getElementById('loginPass').value.trim();

    if (u === DEFAULT_ADMIN_USER && p === DEFAULT_ADMIN_PASS) {
        localStorage.setItem('ADMIN_SESSION_ACTIVE', 'true');
        localStorage.setItem('ACCOUNT_LOGGED_IN', 'true');
        localStorage.setItem('ACCOUNT_NAME', 'Admin');
        document.getElementById('adminAuthLock').style.display = 'none';
        showToast('🔓 Đăng nhập Admin thành công!', 'success');
    } else {
        showToast('❌ Tên đăng nhập hoặc mật khẩu Admin không đúng!', 'error');
    }
}

function handleAdminLogout() {
    localStorage.removeItem('ADMIN_SESSION_ACTIVE');
    localStorage.removeItem('ACCOUNT_LOGGED_IN');
    localStorage.removeItem('ACCOUNT_NAME');
    showToast('🔒 Đã đăng xuất Admin! Đang quay lại trang chủ...', 'info');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 400);
}

function initAdminNavigation() {
    const navItems = document.querySelectorAll('.admin-nav-item');
    const viewContents = document.querySelectorAll('.admin-view-content');
    const pageTitle = document.getElementById('pageTitleHeading');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetView = item.getAttribute('data-view');
            if (!targetView) return;

            navItems.forEach(i => i.classList.remove('active'));
            viewContents.forEach(v => v.style.display = 'none');

            item.classList.add('active');
            const targetEl = document.getElementById(targetView);
            if (targetEl) targetEl.style.display = 'block';

            if (targetView === 'viewRegistrations') pageTitle.textContent = 'Đơn đăng ký thành viên';
            if (targetView === 'viewAccounts') {
                pageTitle.textContent = 'Tài khoản Đã Đăng ký';
                renderUserAccountsTable();
            }
            if (targetView === 'viewMessages') pageTitle.textContent = 'Tin nhắn liên hệ';
            if (targetView === 'viewActivities') pageTitle.textContent = 'Quản lý Hoạt động';
            if (targetView === 'viewAboutUs') {
                pageTitle.textContent = 'Quản lý Về Chúng Tôi';
                populateAboutUsForm();
            }
            if (targetView === 'viewMembers') pageTitle.textContent = 'Quản lý Ban Chủ Nhiệm';
            if (targetView === 'viewImages') {
                pageTitle.textContent = 'Quản lý Hero Banner & Hình ảnh';
                populateCategoryImagesForm();
            }
            if (targetView === 'viewSettings') pageTitle.textContent = 'Cấu hình trang & Số liệu';
        });
    });
}

/* FILE UPLOADER LOGIC FROM ADMIN COMPUTER (WITH SMART CLIENT-SIDE COMPRESSION) */
async function handleSingleFileUpload(event, targetInputId) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showToast('⚠️ Vui lòng chọn file hình ảnh (JPG, PNG, GIF, WEBP)!', 'warning');
        return;
    }

    showToast('⏳ Đang xử lý và nén ảnh từ máy tính...', 'info');

    const compressed = await compressImageFile(file, 800, 800, 0.8);
    if (compressed) {
        const targetInput = document.getElementById(targetInputId);
        if (targetInput) {
            targetInput.value = compressed;
            showToast('✨ Đã tải ảnh từ máy tính vào ô thông tin thành công!', 'success');
        }
    }
    event.target.value = '';
}

async function handleBannerFileUpload(event) {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    const validFiles = files.filter(f => f.type.startsWith('image/'));
    if (validFiles.length === 0) {
        showToast('⚠️ Vui lòng chọn các file hình ảnh hợp lệ (JPG, PNG, GIF, WEBP)!', 'warning');
        return;
    }

    showToast(`⏳ Đang nén và lưu ${validFiles.length} ảnh từ máy tính vào Slide Banner...`, 'info');

    const compressedImages = [];
    for (const file of validFiles) {
        const compressed = await compressImageFile(file, 1400, 1400, 0.78);
        if (compressed) compressedImages.push(compressed);
    }

    if (compressedImages.length > 0) {
        if (!appData.content.HERO_SLIDES) appData.content.HERO_SLIDES = [];
        appData.content.HERO_SLIDES.unshift(...compressedImages);
        saveLocalStore();
        renderBannerSlidesList();
        showToast(`🎉 Đã tải lên và LƯU THÀNH CÔNG ${compressedImages.length} ảnh mới vào Banner!`, 'success');
    }

    event.target.value = '';
}

async function handleBannerSingleFileUpload(event, index) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showToast('⚠️ Vui lòng chọn file hình ảnh (JPG, PNG, GIF)!', 'warning');
        return;
    }

    showToast('⏳ Đang xử lý và nén ảnh Slide Banner...', 'info');

    const compressed = await compressImageFile(file, 1400, 1400, 0.78);
    if (compressed) {
        if (!appData.content.HERO_SLIDES) appData.content.HERO_SLIDES = [];
        appData.content.HERO_SLIDES[index] = compressed;
        saveLocalStore();
        renderBannerSlidesList();
        showToast(`✨ Đã thay ảnh Slide Banner #${index + 1} thành công!`, 'success');
    }
    event.target.value = '';
}

/* BANNER & HERO SLIDES CRUD MANAGER WITH LIVE THUMBNAIL PREVIEW */
function populateCategoryImagesForm() {
    const c = appData.content;
    if (document.getElementById('heroTitleInput')) document.getElementById('heroTitleInput').value = c.HERO_TITLE || 'CLB TÌNH NGUYỆN HOA SEN – Lan tỏa yêu thương chung tay vì cộng đồng';
    if (document.getElementById('heroSubtitleInput')) document.getElementById('heroSubtitleInput').value = c.HERO_SUBTITLE || '';
    if (document.getElementById('statMembersInput')) document.getElementById('statMembersInput').value = c.STAT_MEMBERS || '50+';
    if (document.getElementById('statCampaignsInput')) document.getElementById('statCampaignsInput').value = c.STAT_CAMPAIGNS || '20+';
    if (document.getElementById('statGiftsInput')) document.getElementById('statGiftsInput').value = c.STAT_GIFTS || '100+';
    if (document.getElementById('imgCategoryLogo')) document.getElementById('imgCategoryLogo').value = c.LOGO_IMG || 'images/logo.png';
    renderBannerSlidesList();
}

function renderBannerSlidesList() {
    const container = document.getElementById('bannerSlidesContainer');
    if (!container) return;

    const slides = appData.content.HERO_SLIDES || [];

    if (slides.length === 0) {
        container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">Chưa có hình ảnh nào trong Slide Banner. Bấm nút "📁 Upload Ảnh Từ Máy Tính" ở trên để thêm ảnh.</div>`;
        return;
    }

    container.innerHTML = slides.map((imgUrl, index) => {
        const displaySrc = imgUrl || 'images/banner1.jpg';
        const truncatedUrl = imgUrl.length > 100 ? imgUrl.substring(0, 100) + '...' : imgUrl;

        return `
            <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 14px; background: #faf8f5; padding: 12px 16px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
                <span style="font-weight: 800; color: #075936; min-width: 65px; font-size: 0.95rem;">Slide #${index + 1}</span>
                <div style="width: 80px; height: 48px; border-radius: 8px; overflow: hidden; border: 2px solid #cbd5e1; flex-shrink: 0; background: #ffffff;">
                    <img src="${displaySrc}" onerror="this.src='images/banner1.jpg'" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <input type="text" class="form-input" value="${truncatedUrl}" id="bannerImgInput_${index}" onchange="updateBannerSlideValue(${index}, this.value)" style="flex-grow: 1;">
                <label class="btn-action-edit" style="cursor: pointer; display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0; background: #ffffff; border: 1.5px solid var(--primary); color: var(--primary);">
                    📁 Chọn ảnh từ máy
                    <input type="file" accept="image/*" style="display: none;" onchange="handleBannerSingleFileUpload(event, ${index})">
                </label>
                <button type="button" class="btn-action-delete" onclick="deleteBannerSlide(${index})">🗑 Xóa</button>
            </div>
        `;
    }).join('');
}

function updateBannerSlideValue(index, val) {
    if (appData.content.HERO_SLIDES && appData.content.HERO_SLIDES[index] !== undefined) {
        appData.content.HERO_SLIDES[index] = val.trim();
        saveLocalStore();
        showToast(`✅ Đã cập nhật đường dẫn Slide Banner #${index + 1}`, 'success');
        renderBannerSlidesList();
    }
}

function addBannerSlide() {
    if (!appData.content.HERO_SLIDES) appData.content.HERO_SLIDES = [];
    if (appData.content.HERO_SLIDES.length >= 20) {
        showToast('⚠️ Banner đã đạt giới hạn tối đa 20 slide ảnh!', 'warning');
        return;
    }
    appData.content.HERO_SLIDES.push('images/banner1.jpg');
    saveLocalStore();
    renderBannerSlidesList();
    showToast('🎉 Đã thêm 1 ô Slide ảnh mới vào Hero Banner!', 'success');
}

function deleteBannerSlide(index) {
    if (appData.content.HERO_SLIDES.length <= 1) {
        showToast('⚠️ Banner phải giữ ít nhất 1 hình ảnh!', 'warning');
        return;
    }
    if (confirm(`Bạn có chắc chắn muốn xóa Slide Banner #${index + 1}?`)) {
        appData.content.HERO_SLIDES.splice(index, 1);
        saveLocalStore();
        renderBannerSlidesList();
        showToast('🗑 Đã xóa slide ảnh Banner!', 'success');
    }
}

function saveCategoryImages(e) {
    if (e) e.preventDefault();
    appData.content.HERO_TITLE = document.getElementById('heroTitleInput').value.trim();
    appData.content.HERO_SUBTITLE = document.getElementById('heroSubtitleInput').value.trim();
    appData.content.STAT_MEMBERS = document.getElementById('statMembersInput').value.trim();
    appData.content.STAT_CAMPAIGNS = document.getElementById('statCampaignsInput').value.trim();
    appData.content.STAT_GIFTS = document.getElementById('statGiftsInput').value.trim();
    appData.content.LOGO_IMG = document.getElementById('imgCategoryLogo').value.trim();

    saveLocalStore();
    renderBannerSlidesList();
    showToast('✨ Đã lưu cập nhật Nội dung & Slide Ảnh Banner thành công!', 'success');
}

/* ABOUT US GALLERY CRUD & UNLIMITED FILE UPLOADER WITH LIVE PREVIEW */
function populateAboutUsForm() {
    const c = appData.content;
    if (document.getElementById('aboutTitleInput')) document.getElementById('aboutTitleInput').value = c.ABOUT_TITLE || 'Hành trình nhiệt huyết của tuổi trẻ';
    if (document.getElementById('aboutLeadInput')) document.getElementById('aboutLeadInput').value = c.ABOUT_LEAD || '';
    if (document.getElementById('aboutTextInput')) document.getElementById('aboutTextInput').value = c.ABOUT_TEXT || '';
    renderAboutImagesList();
}

function renderAboutImagesList() {
    const container = document.getElementById('aboutImagesContainer');
    if (!container) return;

    const imgs = appData.content.ABOUT_IMAGES || [];

    if (imgs.length === 0) {
        container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">Chưa có hình ảnh nào trong Album Về Chúng Tôi. Bấm nút "📁 Upload Ảnh Từ Máy Tính" ở trên để thêm ảnh.</div>`;
        return;
    }

    container.innerHTML = imgs.map((imgUrl, index) => {
        const displaySrc = imgUrl || 'images/banner1.jpg';
        const truncatedUrl = imgUrl.length > 100 ? imgUrl.substring(0, 100) + '...' : imgUrl;

        return `
            <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 14px; background: #faf8f5; padding: 12px 16px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
                <span style="font-weight: 800; color: #075936; min-width: 32px; font-size: 1rem;">#${index + 1}</span>
                <div style="width: 64px; height: 64px; border-radius: 10px; overflow: hidden; border: 2px solid #cbd5e1; flex-shrink: 0; background: #ffffff;">
                    <img src="${displaySrc}" onerror="this.src='images/banner1.jpg'" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <input type="text" class="form-input" value="${truncatedUrl}" id="aboutImgInput_${index}" onchange="updateAboutImageValue(${index}, this.value)" style="flex-grow: 1;">
                <label class="btn-action-edit" style="cursor: pointer; display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0; background: #ffffff; border: 1.5px solid var(--primary); color: var(--primary);">
                    📁 Chọn ảnh từ máy
                    <input type="file" accept="image/*" style="display: none;" onchange="handleAboutSingleFileUpload(event, ${index})">
                </label>
                <button type="button" class="btn-action-delete" onclick="deleteAboutImage(${index})">🗑 Xóa</button>
            </div>
        `;
    }).join('');
}

function updateAboutImageValue(index, val) {
    if (appData.content.ABOUT_IMAGES && appData.content.ABOUT_IMAGES[index] !== undefined) {
        appData.content.ABOUT_IMAGES[index] = val.trim();
        saveLocalStore();
        showToast(`✅ Đã cập nhật đường dẫn ảnh #${index + 1}`, 'success');
        renderAboutImagesList();
    }
}

function addAboutImage() {
    if (!appData.content.ABOUT_IMAGES) appData.content.ABOUT_IMAGES = [];
    if (appData.content.ABOUT_IMAGES.length >= 30) {
        showToast('⚠️ Album đã đạt giới hạn tối đa 30 hình ảnh!', 'warning');
        return;
    }
    appData.content.ABOUT_IMAGES.push('images/banner1.jpg');
    saveLocalStore();
    renderAboutImagesList();
    showToast('🎉 Đã thêm 1 ô ảnh mới vào Album Về Chúng Tôi!', 'success');
}

function deleteAboutImage(index) {
    if (confirm(`Bạn có chắc chắn muốn xóa ảnh #${index + 1}?`)) {
        appData.content.ABOUT_IMAGES.splice(index, 1);
        saveLocalStore();
        renderAboutImagesList();
        showToast('🗑 Đã xóa ảnh khỏi danh sách!', 'success');
    }
}

async function handleAboutSingleFileUpload(event, index) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showToast('⚠️ Vui lòng chọn file hình ảnh (JPG, PNG, GIF)!', 'warning');
        return;
    }

    showToast('⏳ Đang nén và thay ảnh trong Album Về Chúng Tôi...', 'info');

    const compressed = await compressImageFile(file, 1200, 1200, 0.75);
    if (compressed) {
        if (!appData.content.ABOUT_IMAGES) appData.content.ABOUT_IMAGES = [];
        appData.content.ABOUT_IMAGES[index] = compressed;
        saveLocalStore();
        renderAboutImagesList();
        showToast(`✨ Đã thay ảnh #${index + 1} trong Album Về Chúng Tôi thành công!`, 'success');
    }
    event.target.value = '';
}

async function handleAboutAlbumFileUpload(event) {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    const validFiles = files.filter(f => f.type.startsWith('image/'));
    if (validFiles.length === 0) {
        showToast('⚠️ Vui lòng chọn các file hình ảnh hợp lệ (JPG, PNG, GIF, WEBP)!', 'warning');
        return;
    }

    showToast(`⏳ Đang nén và lưu ${validFiles.length} ảnh vào Album Về Chúng Tôi...`, 'info');

    const compressedImages = [];
    for (const file of validFiles) {
        const compressed = await compressImageFile(file, 1200, 1200, 0.75);
        if (compressed) compressedImages.push(compressed);
    }

    if (compressedImages.length > 0) {
        if (!appData.content.ABOUT_IMAGES) appData.content.ABOUT_IMAGES = [];
        appData.content.ABOUT_IMAGES.unshift(...compressedImages);
        saveLocalStore();
        renderAboutImagesList();
        showToast(`🌿 Đã tải lên và LƯU THÀNH CÔNG ${compressedImages.length} ảnh mới vào Về Chúng Tôi!`, 'success');
    }

    event.target.value = '';
}

function saveAboutUsSettings(e) {
    if (e) e.preventDefault();
    appData.content.ABOUT_TITLE = document.getElementById('aboutTitleInput').value.trim();
    appData.content.ABOUT_LEAD = document.getElementById('aboutLeadInput').value.trim();
    appData.content.ABOUT_TEXT = document.getElementById('aboutTextInput').value.trim();

    saveLocalStore();
    showToast('🌿 Đã lưu cập nhật Về Chúng Tôi và bộ ảnh thành công!', 'success');
}

/* REGISTERED USER ACCOUNTS MANAGER FOR ADMIN (FULL CRUD & SEARCH) */
function renderUserAccountsTable() {
    const tbody = document.getElementById('adminUserAccountsList');
    if (!tbody) return;

    const usersList = JSON.parse(localStorage.getItem('CLB_REGISTERED_USERS') || '[]');

    if (usersList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Chưa có tài khoản người dùng nào đăng ký trên hệ thống. Bấm "➕ Thêm Tài Khoản Mới" để tạo tài khoản.</td></tr>`;
        return;
    }

    tbody.innerHTML = usersList.map((u, index) => `
        <tr class="user-account-row" data-search="${(u.fullName + ' ' + u.user).toLowerCase()}">
            <td>${index + 1}</td>
            <td><strong style="color: var(--primary-dark);">${u.fullName}</strong></td>
            <td><code style="background: #eff6ff; color: #1d4ed8; font-weight: 700; padding: 3px 8px; border-radius: 6px; border: 1px solid #bfdbfe;">${u.user}</code></td>
            <td>
                <span id="passSpan_${index}" style="letter-spacing: 2px; font-weight: 700; color: #475569;">••••••••</span>
                <button type="button" onclick="togglePassVisibility(${index}, '${u.pass}')" style="background: none; border: none; cursor: pointer; font-size: 0.82rem; margin-left: 6px; color: var(--primary);" title="Hiện/Ẩn mật khẩu">👁️ Xem</button>
            </td>
            <td>${u.createdAt ? new Date(u.createdAt).toLocaleDateString('vi-VN') + ' ' + new Date(u.createdAt).toLocaleTimeString('vi-VN', {hour: '2-digit', minute: '2-digit'}) : '2026-08-12'}</td>
            <td>
                <div style="display: flex; gap: 6px;">
                    <button class="btn-action-edit" onclick="openEditUserAccountModal(${index})">✏️ Sửa</button>
                    <button class="btn-action-delete" onclick="deleteUserAccount(${index})">🗑 Xóa</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function togglePassVisibility(index, realPass) {
    const span = document.getElementById(`passSpan_${index}`);
    if (!span) return;
    if (span.textContent.includes('••••')) {
        span.textContent = realPass;
    } else {
        span.textContent = '••••••••';
    }
}

function openAddUserAccountModal() {
    document.getElementById('userAccountModalTitle').textContent = '📝 Thêm Tài Khoản Người Dùng Mới';
    document.getElementById('userAccEditIndex').value = '-1';
    document.getElementById('userAccFullNameInput').value = '';
    document.getElementById('userAccUserInput').value = '';
    document.getElementById('userAccPassInput').value = '';

    const modal = document.getElementById('userAccountFormModal');
    if (modal) modal.classList.add('active');
}

function openEditUserAccountModal(index) {
    const usersList = JSON.parse(localStorage.getItem('CLB_REGISTERED_USERS') || '[]');
    if (index >= 0 && index < usersList.length) {
        const u = usersList[index];
        document.getElementById('userAccountModalTitle').textContent = `✏️ Cập Nhật Tài Khoản #${index + 1}`;
        document.getElementById('userAccEditIndex').value = index;
        document.getElementById('userAccFullNameInput').value = u.fullName;
        document.getElementById('userAccUserInput').value = u.user;
        document.getElementById('userAccPassInput').value = u.pass;

        const modal = document.getElementById('userAccountFormModal');
        if (modal) modal.classList.add('active');
    }
}

function saveUserAccountForm(e) {
    if (e) e.preventDefault();
    const editIndex = parseInt(document.getElementById('userAccEditIndex').value);
    const fullName = document.getElementById('userAccFullNameInput').value.trim();
    const user = document.getElementById('userAccUserInput').value.trim();
    const pass = document.getElementById('userAccPassInput').value.trim();

    if (!fullName || !user || !pass) {
        showToast('⚠️ Vui lòng điền đầy đủ tất cả các thông tin!', 'warning');
        return;
    }

    let usersList = JSON.parse(localStorage.getItem('CLB_REGISTERED_USERS') || '[]');

    if (editIndex === -1) {
        const existing = usersList.find(u => u.user.toLowerCase() === user.toLowerCase());
        if (existing) {
            showToast('⚠️ Tên đăng nhập / Số điện thoại này đã tồn tại trên hệ thống!', 'warning');
            return;
        }
        usersList.unshift({
            fullName,
            user,
            pass,
            createdAt: new Date().toISOString()
        });
        showToast(`🎉 Đã tạo thành công tài khoản cho "${fullName}"!`, 'success');
    } else {
        const existing = usersList.find((u, idx) => idx !== editIndex && u.user.toLowerCase() === user.toLowerCase());
        if (existing) {
            showToast('⚠️ Tên đăng nhập / Số điện thoại này đã thuộc về người dùng khác!', 'warning');
            return;
        }
        usersList[editIndex].fullName = fullName;
        usersList[editIndex].user = user;
        usersList[editIndex].pass = pass;
        showToast(`✨ Đã cập nhật thành công tài khoản của "${fullName}"!`, 'success');
    }

    localStorage.setItem('CLB_REGISTERED_USERS', JSON.stringify(usersList));
    closeModal('userAccountFormModal');
    renderUserAccountsTable();
}

function filterUserAccountsTable() {
    const input = document.getElementById('searchAccountInput');
    if (!input) return;
    const filter = input.value.toLowerCase().trim();
    const rows = document.querySelectorAll('.user-account-row');

    rows.forEach(row => {
        const searchText = row.getAttribute('data-search') || '';
        if (searchText.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function deleteUserAccount(index) {
    let usersList = JSON.parse(localStorage.getItem('CLB_REGISTERED_USERS') || '[]');
    if (index >= 0 && index < usersList.length) {
        const deletedUser = usersList[index];
        if (confirm(`Bạn có chắc chắn muốn xóa tài khoản của "${deletedUser.fullName}" (${deletedUser.user})? Sau khi xóa, người này sẽ KHÔNG THỂ ĐĂNG NHẬP nữa.`)) {
            usersList.splice(index, 1);
            localStorage.setItem('CLB_REGISTERED_USERS', JSON.stringify(usersList));
            renderUserAccountsTable();
            showToast('🗑 Đã xóa tài khoản khỏi hệ thống!', 'success');
        }
    }
}

function exportUserAccountsToExcel() {
    const usersList = JSON.parse(localStorage.getItem('CLB_REGISTERED_USERS') || '[]');
    if (usersList.length === 0) {
        showToast('⚠️ Chưa có tài khoản người dùng nào đăng ký!', 'warning');
        return;
    }

    let csv = "\uFEFFSTT,Họ và tên người dùng,Tên đăng nhập / SĐT,Mật khẩu,Ngày tạo tài khoản\n";
    usersList.forEach((u, i) => {
        csv += `${i + 1},"${u.fullName}","${u.user}","${u.pass}","${u.createdAt || ''}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Danh_Sach_Tai_Khoan_Dang_Ky_CLB_Hoa_Sen_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('📥 Đã tải file Excel danh sách tài khoản!', 'success');
}

/* MESSAGES ADMIN MANAGER */
function renderMessagesTable() {
    const tbody = document.getElementById('adminMessagesList');
    if (!tbody) return;

    const list = appData.messages || [];

    tbody.innerHTML = list.map((m, i) => `
        <tr>
            <td>${i + 1}</td>
            <td><strong>${m.hoTen}</strong></td>
            <td>${m.soDienThoai}</td>
            <td>${m.email}</td>
            <td style="max-width: 320px; line-height: 1.45;">${m.noiDung}</td>
            <td>${m.ngayGui || '2026-08-12'}</td>
            <td>
                <button class="btn-action-delete" onclick="deleteMessage(${m.id})">🗑 Xóa</button>
            </td>
        </tr>
    `).join('');
}

function deleteMessage(id) {
    if (confirm('Bạn có chắc chắn muốn xóa tin nhắn này?')) {
        appData.messages = appData.messages.filter(m => m.id != id);
        saveLocalStore();
        renderMessagesTable();
        showToast('🗑 Đã xóa tin nhắn khỏi danh sách!', 'success');
    }
}

function exportMessagesToExcel() {
    const list = appData.messages || [];
    if (list.length === 0) {
        showToast('⚠️ Chưa có tin nhắn liên hệ nào!', 'warning');
        return;
    }

    let csv = "\uFEFFSTT,Họ và tên,Số điện thoại,Email,Nội dung tin nhắn,Ngày gửi\n";
    list.forEach((m, i) => {
        csv += `${i + 1},"${m.hoTen}","${m.soDienThoai}","${m.email}","${m.noiDung.replace(/"/g, '""')}","${m.ngayGui || '2026-08-12'}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Danh_Sach_Tin_Nhan_CLB_Hoa_Sen_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('📥 Đã tải file Excel danh sách tin nhắn!', 'success');
}

/* ACTIVITIES CRUD */
function renderActivitiesTable() {
    const tbody = document.getElementById('adminActivitiesList');
    if (!tbody) return;

    tbody.innerHTML = appData.activities.map((act, index) => `
        <tr>
            <td><img src="${act.hinhAnh}" alt="${act.tenHoatDong}" style="width: 50px; height: 50px; border-radius: 10px; object-fit: cover;"></td>
            <td>${index + 1}</td>
            <td><strong>${act.tenHoatDong}</strong></td>
            <td><span style="font-size: 0.88rem; color: #64748b;">${act.moTaNgan}</span></td>
            <td>
                <span class="status-badge ${act.status === 'Ẩn' ? 'hidden' : 'in-stock'}">
                    ${act.status || 'Còn hoạt động'}
                </span>
            </td>
            <td>
                <button class="btn-action-edit" onclick="openEditActivityModal(${act.id})">🖊 Sửa</button>
                <button class="btn-action-hide" onclick="toggleHideActivity(${act.id})">${act.status === 'Ẩn' ? 'Hiện' : 'Ẩn'}</button>
                <button class="btn-action-delete" onclick="deleteActivity(${act.id})">🗑 Xóa</button>
            </td>
        </tr>
    `).join('');
}

function openAddActivityModal() {
    document.getElementById('activityModalTitle').textContent = 'Thêm Hoạt Động Mới';
    document.getElementById('actId').value = '';
    document.getElementById('actName').value = '';
    document.getElementById('actDesc').value = '';
    document.getElementById('actImgUrl').value = 'images/banner1.jpg';
    document.getElementById('activityFormModal').classList.add('active');
}

function openEditActivityModal(id) {
    const act = appData.activities.find(a => a.id == id);
    if (!act) return;

    document.getElementById('activityModalTitle').textContent = 'Chỉnh Sửa Hoạt Động';
    document.getElementById('actId').value = act.id;
    document.getElementById('actName').value = act.tenHoatDong;
    document.getElementById('actDesc').value = act.moTaNgan;
    document.getElementById('actImgUrl').value = act.hinhAnh;
    document.getElementById('activityFormModal').classList.add('active');
}

function saveActivityForm(e) {
    e.preventDefault();
    const id = document.getElementById('actId').value;
    const name = document.getElementById('actName').value.trim();
    const desc = document.getElementById('actDesc').value.trim();
    const imgUrl = document.getElementById('actImgUrl').value.trim();

    if (id) {
        const idx = appData.activities.findIndex(a => a.id == id);
        if (idx !== -1) {
            appData.activities[idx] = { ...appData.activities[idx], tenHoatDong: name, moTaNgan: desc, hinhAnh: imgUrl };
            showToast('✅ Đã cập nhật hoạt động!', 'success');
        }
    } else {
        const newAct = { id: Date.now(), tenHoatDong: name, moTaNgan: desc, hinhAnh: imgUrl || 'images/banner1.jpg', status: 'Còn hoạt động' };
        appData.activities.push(newAct);
        showToast('🎉 Đã thêm hoạt động mới!', 'success');
    }

    saveLocalStore();
    renderActivitiesTable();
    closeModal('activityFormModal');
}

function toggleHideActivity(id) {
    const idx = appData.activities.findIndex(a => a.id == id);
    if (idx !== -1) {
        appData.activities[idx].status = appData.activities[idx].status === 'Ẩn' ? 'Còn hoạt động' : 'Ẩn';
        saveLocalStore();
        renderActivitiesTable();
        showToast('🔄 Đã thay đổi trạng thái ẩn/hiện!', 'info');
    }
}

function deleteActivity(id) {
    if (confirm('Bạn có chắc chắn muốn xóa hoạt động này?')) {
        appData.activities = appData.activities.filter(a => a.id != id);
        saveLocalStore();
        renderActivitiesTable();
        showToast('🗑 Đã xóa hoạt động!', 'success');
    }
}

function renderMembersTable() {
    const tbody = document.getElementById('adminMembersList');
    if (!tbody) return;

    tbody.innerHTML = appData.members.map((m, index) => `
        <tr>
            <td><img src="${m.hinhAnh}" alt="${m.hoTen}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;"></td>
            <td><strong>${m.hoTen}</strong></td>
            <td>${m.chucVu}</td>
            <td>
                <button class="btn-action-edit" onclick="openEditMemberModal(${m.id})">🖊 Sửa</button>
                <button class="btn-action-delete" onclick="deleteMember(${m.id})">🗑 Xóa</button>
            </td>
        </tr>
    `).join('');
}

function openAddMemberModal() {
    document.getElementById('memberModalTitle').textContent = 'Thêm Thành Viên Mới';
    document.getElementById('memId').value = '';
    document.getElementById('memName').value = '';
    document.getElementById('memRole').value = '';
    document.getElementById('memQuote').value = '';
    document.getElementById('memImgUrl').value = 'images/pres.jpg';
    document.getElementById('memberFormModal').classList.add('active');
}

function openEditMemberModal(id) {
    const m = appData.members.find(mem => mem.id == id);
    if (!m) return;

    document.getElementById('memberModalTitle').textContent = 'Chỉnh Sửa Thành Viên';
    document.getElementById('memId').value = m.id;
    document.getElementById('memName').value = m.hoTen;
    document.getElementById('memRole').value = m.chucVu;
    document.getElementById('memQuote').value = m.cauNoi || '';
    document.getElementById('memImgUrl').value = m.hinhAnh;
    document.getElementById('memberFormModal').classList.add('active');
}

function saveMemberForm(e) {
    e.preventDefault();
    const id = document.getElementById('memId').value;
    const name = document.getElementById('memName').value.trim();
    const role = document.getElementById('memRole').value.trim();
    const quote = document.getElementById('memQuote').value.trim();
    const imgUrl = document.getElementById('memImgUrl').value.trim();

    if (id) {
        const idx = appData.members.findIndex(m => m.id == id);
        if (idx !== -1) {
            appData.members[idx] = { ...appData.members[idx], hoTen: name, chucVu: role, cauNoi: quote, hinhAnh: imgUrl };
            showToast('✅ Đã cập nhật thành viên!', 'success');
        }
    } else {
        const newM = { id: Date.now(), hoTen: name, chucVu: role, cauNoi: quote, hinhAnh: imgUrl || 'images/pres.jpg' };
        appData.members.push(newM);
        showToast('🎉 Đã thêm thành viên mới!', 'success');
    }

    saveLocalStore();
    renderMembersTable();
    closeModal('memberFormModal');
}

function deleteMember(id) {
    if (confirm('Bạn có chắc chắn muốn xóa thành viên này?')) {
        appData.members = appData.members.filter(m => m.id != id);
        saveLocalStore();
        renderMembersTable();
        showToast('🗑 Đã xóa thành viên khỏi danh sách!', 'success');
    }
}

function renderRegistrationsTable() {
    const tbody = document.getElementById('adminRegsList');
    if (!tbody) return;

    tbody.innerHTML = appData.registrations.map((r, i) => `
        <tr>
            <td>${i + 1}</td>
            <td><strong>${r.hoTen}</strong></td>
            <td>${r.maSinhVien || '-'}</td>
            <td>${r.soDienThoai}</td>
            <td>${r.email}</td>
            <td>${r.ngayDangKy || '2026-08-12'}</td>
        </tr>
    `).join('');
}

function exportAdminRegistrationsToExcel() {
    if (!appData.registrations || appData.registrations.length === 0) {
        showToast('⚠️ Chưa có dữ liệu đăng ký!', 'warning');
        return;
    }

    let csv = "\uFEFFSTT,Họ và tên,Mã sinh viên,Số điện thoại,Email,Trường/Chuyên ngành,Ghi chú,Ngày đăng ký\n";
    appData.registrations.forEach((r, i) => {
        csv += `${i + 1},"${r.hoTen}","${r.maSinhVien || ''}","${r.soDienThoai}","${r.email}","${r.truongChuyenNganh || ''}","${r.ghiChu || ''}","${r.ngayDangKy}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Danh_Sach_Dang_Ky_CLB_Hoa_Sen_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('📥 Đã tải file Excel danh sách đăng ký!', 'success');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
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
        setTimeout(() => t.remove(), 400);
    }, 4000);
}
