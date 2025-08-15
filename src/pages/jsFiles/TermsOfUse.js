import React from "react";
import background from "../../assets/Background_Intro.png";

const TermsOfUse = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          padding: "2rem",
          fontFamily: "Arial, sans-serif",
          color: "#C0C4CE",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>
          🚀 Terms & Conditions – Battle Space
        </h1>
        <p>
          Welcome to <strong>Battle Space</strong>, our fast-paced 2D spacecraft
          battle game. By downloading, installing, or playing the game, you
          agree to the following terms and conditions.
        </p>

        <h2>1. Gameplay Rules</h2>
        <ul>
          <li>
            Engage in fair play — no cheating, exploiting, or using third-party
            hacks.
          </li>
          <li>Respect other pilots in multiplayer space battles.</li>
          <li>
            Game progress may reset during updates, patches, or maintenance.
          </li>
        </ul>

        <h2>2. Ownership & Copyright</h2>
        <p>
          All game assets, code, sound effects, and designs are the property of
          the Battle Space development team. You may not redistribute, modify,
          or resell the game without explicit permission.
        </p>

        <h2>3. Data Collection</h2>
        <p>
          We may collect basic gameplay analytics to improve ship balance,
          enhance levels, and deliver a better experience. No personal
          information will be sold or shared without your consent.
        </p>

        <h2>4. Liability</h2>
        <p>
          Battle Space is provided “as is” without any guarantees. We are not
          responsible for any loss of progress, device issues, or intergalactic
          mishaps during play.
        </p>

        <h2>5. Changes to Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Continuing to
          play after changes means you accept the updated terms.
        </p>

        <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
          Last updated: August 15, 2025
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
