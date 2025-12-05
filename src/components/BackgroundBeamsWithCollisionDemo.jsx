import React from "react";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo({ children, className }) {
    return (
        <BackgroundBeamsWithCollision className={className}>
            {children}
        </BackgroundBeamsWithCollision>
    );
}
