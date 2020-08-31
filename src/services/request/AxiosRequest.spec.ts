import {RequestPayload} from "../shared/model/WebPayload";
import RequestInterface from "./RequestInterface";


class SutAxiosRequest implements RequestInterface{
        async execute(playload: RequestPayload): Promise<string>{
            return new Promise(resolve => resolve("valid_content"));
        }
 }


describe("AxiosRequest", () => {
    const sutAxiosRequest: RequestInterface = new SutAxiosRequest();
    const execute = jest.spyOn(sutAxiosRequest, "execute");
    test("Testing execute", () => {
        sutAxiosRequest.execute(null);
        expect(execute).toBeCalled();
        expect(execute).toBeCalledWith(null);

    })

})
