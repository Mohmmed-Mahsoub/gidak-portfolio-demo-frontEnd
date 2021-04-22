import React from "react";
const ContactWays = ({ component, themeStyle }) => {
  const { social, map } = component;
  const { ui, text } = themeStyle;
  /*   console.log(ui, text);
   */ return (
    <div className="contact-ways">
      <div className="row justify-content-md-center">
        {social.map((contactWay, index) => {
          return (
            <div
              key={index}
              style={{ paddingRight: "10px", paddingLeft: "10px" }}
              className="col-6 col-sm-4 col-md-4"
            >
              <a
                style={{
                  color: `${text}`,
                  backgroundColor: `${ui}`,
                }}
                className="btn"
                rel="noreferrer"
                target="_blank"
                href={contactWay.link}
              >
                <span>{contactWay.name}</span>
                <i className={contactWay.iconFont}></i>
              </a>
            </div>
          );
        })}
        <div
          style={{ paddingRight: "10px", paddingLeft: "10px" }}
          className="col"
        >
          <div className="map position-relative">
            <iframe
              title="غيداق"
              src={map[0].iframeSrc}
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWays;
