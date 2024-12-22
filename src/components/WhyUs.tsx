import React from "react";

function WhyUs() {
  return (
    <div className="flex flex-row">
      <div className="felx flex-col">
        <h2>Why Should People Choose Fitnesxia Services</h2>
        <div>
          icon <h3>Personal Training</h3>
          <p>
            our personal trainers can help you create a personalized fintness
            plan and track your progress.
          </p>
        </div>
        <div>
          icon <h3>Expert Trainer</h3>
          <p>
            Our gym is proud to offer a team of highly skilled and certified
            trainer help acheive your health & fitness goals
          </p>
        </div>
        <div>
          icon <h3>Flexible Time</h3>
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
