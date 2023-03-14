// Lấy danh sách các button in, sửa, xóa
const printBtns = document.querySelectorAll('.print-btn');
const editBtns = document.querySelectorAll('.edit-btn');
const deleteBtns = document.querySelectorAll('.delete-btn');

// Thêm sự kiện click cho các button
printBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Thực hiện chức năng in hóa đơn
    console.log('In hóa đơn');
  });
});

editBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Thực hiện chức năng sửa hóa đơn
    console.log('Sửa hóa đơn');
  });
});

deleteBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Thực hiện chức năng xóa hóa đơn
    console.log('Xóa hóa đơn');
  });
});
