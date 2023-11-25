"use client";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [opinion, setOpinion] = useState("");
  const [source, setSource] = useState("");

  async function handleSubmit() {
    const { data, error } = await supabase
      .from("posts")
      .insert([{ title: title, body: body, opinion: opinion, source: source }])
      .select();
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[rgb(232,231,237)]">
      <div className="h-fit w-1/2 justify-center p-5 rounded-xl ml-5">
        <h1 className="text-center font-semibold text-purple-500">Compose</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <div>
              Title <span className="text-gray-400">(optional)</span>
            </div>
            <input
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded shadow pl-2 h-10 focus:outline-purple-400"
            />
          </label>
          <label className="flex flex-col">
            Body
            <textarea
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="p-2 h-40 rounded-xl shadow focus:outline-purple-400"
            />
          </label>
          <label className="flex flex-col">
            <div>
              Opinion <span className="text-gray-400">(optional)</span>
            </div>
            <textarea
              name="opinion"
              value={opinion}
              onChange={(e) => setOpinion(e.target.value)}
              className="h-40 p-2 rounded-xl shadow focus:outline-purple-400"
            />
          </label>
          <label className="flex flex-col">
            <div>
              Source <span className="text-gray-400">(optional)</span>
            </div>
            <textarea
              name="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
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
