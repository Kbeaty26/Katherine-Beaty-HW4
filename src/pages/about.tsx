import React from 'react';
import { Typography } from "antd";

export default function about() {
    return (
        <>
            <Typography.Title>About Space! News</Typography.Title>
            <Typography.Paragraph>
                Space! News is an easy to use website that has the most recent articles on space news!
            </Typography.Paragraph>
            <Typography.Title>About the Author</Typography.Title>
            <Typography.Paragraph>
                Katherine Beaty is a Data Science student at Boston University. 
                She founded Spark! Bytes for a class project that was fueled by finding a way to decrease food waste after events on campus. 
                In her free time she enjoys hiking with her dog, Bagel, and playing video games.
            </Typography.Paragraph>
        </>
    );
}