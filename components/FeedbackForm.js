import { feedback } from "@/libs/FeedbackAction";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const FeedbackForm = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const postFeedback = feedback.bind(null, session.user.id);

  return (
    <div className="flex flex-col h-screen w-full bg-[rgb(232,231,237)]">
      <form className="w-max my-auto mx-auto" action={postFeedback}>
        <label className="flex flex-col text-center">
          Feedback
          <textarea
            placeholder="Do your worst..."
            className="w-60 h-60 rounded pl-2"
            name="content"
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
