import {
  DockerContainer,
  env,
  HostContainer,
} from "../../../domain/dockerCompose/models/DockerImage";

const formatImageName = (data: DockerContainer): string => {
  if (data.Tag != undefined) return data.Tag;
  return data.ImageName;
};
const formatIEArrayToStringArray = <T>(
  data?: HostContainer<T>[]
): string[] | undefined => data?.map(formatPrimitiveIEToString<T>);
const formatPrimitiveIEToString = <T>(e: HostContainer<T>): string =>
  [e.host, e.container].join(":");

const formatEnvVarToKVPObject = (data?: env[]): any =>
  data && {
    ...data?.reduce((acc, env) => {
      acc[env.key] = env.value;
      return acc;
    }, {}),
  };

export {
  formatImageName,
  formatEnvVarToKVPObject,
  formatIEArrayToStringArray,
  formatPrimitiveIEToString,
};
