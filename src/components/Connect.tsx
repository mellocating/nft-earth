import { useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Button } from "@mui/material";

function Connect() {
  const { connectAsync } = useConnect();

  const handleAuth = async () => {
    const { account, chain } = await connectAsync({
      connector: new InjectedConnector(),
    });

    const userData = { address: account, chain: chain.id, network: "evm" };

    console.log(userData);
  };

  return (
    <div>
      <Button onClick={() => handleAuth()}>Connect Metamask</Button>
    </div>
  );
}

export default Connect;
