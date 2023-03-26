import { useState } from "react";
import { sendMessage } from "@/services/chat.service";

function ChatComponent() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");

  const handleSendMessage = async () => {
    const chatServiceResponse = await sendMessage(inputValue);
    setResponse(chatServiceResponse.message);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center border-2">
      <h1>Chat Page</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          className="border border-gray-300 rounded-md"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      {response && (
        <div>
          <p>You: {inputValue}</p>
          <p>ChatGPT: {response}</p>
        </div>
      )}
    </div>
  );
}

export default ChatComponent;
