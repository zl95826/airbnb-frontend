import { sanityClient } from "../../../sanity";
import ProductCard from "../components/ProductCard";
import Properties from "./PropertiesComponent";
export interface DataType {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: { [key: string]: string };
  address: { [key: string]: string };
}
export const getData = async () => {
  const query = '*[_type == "property"]';
  const properties = await sanityClient.fetch(query);
  console.log(properties);
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
export default async function PagesHome() {
  const data: DataType[] = await getData();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Hello World!
      </div>
      <ProductCard />
      {/* <button
        onClick={() => {
          console.log("test");
        }}
      >
        Button
      </button>  Add this you will get error.
      Server components cannot have interactivity, 
      so they cannot handle browser events.*/}

      <Properties data={data} />
    </main>
  );
}
