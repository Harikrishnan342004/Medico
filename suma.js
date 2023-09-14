const chatOutput = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

const medicineSuggestions = {
    "headache": "You can try ibuprofen or acetaminophen for a headache.",
    "fever": "Acetaminophen or ibuprofen can help reduce fever.",
    "cough": "For a cough, you can consider cough syrups or lozenges.",
    "sore throat": "Lozenges and warm salt water gargles may help with a sore throat.",
};

function botResponse(userQuery) {
    userQuery = userQuery.toLowerCase();
    let response = "I'm not sure how to help with that.";

    for (const condition in medicineSuggestions) {
        if (userQuery.includes(condition)) {
            response = medicineSuggestions[condition];
            break;
        }
    }

    return response;
}

function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);

    // Scroll to the bottom of the chat window
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

sendButton.addEventListener("click", function() {
    const userMessage = userInput.value;
    if (userMessage.trim() !== "") {
        displayMessage(userMessage, "user");
        userInput.value = "";

        const botMessage = botResponse(userMessage);
        displayMessage(botMessage, "bot");
    }
});

// Handle pressing Enter key
userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sendButton.click();
    }
});
