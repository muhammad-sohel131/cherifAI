

export default function Card({ className = "", children }) {
    return (
        <div className={`rounded-2xl border border-neutral-800 p-4 shadow-lg ${className}`}>
            {children}
        </div>
    );
}

