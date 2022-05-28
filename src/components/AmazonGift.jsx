import React from "react";

const AmazonGift = ({ date, logo, heading, subheading, device, color }) => {
      return (
            <>
                  <div className="container">
                        <div className="header">
                              <div>{date}</div>
                              <div>
                                    <img src={logo} alt="" />
                              </div>
                        </div>
                        <div className="mid">
                              <h2>{heading}</h2>
                              <h2>{subheading}</h2>
                        </div>
                        <div className="bottam">
                              <div>
                                    <p>Desktop {device}</p>
                              </div>
                              <div> → </div>
                        </div>
                  </div>
            </>
      );
};

export default AmazonGift;
