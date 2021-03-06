import React from "react";

// By extending the React.Component class, ContacatForm inherits functionality from it
class ContactForm extends React.Component {
  
// Setting the initial state of the ContactForm component
constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  };

  submitForm(ev) {
    console.log('Form submitted!')
    const form = ev.target
    console.log(form)
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (

    <div className="contactme">
      <br></br>
        <h2 className="contactheading">Contact Me</h2>

        <form
        className="formclass"
        onSubmit={this.submitForm}
        action="https://formspree.io/xqkdnlga"
        method="POST"
      >

        <label className="name"> Name </label>
        <input type="text" 
        className="nameformfield" 
        name="name"
        placeholder="Your name"
        style={{width: '35%'}}
            // value={this.state.fname}
            // onChange={e => this.setState({ fname: e.target.value })}
        />

        {/* &emsp; */}
        <br></br>

        <label className="email">Email </label>
        <input type="email"
        className="emailformfield" 
        name="_replyto" 
        placeholder="Your email address"
        style={{width: '35%'}}
            // value={this.state.email}
            // onChange={e => this.setState({ email: e.target.value })}
        />

        <br></br>
        <br></br>

        <label className="message">Message </label>
        <br></br>
        <textarea
        className="messageformfield" 
        name="message"
        placeholder="Your message"
        style={{width: '90%', height: '120px'}}
            // onChange={e => this.setState({ message: e.target.value })}
            // value={this.state.message}
        ></textarea>

        <br></br>

        <input type="submit" 
        // onClick={e => this.handleFormSubmit(e)} 
        className="submitbutton" 
        value="Send"
        label="send"

        />

        <br></br>

        </form>
    </div>

        );
    };
};

export default ContactForm