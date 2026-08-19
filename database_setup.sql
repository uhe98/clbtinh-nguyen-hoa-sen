-- ====================================================================
-- CƠ SỞ DỮ LIỆU CLB TÌNH NGUYỆN HOA SEN (SQL SERVER) - BAN CHỦ NHIỆM UPDATE
-- ====================================================================

IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'CLB_HoaSenDB')
BEGIN
    CREATE DATABASE CLB_HoaSenDB;
END
GO

USE CLB_HoaSenDB;
GO

-- 1. BẢNG TÀI KHOẢN ADMIN
IF OBJECT_ID(N'dbo.NguoiDung', N'U') IS NOT NULL DROP TABLE dbo.NguoiDung;
GO

CREATE TABLE dbo.NguoiDung (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    TenDangNhap VARCHAR(50) UNIQUE NOT NULL,
    MatKhau VARCHAR(100) NOT NULL,
    HoTen NVARCHAR(100) NOT NULL,
    VaiTro NVARCHAR(50) DEFAULT N'Admin',
    NgayTao DATETIME DEFAULT GETDATE()
);
GO

INSERT INTO dbo.NguoiDung (TenDangNhap, MatKhau, HoTen, VaiTro)
VALUES ('admin', 'admin123', N'Quản Trị Viên CLB Hoa Sen', N'SuperAdmin');
GO

-- 2. BẢNG CẤU HÌNH NỘI DUNG TRANG & HÌNH ẢNH
IF OBJECT_ID(N'dbo.NoiDungTrang', N'U') IS NOT NULL DROP TABLE dbo.NoiDungTrang;
GO

CREATE TABLE dbo.NoiDungTrang (
    KHOA VARCHAR(100) PRIMARY KEY,
    GIA_TRI NVARCHAR(MAX) NOT NULL,
    MO_TA NVARCHAR(255) NULL
);
GO

INSERT INTO dbo.NoiDungTrang (KHOA, GIA_TRI, MO_TA) VALUES
('TEN_CLB', N'CLB TÌNH NGUYỆN HOA SEN - TDU', N'Tên chính thức của CLB'),
('HERO_TITLE', N'CLB TÌNH NGUYỆN HOA SEN – Lan tỏa yêu thương, chung tay cộng đồng', N'Tiêu đề lớn Hero Banner'),
('HERO_SUBTITLE', N'Kết nối những trái tim nhiệt huyết, mang nụ cười và hy vọng đến khắp mọi miền Tổ quốc.', N'Mô tả phụ Hero'),
('STAT_MEMBERS', N'50+', N'Số lượng tình nguyện viên'),
('STAT_CAMPAIGNS', N'20+', N'Số chiến dịch đã hoàn thành'),
('STAT_GIFTS', N'100+', N'Số suất quà đã trao tặng'),
('CONTACT_EMAIL', N'clbhoasen@email.com', N'Email liên hệ'),
('CONTACT_PHONE', N'(+84) 123 456 789', N'Số điện thoại Hotline'),
('CONTACT_ADDRESS', N'Số 3 Vũ Công Đán, phường Tứ Minh, TP. Hải Phòng', N'Địa chỉ CLB'),
('SOCIAL_FB', N'https://www.facebook.com/share/1JYARBM1M1/?mibextid=wwXIfr', N'Link Facebook CLB'),
('SOCIAL_ZALO', N'https://zalo.me/g/jnkxkg639', N'Link Nhóm Zalo Ứng tuyển CLB'),
('HERO_IMG', N'images/hero.jpg', N'Hình ảnh Banner chính'),
('LOGO_IMG', N'images/logo.png', N'Hình ảnh Logo CLB');
GO

-- 3. BẢNG THÀNH VIÊN BAN CHỦ NHIỆM & CÁC BAN
IF OBJECT_ID(N'dbo.ThanhVien', N'U') IS NOT NULL DROP TABLE dbo.ThanhVien;
GO

CREATE TABLE dbo.ThanhVien (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    HoTen NVARCHAR(100) NOT NULL,
    ChucVu NVARCHAR(150) NOT NULL,
    BanNganh NVARCHAR(100) NOT NULL,
    CauNoi NVARCHAR(MAX) NULL,
    HinhAnh VARCHAR(255) DEFAULT 'images/pres.jpg',
    LaTieuBieu BIT DEFAULT 1,
    MaSinhVien VARCHAR(20) NULL,
    Email VARCHAR(100) NULL,
    SoDienThoai VARCHAR(20) NULL,
    TruongChuyenNganh NVARCHAR(150) NULL,
    NgayDangKy DATETIME DEFAULT GETDATE(),
    TrangThai NVARCHAR(30) DEFAULT N'Đã duyệt'
);
GO

