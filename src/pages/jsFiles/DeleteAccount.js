import React from "react";
import background from "../../assets/Background_Intro.png";

const DeleteAccountPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        color: "#C0C4CE",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "10px",
          }}
        >
          Delete Your Battle Space Account & Data
        </h1>

        <p style={{ fontSize: "1rem" }}>
          If you wish to permanently delete your <strong>Battle Space</strong>{" "}
          account and associated data, please follow the instructions below.
        </p>

        <h2
          style={{
            marginTop: "20px",
            fontSize: "1.4rem",
          }}
        >
          Steps to Request Deletion
        </h2>
        <ol style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>
            Send an email to{" "}
            <a href="mailto:support@battlespace.com" style={{color: 'lightblue'}}>rugvedapraj1@gmail.com</a>{" "}
            with the subject line <strong>Delete My Account</strong>.
          </li>
          <li>
            Include the email address linked to your account and your in-game
            username.
          </li>
          <li>
            We will confirm your request and delete your account within 7
            business days.
          </li>
        </ol>

        <h2
          style={{
            marginTop: "20px",
            fontSize: "1.4rem",
          }}
        >
          What Data Will Be Deleted
        </h2>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Your profile information (name, username, email)</li>
          <li>Saved game progress stored on our servers</li>
          <li>Linked device identifiers</li>
        </ul>

        <h2
          style={{
            marginTop: "20px",
            fontSize: "1.4rem",
          }}
        >
          Additional Notes
        </h2>
        <p style={{ fontSize: "1rem" }}>
          Once deleted, your account and game progress cannot be restored. If
          you reinstall the app, you will need to create a new account to play.
        </p>
      </div>
    </div>
  );
};

export default DeleteAccountPage;
