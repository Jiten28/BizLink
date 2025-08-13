import Badge from "./Badge";

export default function ProfileCard({ buyer, onAccept, onReject, onView }) {
    return (
    <div className="w-full max-w-md p-4 rounded-xl bg-white dark:bg-[#393E46] shadow">
        <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-lg bg-[#00ADB5] flex items-center justify-center text-white font-bold">
            {buyer.name.split(" ")[0][0]}
        </div>
        <div className="flex-1">
            <div className="flex items-center justify-between">
            <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                {buyer.name}
                </h4>
                <div className="text-xs text-gray-500 dark:text-gray-300">
                {buyer.location} • {buyer.experience} exp
                </div>
            </div>
            <div className="text-right">
                <div className="text-sm font-medium">{buyer.budget}</div>
                <div className="text-xs text-gray-500">
                Score: {(buyer.score * 100).toFixed(0)}%
                </div>
            </div>
            </div>
            <div className="mt-3">
            {buyer.industries.map((t, i) => (
                <Badge key={i}>{t}</Badge>
            ))}
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-200">
            {buyer.bio}
                </p>
        </div>
        </div>
        <div className="mt-4 flex gap-3 justify-end">
        <button
            onClick={() => onReject(buyer)}
            className="px-4 py-2 rounded-md border"
        >
            Reject
        </button>
        <button
            onClick={() => onAccept(buyer)}
            className="px-4 py-2 rounded-md bg-[#00ADB5] font-semibold text-black"
        >
            Accept
        </button>
        <button
            onClick={() => onView(buyer)}
            className="px-3 py-2 rounded-md text-sm"
        >
            View
        </button>
        </div>
    </div>
    );
}
