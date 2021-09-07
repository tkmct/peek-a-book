/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PeekABookInterface extends ethers.utils.Interface {
  functions: {
    "advertise(string,bool,uint256,string)": FunctionFragment;
    "advertisers(uint256)": FunctionFragment;
    "invalidate(uint256)": FunctionFragment;
    "maxID()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "advertise",
    values: [string, boolean, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "advertisers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "invalidate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "maxID", values?: undefined): string;

  decodeFunctionResult(functionFragment: "advertise", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "advertisers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "invalidate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxID", data: BytesLike): Result;

  events: {
    "Advertise(uint256,string,string,bool,uint256,string,address)": EventFragment;
    "Invalidate(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Advertise"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Invalidate"): EventFragment;
}

export class PeekABook extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PeekABookInterface;

  functions: {
    advertise(
      pair: string,
      buyOrSell: boolean,
      amount: BigNumberish,
      peerID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    advertisers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    invalidate(
      adID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    maxID(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  advertise(
    pair: string,
    buyOrSell: boolean,
    amount: BigNumberish,
    peerID: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  advertisers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  invalidate(
    adID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  maxID(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    advertise(
      pair: string,
      buyOrSell: boolean,
      amount: BigNumberish,
      peerID: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    advertisers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    invalidate(adID: BigNumberish, overrides?: CallOverrides): Promise<void>;

    maxID(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Advertise(
      adID?: null,
      pairIndex?: string | null,
      pair?: null,
      buyOrSell?: boolean | null,
      amount?: null,
      peerID?: null,
      advertiser?: string | null
    ): TypedEventFilter<
      [BigNumber, string, string, boolean, BigNumber, string, string],
      {
        adID: BigNumber;
        pairIndex: string;
        pair: string;
        buyOrSell: boolean;
        amount: BigNumber;
        peerID: string;
        advertiser: string;
      }
    >;

    Invalidate(adID?: null): TypedEventFilter<[BigNumber], { adID: BigNumber }>;
  };

  estimateGas: {
    advertise(
      pair: string,
      buyOrSell: boolean,
      amount: BigNumberish,
      peerID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    advertisers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    invalidate(
      adID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    maxID(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    advertise(
      pair: string,
      buyOrSell: boolean,
      amount: BigNumberish,
      peerID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    advertisers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    invalidate(
      adID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    maxID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}