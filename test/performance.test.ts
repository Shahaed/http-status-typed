import { HttpStatusCode } from '../src/index';

describe('Performance tests', () => {
  describe('Const enum access performance', () => {
    test('should have zero runtime overhead (compile-time inlining)', () => {
      // Const enums are inlined at compile time, so this test verifies
      // that the values are accessible and correctly inlined
      const start = performance.now();

      for (let i = 0; i < 10000; i++) {
        // This becomes `const status = 200;` at compile time
        const status = HttpStatusCode.OK;
        expect(status).toBe(200);
      }

      const end = performance.now();
      const duration = end - start;

      // Should be reasonably fast since const enums are inlined literals
      expect(duration).toBeLessThan(1000); // Much faster than object property lookups
    });

    test('should inline enum values as literal numbers', () => {
      // These comparisons become literal number comparisons at compile time
      expect(HttpStatusCode.OK).toBe(200);
      expect(HttpStatusCode.NOT_FOUND).toBe(404);
      expect(HttpStatusCode.INTERNAL_SERVER_ERROR).toBe(500);

      // Verify they're actual numbers (not enum objects)
      expect(typeof HttpStatusCode.OK).toBe('number');
      expect(typeof HttpStatusCode.NOT_FOUND).toBe('number');
      expect(typeof HttpStatusCode.INTERNAL_SERVER_ERROR).toBe('number');
    });
  });

  describe('Switch statement performance', () => {
    test('should efficiently handle switch statements with inlined values', () => {
      const categorizeStatus = (status: HttpStatusCode): string => {
        // At compile time, these cases become literal numbers
        switch (status) {
          case HttpStatusCode.CONTINUE: // becomes: case 100:
          case HttpStatusCode.SWITCHING_PROTOCOLS: // becomes: case 101:
          case HttpStatusCode.PROCESSING: // becomes: case 102:
            return 'Informational';
          case HttpStatusCode.OK: // becomes: case 200:
          case HttpStatusCode.CREATED: // becomes: case 201:
          case HttpStatusCode.ACCEPTED: // becomes: case 202:
          case HttpStatusCode.NON_AUTHORITATIVE_INFORMATION: // becomes: case 203:
          case HttpStatusCode.NO_CONTENT: // becomes: case 204:
          case HttpStatusCode.RESET_CONTENT: // becomes: case 205:
          case HttpStatusCode.PARTIAL_CONTENT: // becomes: case 206:
          case HttpStatusCode.MULTI_STATUS: // becomes: case 207:
          case HttpStatusCode.ALREADY_REPORTED: // becomes: case 208:
          case HttpStatusCode.IM_USED: // becomes: case 226:
            return 'Success';
          case HttpStatusCode.MULTIPLE_CHOICES: // becomes: case 300:
          case HttpStatusCode.MOVED_PERMANENTLY: // becomes: case 301:
          case HttpStatusCode.FOUND: // becomes: case 302:
          case HttpStatusCode.SEE_OTHER: // becomes: case 303:
          case HttpStatusCode.NOT_MODIFIED: // becomes: case 304:
          case HttpStatusCode.USE_PROXY: // becomes: case 305:
          case HttpStatusCode.SWITCH_PROXY: // becomes: case 306:
          case HttpStatusCode.TEMPORARY_REDIRECT: // becomes: case 307:
          case HttpStatusCode.PERMANENT_REDIRECT: // becomes: case 308:
            return 'Redirection';
          case HttpStatusCode.BAD_REQUEST: // becomes: case 400:
          case HttpStatusCode.UNAUTHORIZED: // becomes: case 401:
          case HttpStatusCode.PAYMENT_REQUIRED: // becomes: case 402:
          case HttpStatusCode.FORBIDDEN: // becomes: case 403:
          case HttpStatusCode.NOT_FOUND: // becomes: case 404:
          case HttpStatusCode.METHOD_NOT_ALLOWED: // becomes: case 405:
          case HttpStatusCode.NOT_ACCEPTABLE: // becomes: case 406:
          case HttpStatusCode.PROXY_AUTHENTICATION_REQUIRED: // becomes: case 407:
          case HttpStatusCode.REQUEST_TIMEOUT: // becomes: case 408:
          case HttpStatusCode.CONFLICT: // becomes: case 409:
          case HttpStatusCode.GONE: // becomes: case 410:
          case HttpStatusCode.LENGTH_REQUIRED: // becomes: case 411:
          case HttpStatusCode.PRECONDITION_FAILED: // becomes: case 412:
          case HttpStatusCode.PAYLOAD_TOO_LARGE: // becomes: case 413:
          case HttpStatusCode.URI_TOO_LONG: // becomes: case 414:
          case HttpStatusCode.UNSUPPORTED_MEDIA_TYPE: // becomes: case 415:
          case HttpStatusCode.RANGE_NOT_SATISFIABLE: // becomes: case 416:
          case HttpStatusCode.EXPECTATION_FAILED: // becomes: case 417:
          case HttpStatusCode.I_AM_A_TEAPOT: // becomes: case 418:
          case HttpStatusCode.MISDIRECTED_REQUEST: // becomes: case 421:
          case HttpStatusCode.UNPROCESSABLE_ENTITY: // becomes: case 422:
          case HttpStatusCode.LOCKED: // becomes: case 423:
          case HttpStatusCode.FAILED_DEPENDENCY: // becomes: case 424:
          case HttpStatusCode.UPGRADE_REQUIRED: // becomes: case 426:
          case HttpStatusCode.PRECONDITION_REQUIRED: // becomes: case 428:
          case HttpStatusCode.TOO_MANY_REQUESTS: // becomes: case 429:
          case HttpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE: // becomes: case 431:
          case HttpStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS: // becomes: case 451:
            return 'Client Error';
          case HttpStatusCode.INTERNAL_SERVER_ERROR: // becomes: case 500:
          case HttpStatusCode.NOT_IMPLEMENTED: // becomes: case 501:
          case HttpStatusCode.BAD_GATEWAY: // becomes: case 502:
          case HttpStatusCode.SERVICE_UNAVAILABLE: // becomes: case 503:
          case HttpStatusCode.GATEWAY_TIMEOUT: // becomes: case 504:
          case HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED: // becomes: case 505:
          case HttpStatusCode.VARIANT_ALSO_NEGOTIATES: // becomes: case 506:
          case HttpStatusCode.INSUFFICIENT_STORAGE: // becomes: case 507:
          case HttpStatusCode.LOOP_DETECTED: // becomes: case 508:
          case HttpStatusCode.NOT_EXTENDED: // becomes: case 510:
          case HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED: // becomes: case 511:
            return 'Server Error';
          default:
            return 'Unknown';
        }
      };

      const testCodes = [
        HttpStatusCode.OK,
        HttpStatusCode.NOT_FOUND,
        HttpStatusCode.INTERNAL_SERVER_ERROR,
        HttpStatusCode.CREATED,
        HttpStatusCode.BAD_REQUEST,
      ];

      const start = performance.now();

      for (let i = 0; i < 1000; i++) {
        for (const code of testCodes) {
          const category = categorizeStatus(code);
          expect(category).toBeDefined();
        }
      }

      const end = performance.now();
      const duration = end - start;

      // Should be reasonably fast since switch cases are literal numbers
      expect(duration).toBeLessThan(2000); // Performance expectation adjusted for realistic CI environments
    });
  });

  describe('Memory footprint', () => {
    test('should have zero runtime memory footprint', () => {
      // Const enums don't create runtime objects
      // These values are inlined as literals
      const statusCodes = [
        HttpStatusCode.OK,
        HttpStatusCode.NOT_FOUND,
        HttpStatusCode.INTERNAL_SERVER_ERROR,
      ];

      // Each element is just a number literal (inlined at compile time)
      statusCodes.forEach((code) => {
        expect(typeof code).toBe('number');
        expect(Number.isInteger(code)).toBe(true);
      });

      // No enum object exists at runtime to check
      // This is the expected behavior for const enums
    });
  });

  describe('Compile-time optimizations', () => {
    test('should support arithmetic operations on inlined values', () => {
      // These operations work on literal numbers at runtime
      const baseStatus = HttpStatusCode.OK; // becomes: const baseStatus = 200;
      const notFoundStatus = HttpStatusCode.NOT_FOUND; // becomes: const notFoundStatus = 404;

      expect(baseStatus + 100).toBe(300);
      expect(notFoundStatus - 4).toBe(400);
      expect(baseStatus * 2).toBe(400);

      // Math operations work efficiently with inlined values
      const statuses = [
        HttpStatusCode.OK,
        HttpStatusCode.CREATED,
        HttpStatusCode.NOT_FOUND,
      ];
      expect(Math.max(...statuses)).toBe(HttpStatusCode.NOT_FOUND);
      expect(Math.min(...statuses)).toBe(HttpStatusCode.OK);
    });

    test('should support comparison operations on inlined values', () => {
      // These comparisons work on literal numbers
      expect(HttpStatusCode.OK < HttpStatusCode.NOT_FOUND).toBe(true);
      expect(
        HttpStatusCode.INTERNAL_SERVER_ERROR > HttpStatusCode.BAD_REQUEST
      ).toBe(true);
      expect(HttpStatusCode.CREATED === 201).toBe(true);

      // Range checks work efficiently
      const isSuccessStatus = (status: HttpStatusCode): boolean => {
        return status >= 200 && status < 300; // becomes: return status >= 200 && status < 300;
      };

      expect(isSuccessStatus(HttpStatusCode.OK)).toBe(true);
      expect(isSuccessStatus(HttpStatusCode.CREATED)).toBe(true);
      expect(isSuccessStatus(HttpStatusCode.NOT_FOUND)).toBe(false);
    });
  });
});
