import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SideNav = ({ inbox, spam }) => {
  const [inboxUnread, setInboxUnread] = useState(0);
  const [spamUnread, setSpamUnread] = useState(0);

  useEffect(() => {
    if (inbox.length > 0) {
      let i = 0;
      inbox.map((value) => (value.unread === true ? ++i : i));

      setInboxUnread(i);
    }
  }, [inbox]);

  useEffect(() => {
    if (spam.length > 0) {
      let i = 0;
      spam.map((value) => (value.unread === true ? ++i : i));

      setSpamUnread(i);
    }
  }, [spam]);

  return (
    <div class='sidenav'>
      <Link
        to='./'
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>Inbox</div>
        <div>{inboxUnread}</div>
      </Link>
      <Link
        to='./spam'
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>Spam</div>
        <div>{spamUnread}</div>
      </Link>
      <Link href='#'>Deleted Items</Link>
      <Link href='#'>Custom Folder</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  inbox: state.inbox.inboxData,
  spam: state.spam.spamData,
});

export default connect(mapStateToProps)(SideNav);
