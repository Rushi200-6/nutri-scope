export default function LoadingOverlay({ message }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-md animate-fade-in-up">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-6 text-emerald-400 font-bold tracking-widest text-sm uppercase animate-pulse">
        {message}
      </p>
    </div>
  );
}