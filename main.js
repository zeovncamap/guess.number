// Lấy các phần tử từ HTML
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

let secretNumber = Math.floor(Math.random() * 100) + 1; // Số bí mật ngẫu nhiên
let attemptsLeft = 10; // Số lượt thử

// Hàm xử lý khi người dùng nhấn nút "Đoán"
submitBtn.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value); // Lấy giá trị người dùng nhập

    // Kiểm tra nếu người dùng nhập giá trị hợp lệ
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Vui lòng nhập một số từ 1 đến 100!";
        return;
    }

    attemptsLeft--; // Giảm số lượt thử
    attemptsDisplay.textContent = attemptsLeft; // Cập nhật số lượt thử còn lại

    // Kiểm tra kết quả
    if (userGuess < secretNumber) {
        message.textContent = "Số bạn đoán quá thấp! Cố gắng lại nào.";
    } else if (userGuess > secretNumber) {
        message.textContent = "Số bạn đoán quá cao! Cố gắng lại nào.";
    } else {
        message.textContent = "Chúc mừng! Bạn đã đoán đúng số!";
        message.style.color = "green";
        submitBtn.disabled = true; // Tắt nút "Đoán" khi đoán đúng
    }

    // Nếu hết lượt thử
    if (attemptsLeft === 0) {
        message.textContent = `Hết lượt thử rồi! Số đúng là ${secretNumber}.`;
        submitBtn.disabled = true; // Tắt nút "Đoán" khi hết lượt
    }
});
