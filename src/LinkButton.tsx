import { IconType } from 'react-icons';
import React from "react";

interface LinkButtonProps {
    url: string;
    name: string;
    icon: IconType;
}

const LinkButton: React.FC<LinkButtonProps> = ({ url, name, icon: Icon }) => {
    return (
        <a
            href={url}
            className={`link-button`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon /> {name}
        </a>
    );
};

export default LinkButton;
