import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abcJob1", title: "developer", salary: "500 " },
      { id: "abcJob2", title: "tester", salary: "300 " },
      { id: "abcJob3", title: "Pm", salary: "700 " },
    ],
  };

  addNewJob = (job) => {
    console.log("check job", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  render() {
    console.log("render: ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

export default MyComponent;
