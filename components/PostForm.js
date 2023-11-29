const PostForm = () => {
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
  </form>;
};
