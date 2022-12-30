import Link, { LinkProps } from "next/link";
import { CSSProperties, FunctionComponent, PropsWithChildren } from "react";

const ExternalLink: FunctionComponent<PropsWithChildren<LinkProps>> = (props) => {
    return (
        <Link target="_blank" rel="noreferrer noopener nofollow" {...props}>{props.children}</Link>
    );
}

export default ExternalLink;
