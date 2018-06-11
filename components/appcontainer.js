import ChatContainer from './chatcontainer';
import uuid from 'uuid/v4';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          text: 'hi',
          name: 'Rob',
          timeStamp: 'Sun Jun 10 2018 17:04:21 GMT-0700 (PDT)',
          messageId: 'd555601f-6891-4eb1-8583-34133232e369'
        },
        {
          text: 'bye',
          name: 'Rob',
          timeStamp: 'Sun Jun 10 2018 17:04:25 GMT-0700 (PDT)',
          messageId: 'e0196970-dad2-4d0f-b46e-92b4774129c4'
        },
        {
          text: 'tweet',
          name: 'Laura',
          timeStamp: 'Sun Jun 10 2018 17:04:31 GMT-0700 (PDT)',
          messageId: 'b364f447-b146-44e9-90b4-307cd4e35ba2'
        },
        {
          text: 'the rain in spain falls mainly in the plane',
          name: 'Laura',
          timeStamp: 'Sun Jun 10 2018 17:04:43 GMT-0700 (PDT)',
          messageId: 'af9a56bd-6825-4a87-8f04-7aff6667ab6f'
        },
        {
          text: 'how about that?',
          name: 'Laura',
          timeStamp: 'Sun Jun 10 2018 17:04:49 GMT-0700 (PDT)',
          messageId: '510f3bdb-6602-427e-816c-4822e01f7486'
        },
        {
          text: 'what do you think?',
          name: 'Rob',
          timeStamp: 'Sun Jun 10 2018 17:04:54 GMT-0700 (PDT)',
          messageId: 'fcace788-dd8e-416c-b908-1262878fc140'
        }
      ],
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
    // stretch goal: iterator for name in container, add other members to the conversation
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

          li {
            list-style-type: none;
          }
        `}</style>

        <style jsx>{`
          .app-container {
            display: inline-grid;
            grid-template-columns: auto auto;
          }
        `}</style>
      </div>
    );
  }
}
export default AppContainer;
