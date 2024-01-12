# 03-mouse-follower

For this third project I started using useEffect, another react hook that makes it much easier to implement effects and detect events in a component.

### I Understood the following features
useEffect has two parameters:
1. Function with the effects or changes you want to make
2. Dependencies to be taken into account by the use Effect to run. It can take 3 values.
    a. [] -> Runs only once when the component is mounted
    b. [variable] -> Runs each time the value of the variable changes and when the component is mounted
    c. undefined -> Runs each time the component is rendered
