import React from "react";
import WebPageConfigurations from './WebPageConfigurations';


function Configurations() {

  const configurations = {
    header: "Manage Configurations",
    subheader: "edit, add, delete, view timespan",
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


