import RequestInterface from "./RequestInterface";
import { RequestPayload } from "../shared/model/WebPayload";
import axios from "axios";

export default class AxiosRequest implements RequestInterface {
  async execute(props: RequestPayload): Promise<string>   {
    try {
      const response = await axios({
        url: props.url,
        method: props.method,
        headers: props.headers,
        data: props.body,
      });
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
