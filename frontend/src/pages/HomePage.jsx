import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import RateLimitedUI from "../components/RateLimitedUI";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";

const HomePage = () => {
  const [isRateLimited, setIsRateLimit] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimit(false);
      } catch (error) {
        console.log("Error fetching notes.");
        console.log(error);

        if (error.response?.status === 429) {
          setIsRateLimit(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />

      {isRateLimited && <RateLimitedUI />}
      <div className="mx-w-7l mx-auto p-4 mt-6 ">
        {loading && (
          <div className="text-center text-primary"> Loading Notes...</div>
        )}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
