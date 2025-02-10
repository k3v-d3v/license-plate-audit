import axios, { AxiosInstance, AxiosResponse } from "axios";

/**
 * @description The NHTSA Product Information Catalog and Vehicle Listing (vPIC) is a consolidated platform that presents data collected within the manufacturer reported data from 49 CFR Parts 551 – 595 for use in a variety of modern tools. NHTSA’s vPIC platform is intended to serve as a centralized source for basic Vehicle Identification Number (VIN) decoding, Manufacturer Information Database (MID), Manufacturer Equipment Plant Identification and associated data. (https://vpic.nhtsa.dot.gov/)
 */
export class NHTSAvPICClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://vpic.nhtsa.dot.gov/api/vehicles/",
      headers: { "Content-Type": "application/json" },
    });
  }

  async decodeVinValues(
    vin: string,
    modelYear?: number
  ): Promise<AxiosResponse> {
    return await this.axiosInstance.get(`DecodeVinValues/${vin}`, {
      params: { format: "json", ...(modelYear && { modelyear: modelYear }) },
    });
  }

  async decodeVinValuesExtended(
    vin: string,
    modelYear?: number
  ): Promise<AxiosResponse> {
    return await this.axiosInstance.get(`DecodeVinValuesExtended/${vin}`, {
      params: { format: "json", ...(modelYear && { modelyear: modelYear }) },
    });
  }

  async decodeVinValuesBatch(
    vins: string[],
    modelYear?: number
  ): Promise<AxiosResponse> {
    return await this.axiosInstance.post("DecodeVINValuesBatch/", null, {
      params: {
        format: "json",
        data: vins.join(";"),
        ...(modelYear && { modelyear: modelYear }),
      },
    });
  }

  async getAllMakes(): Promise<AxiosResponse> {
    return await this.axiosInstance.get("GetAllMakes", {
      params: { format: "json" },
    });
  }

  async getAllManufacturers(): Promise<AxiosResponse> {
    return await this.axiosInstance.get("GetAllManufacturers", {
      params: { format: "json" },
    });
  }

  async getMakeForManufacturer(manufacturer: string): Promise<AxiosResponse> {
    return await this.axiosInstance.get(
      `GetMakeForManufacturer/${manufacturer}`,
      {
        params: { format: "json" },
      }
    );
  }

  async getManufacturerDetails(manufacturer: string): Promise<AxiosResponse> {
    return await this.axiosInstance.get(
      `GetManufacturerDetails/${manufacturer}`,
      {
        params: { format: "json" },
      }
    );
  }

  async getModelsForMake(make: string): Promise<AxiosResponse> {
    return await this.axiosInstance.get(`GetModelsForMake/${make}`, {
      params: { format: "json" },
    });
  }

  async getModelsForMakeId(makeId: number): Promise<AxiosResponse> {
    return await this.axiosInstance.get(`GetModelsForMakeId/${makeId}`, {
      params: { format: "json" },
    });
  }

  async getVehicleTypesForMake(make: string): Promise<AxiosResponse> {
    return await this.axiosInstance.get(`GetVehicleTypesForMake/${make}`, {
      params: { format: "json" },
    });
  }

  async getVehicleTypesForMakeId(makeId: number): Promise<AxiosResponse> {
    return await this.axiosInstance.get(`GetVehicleTypesForMakeId/${makeId}`, {
      params: { format: "json" },
    });
  }

  async getWMIsForManufacturer(manufacturer: string): Promise<AxiosResponse> {
    return await this.axiosInstance.get(
      `GetWMIsForManufacturer/${manufacturer}`,
      {
        params: { format: "json" },
      }
    );
  }

  async getEquipmentPlantCodes(manufacturer: string): Promise<AxiosResponse> {
    return await this.axiosInstance.get(
      `GetEquipmentPlantCodes/${manufacturer}`,
      {
        params: { format: "json" },
      }
    );
  }

  async getVehicleVariableList(): Promise<AxiosResponse> {
    return await this.axiosInstance.get("GetVehicleVariableList", {
      params: { format: "json" },
    });
  }

  async getVehicleVariableValuesList(variable: string): Promise<AxiosResponse> {
    return await this.axiosInstance.get(
      `GetVehicleVariableValuesList/${variable}`,
      {
        params: { format: "json" },
      }
    );
  }
}
