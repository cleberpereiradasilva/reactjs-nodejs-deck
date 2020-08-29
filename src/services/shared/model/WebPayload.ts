export interface RequestPayload {
  url: string;
  method: "GET" | "POST";
  headers: JSON;
  body?: string;
}
