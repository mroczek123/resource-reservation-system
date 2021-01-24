import { ENV } from "@src/env/prod";
import axios, { AxiosResponse } from "axios";

export class ApiService {
  private static processRequest(method: RequestMethods, data: RequestData): Promise<AxiosResponse<any>> {
    const fullUrl = ENV.ApiUrl + data.relativeUrl;

    switch(method) {
      case "put":
        return axios.put(fullUrl, data.data);
      case "delete":
        return axios.delete(fullUrl, data.data);
      case "get":
        return axios.get(fullUrl, data.data);
      case "patch":
        return axios.patch(fullUrl, data.data);
      case "post":
        return axios.post(fullUrl, data.data);
    }
  }
  static async Get(data: RequestData): Promise<AxiosResponse<any>>{
    return ApiService.processRequest("get", data)
  }
  static async Post(data: RequestData): Promise<AxiosResponse<any>>{
    return ApiService.processRequest("post", data);
  }
  static async Put(data: RequestData): Promise<AxiosResponse<any>>{
    return ApiService.processRequest("put", data);
  }
  static async Patch(data: RequestData): Promise<AxiosResponse<any>>{
    return ApiService.processRequest("patch", data);
  }
  static async Delete(data: RequestData): Promise<AxiosResponse<any>>{
    return ApiService.processRequest("delete", data);
  }
}

export interface RequestData {
  relativeUrl: string;
  data?: Record<string | number, unknown>
}
type RequestMethods = "get" | "post" | "put" | "patch" | "delete";