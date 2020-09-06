import { Dimensions, Platform } from "react-native";
export const isProduction = "development";
export const isWeb = Platform.OS === "web";
export const isAndroid = Platform.OS === "android";
export const isIos = Platform.OS === "ios";

export const isUndefined = (item: any) => item === undefined;
export const isNull = (item: any) => item === null;
export const isNullOrUndefined = (item: any) => item === undefined || item === null;
export const { width: dWidth, height: dHeight } = Dimensions.get("window");
