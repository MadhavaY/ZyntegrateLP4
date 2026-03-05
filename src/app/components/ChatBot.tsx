import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from './ui/button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    text: 'Hi! I\'m Zynbot, your integration assistant. How can I help you today?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

const BOT_RESPONSES: { [key: string]: string } = {
  pricing: 'Our pricing starts at $99/month for the Starter plan. We also offer Professional ($299/month) and custom Enterprise plans. Would you like to know more about a specific plan?',
  features: 'Zyntegrate offers workflow automation, unified data layer, real-time sync, enterprise security, analytics & insights, and cloud & legacy support. Which feature interests you most?',
  demo: 'I\'d be happy to schedule a demo for you! Please click the "Schedule Demo" button at the top of the page, or you can reach out to our sales team at sales@zyntegrate.com.',
  integration: 'We support 50+ pre-built connectors for popular platforms including Salesforce, SAP, AWS, Azure, Google Cloud, and more. We can also build custom connectors for your specific needs.',
  support: 'We offer 24/7 support for all our customers. Professional plans include priority support, and Enterprise plans come with a dedicated account manager.',
  trial: 'Yes! We offer a 14-day free trial with no credit card required. You can start right away by clicking the "Start Free Trial" button.',
  default: 'That\'s a great question! For more detailed information, I recommend checking our documentation or speaking with our sales team. Is there anything else I can help you with?',
};

function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes('price') || message.includes('pricing') || message.includes('cost')) {
    return BOT_RESPONSES.pricing;
  } else if (message.includes('feature') || message.includes('capability') || message.includes('what can')) {
    return BOT_RESPONSES.features;
  } else if (message.includes('demo') || message.includes('presentation')) {
    return BOT_RESPONSES.demo;
  } else if (message.includes('integrate') || message.includes('connector') || message.includes('api')) {
    return BOT_RESPONSES.integration;
  } else if (message.includes('support') || message.includes('help')) {
    return BOT_RESPONSES.support;
  } else if (message.includes('trial') || message.includes('free')) {
    return BOT_RESPONSES.trial;
  } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return 'Hello! How can I assist you with Zyntegrate today?';
  }
  
  return BOT_RESPONSES.default;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 size-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-2xl shadow-blue-500/50 flex items-center justify-center hover:scale-110 transition-transform"
          > Chatbot
            {/* <MessageCircle className="size-8 text-white" /> */}
            <motion.div
              // animate={{ scale: [1, 1.2, 1] }}
              // transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-gradient-to-br opacity-75"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Bot className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Zynbot</h3>
                  <p className="text-sm text-blue-100">Online • Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="size-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="size-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 size-8 rounded-full flex items-center justify-center ${
                      message.sender === 'bot'
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                        : 'bg-gray-200'
                    }`}
                  >
                    {message.sender === 'bot' ? (
                      <Bot className="size-5 text-white" />
                    ) : (
                      <User className="size-5 text-gray-600" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                      message.sender === 'bot'
                        ? 'bg-white border border-gray-200 text-gray-900'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="size-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Bot className="size-5 text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="size-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="size-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="size-2 bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="size-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-blue-500/30"
                >
                  <Send className="size-5 text-white" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by Zyntegrate AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
