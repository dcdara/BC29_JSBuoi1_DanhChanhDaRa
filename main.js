/* 

1.Tính tiền lương nhân viên 

//Đầu vào

- Lương cơ bản: 100.000/ngày.
- Nhập số ngày làm.

//Các bước xử lý

- Tạo biến: luongCoban, soNgaylam, tongTienluong.
- Gán giá trị cho biến: luongCoban, soNgaylam.
- Tính tổng tiền lương (áp dụng công thức tính: lương 01 ngày * số ngày làm.)
- In kết quả ra console.

//Đầu ra

- Tổng tiền lương nhân viên
*/

//Code tính tiền lương nhân viên

var luongCoban = 100000;        
var soNgaylam = 5;
var tongTienluong;

var tongTienluong = soNgaylam * luongCoban;

console.log("Tổng tiền lương là:" + tongTienluong);



/* -------------------------------------------------------------------------

2.Tính tiền lương nhân viên

//Đầu vào
- 5 số thực.

//Các bước xử lý

- Tạo biến: soThu1, soThu2, soThu3, soThu4, soThu5, giaTriTB
- Gán giá trị cho biến: soThu1, soThu2, soThu3, soThu4, soThu5
- Tính giá trị trung bình của 5 số: giaTriBT = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5 + soThu6) / 5
- In kết quả ra console.

//Đầu ra
- Giá trị trung bình của tổng 5 số thực.

*/

//Code tính giá trị trung bình của tổng 5 số thực

var soThu1 = 10.5;
var soThu2 = 2;
var soThu3 = 3;
var soThu4 = 4;
var soThu5 = 5;
var soThu6 = 6;
var giaTriBT;

var giaTriBT = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5 + soThu6) / 5;

console.log("Giá trị trung bình của 2 số thực là:" + giaTriBT);


/* ------------------------------------------------------------------

3.Quy đổi USD sang VNĐ

//Đầu vào
- Giá VNĐ = 23.500
- Số USD cần quy đổi sang VNĐ

//Các bước xử lý

- Tạo biến: NVĐ, USD, tongVND
- Gán giá trị cho biến: NVĐ, USD
- Tính số tiền USD quy đổi sang VNĐ: số USD nhập vào * VNĐ
- In kết quả ra console.

//Đầu ra

- Số USD đã quy đổi.

*/

//Code tính giá trị trung bình của tổng 5 số thực

var VND = 23500;
var USD = 2;
var tongVND;

var tongVND = VND * USD;

console.log("Tổng số tiền quy đổi sang VNĐ là:" + tongVND);



/*--------------------------------------------------------------

4.Tính diện tích, chu vi hình chữ nhật

//Đầu vào
- Chiều dài hình chữ nhật
- Chiều rộng hình chữ nhật

//Các bước xử lý

- Tạo biến: chieuDai, chieuRong, dienTich, chuVi
- Gán giá trị cho biến: chieuDai, chieuRong
- Tính diện tích hình chữ nhật: chieuDai * chieuRong
- Tính chu vi hình chữ nhật: (chieuDai * chieuRong) * 2
- In kết quả ra console.

//Đầu ra

- Diện tích hình chữ nhật
- Chu vi hình chữ nhật

*/

//Code tính giá trị trung bình của tổng 5 số thực

var chieuDai = 4;
var chieuRong =5;
var chuVi;
var dienTich;

var dienTich = chieuDai * chieuRong;
var chuVi  = (chieuDai * chieuRong) * 2;

console.log("Diện tích hình chữ nhật là:" + dienTich);
console.log("Chu vi hình chữ nhật là:" + chuVi);



/*--------------------------------------------------------------

5.Tính diện tích, chu vi hình chữ nhật

//Đầu vào
- Nhập 1 số có 2 chữ số

//Các bước xử lý

- Tạo biến: n (là số có 2 chữ số), soHangDV, soHangchuc, tong
- Tách số hàng đơn vị: int soHangDV = n % 10
- Tách số hàng chục: int soHangchuc = n / 10
- Tính tổng 2 ký số: soHangDV + soHangchuc
- In kết quả ra console.

//Đầu ra

- Tổng 2 ký số

*/

//Code tính giá trị trung bình của tổng 5 số thực

var n= 12;
var soHangchuc;
var soHangDV;
var tong;

var soHangDV = parseInt(n % 10);
var soHangchuc  = parseInt(n / 10);
var tong = soHangDV + soHangchuc;

console.log("Tổng 2 ký số vừa nhập là:" + tong);

