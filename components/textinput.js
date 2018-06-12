class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      convoText: '',
      isTyping: false
    };
  }

  updateConvoText(event) {
    this.setState({ convoText: event.target.value });
  }

  handleSend(event) {
    // prevent updating the page's url on submit
    event.preventDefault();

    if (!this.state.convoText) return;

    this.props.onUpdateConvo(this.state.convoText, this.props.name);
    this.setState({
      convoText: ''
    });
  }

  isTyping(event) {
    if (event.key === 'Enter') {
      this.handleSend(event);
      return;
    }
    this.props.onKeyPressed(this.props.name);
  }

  render() {
    return (
      <form className="input-form" onSubmit={this.handleSend.bind(this)}>
        <textarea
          className="chat-input"
          value={this.state.convoText}
          placeholder="message text"
          onChange={this.updateConvoText.bind(this)}
          onKeyPress={this.isTyping.bind(this)}
        />
        <button className="chat-send-btn" title="send">
          <div className="chat-send-btn-img" />
        </button>

        <style jsx>{`
          .input-form {
            height: 8vh;
            width: 100%;
            position: relative;
          }

          .chat-input {
            padding-left: 5px;
            margin-left: 5px;
            width: calc(100% - 44px);
            height: 8vh;
            border: 1px solid #e0e0e0;
            resize: none;
          }

          .chat-send-btn {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 44px;
            height: 8vh;
            background-color: transparent;
            border: none;
          }

          .chat-send-btn-img {
            background-image: url('../static/images/baseline-send-24px.svg');
            background-position: center;
            width: 20px;
            height: 20px;
            margin-left: 8px;
          }
        `}</style>
      </form>
    );
  }
}

export default TextInput;
