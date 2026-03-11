import { CodeIcon, RefreshIcon } from "@/component/icons";
import { PrimaryButton, SecondaryButton } from "@/component/material/button";
import Container from "@/component/material/container";
import { cn } from "@/utils";
import walletBalance from "@/assets/image/interface/wallet-balance.png";
import depositQR from "@/assets/image/interface/deposit-qr.png";
import chooseCurrency from "@/assets/image/interface/choose-currency.png";
import { SectionDescription, SectionTitle } from "@/component/material/section";

export default function Home() {
  return (
    <>
      <Container className={`bg-[url('/src/assets/image/bg/1.png')] bg-cover h-fit bg-center bg-no-repeat`}>
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
        <div className="w-full max-w-[980px] py-[70px] flex items-start justify-between mx-auto">
          <SectionTitle>A truly global layer for stablecoin payment.</SectionTitle>
          <div className="flex flex-col gap-[26.27px]">
            <SectionDescription>
              Integrate Stablecoins deposits that powers real-world flows
            </SectionDescription>
            <div>
              <PrimaryButton className="py-[17.51px] max-h-[67px] px-[40px] inline-flex">
                Book a demo
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
      <Container className={`bg-[url('/src/assets/image/bg/3.png')] bg-cover h-fit bg-center bg-no-repeat`}>
        <div className={`w-full py-[70px] center h-full`}>
          <span className="text-[87px] text-center font-tomato font-regular leading-[57px]">How it works</span>
        </div>
      </Container>
      <Container>
        <div className="flex items-stretch justify-between py-[70px] w-full max-w-[980px] mx-auto">
          <div className="flex flex-col justify-between w-full max-w-[500px]">
            <div className="space-y-[13px] w-full">
              <SectionTitle>One Balance. Any Stablecoin. Any Chain</SectionTitle>
              <SectionDescription>Single point of interaction and flow  across EVM and Solana blockchains.</SectionDescription>
            </div>
            <div>
              <ul className="h-[2.63px] flex gap-[2px]">
                <li className="bg-[#85F0AE] w-full max-w-[17.51px] h-full inline-block rounded-full" />
                <li className="bg-white w-full max-w-[17.51px] h-full inline-block rounded-full" />
                <li className="bg-white w-full max-w-[17.51px] h-full inline-block rounded-full" />
              </ul>
            </div>
          </div>
          <div>
            <img src={walletBalance} className="w-[368.62px] h-auto" alt="image" />
          </div>
        </div>
      </Container>
      <Container contentClassName="px-0 bg-surface-elevated">
        <div className="items-start justify-between flex py-[70px] w-full max-w-[980px] mx-auto">
          <div>
            <img src={depositQR} className="w-[390px] h-auto" alt="image" />
          </div>
          <div className="flex flex-col gap-[43.78px] max-w-[517px]">
            <div className="space-y-[13px]">
              <SectionTitle>No barriers. No limits. Max speed</SectionTitle>
              <SectionDescription>Everything you need to collect and payout stablecoins</SectionDescription>
            </div>
            <PrimaryButton className="h-full w-fit py-[20.25px] px-10">
              <span className="text-[26.76px]! font-regular leading-[100%] font-tomato">View documentation</span>
            </PrimaryButton>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex items-stretch justify-between py-[70px] w-full max-w-[980px] mx-auto">
          <div className="flex flex-col justify-between w-full max-w-[500px]">
            <div className="space-y-[13px] w-full">
              <SectionTitle>Cross border and local payment settlement.</SectionTitle>
              <SectionDescription>Collect stablecoin from any chain and instantly convert to any local currency.</SectionDescription>
            </div>
            <div>
              <ul className="h-[2.63px] flex gap-[2px]">
                <li className="bg-[#85F0AE] w-full max-w-[17.51px] h-full inline-block rounded-full" />
                <li className="bg-white w-full max-w-[17.51px] h-full inline-block rounded-full" />
                <li className="bg-white w-full max-w-[17.51px] h-full inline-block rounded-full" />
              </ul>
            </div>
          </div>
          <div>
            <img src={chooseCurrency} className="w-[390px] h-auto" alt="image" />
          </div>
        </div>
      </Container>
      <Container contentClassName="px-0 bg-surface-elevated">
        <div className="center py-[70px]">
          <div className="w- full max-w-[733px] flex flex-col gap-[35.02px] text-center mx-auto">
            <div className="space- y-[13px]">
              <SectionTitle>No barriers. No limits. Max speed</SectionTitle>
              <SectionDescription>Everything you need to collect and payout stablecoins</SectionDescription>
            </div>
            <div className="center gap-[17.51px] h-[72px]">
              <PrimaryButton className="h-full w-fit px-10">
                <span className="text-[26.76px]! font-regular leading-[100%] font-tomato">Book a demo</span>
              </PrimaryButton>
              <SecondaryButton className="h-full w-fit px-10">
                <span className="text-[26.76px]! font-regular leading-[100%] font-tomato">View documentation</span>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </Container >
    </>
  )
}