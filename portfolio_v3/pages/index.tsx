import Head from "next/head";
import Link from "next/link";

interface Props {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}

const Home: React.FC<Props> = ({ allPostsData }) => {
  return <div>Hello</div>;
};

export default Home;
