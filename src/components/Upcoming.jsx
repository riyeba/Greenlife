import { useState } from "react";

const eventsData = [
  {
    id: 1,
    title: "Chicago Youth Basketball",
    date: "2024-12-16",
    time: "14:20",
    attendees: [
      { id: 1, name: "Marcus Johnson", initials: "MJ" },
      { id: 2, name: "Aiden Clarke",   initials: "AC" },
    ],
  },
  {
    id: 2,
    title: "Football Tournament",
    date: "2024-11-15",
    time: "12:30",
    attendees: [
      { id: 1, name: "Carlos Rivera",  initials: "CR" },
      { id: 2, name: "Noah Peterson",  initials: "NP" },
    ],
  },
  {
    id: 3,
    title: "Youth Soccer League",
    date: "2024-12-01",
    time: "10:00",
    attendees: [
      { id: 1, name: "Sofia Martinez", initials: "SM" },
      { id: 2, name: "Emma Wilson",    initials: "EW" },
      { id: 3, name: "Olivia Chen",    initials: "OC" },
    ],
  },
];

const avatarColors = [
  "bg-emerald-500",
  "bg-sky-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-teal-500",
];

export default function EventDashboard() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [announcement, setAnnouncement]   = useState("");
  const [sent, setSent]                   = useState(false);

  const handleSend = () => {
    if (!announcement.trim()) return;
    setSent(true);
    setTimeout(() => { setSent(false); setAnnouncement(""); }, 2000);
  };

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="min-h-screen bg-[#0f1117] text-[#e8eaf6] px-6 py-8 font-sans">
      <div className="max-w-[980px] mx-auto flex flex-col lg:flex-row lg:gap-20 gap-6 items-start">

        {/* ── LEFT: My Posted Events ── */}
        <div className="w-full lg:flex-1">
          

          {eventsData.map((event) => {
            const active = selectedEvent?.id === event.id;
            return (
              <div
                key={event.id}
                onClick={() => handleCardClick(event)}
                className={`bg-[#161820] border-[1.5px] rounded-[18px] px-[26px] py-[22px] mb-4 cursor-pointer transition-all duration-200
                  ${active
                    ? "border-[#4ade80] shadow-[0_0_0_1px_#4ade8025,0_8px_32px_#4ade8018]"
                    : "border-[#21253a] hover:border-[#4ade80] hover:shadow-[0_0_0_1px_#4ade8018,0_8px_28px_#4ade8012] hover:-translate-y-0.5"
                  }`}
              >
                <div className="text-[18px] font-bold text-[#4ade80] tracking-[-0.3px] mb-3">
                  {event.title}
                </div>
                <div className="text-[13px] italic text-[#7b80a0] flex items-center gap-1.5 mb-1.5">
                  Event Date: <strong className="not-italic font-medium text-[#b0b4cc]">{event.date}</strong>
                </div>
                <div className="text-[13px] italic text-[#7b80a0] flex items-center gap-1.5">
                  Event Time: <strong className="not-italic font-medium text-[#b0b4cc]">{event.time}</strong>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); handleCardClick(event); }}
                  className="mt-4 inline-block bg-[#4ade80] hover:bg-[#22c55e] text-[#0b1008] text-[13px] font-bold px-5 py-[7px] rounded-[9px] border-none cursor-pointer transition-all duration-150 hover:shadow-[0_4px_18px_#4ade8030] tracking-[0.1px]"
                >
                  {event.attendees.length} Attendee{event.attendees.length !== 1 ? "s" : ""}
                </button>
              </div>
            );
          })}
        </div>

        {/* ── RIGHT: Sidebar ── */}
        <div className="w-full lg:w-[420px] flex-shrink-0 lg:sticky lg:top-6 flex flex-col gap-4">

          {/* Profile / Attendees */}
          <div className="bg-[#161820] border-[1.5px] border-[#21253a] rounded-[18px] overflow-hidden">
            {!selectedEvent ? (
              /* Default — James Saka */
              <div className="flex items-center gap-3 px-[18px] py-[14px]">
                <div className="w-[42px] h-[42px] rounded-full bg-[#21253a] border-[1.5px] border-[#2d3250] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#6b7090" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <span className="text-[14.5px] font-semibold text-[#dde0ef]">James Saka</span>
              </div>
            ) : (
              /* Attendees list */
              selectedEvent.attendees.map((attendee, i) => (
                <div
                  key={attendee.id}
                  className={`flex items-center gap-3 px-[18px] py-[13px] hover:bg-[#1a1d2c] transition-colors duration-150
                    ${i < selectedEvent.attendees.length - 1 ? "border-b border-[#21253a]" : ""}`}
                >
                  <div className={`w-[38px] h-[38px] rounded-full flex items-center justify-center flex-shrink-0 text-[12px] font-bold text-white ${avatarColors[i % avatarColors.length]}`}>
                    {attendee.initials}
                  </div>
                  <span className="text-[14.5px] font-semibold text-[#dde0ef]">{attendee.name}</span>
                </div>
              ))
            )}
          </div>

          {/* Make Announcement */}
          <div className="bg-[#161820] border-[1.5px] border-[#21253a] rounded-[18px] px-[18px] py-[16px]">
            <textarea
              rows={4}
              placeholder="Make Announcement"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              className="w-full bg-[#1b1e2d] border-[1.5px] border-[#272b42] focus:border-[#4ade8055] focus:outline-none rounded-[10px] text-[#c4c7d6] placeholder-[#383c58] text-[13px] px-[13px] py-[11px] resize-none leading-relaxed transition-colors duration-200 font-sans"
            />
            <button
              onClick={handleSend}
              className={`w-full mt-3 py-[13px] rounded-[10px] text-[14px] font-bold tracking-[0.2px] transition-all duration-150 cursor-pointer border-none
                ${sent
                  ? "bg-[#16a34a] text-white"
                  : "bg-[#4ade80] hover:bg-[#22c55e] text-[#080e08] hover:shadow-[0_4px_20px_#4ade8030] active:scale-[0.98]"
                }`}
            >
              {sent ? "✓ Sent!" : "Send Announcement"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
