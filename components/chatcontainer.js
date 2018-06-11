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
      <div />
      {props.typingStatus.isTyping && props.name !== props.typingStatus.name
        ? props.typingStatus.name + ' is typing'
        : ''}

      <style jsx>{`
        .chat-container {
          border: 1px solid black;
          height: 95vh;
        }
      `}</style>
    </div>
  );
}
export default ChatContainer;
