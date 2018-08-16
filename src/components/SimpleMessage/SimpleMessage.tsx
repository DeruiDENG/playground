import * as React from "react";

export interface SimpleMessageProps {
    title: string;
    description: string;
}

export const SimpleMessage = (props: SimpleMessageProps) => {
    return (
        <div>
            <header>{props.title}</header>
            <main>{props.description}</main>
        </div>
    )
};
