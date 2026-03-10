import Container from "./component/material/container";
import Headers from "./component/material/header";
import bgImage from "./assets/image/bg/1.png";
import bg3Image from "./assets/image/bg/3.png";
import { PrimaryButton, SecondaryButton } from "./component/material/button";
import { RefreshIcon, CodeIcon } from "./component/icons";
import { cn } from "./utils";

function App() {
  return (
    <div className="bg-surface border-border text-white w-full min-h-screen">
      <Headers />
      <Container className={`bg-[url('${bgImage}')] bg-cover h-fit bg-center bg-no-repeat`}>
        <div
          className="center"
          style={{ height: "calc(100vh - 120px)" }}
        >
          <div className="space-y-[52.54px]">
            <div className="text-center space-y-[13px]">
              <h1 className="text-[87.56px] leading-[100.69px] font-semibold w-full max-w-[911px] mx-auto">Receive stablecoin. <br /> Get fiat in seconds.</h1>
              <p className="text-[45.34px] text-white/40 leading-[100%] block w-full max-w-[934px] mx-auto">Accept stablecoin payments, and get just settled  with your local currency instantly.</p>
            </div>
            <div className="center gap-[17.51px] h-[73px]">
              <PrimaryButton className="h-full w-fit px-10">
                <span className="text-[26.76px]! font-regular leading-[100%] font-tomato">Book a demo</span>
              </PrimaryButton>
              <SecondaryButton className="h-full w-fit px-10">
                <span className="text-[26.76px]! font-regular leading-[100%] font-tomato">Get started</span>
              </SecondaryButton>
            </div>
          </div>

        </div>
      </Container>
      <Container contentClassName="px-0">
        <div className="w-full flex items-stretch bg-surface-elevated">
          {
            [
              {
                icon: <RefreshIcon size={30} className="size-8 text-[#85F0AE]" />,
                title: "Automated payout routing",
                description: "Route deposits between crypto or fiat settlement without delays.",
              },
              {
                icon: <CodeIcon size={35} className="size-8 text-[#85F0AE]" />,
                title: "Real time webhooks",
                description: "Instant webhook notification for deposit and settlement events.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={cn("border-r py-10 border-border flex flex-1 flex-col gap-[13px] items-center justify-center", { "border-r-0": index === 1 })}
              >
                {item.icon}
                <div className="gap-[6.13px] flex flex-col text-center max-w-[433px]">
                  <span className="text-[28.33px] text-white font-tomato leading-[100%]">{item.title}</span>
                  <span className="text-[29.34px] font-tomato text-white/40 leading-[100%]">{item.description}</span>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
      <Container>
        <div className="w-full max-w-[980px] py-[70px] flex items-start gap-[60px] mx-auto">
          <span className="text-[50px] leading-[100%] font-tomato">A truly global layer for stablecoin payment.</span>
          <div className="flex flex-col gap-[26.27px]">
            <span className="text-[30px] leading-[100%] font-tomato text-white/40">
              Integrate Stablecoins deposits that powers real-world flows
            </span>
            <div>
              <PrimaryButton className="py-[17.51px] max-h-[67px] px-[40px] inline-flex">
                Book a demo
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
      <Container className={`bg-[url('${bg3Image}')] bg-cover h-fit bg-center bg-no-repeat`}>
        <div className={`w-full py-[70px] center h-full`}>
          <span className="text-[87px] text-center font-tomato font-regular leading-[57px]">How it works</span>
        </div>
      </Container>
    </div>
  )
}

export default App
