"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const FeedbackForm = () => {
  const router = useRouter();

  const submit = async (evt) => {
    evt.preventDefault();
    console.log({ e: evt });
    const payload = {
      feedback: evt.target.elements.feedback.value,
    };
    console.log({ payload });
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const ret = await response.json();
    if (ret.success) {
      toast.success(`Feedback posted. Thank you!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
      });
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[rgb(232,231,237)]">
      <form className="w-max my-auto mx-auto" onSubmit={submit}>
        <label className="flex flex-col text-center">
          Feedback
          <textarea
            placeholder="Don't hold back..."
            className="w-60 h-60 rounded pl-2"
            name="feedback"
            maxLength={1000}
            required
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
