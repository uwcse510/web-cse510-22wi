import * as React from "react";

import { MDXProviderComponents } from "@mdx-js/react";

import { anchorText } from "src/common/GeneratedAnchor";
import { GeneratedLink } from "src/common/GeneratedLink";

export const MDXComponents: MDXProviderComponents = {
    a: props => {
        return (
            // @ts-ignore
            <GeneratedLink href={props.href} style {...props} />
        )
    },
    h2: props => {
        return (
            <h2 id={anchorText(props.children)}>{props.children}</h2>
        )
    }
};

export default MDXComponents;
