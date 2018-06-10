import { debug } from 'util';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      convoText: '',
      isTyping: false
    };
  }

  updateConvoText(event) {
    this.setState({
      convoText: event.target.value
    });
  }

  handleSend(event) {
    // prevent updating the page's url on submit
    event.preventDefault();
    this.props.onUpdateConvo(this.state.convoText, this.props.name);
    this.setState({
      convoText: ''
    });
  }

  isTyping() {
    this.props.onKeyPressed(this.props.name);
  }

  render() {
    return (
      <form onSubmit={this.handleSend.bind(this)}>
        <input
          type="text"
          value={this.state.convoText}
          placeholder="chat input"
          onChange={this.updateConvoText.bind(this)}
          onKeyPress={this.isTyping.bind(this)}
        />
        <button>send</button>
      </form>
    );
  }
}

export default TextInput;
