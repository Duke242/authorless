"use server";
import { post } from "@/libs/PostAction";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
// import { useFormStatus } from "react-dom";

const CreatePost = async () => {
  // const { state } = useFormStatus();
  // console.log({ state });
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const postUser = post.bind(null, session.user.id);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[rgb(232,231,237)]">
      <div className="h-fit w-1/2 justify-center p-5 rounded-xl ml-5">
        <h1 className="text-center font-semibold text-purple-500">Compose</h1>
        <form className="flex flex-col" action={postUser}>
          <label className="flex flex-col">
            <div>
              Title <span className="text-gray-400">(optional)</span>
            </div>
            <input
              name="title"
              type="text"
              className="rounded shadow pl-2 h-10 focus:outline-purple-400"
            />
          </label>
          <label className="flex flex-col">
            Body
            <textarea
              name="body"
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
              name="source"
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
