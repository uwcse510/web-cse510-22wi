import * as React from "react";

import { MDXProviderComponents } from "@mdx-js/react";
import { GeneratedLink } from "src/common/GeneratedLink";

export const MDXComponents: MDXProviderComponents = {
    a: props => {
        return (
            // @ts-ignore
            <GeneratedLink href={props.href} style {...props} />
        )
    }
};

export default MDXComponents;
