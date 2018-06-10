import { debug } from "util";

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      convoText: ''
    }
  }

  updateConvoText(event) {
    // if key is 'enter', call updateConvo
    this.setState({
      convoText: event.target.value
    })
  }

  handleClick() {
    this.props.onUpdateConvo(this.state.convoText, this.props.name);
    // set the input text to blank
  }

  render() {
    return (
      <div>
          <input type="text" placeholder="chat input" onKeyUp={this.updateConvoText.bind(this)}/>
          <button onClick={this.handleClick.bind(this)}>send</button>
      </div>
    )
  }
}

export default TextInput;