export default function Header({ theme, setTheme }) {
    return (
    <header className="flex items-center justify-between p-4 md:px-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur sticky top-0 z-20">
        <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#222831] flex items-center justify-center text-white font-bold">
            BL
        </div>
        <div>
            <h1 className="text-lg font-semibold">BizLink</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            Connect. Qualify. Close.
            </p>
        </div>
        </div>
        <div className="flex items-center gap-3">
        <button
            className="px-3 py-1 text-sm rounded-md border"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? "Light" : "Dark"}
        </button>
        <div className="text-xs text-gray-600 dark:text-gray-300">
            Logged in as <strong>Tobi</strong>
        </div>
        </div>
    </header>
    );
}
