//import { sanityClient } from "../../../sanity";

import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { DataType } from "./page";
import { sanityClient } from "../../../sanity";
type Repo = {
  name: string;
  stargazers_count: number;
};
// export const getServerSideProps = async () => {
//   const query = '*[_type == "property"]';
//   const properties = await sanityClient.fetch(query);
//   if (!properties.length) {
//     return { props: { properties: [] } };
//   } else {
//     return { props: properties };
//   }
// };
// cannot use getServerSideProps in App routing method

export default function Properties({ data }: { data: DataType[] }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Hello World!
      </div>
      {data.map((ele) => (
        <p key={ele.id}>
          Name: {ele.name} Username;{ele.username}
        </p>
      ))}
    </main>
  );
}
