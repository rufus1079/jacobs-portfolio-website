import React from "react";
import { describe } from "riteway";
import render from "riteway/render-component";
import match from "riteway/match";
import Name from "./Name";

describe("Name Component", async(assert)  => {
        const name = "Jacob Welsh"
        const $ = render(<Name>{name}</Name>)
        const contains = match($.html())
        assert({
            given: "A child passed to the Name component",
            should: "Render that name in the component",
            expected: name,
            actual: contains(name)
            
        })
        assert({
            given: "A child passed to the Name componenet",
            should: "Display a button",
            expected: 1,
            actual: $('button').length
        })
})

