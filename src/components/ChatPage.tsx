
import { useState } from "react";
import { Send, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{id: string, text: string, isUser: boolean}>>([]);
  const [chatHistory] = useState([
    { id: "1", title: "Monthly turnover analysis", date: "Today" },
    { id: "2", title: "Employee metrics review", date: "Yesterday" },
    { id: "3", title: "Quarterly report generation", date: "2 days ago" },
  ]);

  const suggestionCards = [
    { text: "Generate a monthly report", color: "bg-red-500 hover:bg-red-600" },
    { text: "What are the key points to improve?", color: "bg-yellow-500 hover:bg-yellow-600" },
    { text: "Generate an overall group graph", color: "bg-green-500 hover:bg-green-600" },
    { text: "Give suggestions for actions to take", color: "bg-blue-500 hover:bg-blue-600" },
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: Date.now().toString(),
      text: message,
      isUser: true
    };
    
    setMessages(prev => [...prev, newMessage]);
    setMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        text: "I understand you want to analyze HR metrics. I can help you generate reports, identify improvement areas, and provide actionable insights based on your company data.",
        isUser: false
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleSuggestionClick = (suggestionText: string) => {
    setMessage(suggestionText);
  };

  return (
    <div className="flex h-screen">
      {/* Chat History Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <Button className="w-full bg-[#FF3B3B] hover:bg-[#E33333] text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Recent Chats</h3>
          <div className="space-y-2">
            {chatHistory.map((chat) => (
              <div
                key={chat.id}
                className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-gray-100"
              >
                <div className="text-sm font-medium text-gray-800 truncate">
                  {chat.title}
                </div>
                <div className="text-xs text-gray-500 mt-1">{chat.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              {/* Logos */}
              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#FF3B3B] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">J</span>
                  </div>
                  <span className="ml-3 text-xl font-bold text-gray-800">Grupo Jacto</span>
                </div>
                <div className="text-gray-400">+</div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <span className="ml-3 text-xl font-bold text-gray-800">OpenAI</span>
                </div>
              </div>

              {/* Suggestion Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
                {suggestionCards.map((card, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`${card.color} text-white border-0 p-6 h-auto text-left justify-start hover:text-white`}
                    onClick={() => handleSuggestionClick(card.text)}
                  >
                    {card.text}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.isUser
                        ? 'bg-[#FF3B3B] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex space-x-4">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask something or request information"
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              onClick={handleSendMessage}
              className="bg-[#FF3B3B] hover:bg-[#E33333] text-white"
              disabled={!message.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
