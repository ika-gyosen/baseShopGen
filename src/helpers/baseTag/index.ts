import parser from "html-react-parser"; //html文字列がエスケープされてしまうので回避する
import baseTags from "./baseTags.json";

type KeysMatching<T, V> = keyof {
  [P in keyof T as T[P] extends V ? P : never]: any;
} &
  keyof T;

function BaseTag(tag: KeysMatching<typeof baseTags, object>) {
  const mode = process.env.NODE_ENV === "development" ? "dev" : "prod";
  return parser(baseTags[tag][mode]);
}

export default BaseTag;
