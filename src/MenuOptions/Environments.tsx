import React from "react";
import { RestClient } from "../RestClient"
import WebPageEnvironments from './WebPageEnvironments';




function AvailableEnvironments() {

	let [environments, setAvailableEnvironments] = React.useState<Array<any>>([])

	React.useEffect(() => {
		RestClient.getEnvironments()
		          .then(environments => setAvailableEnvironments(environments))
	}, [])


  const availableEnvironments = {
    header: " Manage Environments",
    subheader: "Edit, add",
  }

	return (
		<div>
				<div>
          <React.Fragment>
            <WebPageEnvironments {...availableEnvironments} />
          </React.Fragment>
        </div>
		</div>
    )
}
export default AvailableEnvironments;

