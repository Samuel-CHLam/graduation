import {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";

import "../../index.css";
import "./Information.css";

export default function Information () {
  let params = useParams();
  let webName = params.name;

  const [name, setName] = useState([]);
  const [codes, setCodes] = useState([]);
  const [venues, setVenues] = useState([]);
  const [venueTimes, setVenueTimes] = useState([]);
  
  useEffect( () => {
    const fetchInvites = async () => {
      const res = await axios.get(`/invites/name/${webName}`);
      const resCode = await axios.get("/codes");
      const resVenue = await axios.get("/venues");
      const resVenueTimes = await axios.get("/venuetimes");
      const personalInvites = res.data[0];
      if (personalInvites) {
        setName(personalInvites.name);
        const personalCodes = resCode.data.filter(item => personalInvites.codes.includes(item.code)).sort((a,b) => {return (a.code > b.code) ? 1 : ((b.code > a.code) ? -1 : 0);} );;
        console.log(personalCodes)
        setCodes(personalCodes);
        setVenues(resVenue.data);
        setVenueTimes(resVenueTimes.data);
      }
    }
    fetchInvites()
  }, [webName]);

  return (
    <div>
      <div className="u-block">
        <h1> Information about photo sessions</h1>
        <h2 className="u-margin-top">Date: 19th October, 2022 (Wednesday)</h2>
        { (codes.length !== 0) ? (
          <>
            <h2 className="u-margin-top">Personal Invite</h2>
            <p> Name/Group: <b>{name}</b> </p>
            <p> Groups:</p>
            <div className="information-code-container">
              {
                venueTimes.map((item) => {
                  let codeTime = codes.filter(code => {return code.time === item.time});
                  return (
                    <div key={item._id}>
                    { (codeTime.length != 0) ? (
                      <div key={item._id}>
                        <h3>Session: {item.time}</h3>
                        <p> Venue: {item.venue}</p>
                        <ul>
                          {codeTime.map((relCode) => {return <li key={relCode.code}>{relCode.code}. {relCode.description}</li>})}
                        </ul>
                      </div>
                    ) : (<> </>)}
                    </div>
                  )
                })
              }
            </div>
            <p className="u-margin-top"> <b>The above information are yet to be confirmed.</b> If you cannot make the designated slots, 
              please let me know as soon as possible so that I can rearrange your slots. 
              You are more than welcomed to join us in the following generic slots.</p>
            {/* You may look at the draft timetable <a href="https://samuel-chlam.github.io/masterplan-2022/posts/graduation_arrangement/" target="_blank" rel="noreferrer">here</a>. Please 
              provide us feedback on the draft timetable. */}
              </>
        ) : (
          <>
            <p>Please refer to the personal invites for further information. The following generic slots may be available.</p>
          </>
        )}
        
        <ul>
          <li>Time: 8pm</li>
          <li>Venue: Queen's Lawn (Dangoor Plaza), South Kensington Campus, Imperial College London, London, SW7 2AZ.</li>
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