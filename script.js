function encryptMessage() {
    const message = document.getElementById('message').value;
    const key = document.getElementById('secretKey').value;
    
    if (!message || !key) {
        alert("يرجى إدخال الرسالة والمفتاح السري أولاً!");
        return;
    }

    // عملية التشفير
    const encrypted = CryptoJS.AES.encrypt(message, key).toString();
    
    showResult(encrypted);
}

function decryptMessage() {
    const ciphertext = document.getElementById('message').value;
    const key = document.getElementById('secretKey').value;
    
    if (!ciphertext || !key) {
        alert("يرجى إدخال الكود المشفر والمفتاح السري!");
        return;
    }

    try {
        // عملية فك التشفير
        const bytes = CryptoJS.AES.decrypt(ciphertext, key);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        
        if (!originalText) throw new Error();
        
        showResult(originalText);
    } catch (e) {
        showResult("❌ خطأ: المفتاح السري غير صحيح أو الكود تالف!");
    }
}

function showResult(text) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = text;
    document.getElementById('copyBtn').style.display = "block";
}

function copyResult() {
    const text = document.getElementById('result').innerText;
    navigator.clipboard.writeText(text);
    alert("تم نسخ النتيجة إلى الحافظة!");
}
