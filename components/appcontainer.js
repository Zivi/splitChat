import ChatContainer from "./chatcontainer";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }
  }

  updateConvo(text, name) {
    const message = {
      text,
      name
    };
    this.setState({
      messages: this.state.messages.concat(message)
    })
    // TODO: add timestamp with datefnx
  }

  render() {
    return (
      <div>
        <ChatContainer name="Laura" onUpdateConvo={this.updateConvo.bind(this)} messages={this.state.messages}/>
        <ChatContainer name="Rob" onUpdateConvo={this.updateConvo.bind(this)} messages={this.state.messages} />
      </div>
    )
  }
}
export default AppContainer;