import { Text } from "@radix-ui/themes";
import React from "react";

const ErrorMessage = ({ message }: { message: string | undefined }) => {
  if (!message) return;
  return (
    <Text
      color="red"
      as="p"
      size="3"
    >
      {message}
    </Text>
  );
};

export default ErrorMessage;
