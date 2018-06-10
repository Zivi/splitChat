import TextInput from './textinput';
import ChatDialogue from './chatdialogue';

function ChatContainer(props) {
  return (
    <div>
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
    </div>
  );
}
export default ChatContainer;
