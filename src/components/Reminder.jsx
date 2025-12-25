import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Reminder = () => {
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [reminders, setReminders] = useState([]);

  // Load reminders from localStorage and request notification permission
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reminders")) || [];
    setReminders(saved);

    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  // Save reminders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  // Check reminders every second
  useEffect(() => {
    const interval = setInterval(() => {
      setReminders((prevReminders) => {
        const now = new Date().getTime();
        return prevReminders.map((reminder) => {
          const reminderTime = new Date(reminder.dateTime).getTime();

          if (!reminder.notified && now >= reminderTime) {
            // Browser notification
            if ("Notification" in window && Notification.permission === "granted") {
              new Notification("DaWaCo Reminder", {
                body: `💊 Time to take: ${reminder.title}`,
                icon: "/favicon.ico", // optional
              });
            } else {
              // fallback to toast
              toast.success(`💊 Time to take: ${reminder.title}`);
            }

            return { ...reminder, notified: true };
          }
          return reminder;
        });
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Add a new reminder
  const addReminder = () => {
    if (!title || !dateTime) {
      toast.error("Please enter medicine name and time!");
      return;
    }

    setReminders([
      ...reminders,
      { title, dateTime, notified: false }
    ]);

    setTitle("");
    setDateTime("");
    toast.success("Reminder set successfully!");
  };

  // Delete a reminder
  const deleteReminder = (index) => {
    const updated = [...reminders];
    updated.splice(index, 1);
    setReminders(updated);
    toast.success("Reminder deleted!");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Medicine Reminder</h2>

      <input
        type="text"
        placeholder="Medicine Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <button
        onClick={addReminder}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Reminder
      </button>

      <ul className="mt-4">
        {reminders.map((reminder, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b py-2"
          >
            <span>
              {reminder.title} -{" "}
              {new Date(reminder.dateTime).toLocaleString()}
            </span>
            <button
              onClick={() => deleteReminder(index)}
              className="text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <Toaster position="top-right" />
    </div>
  );
};

export default Reminder;
