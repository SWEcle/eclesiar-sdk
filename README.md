# Eclesiar SDK

Type-safe JavaScript / TypeScript client for the [Eclesiar](https://eclesiar.com) game API. For full API documentation, see [Eclesiar API](https://eclesiar.com/api).

![npm](https://img.shields.io/npm/v/eclesiar-sdk)

---

## Features

* **Strong Types** – every endpoint returns rich interfaces so you get autocompletion and compile-time safety.
* **Single entry point** – import `apiClient` and you have instant access to all API domains.
* **Tiny & tree-shakable** – no runtime dependencies, published as ES Modules.

---

## Installation

```bash
npm install eclesiar-sdk
# or
pnpm add eclesiar-sdk
```

---

## Quick start

```ts
import { apiClient, setToken } from 'eclesiar-sdk';

setToken('<your-api-token>');

(async () => {
  // Accounts
  const account = await apiClient.accounts.getAccount({ account_id: 123 });
  console.log(account.username);

  // Market
  const auctions = await apiClient.market.getAuctions();
  console.log('Current auctions:', auctions.length);
})();
```

Need other domains? Autocomplete will show:

```ts
apiClient.{ accounts | countries | market | server | statistics | wars }
```

---

## API Surface

| Domain      | Example methods                |
|-------------|--------------------------------|
| `accounts`  | `getAccount`, `getMyEquipment` |
| `countries` | `getCountries`, `getCountryRegions` |
| `market`    | `getAuctions`, `getCoinOffers`, `getItemOffers`, `getAuctionBid`, `getJobs` |
| `server`    | `getServerStatus`, `getServerItems`, `getServerEquipments` |
| `statistics`| `getStatistics` |
| `wars`      | `getWars`, `getWarRounds`, `getWarRoundHits` |


---

## Contributing

PRs and issues are welcome!

---
