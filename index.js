import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    supabase
      .from("groups")
      .select("*")
      .then(({ data }) => setGroups(data || []));
  }, []);

  return (
    <div className="min-h-screen bg-green-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Grupuri HobbyMates</h1>
      <ul>
        {groups.map((group) => (
          <li key={group.id} className="bg-green-800 p-3 rounded mb-2">
            <h2 className="text-xl font-semibold">{group.name}</h2>
            <p>{group.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}