import Post from "./Post";

const Feed = async () => {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${month}/${day}/${year}`;

  return (
    <div className="h-screen w-fit">
      <Post title={"Title"} date={formattedDate} content={loremIpsum} />
      <Post title={"Title"} date={formattedDate} content={loremIpsum} />
      <Post title={"Title"} date={formattedDate} content={loremIpsum} />
    </div>
  );
};

export default Feed;
