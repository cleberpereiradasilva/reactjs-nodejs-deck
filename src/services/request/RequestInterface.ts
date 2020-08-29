import { RequestPayload } from "../shared/model/WebPayload";

export default interface RequestInterface {
  execute(payload: RequestPayload): Promise<string>;
}
