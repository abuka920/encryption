const apiUrl = "http://127.0.0.1:5000"; // Update to deployed URL after deployment

async function encryptMessage() {
    const message = document.getElementById("message-input").value;
    if (!message) {
        alert("Please enter a message to encrypt.");
        return;
    }

    const response = await fetch(`${apiUrl}/encrypt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    });

    const data = await response.json();
    document.getElementById("encrypted-message").textContent = data.encrypted_message;
    document.getElementById("encryption-key").textContent = data.encryption_key;
}

async function decryptMessage() {
    const encryptedMessage = document.getElementById("decrypt-message-input").value;
    const encryptionKey = document.getElementById("decrypt-key-input").value;
    if (!encryptedMessage || !encryptionKey) {
        alert("Please provide both an encrypted message and encryption key.");
        return;
    }

    const response = await fetch(`${apiUrl}/decrypt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            encrypted_message: encryptedMessage,
            encrypted_key: encryptionKey
        })
    });

    const data = await response.json();
    document.getElementById("decrypted-message").textContent = data.decrypted_message;
}
