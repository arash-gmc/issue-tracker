import { Heading, Flex, Card, Box } from "@radix-ui/themes";
import { Skeleton } from "@/components";

const loading = () => {
  return (
    <Box className="px-3 max-w-2xl">
      <Heading>
        <Skeleton width="15rem" />
      </Heading>
      <Flex className="space-x-3 my-3">
        <Skeleton width="3rem" />
        <Skeleton width="11rem" />
      </Flex>
      <Box className="border-2 p-4 rounded-xl">
        <Skeleton height="10rem" />
      </Box>
    </Box>
  );
};

export default loading;
