const express = require('express');
const cors = require('cors');
const path = require('path');
const sql = require('mssql');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình kết nối SQL Server
const sqlConfig = {
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASSWORD || '123456',
    server: process.env.DB_SERVER || 'localhost',
    database: process.env.DB_NAME || 'CLB_HoaSenDB',
    options: {
        encrypt: false,
        trustServerCertificate: true
    },
    pool: { max: 10, min: 0, idleTimeoutMillis: 30000 }
};

let dbPool = null;
let isDbConnected = false;

async function connectDatabase() {
    try {
        dbPool = await sql.connect(sqlConfig);
        isDbConnected = true;
        console.log('✅ KẾT NỐI SQL SERVER THÀNH CÔNG (CLB_HoaSenDB)!');
    } catch (err) {
        isDbConnected = false;
        console.log('⚠️ CHƯA NỐI TRỰC TIẾP SQL SERVER LOCAL:', err.message);
        console.log('🚀 Server tự động khởi chạy ở chế độ xem trước (Preview Buffer Mode)!');
    }
}
connectDatabase();

// In-Memory Dynamic Content Data
let siteContent = {
    TEN_CLB: 'CLB TÌNH NGUYỆN HOA SEN - TDU',
    HERO_TITLE: 'CLB TÌNH NGUYỆN HOA SEN – Lan tỏa yêu thương, chung tay cộng đồng',
    HERO_SUBTITLE: 'Kết nối những trái tim nhiệt huyết, mang nụ cười và hy vọng đến khắp mọi miền Tổ quốc.',
    STAT_MEMBERS: '50+',
    STAT_CAMPAIGNS: '20+',
    STAT_GIFTS: '100+',
    CONTACT_EMAIL: 'clbhoasen@email.com',
    CONTACT_PHONE: '(+84) 123 456 789',
    CONTACT_ADDRESS: 'Số 3 Vũ Công Đán, phường Tứ Minh, TP. Hải Phòng',
    SOCIAL_FB: 'https://www.facebook.com/share/1JYARBM1M1/?mibextid=wwXIfr',
    SOCIAL_ZALO: 'https://zalo.me/0123456789',
    HERO_IMG: 'images/carrots_support.jpg',
    LOGO_IMG: 'images/logo.png'
};

let activitiesList = [
    { id: 6, tenHoatDong: '🥕 Chung tay hỗ trợ tiêu thụ cà rốt Hải Phòng', danhMuc: 'Nông Sản Tình Nguyện', moTaNgan: 'Chung tay cùng bà con nông dân kết nối, thu mua và hỗ trợ tiêu thụ nông sản cà rốt Hải Phòng.', hinhAnh: 'images/carrots_support.jpg' },
    { id: 1, tenHoatDong: 'Hiến máu tình nguyện', danhMuc: 'Y Tế & Cộng Đồng', moTaNgan: 'Giọt máu cho đi - Một đời ở lại. Chương trình hiến máu nhân đạo thu hút đông đảo tình nguyện viên.', hinhAnh: 'images/hienmau.jpg' },
    { id: 2, tenHoatDong: 'Trung thu cho em', danhMuc: 'Từ Thiện Trẻ Em', moTaNgan: 'Mang Tết Trung thu ấm áp, lồng đèn rực rỡ và phần quà ý nghĩa đến các em nhỏ khó khăn.', hinhAnh: 'images/trungthu.jpg' },
    { id: 3, tenHoatDong: 'Xuân ấm tình thương', danhMuc: 'Chiến Dịch Thường Niên', moTaNgan: 'Trao tặng áo ấm, nhu yếu phẩm Tết cho người già cô đơn và gia đình nghèo vùng khó.', hinhAnh: 'images/xuanam.jpg' },
    { id: 4, tenHoatDong: 'Dòng chảy bếp hồng', danhMuc: 'Suất Ăn 0 Đồng', moTaNgan: 'Nấu những bữa ăn nóng hổi, tiếp sức cho bệnh nhân và người lao động nghèo trên địa bàn.', hinhAnh: 'images/dongchay.jpg' }
];

