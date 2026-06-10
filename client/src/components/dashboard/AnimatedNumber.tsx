import CountUp from "react-countup";

interface Props {
  value: number;
  suffix?: string;
}

export default function AnimatedNumber({
  value,
  suffix = "",
}: Props) {
  return (
    <CountUp
      end={value}
      duration={2}
      suffix={suffix}
    />
  );
}