export default function Badge({ children }) {
    return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-opacity-10 bg-teal-400 text-teal-600 mr-2">
        {children}
    </span>
    );
}
