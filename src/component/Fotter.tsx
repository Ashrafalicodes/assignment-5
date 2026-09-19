import footerLogo from "./logo-text.png";

const columns = [
  { title: "PRODUCT", links: ["Home", "Technologies", "Projects"] },
  { title: "COMPANY", links: ["About", "Contact", "Careers"] },
  { title: "LEGAL", links: ["Privacy Policy", "Terms of Service"] },
];

const Footer = () => {
  return (
    <footer className="container mx-auto border-t border-gray-200 mt-10 px-3 pt-10 pb-6">
      {/* Top row */}
      <div className="grid grid-cols-5 gap-8 items-start">
        {/* Brand */}
        <div className="col-span-2">
          <div className="h-8 flex items-center mb-3">
            <img src={footerLogo} alt="Dev Stack" className="h-8 w-auto" />
          </div>
          <p className="text-sm text-gray-500 max-w-xs">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex gap-4 mt-4 text-sm font-medium text-gray-700">
            <li>GitHub</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="h-8 flex items-center mb-3 text-xs font-bold tracking-wider text-gray-900">
              {col.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {col.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-center border-t border-gray-100 mt-10 pt-6 text-xs text-gray-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;