import React from "react";
import { RestClient } from "../RestClient"
import WebPageAvailEnv from './WebPageAvailEnv';




function AvailableEnvironments() {

	let [environments, setAvailableEnvironments] = React.useState<Array<any>>([])

	React.useEffect(() => {
		RestClient.getEnvironments()
		          .then(environments => setAvailableEnvironments(environments))
	}, [])


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


