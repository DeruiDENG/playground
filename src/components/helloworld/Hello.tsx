import * as React from "react";
import './hello.scss';

export interface HelloProps {
    name: string
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div>
                <h1 className="hello-header">Hello {this.props.name}!</h1>
                <h1 className="hello-header">Hello {this.props.name}!</h1>
            </div>
        );
    }
}