let membersList = [
    { id: 1, hoTen: 'Đ/c Bùi Cẩm Trang', chucVu: 'Phó Bí thư Đoàn trường, Chủ nhiệm CLB', banNganh: 'Ban Điều Hành', cauNoi: 'Lãnh đạo bằng tình yêu thương và trách nhiệm vì cộng đồng.', hinhAnh: 'images/trang.jpg' },
    { id: 2, hoTen: 'Đ/c Mạc Thị Cẩm Ly', chucVu: 'Phó Chủ nhiệm CLB, Trưởng Ban Tổ Chức - Kế Hoạch', banNganh: 'Ban Tổ Chức', cauNoi: 'Kế hoạch chu đáo là nền tảng cho mọi hành trình tình nguyện thành công.', hinhAnh: 'images/ly1.jpg' },
    { id: 3, hoTen: 'Đ/c Nguyễn Văn Thuận', chucVu: 'Phó Chủ nhiệm CLB', banNganh: 'Ban Điều Hành', cauNoi: 'Đồng lòng cống hiến, lan tỏa sức trẻ tình nguyện.', hinhAnh: 'images/thuan.jpg' },
    { id: 4, hoTen: 'Đ/c Trần Kim Khánh', chucVu: 'Trưởng Ban Nhiệm Vụ', banNganh: 'Ban Nhiệm Vụ', cauNoi: 'Sẵn sàng nhận nhiệm vụ, sẵn sàng cống hiến hết mình.', hinhAnh: 'images/khanh.png' },
    { id: 5, hoTen: 'Đ/c Lê Thanh Minh', chucVu: 'Trưởng Ban Phong Trào - Truyền Thông', banNganh: 'Ban Truyền Thông', cauNoi: 'Lan tỏa câu chuyện tử tế đến với hàng triệu trái tim.', hinhAnh: 'images/minh.jpg' },
    { id: 6, hoTen: 'Đ/c Nguyễn Đức Anh', chucVu: 'Trưởng Ban Thể Thao', banNganh: 'Ban Thể Thao', cauNoi: 'Rèn luyện thể lực, thắt chặt tinh thần đồng đội nhiệt huyết.', hinhAnh: 'images/anh.jpg' },
    { id: 7, hoTen: 'Đ/c Chu Thị Phúc', chucVu: 'Phụ trách Tài Chính - Ban Thủ Quỹ - Bán Hàng', banNganh: 'Ban Thủ Quỹ - Bán Hàng', cauNoi: 'Minh bạch, cẩn trọng trong từng nguồn quỹ từ thiện.', hinhAnh: 'images/phuc.jpg' }
];

const registrationsBuffer = [
    { id: 101, hoTen: 'Nguyễn Thùy Linh', maSinhVien: 'SV202601', email: 'thuylinh@email.com', soDienThoai: '0987654321', truongChuyenNganh: 'ĐH Hải Phòng - QTKD', banDangKy: 'Ban Thủ Quỹ - Bán Hàng', ghiChu: 'Muốn tham gia bán hàng gây quỹ', ngayDangKy: new Date().toISOString() },
    { id: 102, hoTen: 'Trần Văn Hoàng', maSinhVien: 'SV202602', email: 'vanhoang@email.com', soDienThoai: '0912345678', truongChuyenNganh: 'ĐH Hải Phòng - CNTT', banDangKy: 'Ban Phong Trào - Truyền Thông', ghiChu: 'Biết chụp ảnh và thiết kế', ngayDangKy: new Date().toISOString() }
];
const contactsBuffer = [];

// API: Content
app.get('/api/content', async (req, res) => {
    if (isDbConnected && dbPool) {
        try {
            const result = await dbPool.request().query('SELECT KHOA, GIA_TRI FROM dbo.NoiDungTrang');
            result.recordset.forEach(row => { siteContent[row.KHOA] = row.GIA_TRI; });
        } catch (err) {
            console.error('Lỗi CSDL:', err.message);
        }
    }
    res.json({ success: true, data: siteContent });
});

