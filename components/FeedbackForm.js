const FeedbackForm = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-[rgb(232,231,237)]">
      <form className="w-max my-auto mx-auto">
        <label className="flex flex-col text-center">
          Feedback
          <textarea
            placeholder="Do your worst..."
            className="w-60 h-60 rounded pl-2"
          />
        </label>
        <button className="flex mx-auto btn-primary p-3 rounded-md mt-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
