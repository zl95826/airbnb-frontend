import { DataType } from "./page";

export default function Properties({ data }: { data: DataType[] }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Hello World!
      </div>
      {data.map((ele) => (
        <p key={ele.id}>
          Name: {ele.name} Username: {ele.username}
        </p>
      ))}
    </main>
  );
}
