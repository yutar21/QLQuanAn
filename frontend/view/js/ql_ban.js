// Lấy thẻ button thêm bàn
const addTableBtn = document.getElementById("addTable");

// Lấy thẻ modal thêm bàn
const addTableModal = document.getElementById("addTableModal");

// Hiển thị modal khi người dùng click vào button thêm bàn
addTableBtn.addEventListener("click", () => {
  addTableModal.showModal();
});
const editBtns = document.querySelectorAll('.edit-btn');

editBtns.forEach(editBtn => {
  editBtn.addEventListener('click', () => {
    const tableRow = editBtn.parentNode.parentNode;
    const position = tableRow.querySelector('td:nth-child(1)').textContent;
    const numSeats = tableRow.querySelector('td:nth-child(2)').textContent;
    // TODO: Hiển thị cửa sổ sửa thông tin bàn
  });
});
