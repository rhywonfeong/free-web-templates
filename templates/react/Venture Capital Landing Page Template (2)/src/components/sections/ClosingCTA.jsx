import { Link } from 'react-router-dom';

export default function ClosingCTA() {
  return (
    <section className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-10 leading-tight">
          If you are building B2B technology with real operating value and global ambition, we want to hear from you.
        </h2>
        <Link 
          to="/pitch" 
          className="inline-flex items-center justify-center bg-zinc-900 text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-zinc-800 transition-all hover:shadow-xl hover:shadow-zinc-900/10 hover:-translate-y-1"
        >
          Submit your pitch
        </Link>
      </div>
    </section>
  );
}