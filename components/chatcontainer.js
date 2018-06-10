import TextInput from "./textinput";
import ChatDialogue from "./chatdialogue";

function ChatContainer(props) {
  return (
    <div>
      <ChatDialogue name={props.name} messages={props.messages}/>
      <TextInput name={props.name} onUpdateConvo={props.onUpdateConvo}/>
    </div>
  )
}
export default ChatContainer;