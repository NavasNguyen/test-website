// Đợi DOM load xong mới chạy script
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("clickMeBtn");
    const message = document.getElementById("message");

    if (btn) {
        btn.addEventListener("click", () => {
            message.textContent = "Xin chào! JavaScript đã chạy thành công 🚀";
            message.style.color = "green";
        });
    }

    // Đánh dấu menu active tự động dựa trên tên file hiện tại
    const currentLocation = location.pathname.split("/").pop() || "index.html";
    const menuLinks = document.querySelectorAll("nav ul li a");
    
    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});