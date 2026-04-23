export function AvatarStack() {
  const users = [
    { initials: "JK", bg: "bg-amber-700" },
    { initials: "TM", bg: "bg-green-700" },
    { initials: "TB", bg: "bg-green-700" },
    { initials: "HM", bg: "bg-red-700" },
    { initials: "OT", bg: "bg-pink-500" },
  ];

  return (
    <div className="flex justify-center md:justify-start">
      <div className="flex">
        {users.map((user, i) => (
          <div
            key={i}
            className={`w-9 h-9 rounded-full border-2 border-[var(--bg-primary)] flex items-center justify-center text-xs text-white ${user.bg}`}
            style={{ marginLeft: i > 0 ? "-8px" : "0" }}
          >
            {user.initials}
          </div>
        ))}
        <div
          className="w-9 h-9 rounded-full border-2 border-[var(--bg-primary)] flex items-center justify-center text-xs bg-[var(--text-secondary)] text-white"
          style={{ marginLeft: "-8px" }}
        >
          +
        </div>
      </div>
    </div>
  );
}