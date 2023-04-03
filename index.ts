import { AccountInterface, Contract, ProviderInterface } from "starknet";
import {
  Abi,
  ExtractAbiFunctionName,
  FunctionArgs,
  FunctionRet,
  Functions,
} from "./kanabi";

export function call<
  TAbi extends Abi,
  TFunctionName extends ExtractAbiFunctionName<TAbi>
>(
  abi: TAbi,
  f: TFunctionName,
  args: FunctionArgs<TAbi, TFunctionName>
): FunctionRet<TAbi, TFunctionName> {
  throw new Error("todo");
}

export function getContract<TAbi extends Abi>({
  abi,
  address,
  account,
}: {
  abi: TAbi;
  address: string;
  account?: AccountInterface | ProviderInterface | undefined;
}) {
  const contract = new Contract(abi as any, address, account);

  return contract as Contract & Functions<TAbi>;
}
