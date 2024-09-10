import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/Sobuj54")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex justify-between items-center max-w-3xl mx-auto my-12">
      <img src={data.avatar_url} alt="img" />
      <h1 className="text-center font-bold text-xl">
        Followers : {data?.followers}
      </h1>
    </div>
  );
};

export default Github;
