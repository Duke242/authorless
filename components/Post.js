const Post = ({ title, date, content }) => {
  return (
    <div className="bg-violet-50 p-6 m-6 rounded-2xl shadow-2xl bg-[rgb(242,243,246)]">
      <h2 className="font-bold text-center text-slate-800 underline">
        {title}
      </h2>
      <p>{content}</p>
      <div className="flex pt-3">
        <div className="w-3/4 rounded pt-2 text-gray-400">Sources?</div>
        <div className="flex flex-col ml-auto">
          <button className="bg-blue-500 p-2 text-white rounded-2xl mt-4 w-20 mx-auto">
            Like
          </button>
          <p className="text-gray-500 text-sm mx-auto pt-2">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
