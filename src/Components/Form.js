import React from "react";
import _emailJs from "emailjs-com";
import styles from "./css_files/contact.module.css";

const userId = "user_U5jGLkv3g6gljGYHt5us6";
const serviceId = "infosteemitvenezuela";
const templateId = "template_mrkvjq9";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", email: "", sent: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.messageSentSuccess = this.messageSentSuccess.bind(this);
  }

  render() {
    return (
      <form
        className="test-mailing"
        onSubmit={this.handleSubmit}
        style={{ textAlign: "center", height: "auto" }}
      >
        <div>
          <input
            id="test-text"
            name="test-text"
            onChange={this.handleChangeText}
            placeholder="Name here"
            required
            value={this.state.name}
            className={styles.inputSingleLine}
          />
          <input
            id="test-email"
            name="test-email"
            onChange={this.handleChangeEmail}
            placeholder="Email here"
            type="email"
            required
            value={this.state.email}
            className={styles.inputSingleLine}
          />
          <textarea
            id="test-mailing"
            name="test-mailing"
            onChange={this.handleChange}
            placeholder="Send me your feedback here"
            required
            value={this.state.feedback}
            className={styles.inputMultiLine}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className={`${styles.btn} ${styles.marginRight}`}
          />
          <input
            type="button"
            value="cancel"
            className={styles.btn}
            onClick={this.resetForm}
          />
        </div>
        {this.state.sent && (
          <div className={`${styles.readingText} ${styles.divMessage}`}>
            Message Sent. I will contact you as soon as I can. Thank you!
          </div>
        )}
      </form>
    );
  }
  handleChangeText(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChange(event) {
    this.setState({ feedback: event.target.value });
  }
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      feedback: "",
      sent: false,
    });
  };
  messageSentSuccess() {
    this.setState({ sent: true });
    setTimeout(this.resetForm, 4000);
  }

  handleSubmit(event) {
    this.sendFeedback({
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email,
    });
    event.preventDefault();
  }

  sendFeedback(variables) {
    _emailJs.init(userId);
    _emailJs
      .send(serviceId, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        this.messageSentSuccess();
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
}
