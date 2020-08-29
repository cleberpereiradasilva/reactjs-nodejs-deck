import RequestInterface from "./RequestInterface";
import { RequestPayload } from "../shared/model/WebPayload";

export default class FetchRequest implements RequestInterface {
  async execute(props: RequestPayload): Promise<string> {
    try {
      const response = await fetch(props.url, {
        method: props.method,
        headers: props.headers,
        body: props.body,
      });
      const content = await response.text();
      return content;
    } catch (error) {
      console.log(error);
    }
  }
}
