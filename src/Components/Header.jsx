function Header() {
  return (
    <div className="h-[75px] bg-fuchsia-900 w-full text-white px-8 py-2">
      <div className="flex items-center justify-between w-full">
        <a href="/">
          <img src="/assets/logo.png" alt="Logo" height={14} width={150} />
        </a>
        <div className="flex items-center gap-4 text-xl">
          <a
            href="/"
            className="cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#games"
            className="cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300"
          >
            Games
          </a>
          <p
            href="/about"
            className="cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300"
          >
            About us
          </p>
        </div>
      </div>
    </div>
  );
}
export default Header;
