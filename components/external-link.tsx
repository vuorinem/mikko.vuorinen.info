import Link, { LinkProps } from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";
import { FaExternalLinkAlt } from 'react-icons/fa';

const ExternalLink: FunctionComponent<PropsWithChildren<LinkProps>> = (props) => {
    return (
        <Link target="_blank" rel="noreferrer noopener nofollow" {...props}>{props.children} <FaExternalLinkAlt size="0.6rem" /></Link>
    );
}

export default ExternalLink;
