import Advice from "./Advice";

const ContainerContent = ({ data, error, isLoading }) => {
  if (isLoading) {
    return <Advice content="Loading..." />;
  }

  if (error) {
    return <Advice content="ERROR" />;
  }

  if (data) {
    return (
      <>
        <div className="text-center tracking-[4px] text-[13px] text-neonGreen">ADVICE #{data.slip.id}</div>
        <Advice content={data.slip.advice} />
      </>
    );
  }
};

export default ContainerContent;
