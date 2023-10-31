"use client";
import { Status } from "@prisma/client";
import { Flex, Select, Text } from "@radix-ui/themes";
import React, { useState } from "react";

interface Props {
  currentStatus: Status;
}

const StatusSelector = ({ currentStatus }: Props) => {
  return (
    <Flex gap="2">
      <Text>Status: </Text>
      <Select.Root
        defaultValue={currentStatus}
        onValueChange={(e) => {
          console.log(e);
        }}
      >
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="OPEN">Open</Select.Item>
          <Select.Item value="CLOSED">Closed</Select.Item>
          <Select.Item value="IN_PROGRESS">in Progress</Select.Item>
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};

export default StatusSelector;
