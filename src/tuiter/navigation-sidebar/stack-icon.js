import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StackIcon = (
    {
        iconMain = "fa-brands fa-twitter",
        iconSub = "fa-brands fa-twitter"
    }
) => {
    return(
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={iconMain} className={"mx-0"}/>
          <FontAwesomeIcon icon={iconSub} transform="shrink-6" className={"mx-0"} width={"80%"}/>
        </span>
    )
}

export default StackIcon;