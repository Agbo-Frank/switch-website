import logo from "@/assets/logo/lime.png";
import {
  LightIcon,
  SearchIcon,
  StarIcon,
  DocsIcon,
  BoxIcon
} from "@/component/icons";
import Container from "@/component/material/container";

export default function Header() {
  return (
    <Container>
      <div className="h-[120px] center">
        <div className="flex justify-between h-[56.91px] items-center w-full max-w-[1100px] mx-auto">
          <div className="bg-primary-hover w-[61.29px] h-full rounded-[12.62px] center">
            <img src={logo} alt="logo" className="size-[35px]" />
          </div>
          <ul className="bg-surface-elevated text-base h-full rounded-[15.76px] border-secondary! border p-[6.13px] flex items-center gap-[8.76px]">
            <li className="center gap-[6.38px] px-[22.14px] rounded-l-[12.75px] rounded-[6.38px] border-secondary! cursor-pointer border h-full">
              <LightIcon className="size-4" />
              <span className="text-base">Collection</span>
            </li>
            <li className="center gap-[6.38px] px-[22.14px] rounded-[6.38px] border-secondary! border h-full">
              <SearchIcon className="size-4" />
              <span className="text-base">Coverage</span>
            </li>
            <li className="center gap-[6.38px] px-[22.14px] rounded-[6.38px] border-secondary! border h-full">
              <StarIcon className="size-4" />
              <span className="text-base">How it works</span>
            </li>
            <li className="center gap-[6.38px] px-[22.14px] rounded-r-[12.75px] rounded-[6.38px] border-secondary! border h-full">
              <DocsIcon className="size-4" />
              <span className="text-base">Documentation</span>
            </li>
          </ul>
          <div className="bg-primary-hover cursor-pointer text-[#85F0AE] center gap-[7.66px] text-base px-[26.25px] h-full rounded-[15px]">
            <BoxIcon className="size-5" />
            <p className="text-lg">Open app</p>
          </div>
        </div>
      </div>
    </Container>
  )
}