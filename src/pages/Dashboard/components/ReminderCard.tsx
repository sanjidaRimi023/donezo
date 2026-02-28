import { Video } from "lucide-react";
import Button from "../../../components/Button";

export default function ReminderCard() {
  return (
    <>
      <section className="bg-white rounded-3xl p-8 shadow-sm">
        <h1 className="text-2xl">Reminders</h1>
        <div className=" my-8">
          <h2 className="text-primary font-semibold text-2xl">
            Meeting with Arc Company
          </h2>
          <p className="text-gray-400">Time : 02.00 - 04.00</p>
        </div>
        <Button variant="primary" className="flex text-sm gap-1">
          <Video />
          Start Meeting
        </Button>
      </section>
    </>
  );
}
