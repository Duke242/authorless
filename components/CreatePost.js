"use client";

import { useRouter } from "next/navigation";
// const router = useRouter()
// router.push("/")

const CreatePost = () => {
  const router = useRouter();
  const submit = async (evt) => {
    evt.preventDefault();
    const payload = {
      title: evt.target.elements.title.value,
      content: evt.target.elements.content.value,
      opinion: evt.target.elements.opinion.value,
      sources: evt.target.elements.sources.value,
    };
    console.log({ payload });
    const response = await fetch("/api/post", {
      method: "POST", // Assuming you're sending data to create a new resource
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const ret = await response.json();
    if (ret.success) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[rgb(232,231,237)]">
      <div className="h-fit w-1/2 justify-center p-5 rounded-xl ml-5">
        <h1 className="text-center font-semibold text-purple-500">Compose</h1>
        <form className="flex flex-col" onSubmit={submit}>
          <label className="flex flex-col">
            <div>
              Title <span className="text-gray-400">(optional)</span>
            </div>
            <input
              name="title"
              type="text"
              maxLength={10}
              className="rounded shadow pl-2 h-10 focus:outline-purple-400"
            />
          </label>
          <label className="flex flex-col">
            Body
            <textarea
              name="content"
              required
              className="p-2 h-40 rounded-xl shadow focus:outline-purple-400"
            />
          </label>
          <label className="flex flex-col">
            <div>
              Opinion <span className="text-gray-400">(optional)</span>
            </div>
            <textarea
              name="opinion"
              className="h-40 p-2 rounded-xl shadow focus:outline-purple-400"
            />
          </label>
          <label className="flex flex-col">
            <div>
              Source <span className="text-gray-400">(optional)</span>
            </div>
            <textarea
              name="sources"
              className="h-20 p-2 rounded-xl shadow focus:outline-purple-400"
            />
          </label>
          <button className="btn-primary w-40 p-2 rounded-full mx-auto mt-5 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
