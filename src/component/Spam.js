import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import { connect } from "react-redux";

const Spam = ({ spam }) => {
  const [spamData, setSpamData] = useState([]);
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    setSpamData([...spam]);
  }, [spam]);

  return (
    <div>
      <SideNav />
      <div className='main'>
        <div className='left'>
          <h5>Spam</h5>
          {spamData.map((value) => (
            <div
              key={value.mId}
              className='showData'
              onClick={() => setContentData(value)}
            >
              <h4>{value.subject}</h4>
              <p>{value.content.substr(1, 30) + "..."}</p>
            </div>
          ))}
        </div>
        <div className='right'>
          <h5></h5>
          <div className='showContent'>
            <h3>{contentData.subject}</h3>
            <p>{contentData.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  spam: state.spam.spamData,
});

export default connect(mapStateToProps)(Spam);
