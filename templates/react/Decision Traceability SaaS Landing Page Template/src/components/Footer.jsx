export default function Footer() {
  return (
    <footer className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-xs space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-obsidian rounded-sm"></div>
            <span className="font-bold text-sm tracking-tight text-obsidian">
              ORAVIA
            </span>
          </div>
          <p className="text-xs text-subtle leading-relaxed">
            Designed for the rigorous demands of modern enterprise strategy.
            San Francisco, CA.
          </p>
          <div className="text-[10px] text-border">
            © 2024 Oravia Systems Inc.
          </div>
        </div>

        <div className="flex gap-16">
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-obsidian">Platform</h4>
            <ul className="space-y-2 text-xs text-subtle">
              <li><a href="#" className="hover:text-obsidian">Features</a></li>
              <li><a href="#" className="hover:text-obsidian">Security</a></li>
              <li><a href="#" className="hover:text-obsidian">Enterprise</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-obsidian">Company</h4>
            <ul className="space-y-2 text-xs text-subtle">
              <li><a href="#" className="hover:text-obsidian">About</a></li>
              <li><a href="#" className="hover:text-obsidian">Careers</a></li>
              <li><a href="#" className="hover:text-obsidian">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-obsidian">Connect</h4>
            <ul className="space-y-2 text-xs text-subtle">
              <li><a href="#" className="hover:text-obsidian">Twitter</a></li>
              <li><a href="#" className="hover:text-obsidian">LinkedIn</a></li>
              <li><a href="#" className="hover:text-obsidian">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}