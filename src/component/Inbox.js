import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import { connect } from "react-redux";
const Inbox = ({ inbox }) => {
  const [inboxData, setInboxData] = useState([]);
  const [contentData, setContentData] = useState([]);
  useEffect(() => {
    setInboxData([...inbox]);
  }, [inbox]);

  return (
    <div>
      <SideNav />

      <div className='main'>
        <div className='left'>
          <h5>Inbox</h5>
          {inboxData.map((value) => (
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
  inbox: state.inbox.inboxData,
});

export default connect(mapStateToProps)(Inbox);
