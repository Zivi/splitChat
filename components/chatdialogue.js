function ChatDialogue(props) {
  return (
    <div>
      <div>
        <div>{props.name}</div>
        <ul>
          {props.messages.map(message => 
          <li>{message.name}&nbsp;{message.text}</li>)}
        </ul>
      </div>
    </div>
  );
}
export default ChatDialogue;
