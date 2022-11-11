import React, {useState} from 'react';

export const ChatContext = React.createContext({});

const ChatProvider = ({children, miValorInicial = []}) => {
    const [messages, setNewMessage] = useState(
      localStorage.getItem("LiveChatMessages")
        ? JSON.parse(localStorage.getItem("LiveChatMessages"))
        : miValorInicial
    );
  
    const recieveAllMessages = (newMessage) => {
      const test = JSON.parse(localStorage.getItem("LiveChatMessages"))
        ? JSON.parse(localStorage.getItem("LiveChatMessages"))
        : miValorInicial;
      const newMessages = [...test, newMessage];
      localStorage.setItem("LiveChatMessages", JSON.stringify(newMessages));
      setNewMessage(newMessages);
    }

    const clearAllMessages = () => {
        localStorage.clear("LiveChatMessages")
        setNewMessage(miValorInicial)
    }
    
    return <ChatContext.Provider value={[messages, recieveAllMessages, clearAllMessages]}>
      {children}
    </ChatContext.Provider>
}

export default ChatProvider;
