# Vehicle Auditor

Retrieve information about a license plate or VIN

## Getting Started

Install the package:

```sh
npm install @k3v-d3v/vehicle-auditor
```

Example usage:

```ts
import { VehicleAuditor } from "@k3v-d3v/vehicle-auditor";
import { AxiosError } from "axios";

async function main() {
  try {
    const auditor = new VehicleAuditor();
    const response = await auditor.lookupLicensePlate("CA", "ABC1234");
    const vehicleInfo = response.data;
    console.log(JSON.stringify(vehicleInfo, null, 2));
  } catch (err: unknown) {
    const error = err as AxiosError;
    console.error(error);
  }
}

main();
```

## Data Sources

Public VIN APIs:

- https://vpic.nhtsa.dot.gov/
  - https://vpic.nhtsa.dot.gov/api/

Public License Plate APIs:

- https://api.state-license-lookup.workers.dev - Requires you to manipulate header origin as https://<state_name>licenseplate.com
  - Originally found by introspecting the network requests on https://www.texaslicenseplate.com
    - NOTE: Some states may not be supported i.e. https://californialicenseplate.com

Requires reCAPTCHA:

- https://www.autocheck.com/consumer-api/meta/v1/summary/plate/<plate>/state/<state_code>
- https://clearvin.com

Requires Web Scraping:

- https://faxvin.com/license-plate-lookup
