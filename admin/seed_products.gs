// Chạy HÀM NÀY MỘT LẦN để seed 14 sản phẩm Nestiva vào sheet products
function seedProducts() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('products');
  if (!sh) { Logger.log('Sheet products không tồn tại!'); return; }

  // Xóa data cũ (giữ header)
  if (sh.getLastRow() > 1) sh.deleteRows(2, sh.getLastRow() - 1);

  var products = [
    [1,  'Súp Bào Ngư Tổ Yến',          419000, 'Kết hợp bào ngư tươi và tổ yến thiên nhiên, 259gr', 50,  'sup'],
    [2,  'Súp Bào Ngư Vi Cá',            519000, 'Vi cá kết hợp bào ngư, tăng cường sinh lực, 259gr',  50,  'sup'],
    [3,  'Súp Bào Ngư Hải Sâm Vi Cá',   559000, 'Bào ngư, hải sâm, vi cá — bổ thận khí, 259gr',      30,  'sup'],
    [4,  'Cháo Tổ Yến Hạt Sen Kỷ Tử',    79000, 'Tổ yến, hạt sen, kỷ tử — an thần dưỡng tâm, 259gr', 100, 'chao'],
    [5,  'Cháo Yến Bò Bằm',               79000, 'Cháo yến + bò bằm, giàu protein, 259gr',             100, 'chao'],
    [6,  'Cháo Tổ Yến Sò Điệp',           99000, 'Tổ yến + sò điệp, tốt cho xương khớp, 259gr',        80,  'chao'],
    [7,  'Cháo Tổ Yến Cá Hồi',            99000, 'Omega-3 cá hồi + tổ yến, phát triển trí não, 259gr', 80,  'chao'],
    [8,  'Yến Chưng Đông Trùng',           59000, 'Yến chưng + đông trùng hạ thảo, bổ phế, 70ml',      200, 'yen-nuoc'],
    [9,  'Yến Chưng Nhân Sâm',             59000, 'Yến + nhân sâm Hàn Quốc, chống mệt mỏi, 70ml',     200, 'yen-nuoc'],
    [10, 'Hồng Yến Chưng Đông Trùng',      99000, 'Hồng yến quý + đông trùng, làm đẹp da, 70ml',      100, 'yen-nuoc'],
    [11, 'Combo Chuyên Vị Yến Chưng',     688000, '12 hũ Yến chưng Đông trùng & Nhân sâm',             30,  'combo'],
    [12, 'Combo Hài Hòa Mỹ Vị',          1399000, '1 Cháo hạt sen + 1 Cháo sò điệp + 2 Súp vi cá + 4 hũ yến', 20, 'combo'],
    [13, 'Combo Thượng Vị Tinh Hoa',      1599000, '2 Súp Bào ngư Vi cá + 6 hũ Hồng yến đông trùng',   20,  'combo'],
    [14, 'Combo Bách Vị Sum Vầy',         1888000, '1 Cháo cá hồi + 1 Cháo bò bằm + 1 Cháo sò điệp + 1 Cháo hạt sen + 2 Súp vi cá + 5 Hồng yến', 15, 'combo']
  ];

  products.forEach(function(row) { sh.appendRow(row); });
  Logger.log('✅ Đã seed ' + products.length + ' sản phẩm vào sheet products!');
  SpreadsheetApp.getUi().alert('✅ Seed thành công! Đã thêm ' + products.length + ' sản phẩm.');
}
