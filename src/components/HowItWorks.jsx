import { Wallet, Calendar, Gift } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Join a Circle',
      desc: 'Choose your preferred savings plan and group size.',
      Icon: Wallet,
    },
    {
      title: 'Contribute Monthly',
      desc: 'Automated payments through your Wafir Wallet.',
      Icon: Calendar,
    },
    {
      title: 'Receive Your Payout',
      desc: 'Get your lump-sum turn securely, on schedule.',
      Icon: Gift,
    },
  ];

  return (
    <section className="relative border-t border-slate-800 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">How It Works</h2>
          <p className="mt-2 text-slate-400">A simple 3-step flow to start saving together</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(({ title, desc, Icon }) => (
            <div key={title} className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 hover:bg-slate-900/60 transition">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/10 p-3 border border-emerald-500/20">
                  <Icon className="text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-slate-300">{desc}</p>
              <div className="mt-6 h-1 w-full rounded bg-gradient-to-r from-emerald-500 to-cyan-400 opacity-50 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
