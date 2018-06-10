import distanceInWords from 'date-fns/distance_in_words';

function ChatDialogue(props) {
  // add scroll to bottom when new messages are added
  return (
    <div>
      <div>
        <div>{props.name}</div>
        <ul>
          {props.messages.map(message => (
            <li key={message.messageId}>
              <span title={message.timeStamp}>
                {distanceInWords(new Date(), message.timeStamp, {
                  includeSeconds: true
                })}
              </span>&nbsp;
              <span>
                {message.name !== props.name ? message.name : ''}
              </span>&nbsp;
              <span>{message.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ChatDialogue;
