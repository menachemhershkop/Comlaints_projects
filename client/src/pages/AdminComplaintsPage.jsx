import React, { useEffect, useState } from 'react'
import { getAllComplaints } from '../api/complaintsApi';

function AdminComplaintsPage() {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [filter, setFilter] = useState("all");

     useEffect(() => {
    const fetchComplaints = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("admintoken");
        const res = await getAllComplaints(token);
        setComplaints(res.data);
      } catch (err) {
        setError("שגיאה בטעינת התלונות");
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

    const filteredComplaints =
    filter === "all"
      ? complaints
      : complaints.filter((c) => c.category === filter);

    //  const categoryCounts = complaints.reduce((acc, curr) => {
    //     acc[curr.category] = (acc[curr.category] || 0) + 1;
    //     return acc;
    //     }, {});
        
         const formatDate = (dateStr) => {
            const date = new Date(dateStr);
            return date.toLocaleString("he-IL", {
                dateStyle: "short",
                timeStyle: "short",
            });
        };


  return (
     <div className="admin-complaints-page">
      <h1>כל התלונות</h1>

      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <p>טוען...</p>
      ) : (
        <>
          <div className="filters">
            <label>סינון לפי קטגוריה: </label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">הכל</option>
              <option value="אוכל">אוכל </option>
              <option value="ציוד">ציוד </option>
              <option value="פקודות">פקודות </option>
              <option value="אחר">אחר </option>
            </select>
          </div>

          <table className="complaints-table">
            <thead>
              <tr>
                <th>קטגוריה</th>
                <th>תוכן</th>
                <th>נוצר ב־</th>
              </tr>
            </thead>
            <tbody>
              {filteredComplaints.map((c) => (
                <tr key={c._id}>
                  <td>{c.category}</td>
                  <td>{c.content}</td>
                  <td>{formatDate(c.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      1234
    </div>
  )
}

export default AdminComplaintsPage
