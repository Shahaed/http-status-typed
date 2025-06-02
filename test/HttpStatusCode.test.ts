import { HttpStatusCode } from '../src/index';
import Status from '../src/index';

describe('HttpStatusCode', () => {
  describe('Informational responses (1xx)', () => {
    test('should have correct CONTINUE status code', () => {
      expect(HttpStatusCode.CONTINUE).toBe(100);
    });

    test('should have correct SWITCHING_PROTOCOLS status code', () => {
      expect(HttpStatusCode.SWITCHING_PROTOCOLS).toBe(101);
    });

    test('should have correct PROCESSING status code', () => {
      expect(HttpStatusCode.PROCESSING).toBe(102);
    });
  });

  describe('Successful responses (2xx)', () => {
    test('should have correct OK status code', () => {
      expect(HttpStatusCode.OK).toBe(200);
    });

    test('should have correct CREATED status code', () => {
      expect(HttpStatusCode.CREATED).toBe(201);
    });

    test('should have correct ACCEPTED status code', () => {
      expect(HttpStatusCode.ACCEPTED).toBe(202);
    });

    test('should have correct NON_AUTHORITATIVE_INFORMATION status code', () => {
      expect(HttpStatusCode.NON_AUTHORITATIVE_INFORMATION).toBe(203);
    });

    test('should have correct NO_CONTENT status code', () => {
      expect(HttpStatusCode.NO_CONTENT).toBe(204);
    });

    test('should have correct RESET_CONTENT status code', () => {
      expect(HttpStatusCode.RESET_CONTENT).toBe(205);
    });

    test('should have correct PARTIAL_CONTENT status code', () => {
      expect(HttpStatusCode.PARTIAL_CONTENT).toBe(206);
    });

    test('should have correct MULTI_STATUS status code', () => {
      expect(HttpStatusCode.MULTI_STATUS).toBe(207);
    });

    test('should have correct ALREADY_REPORTED status code', () => {
      expect(HttpStatusCode.ALREADY_REPORTED).toBe(208);
    });

    test('should have correct IM_USED status code', () => {
      expect(HttpStatusCode.IM_USED).toBe(226);
    });
  });

  describe('Redirection messages (3xx)', () => {
    test('should have correct MULTIPLE_CHOICES status code', () => {
      expect(HttpStatusCode.MULTIPLE_CHOICES).toBe(300);
    });

    test('should have correct MOVED_PERMANENTLY status code', () => {
      expect(HttpStatusCode.MOVED_PERMANENTLY).toBe(301);
    });

    test('should have correct FOUND status code', () => {
      expect(HttpStatusCode.FOUND).toBe(302);
    });

    test('should have correct SEE_OTHER status code', () => {
      expect(HttpStatusCode.SEE_OTHER).toBe(303);
    });

    test('should have correct NOT_MODIFIED status code', () => {
      expect(HttpStatusCode.NOT_MODIFIED).toBe(304);
    });

    test('should have correct USE_PROXY status code', () => {
      expect(HttpStatusCode.USE_PROXY).toBe(305);
    });

    test('should have correct SWITCH_PROXY status code', () => {
      expect(HttpStatusCode.SWITCH_PROXY).toBe(306);
    });

    test('should have correct TEMPORARY_REDIRECT status code', () => {
      expect(HttpStatusCode.TEMPORARY_REDIRECT).toBe(307);
    });

    test('should have correct PERMANENT_REDIRECT status code', () => {
      expect(HttpStatusCode.PERMANENT_REDIRECT).toBe(308);
    });
  });

  describe('Client error responses (4xx)', () => {
    test('should have correct BAD_REQUEST status code', () => {
      expect(HttpStatusCode.BAD_REQUEST).toBe(400);
    });

    test('should have correct UNAUTHORIZED status code', () => {
      expect(HttpStatusCode.UNAUTHORIZED).toBe(401);
    });

    test('should have correct PAYMENT_REQUIRED status code', () => {
      expect(HttpStatusCode.PAYMENT_REQUIRED).toBe(402);
    });

    test('should have correct FORBIDDEN status code', () => {
      expect(HttpStatusCode.FORBIDDEN).toBe(403);
    });

    test('should have correct NOT_FOUND status code', () => {
      expect(HttpStatusCode.NOT_FOUND).toBe(404);
    });

    test('should have correct METHOD_NOT_ALLOWED status code', () => {
      expect(HttpStatusCode.METHOD_NOT_ALLOWED).toBe(405);
    });

    test('should have correct NOT_ACCEPTABLE status code', () => {
      expect(HttpStatusCode.NOT_ACCEPTABLE).toBe(406);
    });

    test('should have correct PROXY_AUTHENTICATION_REQUIRED status code', () => {
      expect(HttpStatusCode.PROXY_AUTHENTICATION_REQUIRED).toBe(407);
    });

    test('should have correct REQUEST_TIMEOUT status code', () => {
      expect(HttpStatusCode.REQUEST_TIMEOUT).toBe(408);
    });

    test('should have correct CONFLICT status code', () => {
      expect(HttpStatusCode.CONFLICT).toBe(409);
    });

    test('should have correct GONE status code', () => {
      expect(HttpStatusCode.GONE).toBe(410);
    });

    test('should have correct LENGTH_REQUIRED status code', () => {
      expect(HttpStatusCode.LENGTH_REQUIRED).toBe(411);
    });

    test('should have correct PRECONDITION_FAILED status code', () => {
      expect(HttpStatusCode.PRECONDITION_FAILED).toBe(412);
    });

    test('should have correct PAYLOAD_TOO_LARGE status code', () => {
      expect(HttpStatusCode.PAYLOAD_TOO_LARGE).toBe(413);
    });

    test('should have correct URI_TOO_LONG status code', () => {
      expect(HttpStatusCode.URI_TOO_LONG).toBe(414);
    });

    test('should have correct UNSUPPORTED_MEDIA_TYPE status code', () => {
      expect(HttpStatusCode.UNSUPPORTED_MEDIA_TYPE).toBe(415);
    });

    test('should have correct RANGE_NOT_SATISFIABLE status code', () => {
      expect(HttpStatusCode.RANGE_NOT_SATISFIABLE).toBe(416);
    });

    test('should have correct EXPECTATION_FAILED status code', () => {
      expect(HttpStatusCode.EXPECTATION_FAILED).toBe(417);
    });

    test('should have correct I_AM_A_TEAPOT status code', () => {
      expect(HttpStatusCode.I_AM_A_TEAPOT).toBe(418);
    });

    test('should have correct MISDIRECTED_REQUEST status code', () => {
      expect(HttpStatusCode.MISDIRECTED_REQUEST).toBe(421);
    });

    test('should have correct UNPROCESSABLE_ENTITY status code', () => {
      expect(HttpStatusCode.UNPROCESSABLE_ENTITY).toBe(422);
    });

    test('should have correct LOCKED status code', () => {
      expect(HttpStatusCode.LOCKED).toBe(423);
    });

    test('should have correct FAILED_DEPENDENCY status code', () => {
      expect(HttpStatusCode.FAILED_DEPENDENCY).toBe(424);
    });

    test('should have correct UPGRADE_REQUIRED status code', () => {
      expect(HttpStatusCode.UPGRADE_REQUIRED).toBe(426);
    });

    test('should have correct PRECONDITION_REQUIRED status code', () => {
      expect(HttpStatusCode.PRECONDITION_REQUIRED).toBe(428);
    });

    test('should have correct TOO_MANY_REQUESTS status code', () => {
      expect(HttpStatusCode.TOO_MANY_REQUESTS).toBe(429);
    });

    test('should have correct REQUEST_HEADER_FIELDS_TOO_LARGE status code', () => {
      expect(HttpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE).toBe(431);
    });

    test('should have correct UNAVAILABLE_FOR_LEGAL_REASONS status code', () => {
      expect(HttpStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS).toBe(451);
    });
  });

  describe('Server error responses (5xx)', () => {
    test('should have correct INTERNAL_SERVER_ERROR status code', () => {
      expect(HttpStatusCode.INTERNAL_SERVER_ERROR).toBe(500);
    });

    test('should have correct NOT_IMPLEMENTED status code', () => {
      expect(HttpStatusCode.NOT_IMPLEMENTED).toBe(501);
    });

    test('should have correct BAD_GATEWAY status code', () => {
      expect(HttpStatusCode.BAD_GATEWAY).toBe(502);
    });

    test('should have correct SERVICE_UNAVAILABLE status code', () => {
      expect(HttpStatusCode.SERVICE_UNAVAILABLE).toBe(503);
    });

    test('should have correct GATEWAY_TIMEOUT status code', () => {
      expect(HttpStatusCode.GATEWAY_TIMEOUT).toBe(504);
    });

    test('should have correct HTTP_VERSION_NOT_SUPPORTED status code', () => {
      expect(HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED).toBe(505);
    });

    test('should have correct VARIANT_ALSO_NEGOTIATES status code', () => {
      expect(HttpStatusCode.VARIANT_ALSO_NEGOTIATES).toBe(506);
    });

    test('should have correct INSUFFICIENT_STORAGE status code', () => {
      expect(HttpStatusCode.INSUFFICIENT_STORAGE).toBe(507);
    });

    test('should have correct LOOP_DETECTED status code', () => {
      expect(HttpStatusCode.LOOP_DETECTED).toBe(508);
    });

    test('should have correct NOT_EXTENDED status code', () => {
      expect(HttpStatusCode.NOT_EXTENDED).toBe(510);
    });

    test('should have correct NETWORK_AUTHENTICATION_REQUIRED status code', () => {
      expect(HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED).toBe(511);
    });
  });

  describe('Practical usage scenarios', () => {
    test('should work in switch statements', () => {
      const getStatusMessage = (status: HttpStatusCode): string => {
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
      };

      expect(getStatusMessage(HttpStatusCode.OK)).toBe('Success');
      expect(getStatusMessage(HttpStatusCode.NOT_FOUND)).toBe('Not Found');
      expect(getStatusMessage(HttpStatusCode.INTERNAL_SERVER_ERROR)).toBe(
        'Server Error'
      );
    });

    test('should work in function parameters', () => {
      const isSuccessStatus = (status: HttpStatusCode): boolean => {
        return status >= 200 && status < 300;
      };

      expect(isSuccessStatus(HttpStatusCode.OK)).toBe(true);
      expect(isSuccessStatus(HttpStatusCode.CREATED)).toBe(true);
      expect(isSuccessStatus(HttpStatusCode.NOT_FOUND)).toBe(false);
      expect(isSuccessStatus(HttpStatusCode.INTERNAL_SERVER_ERROR)).toBe(false);
    });

    test('should work in status code categorization', () => {
      const categorizeStatus = (status: HttpStatusCode): string => {
        if (status >= 100 && status < 200) return 'Informational';
        if (status >= 200 && status < 300) return 'Success';
        if (status >= 300 && status < 400) return 'Redirection';
        if (status >= 400 && status < 500) return 'Client Error';
        if (status >= 500 && status < 600) return 'Server Error';
        return 'Unknown';
      };

      expect(categorizeStatus(HttpStatusCode.CONTINUE)).toBe('Informational');
      expect(categorizeStatus(HttpStatusCode.OK)).toBe('Success');
      expect(categorizeStatus(HttpStatusCode.MOVED_PERMANENTLY)).toBe(
        'Redirection'
      );
      expect(categorizeStatus(HttpStatusCode.BAD_REQUEST)).toBe('Client Error');
      expect(categorizeStatus(HttpStatusCode.INTERNAL_SERVER_ERROR)).toBe(
        'Server Error'
      );
    });
  });

  describe('Edge cases and special status codes', () => {
    test('should handle WebDAV specific status codes', () => {
      expect(HttpStatusCode.PROCESSING).toBe(102);
      expect(HttpStatusCode.MULTI_STATUS).toBe(207);
      expect(HttpStatusCode.ALREADY_REPORTED).toBe(208);
      expect(HttpStatusCode.UNPROCESSABLE_ENTITY).toBe(422);
      expect(HttpStatusCode.LOCKED).toBe(423);
      expect(HttpStatusCode.FAILED_DEPENDENCY).toBe(424);
      expect(HttpStatusCode.INSUFFICIENT_STORAGE).toBe(507);
    });

    test('should handle deprecated/unused status codes', () => {
      expect(HttpStatusCode.SWITCH_PROXY).toBe(306);
      expect(HttpStatusCode.PAYMENT_REQUIRED).toBe(402);
    });
  });

  describe('Comparison and arithmetic operations', () => {
    test('should support comparison operations', () => {
      expect(HttpStatusCode.OK < HttpStatusCode.NOT_FOUND).toBe(true);
      expect(
        HttpStatusCode.INTERNAL_SERVER_ERROR > HttpStatusCode.BAD_REQUEST
      ).toBe(true);
      expect(HttpStatusCode.CREATED === 201).toBe(true);
    });

    test('should support arithmetic operations', () => {
      expect(HttpStatusCode.OK + 100).toBe(300);
      expect(HttpStatusCode.NOT_FOUND - 4).toBe(400);
    });

    test('should work with Math operations', () => {
      const statuses = [
        HttpStatusCode.OK,
        HttpStatusCode.CREATED,
        HttpStatusCode.NOT_FOUND,
      ];
      expect(Math.max(...statuses)).toBe(HttpStatusCode.NOT_FOUND);
      expect(Math.min(...statuses)).toBe(HttpStatusCode.OK);
    });
  });
});

describe('Test importing as an alias', () => {
  test('should be a valid TypeScript enum', () => {
    expect(Status.OK).toBe(200);
    expect(Status.NOT_FOUND).toBe(404);
    expect(Status.INTERNAL_SERVER_ERROR).toBe(500);
    expect(Status.BAD_REQUEST).toBe(400);
    expect(Status.CREATED).toBe(201);
    expect(Status.ACCEPTED).toBe(202);
  });
});
