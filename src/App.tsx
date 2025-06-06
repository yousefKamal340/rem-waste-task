import React from 'react';
import SkipSelection from './pages/SkipSelection';
import { Skip } from './types/skip';

// Mock data from the provided JSON
const mockSkipData: Skip[] = [
  {
    "id": 17933,
    "size": 4,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 278,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:52.813",
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17934,
    "size": 6,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 305,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:52.992",
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17935,
    "size": 8,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 375,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.171",
    "allowed_on_road": true,
    "allows_heavy_waste": true
  }
];

function App() {
  return (
    <div className="App">
      <SkipSelection />
    </div>
  );
}

export default App;