INSERT INTO dbo.ThanhVien (HoTen, ChucVu, BanNganh, CauNoi, HinhAnh, LaTieuBieu) VALUES
(N'Đ/c Bùi Cẩm Trang', N'Phó Bí thư Đoàn trường, Chủ nhiệm CLB', N'Ban Chủ Nhiệm', N'Lãnh đạo bằng tình yêu thương và trách nhiệm vì cộng đồng.', 'images/pres.jpg', 1),
(N'Đ/c Mạc Thị Cẩm Ly', N'Phó Chủ nhiệm CLB, Trưởng Ban Tổ Chức - Kế Hoạch', N'Ban Chủ Nhiệm', N'Kế hoạch chu đáo là nền tảng cho mọi hành trình tình nguyện thành công.', 'images/vpres.jpg', 1),
(N'Đ/c Lê Thanh Minh', N'Trưởng Ban Phong Trào - Truyền Thông', N'Ban Truyền Thông', N'Lan tỏa câu chuyện tử tế đến với hàng triệu trái tim.', 'images/workshop.jpg', 1),
(N'Đ/c Nguyễn Đức Anh', N'Trưởng Ban Thể Thao', N'Ban Thể Thao', N'Rèn luyện thể lực, thắt chặt tinh thần đồng đội nhiệt huyết.', 'images/student.jpg', 1),
(N'Đ/c Trần Kim Khánh', N'Trưởng Ban Nhiệm Vụ', N'Ban Nhiệm Vụ', N'Sẵn sàng nhận nhiệm vụ, sẵn sàng cống hiến hết mình.', 'images/charity.jpg', 1),
(N'Đ/c Trần Thị Nguyên', N'Trưởng Ban Thủ Quỹ - Bán Hàng', N'Ban Thủ Quỹ - Bán Hàng', N'Gây quỹ yêu thương từ những sản phẩm nhỏ bé đầy ý nghĩa.', 'images/env.jpg', 1),
(N'Đ/c Chu Thị Phúc', N'Phụ trách Tài Chính - Ban Thủ Quỹ - Bán Hàng', N'Ban Thủ Quỹ - Bán Hàng', N'Minh bạch, cẩn trọng trong từng nguồn quỹ từ thiện.', 'images/pres.jpg', 1);
GO

-- 4. BẢNG HOẠT ĐỘNG NỔI BẬT
IF OBJECT_ID(N'dbo.HoatDong', N'U') IS NOT NULL DROP TABLE dbo.HoatDong;
GO

CREATE TABLE dbo.HoatDong (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    TenHoatDong NVARCHAR(200) NOT NULL,
    DanhMuc NVARCHAR(100) NOT NULL,
    MoTaNgan NVARCHAR(MAX) NOT NULL,
    HinhAnh VARCHAR(255) NOT NULL,
    NgayTao DATETIME DEFAULT GETDATE()
);
GO

INSERT INTO dbo.HoatDong (TenHoatDong, DanhMuc, MoTaNgan, HinhAnh) VALUES
(N'Hiến máu tình nguyện', N'Y Tế & Cộng Đồng', N'Giọt máu cho đi - Một đời ở lại. Chương trình hiến máu nhân đạo thu hút đông đảo tình nguyện viên.', 'images/charity.jpg'),
(N'Trung thu cho em', N'Từ Thiện Trẻ Em', N'Mang Tết Trung thu ấm áp, lồng đèn rực rỡ và phần quà ý nghĩa đến các em nhỏ khó khăn.', 'images/workshop.jpg'),
(N'Xuân ấm tình thương', N'Chiến Dịch Thường Niên', N'Trao tặng áo ấm, nhu yếu phẩm Tết cho người già cô đơn và gia đình nghèo vùng khó.', 'images/env.jpg'),
(N'Dòng chảy bếp hồng', N'Suất Ăn 0 Đồng', N'Nấu những bữa ăn nóng hổi, tiếp sức cho bệnh nhân và người lao động nghèo trên địa bàn.', 'images/student.jpg');
GO

PRINT N'====================================================================';
PRINT N'== CẬP NHẬT THÀNH CÔNG BAN CHỦ NHIỆM VÀ ZALO ỨNG TUYỂN TRONG CSDL ==';
PRINT N'====================================================================';
