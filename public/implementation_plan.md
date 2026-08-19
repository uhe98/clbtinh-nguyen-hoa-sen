# Implementation Plan: Enlarge Level 3 Cards to Match Level 1 & 2 ('Cho cấp 3 to bằng cấp 1 và 2')

Nâng kích thước 4 thẻ của **Cấp 3 (Các Ban Ngành & Trưởng Ban)** to bằng Cấp 1 và Cấp 2:

- **Kích thước khung thẻ (`max-width: 215px !important; padding: 10px 8px !important;`)**: Bằng kích thước thẻ Cấp 2.
- **Ảnh đại diện (`.org-avatar`)**: Tăng từ `44px` lên `52px` to rõ nét.
- **Phông chữ tên đồng chí (`.org-name`)**: Tăng lên `0.98rem` đậm nét, sang trọng.
- **Chức vụ (`.org-role`)**: Tăng lên `0.78rem`.
- **Huy hiệu (`.org-badge`)**: Tăng cỡ chữ lên `0.62rem`.

## Proposed Changes

### [`style.css`](file:///D:/CLB_HS/GT_CLB/public/css/style.css)
- Cập nhật quy tắc CSS cho `.card-dept`, `.level-3 .org-card`, `.card-dept .org-avatar`, `.card-dept .org-name`, `.card-dept .org-role`, `.card-dept .org-badge`.

## Verification Plan

1. Mở trang chủ [`index.html`](file:///D:/CLB_HS/GT_CLB/public/index.html).
2. Cuộn tới **Sơ đồ phân cấp CLB**:
   - Xác nhận 4 thẻ Cấp 3 có kích thước to rõ, đồng đều và nổi bật hệt như các thẻ Cấp 1 và Cấp 2.
