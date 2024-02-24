export default function Button({ btnName, handleBtn }) {
  return (
    <button onClick={handleBtn} className="p-6 px-12 tracking-wide outline outline-1 rounded-md text-xs text-slate-600 hover:bg-slate-900 hover:text-white hover:font-semibold hover:duration-500">
      {btnName}
    </button>
  );
}
