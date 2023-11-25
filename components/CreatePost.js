import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const CreatePost = () => {
  async function handleSubmit() {
    const { data, error } = await supabase
      .from("posts")
      .insert([{ title: title, other_column: "otherValue" }])
      .select();
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[rgb(232,231,237)]">
      <div className="h-fit w-1/2 justify-center p-5 rounded-xl ml-5">
        <h1 className="text-center font-semibold text-purple-500">Compose</h1>
        <form className="flex flex-col">
          <label className="flex flex-col">
            Title (optional)
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
            Your Thoughts (optional)
            <textarea
              name="opinion"
              className="h-40 p-2 rounded-xl shadow focus:outline-purple-400"
            />
          </label>
          <label className="flex flex-col">
            Source (optional)
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
