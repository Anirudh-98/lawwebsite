import React, { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import {
  Send,
  Bot,
  User,
  MessageCircle,
  Scale,
  BookOpen,
  FileText,
  Clock,
  Sparkles,
  ArrowLeft,
  Mic,
  Paperclip,
  MoreVertical
} from 'lucide-react';

interface ChatMessage {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[]; // Optional suggestions
  sources?: { title: string; type: string }[]; // Optional sources
}

interface ChatPageProps {
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const ChatPage: React.FC<ChatPageProps> = ({ setActiveTab }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm your Legal AI Assistant. I can help you with legal questions, document analysis, case research, and more. What can I assist you with today?",
      timestamp: new Date(Date.now() - 300000),
      suggestions: [
        "Analyze a contract",
        "Research case law",
        "Draft a legal document",
        "Explain legal terms"
      ]
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { icon: FileText, label: "Contract Review", color: "bg-blue-500" },
    { icon: Scale, label: "Legal Research", color: "bg-green-500" },
    { icon: BookOpen, label: "Document Draft", color: "bg-purple-500" },
    { icon: MessageCircle, label: "Legal Advice", color: "bg-orange-500" }
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: generateAIResponse(inputMessage),
        timestamp: new Date(),
        sources: [
          { title: "Legal Code Section 123.45", type: "statute" },
          { title: "Smith v. Johnson (2023)", type: "case" }
        ]
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (userInput: string): string => {
    const responses = [
      "Based on legal precedent and current regulations, I can provide you with comprehensive guidance on this matter. Let me break this down for you...",
      "This is an excellent legal question. According to established case law and statutory requirements, here's what you need to know...",
      "I've analyzed your query against current legal standards. Here's my detailed assessment and recommendations...",
      "From a legal perspective, this situation involves several important considerations. Let me walk you through each aspect..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
    setSelectedSuggestion(suggestion);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp: Date): string => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleBackClick = () => {
    setActiveTab('home'); // Navigate back to home or previous tab
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleBackClick}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-slate-400" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Legal AI Assistant</h1>
                  <p className="text-sm text-slate-400">Online • Ready to help</p>
                </div>
              </div>
            </div>
            <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Quick Actions Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center space-x-3 p-3 bg-slate-700/30 hover:bg-slate-700/50 rounded-xl transition-all duration-200 group"
                  >
                    <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <action.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium">{action.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <h4 className="text-sm font-medium text-slate-400 mb-3">Recent Topics</h4>
                <div className="space-y-2">
                  <div className="text-xs text-slate-500 p-2 bg-slate-700/20 rounded-lg">Contract Analysis</div>
                  <div className="text-xs text-slate-500 p-2 bg-slate-700/20 rounded-lg">Employment Law</div>
                  <div className="text-xs text-slate-500 p-2 bg-slate-700/20 rounded-lg">IP Rights</div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
              {/* Messages */}
              <div className="h-[600px] overflow-y-auto p-6 space-y-6">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {/* Avatar */}
                      <div className={`flex-shrink-0 ${message.type === 'user' ? 'ml-3' : 'mr-3'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user'
                            ? 'bg-blue-500'
                            : 'bg-gradient-to-r from-purple-500 to-blue-500'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                      </div>

                      {/* Message Content */}
                      <div className={`flex flex-col ${message.type === 'user' ? 'items-end' : 'items-start'}`}>
                        <div className={`px-4 py-3 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-700/50 text-slate-100'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                        
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-slate-500">{formatTime(message.timestamp)}</span>
                          {message.type === 'bot' && (
                            <Sparkles className="w-3 h-3 text-purple-400" />
                          )}
                        </div>

                        {/* Suggestions */}
                        {message.suggestions && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {message.suggestions.map((suggestion, index) => (
                              <button
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="px-3 py-1 bg-slate-700/30 hover:bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/30 transition-colors"
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Sources */}
                        {message.sources && (
                          <div className="mt-3 space-y-1">
                            <p className="text-xs text-slate-500">Sources:</p>
                            {message.sources.map((source, index) => (
                              <div key={index} className="flex items-center space-x-2 text-xs text-slate-400">
                                <Clock className="w-3 h-3" />
                                <span>{source.title}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-slate-700/50 px-4 py-3 rounded-2xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-slate-700/50">
                <div className="flex items-end space-x-3">
                  <button className="p-2 text-slate-400 hover:text-slate-300 transition-colors">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  
                  <div className="flex-1 relative">
                    <textarea
                      ref={inputRef}
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about law..."
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none transition-all"
                      rows={1}
                      style={{minHeight: '44px', maxHeight: '120px'}}
                    />
                  </div>

                  <button className="p-2 text-slate-400 hover:text-slate-300 transition-colors">
                    <Mic className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="p-2 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-xl transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-xs text-slate-500 mt-2 text-center">
                  Press Enter to send, Shift+Enter for new line
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;