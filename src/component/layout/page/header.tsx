import { useState, useEffect } from "react";
import logo from "@/assets/logo/lime.png";
import {
  LightIcon,
  SearchIcon,
  StarIcon,
  DocsIcon,
  BoxIcon,
  MenuIcon,
  CloseIcon,
} from "@/component/icons";
import Container from "@/component/material/container";
import { NavLink } from "react-router";
import { cn } from "@/utils";

const navItems = [
  { to: "/", icon: LightIcon, label: "Collection" },
  { to: "/coverage", icon: SearchIcon, label: "Coverage" },
  { icon: StarIcon, label: "How it works" },
  { icon: DocsIcon, label: "Documentation" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass =
    "center gap-[6.38px] px-[22.14px] rounded-[6.38px] border border-secondary cursor-pointer h-full [&.active]:bg-primary-hover [&.active]:text-primary [&.active]:border-none";

  return (
    <Container>
      <div className="h-16 md:h-[120px] center">
        <div className="flex justify-between items-center w-full max-w-[1100px] mx-auto gap-3 min-h-12 md:h-[56.91px]">
          {/* Logo */}
          <div className="bg-primary-hover w-10 h-10 md:w-[61.29px] md:h-[56.91px] shrink-0 rounded-[8px] sm:rounded-[12.62px] center">
            <img src={logo} alt="Switch" className="size-5 md:size-[35px]" />
          </div>

          {/* Desktop nav – visible from md up */}
          <ul className="hidden md:flex bg-surface-elevated text-base h-full rounded-[15.76px] border border-secondary p-[6.13px] items-center gap-[8.76px] justify-center w-fit">
            {navItems.map((item, i) => {
              const isFirst = i === 0;
              const isLast = i === navItems.length - 1;
              const linkClass = cn(
                navLinkClass,
                isFirst && "rounded-l-[12.75px]",
                isLast && "rounded-r-[12.75px]"
              );

              if ("to" in item) {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={linkClass}
                  >
                    <item.icon className="size-4" />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </NavLink>
                );
              }
              return (
                <li key={item.label} className={cn(linkClass, "cursor-default")}>
                  <item.icon className="size-4" />
                  <span className="whitespace-nowrap">{item.label}</span>
                </li>
              );
            })}
          </ul>

          {/* Mobile: menu button only (Open app is in the right slot below) */}
          <div className="flex md:hidden shrink-0">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="bg-surface-elevated size-10 border border-secondary sm:rounded-[12px] rounded-[8px] p-2.5 center text-white hover:bg-white/5 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {
                menuOpen ?
                  <CloseIcon className="size-6" /> :
                  <MenuIcon className="size-6" />
              }
            </button>
          </div>

          {/* Open app – single button, right side, responsive sizing */}
          <div className="hidden md:block h-full">
            <button
              type="button"
              className="bg-primary-hover cursor-pointer text-primary center gap-2 md:gap-[7.66px] text-sm md:text-base px-4 md:px-[26.25px] h-9 md:h-full! shrink-0 rounded-[15px] border-0 font-inherit"
            >
              <BoxIcon className="size-4 md:size-5 shrink-0" />
              <span className="text-sm md:text-lg whitespace-nowrap">Open app</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay + panel */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          menuOpen ? "visible" : "invisible"
        )}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          onClick={closeMenu}
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity duration-200",
            menuOpen ? "opacity-100" : "opacity-0"
          )}
          aria-label="Close menu"
        />
        <aside
          className={cn(
            "absolute top-0 right-0 w-full max-w-sm h-full bg-surface-elevated border-l border-border shadow-xl flex flex-col transition-transform duration-200 ease-out",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-end p-4 border-b border-border">
            <button
              type="button"
              onClick={closeMenu}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <CloseIcon className="size-6" />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item) => {
              if ("to" in item) {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-base text-white hover:bg-white/10 [&.active]:bg-primary-hover [&.active]:text-primary transition-colors"
                    )}
                  >
                    <item.icon className="size-5 shrink-0" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              }
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-base text-white/80"
                >
                  <item.icon className="size-5 shrink-0" />
                  <span>{item.label}</span>
                </div>
              );
            })}
            <div className="mt-4 pt-4 border-t border-border">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base text-primary bg-primary-hover/20 hover:bg-primary-hover/30 transition-colors"
              >
                <BoxIcon className="size-5 shrink-0" />
                <span>Open app</span>
              </a>
            </div>
          </nav>
        </aside>
      </div>
    </Container>
  );
}
