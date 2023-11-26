"use client";
const ClickCopy = () => {
  function copyText(entryText) {
    navigator.clipboard.writeText(entryText);
  }
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={() =>
        copyText(
          "Enhance the experience on Authorless.pro. Join me in shaping brilliance."
        )
      }
    >
      Enhance the experience on Authorless.pro. Join me in shaping brilliance.
    </button>
  );
};

export default ClickCopy;
