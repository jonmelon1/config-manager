import React from "react";
import WebPageAvailEnv from './WebPageAvailEnv';


function AvailableEnvironments() {

  const availableEnvironments = {
    header: "Available Environments",
    subheader: "List of Environments in Database",
  }

	return (
		<div>
				<div>
          <React.Fragment>
            <WebPageAvailEnv {...availableEnvironments} />
          </React.Fragment>
        </div>
		</div>
    )
}
export default AvailableEnvironments;


