import axios, { AxiosInstance, AxiosResponse } from "axios";

import { NHTSAvPICClient } from "./lib/nhtsa-vpic";
import { StateCode, stateCodeMap, VehicleInfo } from "./types";

export class VehicleAuditor {
  private axios: AxiosInstance;
  public nhtsaClient: NHTSAvPICClient;
  public baseUrl: string = "https://api.state-license-lookup.workers.dev";

  constructor() {
    this.nhtsaClient = new NHTSAvPICClient();
    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    });

    this.axios.interceptors.request.use((config) => {
      delete config.headers["User-Agent"];
      return config;
    });
  }

  public async lookupLicensePlate(
    stateCode: StateCode,
    licensePlate: string
  ): Promise<AxiosResponse<VehicleInfo>> {
    return this.axios.get(this.baseUrl, {
      params: {
        state: stateCode,
        plate: licensePlate,
      },
      headers: {
        Origin: `https://${stateCodeMap
          .get(stateCode)
          ?.toLowerCase()}licenseplate.com`,
      },
    });
  }
}
