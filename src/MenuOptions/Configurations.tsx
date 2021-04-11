import React from "react";
import WebPageConfigurations from './WebPageConfigurations';


function Configurations() {

  const configurations = {
    header: "Environments and Configurations",
    subheader: "",
  }

	return (
		<div>
				<div>
          <React.Fragment>
            <WebPageConfigurations {...configurations} />
          </React.Fragment>
        </div>
		</div>
    )
}
export default Configurations;


