import React from 'react'
import "./CompleStory.css";
import Lottie from 'react-lottie';
import cop from "../Lottie/policecar.json";
import police from "../Lottie/policeman.json";
import bagmoney from "../Lottie/bagmoney.json";
import badge from "../Lottie/badge.json";
// import linearCode from "../Assets/"
import thief from "../Assets/chasingthief.png";
import LinearSearch from './LinearSearch';


function CompleStory() {
  return (
    <div className="linear__Search">
    <div className="linear__header">
       <h1>
         <span className="black"> Scratch the</span>
         <span className="saffron">Lie <span className="black1">find the</span></span>
         <div className="cop">
           <Lottie options={{ animationData:badge,}} />
         </div>
         <span className="orange">Thief</span>
       </h1>
    </div>
    <div className="linear__story">
         <div className="lineary_storyone">
         <div className="linear__start">
            <span className="welcome"> Hello chief,</span>
            <p> welcome to this enthralling <span className="journey">Journey</span> filled with action, <span className="adven">Adventure</span> and excitement.
               You have been appointed as the new police station chief of an <span className="town">Infamous Town </span> since it is filled with thieves committing 
               crimes now and then. All you have to do is show no mercy to these ville thieves who are <span className="terror">Terrorizing</span> the town.</p>
         </div>
         <div className="linear__police">
           <Lottie options={{ animationData:police,}} />
         </div>
         </div>
         
            
         <div className="linear_storytwo">
           <div className="linear__runthief">
           <img className="thiefRun" src={thief} alt="" />
         
         </div>
           <div className="linear__mid">
              <p>You are welcomed the very 
                <span className="day"> first day</span>
                 at office with some serious task on shoulders.
                  A <span className="robbery"> Robbery</span> has been reported nearby and you rush 
                  to the site immediately.
                  On reaching the crime scene you are informed that
                   the thief has already
                 eloped and taken away with him significant amount of <span className="cash"> cash.</span>
                  After carefully scrutinising the scene and collecting the cues,
                   you go on to trace the thief and catch him down.
                    On contacting the station for <span className="support"> backup support,</span> 
                    you are led down as only you are available at the instant.
</p>
           </div>
         </div>
         <div className="linear_storythree">
           <div  className="linear__run">
             <p> <span className="track"> Tracking</span> him, you reach the train station 
             and see him getting onto the train and <span className="rush"> rush</span> to reach the 
             train in time. The real <span className="challenge"> Challenge</span> to get hold of him begins here...</p>
           </div>
           <div className="linear__car">
           <Lottie options={{ animationData:cop,}} />
          {/* // <Lottie options={{ animationData: "https://assets4.lottiefiles.com/packages/lf20_fzxgbei2.json",}} /> */}
         </div>
         </div>
         
    </div>
    <div className="linear__search">
      <h1 className="headCatch" >Let's Catch The Thief</h1>
      <div className="problemStatement">
        <h1>Problem:</h1>
        <p>the train has 10 compartments, and there is a condition that in each compartment, there is only one passenger. The thief hid in Tran's compartment. You i.e. chief knew the weight of every passenger and thief. 
Find out the compartment’s number in which the thief is found.</p>
      </div>
      <LinearSearch />
    </div>
    <div className="linear__blog">
      <h2>Linear Search</h2>
      <p>A Linear Search is the most basic type of searching algorithm. 
      A Linear Search sequentially moves through your collection (or data
       structure) looking for a matching value. In other words, it looks down a list, 
       one item at a time, without jumping.</p>
       <video className="home__logo" autoPlay={true} loop={true} muted={true} playsInline={true}>
          <source src="https://github.com/rohitsigar/ILLITRATE/blob/master/linearvids.mp4?raw=true" type="video/webm" />
        </video>
       <h4> Approach </h4>
       <ul>
         <li>
           <p className="linear_step">Sequentially move through the array from the leftmost side and start comparing the value
            you want to search (let x) with each element of array.</p>
         </li>
         <li>
           <p className="linear_step">
           If x matches with an element then return the index.
           </p>
         </li>
         <li>
           <p className="linear_step">
           If x does not match with any of the elements then return -1.
           </p>
         </li>
       </ul>
       <img className="linear__code" src="https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/linearCode%20Snippet.PNG?raw=true"alt="/"></img>
       <p classname="linear_ques">
       If there is a n sized array & you have to find element-x from the array, 
       then what is the average number of indexes you have to traverse? 
       <span className="linear_think">Think about it?</span>
       </p>
       <h4> Time Complexity </h4>
       <p classname="linear_timeCom">
       The time required to search an element using a linear search algorithm depends on the size of the list. Within the best-case situation, the component is present at the starting of
        the list and within the worst-case, it is display at the end. <br></br><br></br>We can conclude that "Time Complexity" for linear Search is
        <br></br><h3>Best: O(1) </h3><h3> Average: O(n) </h3><h3> Worst: O(n)</h3>
       </p>
       <h6 className="linear__con">Overall Linear Search is an important concept to understand when it comes to algorithms.</h6>
    </div>
    </div>
  )
}
 

export default CompleStory;
