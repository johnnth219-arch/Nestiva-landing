const fs = require('fs');

// Đọc file database để kiểm tra cấu trúc
const dbBuffer = fs.readFileSync('brain.db');
const dbString = dbBuffer.toString('utf8');

// Tìm kiếm schema của bảng customers
const customerTableMatch = dbString.match(/CREATE TABLE customers[^)]+\)/);
if (customerTableMatch) {
    console.log('Cấu trúc bảng customers:');
    console.log(customerTableMatch[0]);
} else {
    console.log('Không tìm thấy bảng customers');
}

// Kiểm tra xem có cột email không
if (dbString.includes('email')) {
    console.log('\n✅ Đã có cột email trong database');
} else {
    console.log('\n❌ Chưa có cột email trong database');
}