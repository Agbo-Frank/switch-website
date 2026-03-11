import { CodeIcon, RefreshIcon } from "@/component/icons";
import { PrimaryButton, SecondaryButton } from "@/component/material/button";
import Container from "@/component/material/container";
import { cn } from "@/utils";
import walletBalance from "@/assets/image/interface/wallet-balance.png";
import depositQR from "@/assets/image/interface/deposit-qr.png";
import chooseCurrency from "@/assets/image/interface/choose-currency.png";
import { SectionDescription, SectionTitle } from "@/component/material/section";
import Hero from "@/component/material/hero";

export default function Home() {
  return (
    <>
      <Hero
        title={<>Receive stablecoin. <br /> Get fiat in seconds.</>}
        description="Accept stablecoin payments, and get just settled  with your local currency instantly."
        primaryBtnText="Book a demo"
        secondaryBtnText="Get started"
        className="bg-[url('/src/assets/image/bg/1.png')] bg-cover h-fit bg-center bg-no-repeat"
      />
      <Container contentClassName="px-0">
        <div className="w-full flex flex-col md:flex-row items-stretch bg-surface-elevated">
          {
            [
              {
                icon: <RefreshIcon size={30} className="sm:size-8 size-6 text-primary" />,
                title: "Automated payout routing",
                description: "Route deposits between crypto or fiat settlement without delays.",
              },
              {
                icon: <CodeIcon size={35} className="sm:size-8 size-6 text-primary" />,
                title: "Real time webhooks",
                description: "Instant webhook notification for deposit and settlement events.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={cn(
                  "border-b md:border-b-0 md:border-r py-8 sm:py-10 border-border flex flex-1 flex-col gap-3 sm:gap-[13px] items-center justify-center px-4",
                  index === 1 && "md:border-r-0 border-b-0"
                )}
              >
                {item.icon}
                <div className="gap-1.5 sm:gap-[6.13px] flex flex-col text-center max-w-[433px]">
                  <span className="text-xl sm:text-[28.33px] text-white font-tomato leading-[100%]">{item.title}</span>
                  <span className="text-base sm:text-[29.34px] font-tomato text-white/40 leading-[100%]">{item.description}</span>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
      <Container>
        <div className="w-full max-w-[980px] py-10 sm:py-[70px] flex flex-col lg:flex-row items-start justify-between sm:gap-8 gap-2 mx-auto">
          <SectionTitle className="max-w-[500px] text-center sm:text-left">A truly global layer for stablecoin payment.</SectionTitle>
          <div className="flex flex-col gap-6 sm:gap-[26.27px]">
            <SectionDescription className="text-center sm:text-left">
              Integrate Stablecoins deposits that powers real-world flows
            </SectionDescription>
            <div>
              <PrimaryButton className="h-14 sm:h-[67px] px-6 sm:px-[40px] inline-flex w-full sm:w-auto">
                <span className="text-[18px] sm:text-[26.76px]! font-regular sm:leading-[100%] font-tomato">Book a demo</span>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
      <Container className="bg-[url('/src/assets/image/bg/3.png')] bg-cover h-fit bg-center bg-no-repeat">
        <div className="w-full py-10 sm:py-[70px] center h-full">
          <span className="text-4xl sm:text-6xl lg:text-[87px] text-center font-tomato font-normal leading-tight">How it works</span>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 py-10 sm:py-[70px] w-full max-w-[980px] mx-auto">
          <div className="flex flex-col justify-between gap-14 sm:gap-0 w-full max-w-[500px] order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-[13px] w-full text-center sm:text-left">
              <SectionTitle>One Balance. Any Stablecoin. Any Chain</SectionTitle>
              <SectionDescription>Single point of interaction and flow  across EVM and Solana blockchains.</SectionDescription>
            </div>
            <div>
              <ul className="h-[2.63px] w-fit mx-auto sm:mx-0 flex gap-[2px]">
                <li className="bg-primary w-[17.51px] h-full inline-block rounded-full" />
                <li className="bg-white w-[17.51px] h-full inline-block rounded-full" />
                <li className="bg-white w-[17.51px] h-full inline-block rounded-full" />
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <img src={walletBalance} className="w-full max-w-[368.62px] h-auto" alt="Wallet balance" />
          </div>
        </div>
      </Container>
      <Container contentClassName="bg-surface-elevated">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 py-10 sm:py-[70px] w-full max-w-[980px] mx-auto">
          <div>
            <img src={depositQR} className="w-full max-w-[390px] h-auto mx-auto lg:mx-0" alt="Deposit QR" />
          </div>
          <div className="flex flex-col justify-between gap-8 sm:gap-[43.78px] max-w-[517px] w-full">
            <div className="space-y-[43.78px]">
              <div className="space-y-3 sm:space-y-[13px]">
                <SectionTitle className="text-center sm:text-left">Collect deposits using <br /> Payment link or embed</SectionTitle>
                <SectionDescription className="text-center sm:text-left">Create deposit addresses in seconds to route payout to fiat or stablecoins.</SectionDescription>
              </div>

              <PrimaryButton className="w-full sm:w-auto py-4 sm:py-[20.25px] px-10">
                <span className="text-lg sm:text-[26.76px]! font-regular leading-[100%] font-tomato">View documentation</span>
              </PrimaryButton>
            </div>
            <div>
              <ul className="h-[2.63px] w-fit mx-auto sm:mx-0 flex gap-[2px]">
                <li className="bg-primary w-[17.51px] h-full inline-block rounded-full" />
                <li className="bg-white w-[17.51px] h-full inline-block rounded-full" />
                <li className="bg-white w-[17.51px] h-full inline-block rounded-full" />
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 py-10 sm:py-[70px] w-full max-w-[980px] mx-auto">
          <div className="flex flex-col justify-between gap-14 sm:gap-0 w-full max-w-[500px] order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-[13px] w-full text-center sm:text-left">
              <SectionTitle>Cross border and local payment settlement.</SectionTitle>
              <SectionDescription>Collect stablecoin from any chain and instantly convert to any local currency.</SectionDescription>
            </div>
            <div className="">
              <ul className="h-[2.63px] w-fit mx-auto sm:mx-0 flex gap-[2px]">
                <li className="bg-primary w-[17.51px] h-full inline-block rounded-full" />
                <li className="bg-white w-[17.51px] h-full inline-block rounded-full" />
                <li className="bg-white w-[17.51px] h-full inline-block rounded-full" />
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <img src={chooseCurrency} className="w-full max-w-[390px] h-auto" alt="Choose currency" />
          </div>
        </div>
      </Container>
    </>
  )
}