import distanceInWords from 'date-fns/distance_in_words';

function ChatDialogue(props) {
  // add scroll to bottom when new messages are added
  return (
    <div>
      <div>{props.name}</div>
      <ul className="chat-list">
        {props.messages.map(message => (
          <li
            key={message.messageId}
            className={`chat-item ${
              message.name !== props.name ? 'chat-other' : 'chat-self'
            }
        `}
          >
            <span className="chat-name">
              {message.name !== props.name ? message.name : ''}
            </span>&nbsp;
            <span className="chat-timestamp" title={message.timeStamp}>
              {distanceInWords(new Date(), message.timeStamp, {
                includeSeconds: true
              })}
            </span>
            <br />
            <div className="chat-text">{message.text}</div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .chat-list {
          display: inline-flex;
          flex-direction: column;
        }

        .chat-other {
          align-self: flex-start;
        }

        .chat-self {
          align-self: flex-end;
        }

        .chat-name,
        .chat-timestamp {
          opacity: 0.7;
          font-size: 10px;
        }

        .chat-text {
          border-radius: 3px;
          padding: 5px;
        }

        .chat-other .chat-text {
          background-color: #1e88e5;
          color: #fafafa;
        }

        .chat-self .chat-text {
          background-color: #e0e0e0;
        }
      `}</style>
    </div>
  );
}
export default ChatDialogue;
