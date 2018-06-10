import ChatContainer from './chatcontainer';
import uuid from 'uuid/v4';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      typingStatus: {
        name: null,
        isTyping: false
      }
    };
  }

  updateConvo(text, name) {
    const messageId = uuid();
    const message = {
      text,
      name,
      timeStamp: new Date(),
      messageId
    };
    this.setState({
      messages: this.state.messages.concat(message)
    });
  }

  typingStart(name) {
    const typingStatus = {
      name,
      isTyping: true
    };

    if (typeof this.timeoutNum === 'number') {
      window.clearTimeout(this.timeoutNum);
    }

    this.setState({ typingStatus });
    this.timeoutNum = window.setTimeout(this.typingStop.bind(this), 2000);
  }

  typingStop() {
    this.setState({ typingStatus: { isTyping: false } });
  }

  render() {
    return (
      <div>
        <ChatContainer
          name="Laura"
          onUpdateConvo={this.updateConvo.bind(this)}
          messages={this.state.messages}
          onKeyPressed={this.typingStart.bind(this)}
          typingStatus={this.state.typingStatus}
        />
        <ChatContainer
          name="Rob"
          onUpdateConvo={this.updateConvo.bind(this)}
          messages={this.state.messages}
          onKeyPressed={this.typingStart.bind(this)}
          typingStatus={this.state.typingStatus}
        />
      </div>
    );
  }
}
export default AppContainer;
