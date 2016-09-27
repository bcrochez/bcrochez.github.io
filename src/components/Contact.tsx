import * as React from "react";
import { Link } from "react-router";

export interface ContactProps { }

export interface ContactState { }

export class Contact extends React.Component<ContactProps, ContactState> {

  render() {
    return (
      <div className="contact">
        <h2>Contact</h2>
        <p>
            <a href="mailto:bastien.crochez@gmail.com">Send me a mail</a>
        </p>
        <p>
            <a href="https://www.linkedin.com/in/bastien-crochez-6a1b56109">My Linkedin page</a>
        </p>
        <p>
            <a href="https://github.com/bcrochez">My Github page</a>
        </p>
      </div>
    );
  }
}