import Card from "./components/Card";

const TailwindTest = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-[500px]">
      <h1 className="text-xl font-bold bg-green-500 px-10 py-5 rounded">
        Tailwind Test
      </h1>
      <div className="flex gap-5">
        <Card name="dilbara" text="she is okay." />
        <Card name="ranjah" text="she is beautiful." />
      </div>
    </div>
  );
};

export default TailwindTest;
