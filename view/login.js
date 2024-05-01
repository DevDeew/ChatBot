document.addEventListener("DOMContentLoaded", function() {
    var chatLog = document.getElementById("chat-log");
    var userInput = document.getElementById("user-text");
    var sendButton = document.getElementById("send-btn");

    function appendUserMessage(message) {
        var userMessage = document.createElement("div");
        userMessage.className = "user-message";
        userMessage.innerHTML = "<strong>Tú:</strong> " + message;
        chatLog.appendChild(userMessage);
    }

    function appendBotMessage(message) {
        var botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.innerHTML = "<strong>Bot:</strong> " + message;
        chatLog.appendChild(botMessage);
    }

    function processUserInput() {
        var message = userInput.value;
        appendUserMessage(message);

        // Aquí puedes llamar a tu API o realizar el procesamiento necesario para obtener una respuesta del bot.
        // En este ejemplo, simplemente generaremos una respuesta aleatoria.
        var botResponse = generateBotResponse();
        appendBotMessage(botResponse);
                
        userInput.value = "";
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function generateBotResponse() {
        var responses = ["Hola", "¡Hola! ¿En qué puedo ayudarte?", "No entiendo, ¿puedes ser más específico?"];
        var randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    }

    sendButton.addEventListener("click", processUserInput);
    userInput.addEventListener("keydown", function(event) {
        if (event.key === 'Enter') { 
            processUserInput();
        }
    });

    userInput.focus();
});