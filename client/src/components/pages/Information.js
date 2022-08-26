import {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";

import "../../index.css";
import "./Information.css";

export default function Information () {
  let params = useParams();
  let name = params.name;

  const [invites, setInvites] = useState([]);
  useEffect( () => {
    // const name = useLocation().pathname.split("/")[2];
    const fetchInvites = async () => {
      const res = await axios.get(`/invites/name/${name}`);
      setInvites(res.data[0]);
    }
    fetchInvites();
  }, [name]);

  return (
    <div>
      <div className="u-block">
        <h1> Information about photo sessions</h1>
        <h2 className="u-margin-top">Date: 19th October, 2022 (Wednesday)</h2>

        { invites ? (
          <>
            <h2 className="u-margin-top">Personal Invite</h2>
            <p> Name/Group: <b>{invites.name}</b> </p>
            <p> <b>The above information are yet to be confirmed.</b> If you cannot make the designated slots, 
              please let me know as soon as possible so that I can rearrange your slots. 
              You are more than welcomed to join us in the following generic slots.</p>
            {/* You may look at the draft timetable <a href="https://samuel-chlam.github.io/masterplan-2022/posts/graduation_arrangement/" target="_blank" rel="noreferrer">here</a>. Please 
              provide us feedback on the draft timetable. */}
              </>
        ) : (
          <>
            <p>Please refer to the personal invites for further information. The following generic slots may be available.</p>
          </>
        )
        }
        <ul>
          <li>Time: 20.00</li>
          <li>Venue: Queen's Lawn (Dangoor Plaza), South Kensington Campus, Imperial College London.</li>
        </ul>
        <h2>General advice</h2>
        <ul>
          <li>Recommended dress code: formal / smart casual. </li>
          <li>Gifts (including flowers) are appreciated but optional - feel free to just come! Flowers and graduation dolls are provided.</li>
          <li>We are still confirming the timetable. I am relatively free in the morning, so if you can come in the morning, please let me know!</li>
        </ul>
      </div>
    </div>
  );
}