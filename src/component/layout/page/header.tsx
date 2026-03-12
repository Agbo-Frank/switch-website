import { useState, useEffect, useRef, useLayoutEffect } from "react";
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

const STICKY_SCROLL_THRESHOLD = 80;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyRevealed, setStickyRevealed] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const onScroll = () => {
      const shouldStick = window.scrollY > STICKY_SCROLL_THRESHOLD;
      if (shouldStick && !isSticky && headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
      setIsSticky(shouldStick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isSticky]);

  useLayoutEffect(() => {
    if (!isSticky) {
      setStickyRevealed(false);
      return;
    }
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setStickyRevealed(true));
    });
    return () => cancelAnimationFrame(id);
  }, [isSticky]);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass =
    "center gap-[6.38px] px-[22.14px] rounded-[6.38px] border border-secondary cursor-pointer h-full [&.active]:bg-primary-hover [&.active]:text-primary [&.active]:border-none";

  const headerContent = (
    <div className="h-16 lg:h-[120px] center">
        <div className="flex justify-between items-center w-full max-w-[1100px] mx-auto gap-3 min-h-12 lg:h-[56.91px]">
          {/* Logo */}
          <div className="bg-primary-hover w-10 h-10 lg:w-[61.29px] lg:h-[56.91px] shrink-0 rounded-[8px] sm:rounded-[12.62px] center">
            <img src={logo} alt="Switch" className="size-5 lg:size-[35px]" />
          </div>

          {/* Desktop nav – visible from md up */}
          <ul className="hidden lg:flex bg-surface-elevated text-base h-full rounded-[15.76px] border border-secondary p-[6.13px] items-center gap-[8.76px] justify-center w-fit">
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
          <div className="flex lg:hidden shrink-0">
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
          <div className="hidden lg:block h-full">
            <button
              type="button"
              className="bg-primary-hover cursor-pointer text-primary center gap-2 lg:gap-[7.66px] text-sm lg:text-base px-4 lg:px-[26.25px] h-9 lg:h-full! shrink-0 rounded-[15px] border-0 font-inherit"
            >
              <BoxIcon className="size-4 lg:size-5 shrink-0" />
              <span className="text-sm lg:text-lg whitespace-nowrap">Open app</span>
            </button>
          </div>
        </div>
      </div>
  );

  return (
    <>
      {/* Spacer to prevent layout jump when header becomes fixed */}
      {isSticky && <div style={{ height: headerHeight }} aria-hidden />}

      <div
        ref={headerRef}
        className={cn(
          "w-full transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isSticky && [
            "fixed top-0 left-0 right-0 z-40 border-b border-border",
            "bg-surface-elevated/95 backdrop-blur-md",
            "shadow-[0_4px_24px_-4px_rgba(0,0,0,0.25)]",
            stickyRevealed ? "translate-y-0" : "-translate-y-full",
          ]
        )}
      >
        <Container>
          {headerContent}
        </Container>
      </div>

      {/* Mobile menu overlay + panel */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
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
    </>
  );
}