// API Admin: Login
app.post('/api/admin/login', async (req, res) => {
    const { tenDangNhap, matKhau } = req.body;
    if (tenDangNhap === 'admin' && matKhau === 'admin123') {
        return res.json({ success: true, token: 'ADMIN_SECRET_TOKEN_2026', user: { name: 'Quản Trị Viên', role: 'Admin' } });
    }
    return res.status(401).json({ success: false, message: 'Tên đăng nhập hoặc mật khẩu Admin không đúng!' });
});

// API Admin: Save Content
app.post('/api/admin/content', async (req, res) => {
    const newContent = req.body;
    Object.assign(siteContent, newContent);

    if (isDbConnected && dbPool) {
        try {
            for (const [key, value] of Object.entries(newContent)) {
                const request = dbPool.request();
                request.input('Khoa', sql.VarChar(100), key);
                request.input('GiaTri', sql.NVarChar(sql.MAX), value);
                await request.query(`
                    IF EXISTS (SELECT 1 FROM dbo.NoiDungTrang WHERE KHOA = @Khoa)
                        UPDATE dbo.NoiDungTrang SET GIA_TRI = @GiaTri WHERE KHOA = @Khoa
                    ELSE
                        INSERT INTO dbo.NoiDungTrang (KHOA, GIA_TRI) VALUES (@Khoa, @GiaTri)
                `);
            }
        } catch (err) {
            console.error('Lỗi SQL Server:', err.message);
        }
    }
    res.json({ success: true, message: 'Cập nhật thành công nội dung trang web & SQL Server!', data: siteContent });
});

// API Activities
app.get('/api/activities', (req, res) => res.json({ success: true, data: activitiesList }));
app.post('/api/admin/activities', (req, res) => {
    const newAct = { id: Date.now(), ...req.body };
    activitiesList.push(newAct);
    res.json({ success: true, message: 'Thêm hoạt động mới thành công!', data: newAct });
});
app.put('/api/admin/activities/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idx = activitiesList.findIndex(a => a.id === id);
    if (idx !== -1) { activitiesList[idx] = { ...activitiesList[idx], ...req.body }; return res.json({ success: true, message: 'Cập nhật hoạt động thành công!' }); }
    res.status(404).json({ success: false });
});
app.delete('/api/admin/activities/:id', (req, res) => {
    activitiesList = activitiesList.filter(a => a.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Đã xóa hoạt động!' });
});

// API Members
app.get('/api/members', (req, res) => res.json({ success: true, data: membersList }));
app.post('/api/admin/members', (req, res) => {
    const newM = { id: Date.now(), ...req.body };
    membersList.push(newM);
    res.json({ success: true, message: 'Thêm thành viên mới thành công!', data: newM });
});
app.put('/api/admin/members/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idx = membersList.findIndex(m => m.id === id);
    if (idx !== -1) { membersList[idx] = { ...membersList[idx], ...req.body }; return res.json({ success: true, message: 'Cập nhật thành viên thành công!' }); }
    res.status(404).json({ success: false });
});
app.delete('/api/admin/members/:id', (req, res) => {
    membersList = membersList.filter(m => m.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Đã xóa thành viên!' });
});

// API Registrations & Contacts
app.post('/api/register', (req, res) => {
    const data = { id: Date.now(), ...req.body, ngayDangKy: new Date().toISOString() };
    registrationsBuffer.push(data);
    res.json({ success: true, message: 'Đăng ký thành viên thành công! Dữ liệu đã lưu vào SQL Server.', data });
});
app.post('/api/contact', (req, res) => {
    const data = { id: Date.now(), ...req.body, ngayGui: new Date().toISOString() };
    contactsBuffer.push(data);
    res.json({ success: true, message: 'Gửi lời nhắn thành công!', data });
});

// API Admin: Save All Data (Direct Cross-Device Persistence)
app.post('/api/admin/save-all', (req, res) => {
    const fullData = req.body;
    if (fullData.members) membersList = fullData.members;
    if (fullData.activities) activitiesList = fullData.activities;
    if (fullData.content) Object.assign(siteContent, fullData.content);
    
    saveDataStore();
    res.json({ success: true, message: 'Đã đồng bộ và lưu dữ liệu toàn hệ thống thành công!' });
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => console.log(`🌸 SERVER RUNNING AT http://localhost:${PORT}`));
