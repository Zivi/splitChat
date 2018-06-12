import distanceInWords from 'date-fns/distance_in_words';

class ChatDialogue extends React.Component {
  componentDidUpdate(prevProps) {
    // If there's a new message, scroll to the bottom
    if (prevProps.messages.length < this.props.messages.length) {
      this.container.scrollTop = this.container.scrollHeight;
    }
  }

  render() {
    const props = this.props;

    return (
      <div>
        <div className="chat-user-name">{props.name}</div>
        <ul className="chat-list" ref={ref => (this.container = ref)}>
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
                {distanceInWords(new Date(), message.timeStamp)} ago
              </span>
              <br />
              <div className="chat-text">{message.text}</div>
              <div className="chat-tail" />
            </li>
          ))}
        </ul>
        <style jsx>{`
          .chat-user-name {
            padding-left: 5px;
            border-bottom: 1px solid #e0e0e0;
          }

          .chat-list {
            display: inline-flex;
            flex-direction: column;
            overflow-y: scroll;
            height: 80vh;
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

          .chat-tail {
            width: 0;
            height: 0;
          }

          .chat-other .chat-tail {
            border-top: 7px solid #1e88e5;
            border-right: 10px solid transparent;
            margin-left: 5px;
          }

          .chat-self .chat-tail {
            border-top: 7px solid #e0e0e0;
            border-left: 10px solid transparent;
            float: right;
            margin-right: 5px;
          }
        `}</style>
      </div>
    );
  }
}
export default ChatDialogue;
