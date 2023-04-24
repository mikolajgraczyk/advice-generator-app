import { ReactComponent as DiceIcon } from "./images/DiceIcon.svg";
import { ReactComponent as DividerDesktop } from "./images/DividerDesktop.svg";
import { ReactComponent as DividerMobile } from "./images/DividerMobile.svg";

import ContainerContent from "./ContainerContent";

import { useQuery } from "@tanstack/react-query";
import { getAdvice } from "./getAdvice";

const Container = () => {
  const { isLoading, error, data, refetch } = useQuery(["advice"], getAdvice);

  return (
    <main className="bg-darkGrayishBlue max-w-[540px] px-[48px] pt-[48px] pb-[72px] relative rounded-[15px] shadow-[30px_50px_80px_rgba(0,0,0,0.100202)] max-mobile:px-[10px] max-mobile:pt-[40px] max-mobile:pb-[64px] max-mobile:max-w-[540px] mobile:w-full">
      <ContainerContent data={data} error={error} isLoading={isLoading} />
      <DividerDesktop className="mt-[40px] max-mobile:hidden" />
      <DividerMobile className="hidden max-mobile:block my-[24px] mx-auto"/>
      <button className="bg-neonGreen w-[64px] h-[64px] rounded-full absolute bottom-[-32px] left-1/2 translate-x-[-50%] hover:cursor-pointer active:shadow-[0px_0px_40px_rgba(83,255,170,1)]" onClick={() => refetch()}>
        <DiceIcon className="mx-auto"/>
      </button>
    </main>
  );
};

export default Container;
