import React from "react";

export default function Layput(props: { children: React.ReactElement, ficha: React.ReactElement, playground: React.ReactElement }) {
    return (
        <div>
            <div>{ props.children }</div>
            <div>{ props.ficha }</div>
            <div>{ props.playground }</div>
        </div>
    )

}