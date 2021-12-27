import * as React from "react";

import { Components } from "@mdx-js/react";
import { GeneratedLink } from "src/common/GeneratedLink";

const components: Components = {
    a: props => {
        return (
            // @ts-ignore
            <GeneratedLink href={props.href} style {...props} />
        )
    }
};

export default components;
