# avoda
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

JavaScript client for Israeli [Avoda](http://www.havoda.org.il/) party's private membership API.

Implementation relies on an undocumented API used by [Avoda's membership check form](https://www.haavoda.com/Member/CheckMembership) and may break without notice. The code is provided for educational purposes only. Actual usage of this library is strongly discouraged, and may violate Avoda's terms of service. 

### Usage
Install the library with `npm install avoda`

```javascript
import AvodaClient from 'avoda';

const avoda = new AvodaClient();

const accountDetails = await avoda.getAccountDetails({
  id: '33094954' // Isaac "Bougie" Herzog
});

console.log(accountDetails);
// <- {"result":"11","name":"צח יצחק הרצוג","gender":"1"}
```

[downloads-image]: https://img.shields.io/npm/dm/avoda.svg

[npm-url]: https://npmjs.org/package/avoda
[npm-image]: https://img.shields.io/npm/v/avoda.svg
