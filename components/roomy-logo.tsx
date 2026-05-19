export function RoomyLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <RoomyMark className="h-8 w-8" />
      <span className="font-display text-xl font-bold tracking-tight text-roomy-ink">
        Roomy
      </span>
    </div>
  );
}

export function RoomyMark({ className = "" }: { className?: string }) {
  // Símbolo: una "R" estilizada dentro de un círculo con la ola/curva de la marca
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="roomy-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#FFB627" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#roomy-grad)" />
      <path
        d="M13 28V12h8.2c3.4 0 5.3 1.9 5.3 4.8 0 2.3-1.2 3.9-3.3 4.5l3.9 6.7h-3.7l-3.5-6.2H16V28h-3zm3-8.7h5c1.6 0 2.5-.8 2.5-2.2 0-1.4-.9-2.2-2.5-2.2h-5v4.4z"
        fill="#fff"
      />
    </svg>
  );
}
