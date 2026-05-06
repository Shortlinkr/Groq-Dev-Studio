document.getElementById('save-keys-btn').addEventListener('click', () => {
    const keys = {
        gemini: document.getElementById('gemini-key').value,
        claude: document.getElementById('claude-key').value,
        openai: document.getElementById('openai-key').value
    };

    // Store in localStorage (persists even if you refresh)
    localStorage.setItem('ai_dev_keys', JSON.stringify(keys));
    
    document.getElementById('status-text').innerText = "Keys Saved! Ready to work.";
    alert("Keys saved securely to your browser.");
});

// Load keys on page start
window.onload = () => {
    const savedKeys = localStorage.getItem('ai_dev_keys');
    if (savedKeys) {
        const keys = JSON.parse(savedKeys);
        document.getElementById('gemini-key').value = keys.gemini || '';
        document.getElementById('claude-key').value = keys.claude || '';
        document.getElementById('openai-key').value = keys.openai || '';
        document.getElementById('status-text').innerText = "Ready to work.";
    }
};

// Utility function to display code later
function updateCodeDisplay(code) {
    document.getElementById('code-display').textContent = code;
}
