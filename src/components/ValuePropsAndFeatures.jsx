import { Shield, CheckCircle2, Lock, Bell, Wallet, Globe, BadgeCheck } from 'lucide-react';

export default function ValuePropsAndFeatures() {
  const values = [
    {
      title: 'Trust & Transparency',
      points: [
        'Regulated under Qatar Central Bank Sandbox',
        'Encrypted data storage and transparent records',
      ],
      Icon: Shield,
    },
    {
      title: 'Smart Matching',
      points: [
        'Intelligent Circle algorithm ensures fairness',
        'Timely payouts aligned with your preferences',
      ],
      Icon: CheckCircle2,
    },
    {
      title: 'Secure & Compliant',
      points: [
        'KYC verified and AES-256 encryption',
        'Data hosted within Qatar (Google Cloud Doha)',
      ],
      Icon: Lock,
    },
  ];

  const features = [
    { title: 'Wafir Wallet', desc: 'Fund, withdraw, and track transactions', Icon: Wallet },
    { title: 'Real-time Notifications', desc: 'Stay updated on your circle’s progress', Icon: Bell },
    { title: 'Automated KYC', desc: 'Instant ID verification powered by IDWise', Icon: BadgeCheck },
    { title: 'Transparent Records', desc: 'Every contribution and payout visible', Icon: CheckCircle2 },
    { title: 'Arabic & English', desc: 'Designed for inclusivity', Icon: Globe },
  ];

  return (
    <section className="relative border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Why Wafir?</h2>
            <p className="mt-2 text-slate-400">Build trust and grow together with fintech-grade security.</p>

            <div className="mt-8 space-y-5">
              {values.map(({ title, points, Icon }) => (
                <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-emerald-500/10 p-3 border border-emerald-500/20">
                      <Icon className="text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-slate-300">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 text-xs text-slate-400 flex items-center gap-2">
              <Shield size={14} className="text-emerald-400" />
              Compliant with QCB Information Security & Cloud Computing Policy. TLS 1.2+, segregated accounts, audit logs, continuous checks, and Credit Bureau integration.
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Product Features</h2>
            <p className="mt-2 text-slate-400">Powerful capabilities, thoughtfully designed.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map(({ title, desc, Icon }) => (
                <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:bg-slate-900/60 transition">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-emerald-500/10 p-2.5 border border-emerald-500/20">
                      <Icon className="text-emerald-400" size={18} />
                    </div>
                    <h3 className="font-semibold">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
