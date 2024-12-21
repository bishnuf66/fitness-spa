import React from "react";

function WhyUs() {
  return (
    <div className="flex flex-row">
      <div className="felx flex-col">
        <h1>Why Should People Choose Fitnesxia Services</h1>
        <div>
          icon <h2>Personal Training</h2>
          <p>
            our personal trainers can help you create a personalized fintness
            plan and track your progress.
          </p>
        </div>
        <div>
          icon <h2>Expert Trainer</h2>
          <p>
            Our gym is proud to offer a team of highly skilled and certified
            trainer help acheive your health & fitness goals
          </p>
        </div>
        <div>
          icon <h2>Flexible Time</h2>
          <p>
            There are many fitness classes that are offered during off-peak
            hour, such as early morning or late evening.
          </p>
        </div>
        <button className="primary-btn">Join Today</button>
      </div>
      <div>image here</div>
    </div>
  );
}

export default WhyUs;
