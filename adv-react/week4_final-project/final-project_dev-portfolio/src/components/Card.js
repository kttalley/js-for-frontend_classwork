import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  const cardProperty = {
    backgroundColor: "white",
    borderRadius: "10px",
    color: "Black",
  }
  
  
  return (
    <VStack style={cardProperty}>
      <Image src={imageSrc} alt={description} />
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <a href="#">
      <HStack>
        <Text>Check it out</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
      </a>
    </VStack>
  );
};

export default Card;
