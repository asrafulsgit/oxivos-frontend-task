"use client";
const Footer = () => {
  return (
    <footer className="border-t border-primary/10 pb-12 pt-24">
      <div className="mx-auto mb-24 grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-4">
        <div className="col-span-1 md:col-span-2">
          <h4 className="mb-6 font-display text-2xl italic text-primary">
            Stay Connected
          </h4>
          <p className="mb-6 max-w-md text-sm text-primary-light/50">
            Receive dispatches from the atelier: new collections, artisan
            portraits, and occasional invitations to private previews.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border-b border-primary/30 py-2"
          >
            <input
              type="email"
              required
              placeholder="Email Address"
              className="w-full bg-transparent text-sm outline-none placeholder:text-primary-light/25"
            />
            <button className="text-[10px] uppercase tracking-widest text-primary hover:text-primary-light">
              Join
            </button>
          </form>
        </div>
        <div>
          <h5 className="mb-6 text-[10px] uppercase tracking-widest opacity-40">
            Boutique
          </h5>
          <ul className="space-y-3 text-sm text-primary-light/70">
            <li>
              <a href="#" className="hover:text-primary">
                Locations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                The Atelier
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Custom Tailoring
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 text-[10px] uppercase tracking-widest opacity-40">
            Support
          </h5>
          <ul className="space-y-3 text-sm text-primary-light/70">
            <li>
              <a href="#" className="hover:text-primary">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Care Guide
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-[9px] uppercase tracking-[0.3em] opacity-30">
        <p>&copy; {new Date().getFullYear()} Zari Menswear</p>
        <p>Dhaka &middot; Handcrafted</p>
      </div>
    </footer>
  );
};

export default Footer;
