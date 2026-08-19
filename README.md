# 🌸 Landing Page CLB Tình Nguyện Hoa Sen

Dự án Landing Page chính thức giới thiệu **CLB Tình Nguyện Hoa Sen** được xây dựng với **Visual Studio Code**, **Node.js Express** và cơ sở dữ liệu **SQL Server**.

---

## 🎨 Tính Năng Nổi Bật Giao Diện

1. **Phần đầu trang (Header)**: Logo hoa sen thiết kế tinh tế, thanh điều hướng mượt mà, nút CTA **"Tham gia ngay"** góc phải.
2. **Hero Banner**: Nền hoa sen nở trên mặt nước tỏa ánh sáng dịu, khẩu hiệu *"CLB HOA SEN – Lan tỏa yêu thương, chung tay cộng đồng"*, nút Đăng ký thành viên.
3. **Giới thiệu CLB (2 Cột)**: Trình bày sứ mệnh, tầm nhìn, 3 giá trị cốt lõi (Tâm - Trí - Tín) kết hợp khung video/ảnh hoạt động.
4. **Hoạt động nổi bật (Grid 4 Thẻ)**: 
   - Từ thiện & cộng đồng
   - Workshop & đào tạo kỹ năng
   - Bảo vệ môi trường
   - Kết nối sinh viên & doanh nghiệp
5. **Thành viên tiêu biểu**: Chân dung Ban điều hành, câu nói truyền cảm hứng và nút mở danh sách thành viên chi tiết.
6. **Kêu gọi tham gia (CTA Banner)**: Thiết kế tràn viền xanh ngọc nổi bật kích thích tương tác.
7. **Form Liên Hệ & Bản Đồ**: Tích hợp gửi dữ liệu trực tiếp vào SQL Server + Thông tin Hotline/Social.
8. **Chân trang (Footer)**: Slogan, liên kết nhanh, bản quyền © 2026 CLB Hoa Sen.

---

## 🗄️ Hướng Dẫn Khởi Tạo SQL Server

1. Mở ứng dụng **SQL Server Management Studio (SSMS)** hoặc **VS Code (Extension SQL Server/MSSQL)**.
2. Mở file `database_setup.sql`.
3. Nhấn **Execute / Run** để tự động tạo:
   - Database: `CLB_HoaSenDB`
   - Các bảng: `ThanhVien`, `LienHe`, `HoatDong`
   - Stored Procedure: `sp_DangKyThanhVien`, `sp_GuiLienHe`
   - Dữ liệu mẫu chuẩn hóa.

---

## 🚀 Hướng Dẫn Chạy Trên Visual Studio Code

### Bước 1: Mở thư mục dự án trong VS Code
```bash
code .
```

### Bước 2: Cài đặt thư viện dependencies
```bash
npm install
```

### Bước 3: Khởi chạy Web Server
```bash
npm start
```
Truy cập trình duyệt tại địa chỉ: `http://localhost:3000`

---

## ⚙️ Cấu Hình Kết Nối CSDL (Tùy Chọn)
Bạn có thể điều chỉnh cấu hình kết nối SQL Server trong file `.env` hoặc trực tiếp trong file `server.js`:
- `DB_SERVER`: `localhost` (hoặc tên Instance SQL Server của bạn)
- `DB_NAME`: `CLB_HoaSenDB`
- `DB_USER`: `sa`
- `DB_PASSWORD`: Mật khẩu tài khoản `sa` của bạn
