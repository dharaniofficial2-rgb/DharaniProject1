import { useState, useCallback } from "react";

function Profile() {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState("");

  // MOCK TRACKING DATA (impressive + real-world style)
  const trackingData = [
    { id: "AKR123", status: "🚚 Your shipment is out for delivery" },
    { id: "AKR456", status: "📦 Package reached warehouse" },
    { id: "AKR789", status: "🏢 Dispatched from hub" },
    { id: "AKR999", status: "✅ Delivered successfully" },
  ];

  // TRACK FUNCTION
  const trackOrder = useCallback(() => {
    if (!trackingId) {
      setStatus("⚠️ Please enter Tracking ID");
      return;
    }

    const found = trackingData.find(
      (item) => item.id.toLowerCase() === trackingId.toLowerCase()
    );

    if (found) {
      setStatus(found.status);
    } else {
      setStatus("❌ Invalid Tracking ID");
    }
  }, [trackingId]);

  return (
    <div className="tracking">
      <h1>Track Your Shipment</h1>

      <p className="subtitle">
        Enter your tracking ID to check delivery status
      </p>

      <input
        type="text"
        placeholder="Example: AKR123"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
      />

      <button className="btn" onClick={trackOrder}>
        Track Order
      </button>

      {status && <div className={`status ${status === "out for delivery" ? "out" : ""}`}>{status}</div>}
    </div>
  );
}

export default Profile;