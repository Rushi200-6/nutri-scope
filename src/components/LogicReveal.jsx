export default function LogicReveal({ verdict, keyIngredient }) {
  const step1Status = verdict === "UNSAFE" ? "FAIL" : "PASS";
  const color = step1Status === "FAIL" ? "border-red-500/50 text-red-400" : "border-emerald-500/50 text-emerald-400";
  
  return (
    <div>
      <div className="flex items-center gap-3 mb-4 opacity-50">
        <div className="h-px bg-white flex-1"></div>
        <span className="text-[10px] font-bold uppercase tracking-widest">Logic Trace</span>
        <div className="h-px bg-white flex-1"></div>
      </div>

      <div className={`flex items-center gap-4 p-3 rounded-xl border bg-slate-900/40 ${color}`}>
        <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center font-bold text-xs">1</div>
        <div>
          <div className="text-xs font-bold uppercase opacity-80">Allergy Gatekeeper</div>
          <div className="text-sm font-medium">
            {step1Status === "FAIL" ? `Violation: ${keyIngredient}` : "No restrictions violated"}
          </div>
        </div>
      </div>
    </div>
  );
}