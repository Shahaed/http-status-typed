# HTTP Status Typed

A zero runtime size impact enums of HTTP status codes.

[![npm version](https://img.shields.io/npm/v/http-status-typed)](https://www.npmjs.com/package/http-status-typed)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](package.json)
[![Package Size](https://img.shields.io/bundlephobia/minzip/http-status-typed)](https://bundlephobia.com/result?p=http-status-typed)
[![npm downloads](https://img.shields.io/npm/dm/http-status-typed)](https://www.npmjs.com/package/http-status-typed)
[![CI](https://github.com/Shahaed/http-status-typed/workflows/CI/badge.svg)](https://github.com/Shahaed/http-status-typed/actions/workflows/ci.yml)

---

⚠️ Verify Configuration: Package **only works with Typescript** and projects using `isolatedModules` must enable `preserveConstEnums`

## Description

Utility to use HTTP status codes as an enum. Provides a better DX for readability and useability.

- ✅ **Zero runtime cost**: Compile-time inlining with no JavaScript footprint
- ✅ **Complete**: All standard HTTP status codes (1xx-5xx)
- ✅ **Type-safe**: Full TypeScript const enum with proper typing
- ✅ **Standards compliant**: Follows RFC 7231, RFC 4918, and other HTTP RFCs
- ✅ **Well documented**: Each status code includes detailed JSDoc comments
- ✅ **Zero dependencies**: Lightweight and fast
- ✅ **IntelliSense support**: Full autocomplete and documentation in your IDE

## This package uses a `const enum`

HTTP status codes are perfect candidates for `const enums` because:

- **Compile-time inlining**: `HttpStatusCode.OK` becomes `200` in your compiled JavaScript
- **Zero runtime overhead**: No object lookup, no bundle size increase
- **Type safety**: Full TypeScript type checking and IntelliSense support

## Installation

```console
npm install http-status-typed --save
```

## Usage

```typescript
import { HttpStatusCode } from 'http-status-typed';
// or use an alias
import Status from 'http-status-typed';

interface ApiResponse {
  status: Status;
  response: object;
}

function handleResponse(): ApiResponse {
  return {
    status: Status.OK, // Or use 200. Both are type valid.
    response: {
      body: '😎',
    },
  };
}

// Switch statements work perfectly
function handleResponse(status: HttpStatusCode): string {
  switch (status) {
    case HttpStatusCode.OK:
      return 'Success';
    case HttpStatusCode.NOT_FOUND:
      return 'Not Found';
    case HttpStatusCode.INTERNAL_SERVER_ERROR:
      return 'Server Error';
    default:
      return 'Unknown';
  }
}

// Type safety with function parameters
interface ApiResponse {
  status: HttpStatusCode;
  data: any;
}

function createResponse(status: HttpStatusCode, data: any): ApiResponse {
  return { status, data };
}

// Usage examples
const successResponse = createResponse(HttpStatusCode.CREATED, { id: 123 });
const errorResponse = createResponse(HttpStatusCode.BAD_REQUEST, {
  error: 'Invalid input',
});
```

## Compiled Output

**Your TypeScript:**

```typescript
import { HttpStatusCode } from 'http-status-typed';

if (response.status === HttpStatusCode.OK) {
  console.log('Success!');
}
```

**Compiled JavaScript:**

```javascript
if (response.status === 200 /* OK */) {
  console.log('Success!');
}
```

Notice how `HttpStatusCode.OK` becomes `200` with a helpful comment!

## Available Status Codes

### Informational (1xx)

- `CONTINUE` (100)
- `SWITCHING_PROTOCOLS` (101)
- `PROCESSING` (102)

### Success (2xx)

- `OK` (200)
- `CREATED` (201)
- `ACCEPTED` (202)
- `NON_AUTHORITATIVE_INFORMATION` (203)
- `NO_CONTENT` (204)
- `RESET_CONTENT` (205)
- `PARTIAL_CONTENT` (206)
- `MULTI_STATUS` (207)
- `ALREADY_REPORTED` (208)
- `IM_USED` (226)

### Redirection (3xx)

- `MULTIPLE_CHOICES` (300)
- `MOVED_PERMANENTLY` (301)
- `FOUND` (302)
- `SEE_OTHER` (303)
- `NOT_MODIFIED` (304)
- `USE_PROXY` (305)
- `SWITCH_PROXY` (306)
- `TEMPORARY_REDIRECT` (307)
- `PERMANENT_REDIRECT` (308)

### Client Error (4xx)

- `BAD_REQUEST` (400)
- `UNAUTHORIZED` (401)
- `PAYMENT_REQUIRED` (402)
- `FORBIDDEN` (403)
- `NOT_FOUND` (404)
- `METHOD_NOT_ALLOWED` (405)
- `NOT_ACCEPTABLE` (406)
- `PROXY_AUTHENTICATION_REQUIRED` (407)
- `REQUEST_TIMEOUT` (408)
- `CONFLICT` (409)
- `GONE` (410)
- `LENGTH_REQUIRED` (411)
- `PRECONDITION_FAILED` (412)
- `PAYLOAD_TOO_LARGE` (413)
- `URI_TOO_LONG` (414)
- `UNSUPPORTED_MEDIA_TYPE` (415)
- `RANGE_NOT_SATISFIABLE` (416)
- `EXPECTATION_FAILED` (417)
- `I_AM_A_TEAPOT` (418)
- `MISDIRECTED_REQUEST` (421)
- `UNPROCESSABLE_ENTITY` (422)
- `LOCKED` (423)
- `FAILED_DEPENDENCY` (424)
- `UPGRADE_REQUIRED` (426)
- `PRECONDITION_REQUIRED` (428)
- `TOO_MANY_REQUESTS` (429)
- `REQUEST_HEADER_FIELDS_TOO_LARGE` (431)
- `UNAVAILABLE_FOR_LEGAL_REASONS` (451)

### Server Error (5xx)

- `INTERNAL_SERVER_ERROR` (500)
- `NOT_IMPLEMENTED` (501)
- `BAD_GATEWAY` (502)
- `SERVICE_UNAVAILABLE` (503)
- `GATEWAY_TIMEOUT` (504)
- `HTTP_VERSION_NOT_SUPPORTED` (505)
- `VARIANT_ALSO_NEGOTIATES` (506)
- `INSUFFICIENT_STORAGE` (507)
- `LOOP_DETECTED` (508)
- `NOT_EXTENDED` (510)
- `NETWORK_AUTHENTICATION_REQUIRED` (511)

## Requirements

### TypeScript Configuration

**Required**: Your project must use TypeScript with proper configuration.

**For projects using `isolatedModules`** (Next.js 13+, Vite + SWC, etc.):

```json
{
  "compilerOptions": {
    "isolatedModules": true,
    "preserveConstEnums": true // ← REQUIRED only for isolatedModules
  }
}
```

**For regular TypeScript projects**: No special configuration needed! Const enums work out of the box.

### Module System Compatibility

✅ **Works with both CommonJS and ES Modules**:

```typescript
// ES Modules (recommended)
import { HttpStatusCode } from 'http-status-typed';

// CommonJS (also supported)
import { HttpStatusCode } from 'http-status-typed'; // compiles to CJS
```

The const enum values are inlined at compile time, so the module system doesn't matter at runtime.

### Compatible Build Tools

✅ **Fully Compatible (no config needed):**

- TypeScript compiler (`tsc`)
- Webpack with `ts-loader`
- Rollup with TypeScript plugin
- esbuild with TypeScript support
- Create React App with TypeScript template

⚠️ **Requires Configuration:**

- Next.js 13+ (set `preserveConstEnums: true`)
- Vite + SWC (set `preserveConstEnums: true`)
- Any tool using `isolatedModules`

❌ **Not Compatible:**

- Plain JavaScript projects
- Babel without TypeScript preset
- Tools that don't understand const enums

## Changelog

Version 1.0.1 significantly reduces the size of the package. Good for browsers now.

Version 1.0.2 supports both CommonJS and ES Modules but doubles the size of the package (since we're now publishing two files).

Version 2.0.0 only supports ES Modules.

Version 2.0.1 removes unneeded artifacts and reduces the size of the package.

Version 3.0.0 changes `enum` to `const enum` to reduce the runtime size of the package to 0kb. No longer supports JavaScript projects since there is not javascript exports. For more information, see [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/enums.html#const-enums).

### Migration from v2.0.x

If you were using the regular enum version:

1. **Ensure TypeScript is configured correctly**
2. **Add `preserveConstEnums: true` if using `isolatedModules`**
3. **Your code should work unchanged** - the API is identical
4. **Enjoy zero bundle size impact!**

## Framework-Specific Setup

### Next.js 13+

```json
// tsconfig.json
{
  "compilerOptions": {
    "isolatedModules": true,
    "preserveConstEnums": true
  }
}
```

### Vite + SWC

```json
// tsconfig.json
{
  "compilerOptions": {
    "isolatedModules": true,
    "preserveConstEnums": true
  }
}
```

### Webpack + ts-loader

No additional configuration needed - works out of the box!

### Create React App

Works with TypeScript template out of the box!

## Testing

This package includes a comprehensive test suite validating all HTTP status codes:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Suite

- **85+ test cases** covering all HTTP status codes
- **3 test suites**: Core functionality, module exports, and completeness validation
- **Const enum verification**: Ensures all status codes compile to correct numeric values
- **Type safety testing** for TypeScript compatibility
- **Performance validation** for compile-time inlining behavior

_Note: Coverage reporting is not applicable for const enums since they produce no runtime JavaScript code - all values are inlined at compile time._

## FAQ

### Q: Why did you switch to const enum?

**A:** Const enums provide zero runtime overhead while maintaining full type safety. For HTTP status codes that are compile-time constants, this is the perfect solution.

### Q: Can I use this in JavaScript projects?

**A:** No, this package is now TypeScript-only. The compiled JavaScript is just `export {};` because const enums are inlined.

### Q: What if I'm using isolatedModules?

**A:** You must set `preserveConstEnums: true` in your TypeScript configuration. This is required for Next.js 13+, Vite + SWC, and similar tools.

### Q: Do I need special TypeScript configuration?

**A:** Only if you're using `isolatedModules` (Next.js 13+, Vite + SWC). Regular TypeScript projects work out of the box!

### Q: Will this break my existing code?

**A:** The API is identical to the previous enum version. Only the implementation changed to const enum.

### Q: How does bundle size compare?

**A:** Bundle size is now **zero** because const enums are compile-time constructs that get inlined as literals.

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Clean build artifacts
npm run clean

# Validate everything
npm run validate
```

## License

MIT
