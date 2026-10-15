export default function GenericPage({ title }) {
  return (
    <div className="flex-1 p-6 h-full flex flex-col">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col flex-1 gap-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">{title}</h1>
          <p className="text-sm text-[#a1a1a1]">Manage your {title.toLowerCase()} settings and configurations.</p>
        </div>
        <div className="flex-1 border border-white/10 border-dashed rounded-xl flex items-center justify-center bg-white/[0.02]">
          <div className="text-center">
            <div className="bg-[#262626] h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
              <iconify-icon icon="solar:wrench-linear" width="24" height="24" className="text-[#a1a1a1]"></iconify-icon>
            </div>
            <h3 className="text-lg font-medium text-white mb-1">{title} Module</h3>
            <p className="text-sm text-[#a1a1a1]">This feature is currently under construction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}