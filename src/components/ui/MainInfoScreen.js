import React from "react";

export const MainInfoScreen = () => {
  return (
    <>
      <p id="about"></p>
      <main className="main-container">
        <div className="title-center">
          <h2 tabIndex="4">ABOUT ME</h2>
        </div>
        <section className="about-section">
          <article className="about-item">
            <img
              className="avatar"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5f0f7.appspot.com/o/me.jpg?alt=media&token=8c75db82-fb14-4a2a-9c55-430bbf15e71c"
              alt="Jorge Alfaro"
              title="Jorge Alfaro"
              loading="lazy"
            />
            <p className="questions" tabIndex="5">
              Got any questions?{" "}
              <a
                href="mailto:jorgm.alfarc@gmail.com"
                title="Send me an email"
                tabIndex="6"
              >
                Contact me.
              </a>
            </p>
          </article>
          <article className="about-item">
            <p className="about_me" tabIndex="7">
              <b>Hi</b>, my name is Jorge 👋 I am from México, I have over 2
              years of front-end experience and passion for responsive website
              design.{" "}
            </p>
            <p className="about_me" tabIndex="8">
              I am always experimenting, always learning, and never bored.
              Interested in the backend and perpetually working on improving my
              chops.
            </p>
          </article>
        </section>
        <br />
      </main>
    </>
  );
};
