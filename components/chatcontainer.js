import TextInput from './textinput';
import ChatDialogue from './chatdialogue';

function ChatContainer(props) {
  return (
    <div className="chat-container">
      <ChatDialogue name={props.name} messages={props.messages} />
      <TextInput
        name={props.name}
        onUpdateConvo={props.onUpdateConvo}
        onKeyPressed={props.onKeyPressed}
      />

      <div className="typing-status">
        {props.typingStatus.isTyping && props.name !== props.typingStatus.name
          ? props.typingStatus.name + ' is typing'
          : ''}
      </div>

      <style jsx>{`
        .chat-container {
          height: 97vh;
        }

        .chat-container:first-child {
          border-right: 1px solid #e0e0e0;
        }

        .typing-status {
          padding: 2px 0 2px 7px;
        }
      `}</style>
    </div>
  );
}
export default ChatContainer;
