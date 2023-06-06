"use client";
import Text from "./Text";
const Kontakt = ({ kontakt }) => {
  console.log(kontakt);
  return <Text header={"Kontakt"} text={kontakt[0]?.kontakt} padding={30} />;
};

export default Kontakt;
