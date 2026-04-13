-- Tạo bảng customers với cột email
CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT,
    zalo TEXT,
    email TEXT,
    note TEXT,
    registered_at TEXT DEFAULT (datetime('now', 'localtime'))
);

-- Nếu bảng đã tồn tại nhưng chưa có cột email, thêm cột email
-- ALTER TABLE customers ADD COLUMN email TEXT;