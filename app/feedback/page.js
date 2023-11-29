import FeedbackForm from "@/components/FeedbackForm";
import Sidebar from "@/components/Sidebar";

export default function Feedback() {
  return (
    <div className="flex">
      <Sidebar />
      <FeedbackForm />
    </div>
  );
}
