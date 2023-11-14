import React from "react";
import { Avatar, AvatarBadge, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, my name is Kristian!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <Avatar
    src="https://avatars.githubusercontent.com/u/29028751?v=4"
    size='xl'
    name='placeholder'
  >
    <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='0.66em' />
  </Avatar>
  <h3>{greeting}</h3>
    <Heading>{bio1}</Heading>
    <Heading>{ bio2 }</Heading>
  </FullScreenSection>
);

export default LandingSection;
