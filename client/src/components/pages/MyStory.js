import "../../index.css";
import TopBanner from "../modules/TopBanner.js"
import "./MyStory.css";
import myStoryBackground from "../../img/myStoryBanner.png";

export default function MyStory() {
  return (
    <div className="App-container">
    <TopBanner 
        background={myStoryBackground}
        title={<>MY <span className="mystory-highlight"> STORY </span></>}
        content="Explore my exploration of mathematics and 
        how my belief in God shapes my life."
        des={(<> Taken in 2020 right before I return to UK at the
        <i> "Instagram Pier" </i> in Hong Kong. Credit to Vincent Chung. </>)}
      />
    <div className="u-block">
      <p> I was born in 2002. Some psychologists claimed that I had autism spectrum disorder 
        (ASD), even though I have no clue what it was. ASD offers me a different way of thinking, 
        which is beneficial for my studies but creates numerous challenges in socialising with 
        people. I was fortunate that a Christian kindergarten had offered me opportunities to 
        receive speech therapy, which helped me overcome a few obstacles. But even so, it wasn't 
        until the start of secondary school that I got into the mix.
      </p>
      <p> I was interested in math when I was young, but I wouldn't be in love with it if my 
        friends had not challenged me with "advanced" math questions. I was aware that I should 
        be more humbled and learn more about maths. Since then, we have studied more topics in 
        mathematics (mainly Calculus). I must therefore thank them for the initial sparks of my 
        journey in maths. 
      </p>
      <p> My mathematics teachers then invited me to participate in some enrichment programs 
        in math and physics and take A-Level exams. I am grateful that my teachers offered me 
        additional lessons to support my preparation for the exams and competitions. I am 
        honoured to be offered a place at Imperial College London, which I joined in 2018 
        when I was 16.
      </p>
      <p> My university life has been rough, as one could imagine. I got lost during my studies, 
        and I had to pay extra effort into getting along with new friends. To make things even 
        worse, I have made serious mistakes that nearly ruined my friendships and reputation. 
        I am grateful that my tutors, families and friends led my way by providing inspiration 
        and being with me when I am frustrated with my failure. They have reminded me that I 
        should humble myself and seek wisdom from God. After four years of studying at Imperial, 
        I grew in various aspects of life.
      </p>
      <h2> What's the point of me telling all these stuff to you? </h2>
      <p> I would like to thank all my coaches and partners who inspired and supported me throughout 
        my journey. More importantly, I would like to introduce you to the God I trust. I believe 
        that the support from my coaches/partners are blessing from God, and nothing would be 
        possible without Him. I hope my story might inspire you to explore the God I believe in. 
      </p>
      <p> My story doesn't end here, apparently. I am still battling with not just maths but also my 
        arrogance and laziness. I am excited to see where God will lead me to.
      </p>
    </div>
    </div>
  );
}
