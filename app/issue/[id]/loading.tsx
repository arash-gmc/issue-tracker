import StatusBadge from "@/components/StatusBadge";
import { Heading, Flex, Card } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <div>
      <Heading>
        <Skeleton width="15rem" />
      </Heading>
      <Flex className="space-x-3 my-3">
        <Skeleton width="5rem" />
        <Skeleton width="7rem" />
      </Flex>
      <Card>
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default loading;
