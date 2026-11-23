// ==========================
// Card Buttons
// ==========================
document.querySelectorAll(".card button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Added to cart 💕");
    });
});


// ==========================
// Features Hover
// ==========================
document.querySelectorAll(".feature").forEach(box => {

    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = "0.3s";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
    });

});


// ==========================
// Shop Search + Filter
// ==========================
const searchInput = document.getElementById("searchInput");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const products = document.querySelectorAll(".product");

// Search
if (searchInput && products.length) {

    searchInput.addEventListener("input", () => {

        const value = searchInput.value.toLowerCase();

        products.forEach(product => {

            const title = product.querySelector("h4");

            if (!title) return;

            const name = title.innerText.toLowerCase();

            product.style.display =
                name.includes(value) ? "block" : "none";

        });

    });

}


// Price Filter
if (priceRange && priceValue && products.length) {

    priceRange.addEventListener("input", () => {

        priceValue.innerText = priceRange.value;

        products.forEach(product => {

            const price = Number(product.dataset.price || 0);

            product.style.display =
                price <= Number(priceRange.value)
                    ? "block"
                    : "none";

        });

    });

}


// ==========================
// Product Buttons
// ==========================
document.querySelectorAll(".product button").forEach(btn => {

    btn.addEventListener("click", () => {
        alert("Added to cart 🛒");
    });

});


// ==========================
// Feature Cards Hover
// ==========================
document.querySelectorAll(".feature-card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 15px 35px rgba(231,84,128,0.25)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 10px 25px rgba(231,84,128,0.15)";
    });

});


// ==========================
// Contact Page Animation
// ==========================
document.querySelectorAll(".info, .map, form").forEach((el, i) => {

    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";

    setTimeout(() => {

        el.style.transition = "0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";

    }, i * 200);

});


// ==========================
// Contact Form
// ==========================
// مهم:
// نحدد Contact Form بالـ ID حتى لا نمسك
// Register Form بالغلط.
const form = document.querySelector("#contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const btn = this.querySelector("button");

        if (!btn) return;

        btn.innerHTML = "Sending...";
        btn.style.background = "#999";

        setTimeout(() => {

            btn.innerHTML = "Message Sent ✔";
            btn.style.background = "#28a745";

        }, 2000);

    });

}


// ==========================
// AI Chat Bot
// ==========================
document.addEventListener("DOMContentLoaded", function () {

    const chatBtn = document.getElementById("ai-chat-btn");
    const chatBox = document.getElementById("ai-chat-box");
    const closeBtn = document.getElementById("close-chat");
    const sendBtn = document.getElementById("send-btn");
    const input = document.getElementById("user-input");
    const chatBody = document.getElementById("chat-body");

    if (
        !chatBtn ||
        !chatBox ||
        !closeBtn ||
        !sendBtn ||
        !input ||
        !chatBody
    ) {
        return;
    }

    chatBtn.addEventListener("click", () => {
        chatBox.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        chatBox.style.display = "none";
    });

    sendBtn.addEventListener("click", sendMessage);

    input.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {
            sendMessage();
        }

    });

    window.sendQuestion = function (text) {

        input.value = text;
        sendMessage();

    };

    function sendMessage() {

        const text = input.value.trim();

        if (!text) return;

        addMessage(text, "user-message");

        input.value = "";

        setTimeout(() => {

            const reply = getBotReply(text);

            addMessage(reply, "bot-message");

        }, 500);

    }

    function addMessage(message, className) {

        const div = document.createElement("div");

        div.className = className;
        div.innerHTML = message;

        chatBody.appendChild(div);

        chatBody.scrollTop = chatBody.scrollHeight;

    }


    function getBotReply(question) {

        question = question.toLowerCase();

        // التحية
        if (
            question.includes("مرحبا") ||
            question.includes("اهلا") ||
            question.includes("السلام") ||
            question.includes("hi") ||
            question.includes("هاي")
        ) {
            return "أهلاً بك في Soft Dream 🌸 كيف يمكنني مساعدتك؟";
        }

        // المقاسات
        if (
            question.includes("مقاس") ||
            question.includes("size")
        ) {
            return "المقاسات المتوفرة لدينا: S - M - L - XL- XXL 💖";
        }

        // الألوان
        if (
            question.includes("لون") ||
            question.includes("الوان") ||
            question.includes("ألوان")
        ) {
            return "الألوان المتوفرة: وردي، ازرق، موف، أخضر، أبيض، رمادي، بنفسجي 🌸";
        }

        // الأسعار
        if (
            question.includes("سعر") ||
            question.includes("كم السعر") ||
            question.includes("price")
        ) {
            return "الأسعار تختلف حسب المنتج، يمكنك زيارة صفحة المنتجات للاطلاع على جميع الأسعار 💕";
        }

        // التوصيل
        if (
            question.includes("توصيل") ||
            question.includes("شحن")
        ) {
            return "نوفر خدمة التوصيل حسب المنطقة 🚚";
        }

        // الدفع
        if (
            question.includes("دفع") ||
            question.includes("فيزا") ||
            question.includes("كاش")
        ) {
            return "يمكن الدفع بالطرق المتاحة عند إتمام الطلب 💳";
        }

        // اللون الوردي
        if (
            question.includes("وردي") ||
            question.includes("pink") ||
            question.includes("زهري")
        ) {
            return "لدينا عدة منتجات باللون الوردي 🌸 يمكنك تصفح صفحة المنتجات.";
        }

        // المنتجات الجديدة
        if (
            question.includes("منتج") ||
            question.includes("منتجات") ||
            question.includes("موديل") ||
            question.includes("جديد")
        ) {

            setTimeout(() => {
                window.location.href = "./shop.php";
            }, 1500);

            return "جاري تحويلك إلى صفحة المنتجات ✨";
        }

        // التواصل
        if (
            question.includes("تواصل") ||
            question.includes("اتصال") ||
            question.includes("رقم")
        ) {

            setTimeout(() => {
                window.location.href = "./contact-us.php";
            }, 1500);

            return "جاري تحويلك إلى صفحة التواصل 💖";
        }

        return "يمكنني مساعدتك في المقاسات، الألوان، الأسعار، المنتجات، التوصيل أو التواصل معنا 💕";
    }

});


// ==========================
// Login Modal
// ==========================

window.openLogin = function () {
    document.getElementById("loginModal").classList.add("active");
};

window.closeLogin = function () {
    document.getElementById("loginModal").classList.remove("active");
};

window.showRegister = function () {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("forgotForm").classList.remove("active");
    document.getElementById("registerForm").classList.add("active");
};

window.showForgot = function () {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("registerForm").classList.remove("active");
    document.getElementById("forgotForm").classList.add("active");
};

window.showLogin = function () {
    document.getElementById("registerForm").classList.remove("active");
    document.getElementById("forgotForm").classList.remove("active");
    document.getElementById("loginForm").classList.add("active");
};



