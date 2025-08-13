export default function Landing({ onChoose }) {
    return (
    <div className="max-w-4xl mx-auto my-12 p-6 rounded-2xl bg-gradient-to-br from-[#222831] to-[#393E46] text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-2">Welcome to BizLink</h2>
        <p className="mb-6 opacity-90">
        A friendly platform that matches business sellers and buyers, helps you
        evaluate opportunities and reduces deal friction using intelligent
        tools.
        </p>
        <div className="flex gap-4">
        <button
            onClick={() => onChoose("buyer")}
            className="px-6 py-3 rounded-md bg-[#00ADB5] hover:bg-teal-500 text-black font-semibold"
        >
            I'm a Buyer
        </button>
        <button
            onClick={() => onChoose("seller")}
            className="px-6 py-3 rounded-md bg-white/10 border border-white/20 text-white"
        >
            I'm a Seller
        </button>
        </div>
    </div>
    );
}
