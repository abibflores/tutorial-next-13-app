import React from "react"

export const Card = ({ children }: { children: React.ReactElement | string }) => {
    return (
    <div>
        {children}
    </div>)
}