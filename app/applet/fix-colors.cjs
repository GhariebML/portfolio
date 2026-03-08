const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'ResumeModal.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/text-slate-900/g, 'text-[#0f172a]');
content = content.replace(/text-slate-800/g, 'text-[#1e293b]');
content = content.replace(/text-slate-700/g, 'text-[#334155]');
content = content.replace(/text-slate-600/g, 'text-[#475569]');
content = content.replace(/text-slate-500/g, 'text-[#64748b]');
content = content.replace(/text-slate-400/g, 'text-[#94a3b8]');
content = content.replace(/text-slate-300/g, 'text-[#cbd5e1]');
content = content.replace(/text-slate-200/g, 'text-[#e2e8f0]');
content = content.replace(/text-slate-100/g, 'text-[#f1f5f9]');
content = content.replace(/text-slate-50/g, 'text-[#f8fafc]');

content = content.replace(/bg-slate-900/g, 'bg-[#0f172a]');
content = content.replace(/bg-slate-800/g, 'bg-[#1e293b]');
content = content.replace(/bg-slate-700/g, 'bg-[#334155]');
content = content.replace(/bg-slate-600/g, 'bg-[#475569]');
content = content.replace(/bg-slate-500/g, 'bg-[#64748b]');
content = content.replace(/bg-slate-400/g, 'bg-[#94a3b8]');
content = content.replace(/bg-slate-300/g, 'bg-[#cbd5e1]');
content = content.replace(/bg-slate-200/g, 'bg-[#e2e8f0]');
content = content.replace(/bg-slate-100/g, 'bg-[#f1f5f9]');
content = content.replace(/bg-slate-50/g, 'bg-[#f8fafc]');

content = content.replace(/border-slate-900/g, 'border-[#0f172a]');
content = content.replace(/border-slate-800/g, 'border-[#1e293b]');
content = content.replace(/border-slate-700/g, 'border-[#334155]');
content = content.replace(/border-slate-600/g, 'border-[#475569]');
content = content.replace(/border-slate-500/g, 'border-[#64748b]');
content = content.replace(/border-slate-400/g, 'border-[#94a3b8]');
content = content.replace(/border-slate-300/g, 'border-[#cbd5e1]');
content = content.replace(/border-slate-200/g, 'border-[#e2e8f0]');
content = content.replace(/border-slate-100/g, 'border-[#f1f5f9]');
content = content.replace(/border-slate-50/g, 'border-[#f8fafc]');

content = content.replace(/text-blue-900/g, 'text-[#1e3a8a]');
content = content.replace(/text-blue-800/g, 'text-[#1e40af]');
content = content.replace(/text-blue-700/g, 'text-[#1d4ed8]');
content = content.replace(/text-blue-600/g, 'text-[#2563eb]');
content = content.replace(/text-blue-500/g, 'text-[#3b82f6]');

content = content.replace(/bg-blue-900/g, 'bg-[#1e3a8a]');
content = content.replace(/bg-blue-800/g, 'bg-[#1e40af]');
content = content.replace(/bg-blue-700/g, 'bg-[#1d4ed8]');
content = content.replace(/bg-blue-600/g, 'bg-[#2563eb]');
content = content.replace(/bg-blue-500/g, 'bg-[#3b82f6]');

content = content.replace(/bg-white/g, 'bg-[#ffffff]');
content = content.replace(/text-white/g, 'text-[#ffffff]');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done replacing colors in ResumeModal.tsx');
