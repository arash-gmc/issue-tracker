import dynamic from "next/dynamic";
import IssueFormLoading from "../_components/IssueFormLoading";
const IssueForm = dynamic(() => import("@/app/issue/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormLoading />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
