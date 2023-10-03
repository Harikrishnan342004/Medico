function Chatbot()
{
    document.getElementById("Chatbot").addEventListener("click", function()
    {
         window.location.href = "Chatbot.html";
    });
}



const chatOutput = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

const medicineSuggestions = {
    
    "fever": "Acetaminophen or ibuprofen can help reduce fever.",
    "cough": "For a cough, you can consider cough syrups or lozenges.",
    "sore throat": "Lozenges and warm salt water gargles may help with a sore throat.",
    "common cold": "Rest, drink plenty of fluids, and consider over-the-counter cold medication for relief from a common cold.",
    "stomach ache": "If you have a stomach ache, try avoiding heavy or spicy foods, and opt for bland foods like rice, bananas, and toast (BRAT diet).",
    "nausea": "To alleviate nausea, ginger tea or ginger candies can be helpful. You can also try deep breathing exercises and staying hydrated.",
    "indigestion": "Indigestion can be eased by avoiding large meals, consuming smaller, more frequent meals, and avoiding triggers like spicy or fatty foods.",
    "muscle pain": "For muscle pain, applying a cold or warm compress, gentle stretching, and over-the-counter pain relievers like ibuprofen can provide relief.",
    "allergies": "If you have allergies, consider over-the-counter antihistamines or consult with an allergist for a personalized treatment plan.",
    "sunburn": "To soothe sunburn, apply aloe vera gel, take cool baths, and stay hydrated. Avoid further sun exposure until healed.",
    "insomnia": "Improving sleep hygiene by establishing a regular sleep schedule, creating a relaxing bedtime routine, and limiting caffeine intake can help with insomnia.",
    "anxiety": "For anxiety management, deep breathing exercises, mindfulness meditation, and talking to a therapist or counselor can be beneficial.",
    "stress": "To reduce stress, engage in stress-reduction techniques such as yoga, exercise, journaling, and spending time in nature.",
    "constipation": "For constipation, increase fiber intake through fruits, vegetables, and whole grains. Drinking more water and gentle exercise can also help.",
    "earache": "To relieve earaches, use a warm compress, over-the-counter pain relievers, and consult a doctor if pain persists or if there's drainage from the ear.",
    "toothache": "For a toothache, rinse your mouth with warm salt water, floss to remove any trapped debris, and see a dentist for further evaluation.",
    "sprained ankle": "For a sprained ankle, rest, ice, compress, and elevate (RICE) the affected area. Consider wearing a brace and avoid putting weight on it.",
    "minor cuts and scrapes": "Clean minor cuts and scrapes with soap and water, apply an antibiotic ointment, and cover with a sterile bandage to prevent infection.",
    "insect bites": "For insect bites, clean the area, apply an over-the-counter antihistamine cream, and use cold compresses to reduce itching and swelling.",
    "splinters": "Remove splinters with clean tweezers, clean the area with soap and water, and apply an antiseptic. Watch for signs of infection.",
    "hiccups": "To get rid of hiccups, try sipping cold water slowly, holding your breath for a few seconds, or having someone startle you gently.",
    "motion sickness": "To combat motion sickness, focus on a fixed point, sit in the front of a vehicle, and consider over-the-counter motion sickness medication.",
    "heartburn": "For heartburn, avoid spicy and acidic foods, elevate your head while sleeping, and use over-the-counter antacids or acid reducers.",
    "sunburn (prevention)": "Prevent sunburn by wearing sunscreen with a high SPF, protective clothing, and seeking shade during peak sun hours."

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
