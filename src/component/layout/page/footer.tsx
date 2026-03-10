import Container from "@/component/material/container"
import logo from "@/assets/logo/with-text.png";
import { LinkedinIcon } from "@/component/icons";

export default function Footer() {
  return (
    <>
      <Container>
        <div className="w-full max-w-[1100px] mx-auto flex justify-between items-center py-[44px]">
          <div className="flex items-center gap-[26.27px]">
            <img src={logo} alt="logo" className="w-auto h-[33px]" />
            <div className="h-[50px] border-r border-[#D9D9D933]" />
            <span className="text-white/30 text-[35.02px] font-tomato leading-[100%]">
              Stablecoin account for global businesses
            </span>
          </div>
          <div className="flex items-center gap-5">
            <LinkedinIcon className="size-[34.4px]" />
            <LinkedinIcon className="size-[34.4px]" />
            <LinkedinIcon className="size-[34.4px]" />
          </div>
        </div>
      </Container >
      <Container>
        <div className="w-full max-w-[1100px] mx-auto flex justify-between items-center py-[38px]">
          <span className="text-white/40 text-[30px] font-tomato leading-[100%]">©2026 - Switch Labs Inc.</span>
          <ul className="flex items-center gap-[26px] text-white/40 text-[30px] font-tomato">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>AML Policy</li>
          </ul>
        </div>
      </Container >
    </>
  )
}