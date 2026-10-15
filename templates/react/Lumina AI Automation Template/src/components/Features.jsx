import React from 'react';
import { ShieldCheck, CheckCircle, Building, Loader2, Fingerprint, Database, Check, Globe, CreditCard, Shield, X, Edit2, Plus, ChevronsUpDown } from 'lucide-react';

export default function Features() {
  return (
    <section className="z-20 container md:px-12 pointer-events-auto mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* SOC 2 Compliance */}
        <div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
          <div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
            
            {/* Inner Graphic: Audit Dashboard */}
            <div className="relative w-[85%] max-w-[260px] bg-[#09090b] border border-white/10 rounded-xl p-4 shadow-2xl z-10 flex flex-col group-hover:-translate-y-1 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />
                  <span className="text-xs font-medium text-zinc-200">Security Audit</span>
                </div>
                <span className="text-[10px] bg-emerald-400/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-400/20 font-medium">Passed</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 font-medium">End-to-end Encryption</span>
                  <CheckCircle className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors duration-500 delay-100" strokeWidth={2} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 font-medium">Access Control Logs</span>
                  <CheckCircle className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors duration-500 delay-200" strokeWidth={2} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 font-medium">Vulnerability Scan</span>
                  <CheckCircle className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors duration-500 delay-300" strokeWidth={2} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 font-medium">Data Privacy Policies</span>
                  <CheckCircle className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors duration-500 delay-400" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 py-6 flex flex-col gap-2">
            <h3 className="text-xl font-medium text-white tracking-tight">SOC 2 Compliance</h3>
            <p className="text-base font-normal text-zinc-400 leading-relaxed">Our product meets SOC 2 standards for secure handling of sensitive information</p>
          </div>
        </div>

        {/* SSO and Domain Capture */}
        <div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
          <div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
            
            {/* Inner Graphic: Login Routing */}
            <div className="relative w-[85%] max-w-[260px] flex flex-col gap-2 z-10 group-hover:-translate-y-1 transition-transform duration-500">
              {/* Login Box */}
              <div className="bg-[#09090b] border border-white/10 rounded-xl p-3.5 shadow-2xl relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center">
                    <Building className="w-3 h-3 text-zinc-300" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-medium text-zinc-200">Sign in to Acme</span>
                </div>
                <div className="bg-[#131316] border border-white/5 rounded-lg p-2.5 flex items-center justify-between text-xs">
                  <span className="text-zinc-300 font-medium">jane@acmecorp.com</span>
                  <Loader2 className="w-3.5 h-3.5 text-zinc-500 animate-spin" strokeWidth={2} />
                </div>
              </div>
              
              {/* Routing Path */}
              <div className="flex flex-col items-center justify-center h-4 relative">
                <div className="absolute w-px h-full bg-gradient-to-b from-white/20 to-transparent"></div>
                <div className="absolute w-2 h-2 rounded-full border border-white/20 bg-[#09090b] shadow-[0_0_8px_rgba(255,255,255,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* IDP Box */}
              <div className="bg-[#09090b] border border-white/10 rounded-xl p-3 shadow-2xl flex items-center gap-3 w-4/5 mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 -translate-x-full"></div>
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Fingerprint className="w-4 h-4 text-blue-400" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-medium">Routing to</span>
                  <span className="text-[11px] font-medium text-zinc-200">Identity Provider</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 py-6 flex flex-col gap-2">
            <h3 className="text-xl font-medium text-white tracking-tight">SSO and Domain Capture</h3>
            <p className="text-base font-normal text-zinc-400 leading-relaxed">Seamlessly manage users with SSO and domain capture</p>
          </div>
        </div>

        {/* Fine-Grained Permissions */}
        <div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
          <div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
            
            {/* Inner Graphic: Permissions Matrix */}
            <div className="relative w-[90%] max-w-[280px] bg-[#09090b] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col group-hover:-translate-y-1 transition-transform duration-500">
              <div className="grid grid-cols-5 gap-2 p-3 border-b border-white/5 bg-white/[0.02]">
                <div className="col-span-2 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Resource</div>
                <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider text-center">Read</div>
                <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider text-center">Edit</div>
                <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider text-center">Admin</div>
              </div>
              <div className="flex flex-col p-2 gap-1 bg-[#0e0e11]">
                {/* Row 1 */}
                <div className="grid grid-cols-5 gap-2 p-2 items-center hover:bg-white/[0.02] rounded-lg transition-colors cursor-pointer">
                  <div className="col-span-2 flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
                    <span className="text-[11px] font-medium text-zinc-300 truncate">Core API</span>
                  </div>
                  <div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-emerald-500/10 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" strokeWidth={2} /></div></div>
                  <div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-[#131316]"></div></div>
                  <div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-[#131316]"></div></div>
                </div>
                {/* Row 2 */}
                <div className="grid grid-cols-5 gap-2 p-2 items-center hover:bg-white/[0.02] rounded-lg transition-colors cursor-pointer bg-white/[0.02]">
                  <div className="col-span-2 flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
                    <span className="text-[11px] font-medium text-zinc-300 truncate">Marketing</span>
                  </div>
                  <div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-emerald-500/10 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" strokeWidth={2} /></div></div>
                  <div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-emerald-500/10 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" strokeWidth={2} /></div></div>
                  <div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-[#131316]"></div></div>
                </div>
                {/* Row 3 */}
                <div className="grid grid-cols-5 gap-2 p-2 items-center hover:bg-white/[0.02] rounded-lg transition-colors cursor-pointer">
                  <div className="col-span-2 flex items-center gap-2">
                    <CreditCard className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
                    <span className="text-[11px] font-medium text-zinc-300 truncate">Billing</span>
                  </div>
                  <div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-emerald-500/10 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" strokeWidth={2} /></div></div>
                  <div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-emerald-500/10 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" strokeWidth={2} /></div></div>
                  <div className="flex justify-center"><div className="w-3.5 h-3.5 rounded border border-white/10 bg-emerald-500/10 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" strokeWidth={2} /></div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 py-6 flex flex-col gap-2">
            <h3 className="text-xl font-medium text-white tracking-tight">Fine-Grained Permissions</h3>
            <p className="text-base font-normal text-zinc-400 leading-relaxed">Effortlessly assign and manage fine-grained permissions with our solution</p>
          </div>
        </div>

        {/* Role-Based Access Control */}
        <div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
          <div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
            
            {/* Inner Graphic: Role Assignments */}
            <div className="relative w-[90%] max-w-[280px] bg-[#09090b] border border-white/10 rounded-xl p-3 shadow-2xl z-10 flex flex-col gap-4 group-hover:-translate-y-1 transition-transform duration-500">
              <div className="flex items-center gap-3 p-2 bg-white/[0.03] border border-white/5 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/20 flex items-center justify-center text-purple-400 font-medium text-xs shadow-inner">JD</div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-zinc-200">Jane Doe</span>
                  <span className="text-[10px] text-zinc-500">Engineering Team</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider px-1">Assigned Roles</div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 px-2 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-md text-[11px] font-medium text-blue-400 shadow-sm">
                    <Shield className="w-3 h-3" strokeWidth={1.5} /> Admin
                    <X className="w-3 h-3 ml-1 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-medium text-zinc-300 shadow-sm">
                    <Edit2 className="w-3 h-3 text-zinc-400" strokeWidth={1.5} /> Editor
                    <X className="w-3 h-3 ml-1 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1.5 border border-dashed border-white/20 rounded-md text-[11px] font-medium text-zinc-500 hover:text-zinc-300 hover:border-white/40 cursor-pointer transition-colors bg-[#0e0e11]">
                    <Plus className="w-3 h-3" strokeWidth={2} /> Add Role
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 py-6 flex flex-col gap-2">
            <h3 className="text-xl font-medium text-white tracking-tight">Role-Based Access Control</h3>
            <p className="text-base font-normal text-zinc-400 leading-relaxed">Ensure enterprise security and compliance with role-based access management</p>
          </div>
        </div>

        {/* Workspaces Per Organization */}
        <div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
          <div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
            
            {/* Inner Graphic: Workspace Switcher */}
            <div className="relative w-[85%] max-w-[240px] z-10 flex flex-col group-hover:-translate-y-1 transition-transform duration-500">
              {/* Dropdown Trigger */}
              <div className="bg-[#09090b] border border-white/10 rounded-xl p-2.5 flex items-center justify-between shadow-lg mb-2 relative z-20 hover:border-white/20 transition-colors cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[11px] font-bold shadow-inner">A</div>
                  <span className="text-xs font-medium text-zinc-200">Acme Global</span>
                </div>
                <ChevronsUpDown className="w-3.5 h-3.5 text-zinc-500" strokeWidth={1.5} />
              </div>
              {/* Dropdown Menu */}
              <div className="bg-[#0e0e11] border border-white/10 rounded-xl p-1.5 shadow-2xl flex flex-col gap-0.5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-2xl"></div>
                <div className="text-[10px] font-medium text-zinc-500 px-2.5 py-2 uppercase tracking-wider relative z-10">Switch Workspace</div>
                
                <div className="flex items-center gap-2.5 p-2 bg-white/[0.04] rounded-lg border border-white/[0.02] relative z-10">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[11px] font-bold shadow-sm">A</div>
                  <span className="text-xs font-medium text-zinc-200">Acme Global</span>
                  <Check className="w-3.5 h-3.5 text-white ml-auto" strokeWidth={2} />
                </div>
                
                <div className="flex items-center gap-2.5 p-2 hover:bg-white/[0.02] rounded-lg transition-colors cursor-pointer relative z-10 group/item">
                  <div className="w-6 h-6 rounded-md bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 text-[11px] font-bold group-hover/item:text-zinc-200 transition-colors">E</div>
                  <span className="text-xs font-medium text-zinc-400 group-hover/item:text-zinc-300 transition-colors">Acme Europe</span>
                </div>
                
                <div className="h-px bg-white/5 my-1 mx-2 relative z-10"></div>
                
                <div className="flex items-center gap-2.5 p-2 hover:bg-white/[0.02] rounded-lg transition-colors cursor-pointer text-zinc-400 hover:text-zinc-200 relative z-10">
                  <Plus className="w-4 h-4 ml-1" strokeWidth={1.5} />
                  <span className="text-xs font-medium">Create Workspace</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 py-6 flex flex-col gap-2">
            <h3 className="text-xl font-medium text-white tracking-tight">Workspaces Per Organization</h3>
            <p className="text-base font-normal text-zinc-400 leading-relaxed">Organize projects effectively with multiple workspaces per organization</p>
          </div>
        </div>

        {/* On-Premise Deployment */}
        <div className="flex flex-col bg-[#0e0e11] border border-white/5 rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
          <div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
            
            {/* Inner Graphic: Terminal Deployment */}
            <div className="relative w-[90%] max-w-[280px] bg-[#000] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col font-mono group-hover:-translate-y-1 transition-transform duration-500">
              <div className="bg-[#18181b] border-b border-white/5 px-3 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                </div>
                <span className="text-[10px] text-zinc-500 ml-2">root@on-prem-node:~</span>
              </div>
              <div className="p-3.5 flex flex-col gap-2 text-[11px] leading-relaxed bg-gradient-to-b from-transparent to-[#18181b]/30">
                <div className="flex gap-2 text-zinc-300">
                  <span className="text-emerald-400 font-medium">$</span>
                  <span>lumina deploy --env production</span>
                </div>
                <div className="text-zinc-500">Initializing deployment sequence...</div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <span className="text-emerald-400 font-medium">[OK]</span> Provisioning containers
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <span className="text-emerald-400 font-medium">[OK]</span> Establishing VPC tunnel
                </div>
                <div className="flex flex-col gap-1.5 mt-1">
                  <div className="text-zinc-500 flex justify-between">
                    <span>Starting services (3/3)</span>
                    <span className="text-emerald-400">100%</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[10%]" style={{ animation: 'loadBar 2s ease-out forwards' }}></div>
                  </div>
                </div>
                <div className="text-emerald-400 mt-1 opacity-0" style={{ animation: 'fadeInText 0.5s ease-out 2s forwards' }}>Ready at 192.168.1.100</div>
              </div>
            </div>
          </div>
          <div className="px-5 py-6 flex flex-col gap-2">
            <h3 className="text-xl font-medium text-white tracking-tight">On-Premise Deployment</h3>
            <p className="text-base font-normal text-zinc-400 leading-relaxed">Deploy Lumina on-premise for enhanced control and security</p>
          </div>
        </div>

      </div>
    </section>
  );
}