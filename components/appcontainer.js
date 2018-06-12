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
      <div className="app-container">
        <ChatContainer
          name="Laura 👩‍💻"
          onUpdateConvo={this.updateConvo.bind(this)}
          messages={this.state.messages}
          onKeyPressed={this.typingStart.bind(this)}
          typingStatus={this.state.typingStatus}
        />
        <ChatContainer
          name="Rob 👨‍💻"
          onUpdateConvo={this.updateConvo.bind(this)}
          messages={this.state.messages}
          onKeyPressed={this.typingStart.bind(this)}
          typingStatus={this.state.typingStatus}
        />

        <style jsx global>{`
          body {
            font-family: 'Open Sans', arial, sans-serif;
            font-size: 12px;
            color: #212121;
          }

          ul {
            padding: 0 10px;
            width: 100%;
          }

          li {
            list-style-type: none;
          }
        `}</style>

        <style jsx>{`
          .app-container {
            display: inline-grid;
            grid-template-columns: auto auto;
            border: 1px solid #e0e0e0;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}
export default AppContainer;
