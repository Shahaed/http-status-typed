import { HttpStatusCode } from '../src/index';

describe('Completeness tests', () => {
  describe('Standard HTTP status codes', () => {
    test('should include all common 1xx informational codes', () => {
      expect(HttpStatusCode.CONTINUE).toBe(100);
      expect(HttpStatusCode.SWITCHING_PROTOCOLS).toBe(101);
      expect(HttpStatusCode.PROCESSING).toBe(102); // WebDAV
    });

    test('should include all common 2xx success codes', () => {
      expect(HttpStatusCode.OK).toBe(200);
      expect(HttpStatusCode.CREATED).toBe(201);
      expect(HttpStatusCode.ACCEPTED).toBe(202);
      expect(HttpStatusCode.NON_AUTHORITATIVE_INFORMATION).toBe(203);
      expect(HttpStatusCode.NO_CONTENT).toBe(204);
      expect(HttpStatusCode.RESET_CONTENT).toBe(205);
      expect(HttpStatusCode.PARTIAL_CONTENT).toBe(206);
      expect(HttpStatusCode.MULTI_STATUS).toBe(207); // WebDAV
      expect(HttpStatusCode.ALREADY_REPORTED).toBe(208); // WebDAV
      expect(HttpStatusCode.IM_USED).toBe(226); // RFC 3229
    });

    test('should include all common 3xx redirection codes', () => {
      expect(HttpStatusCode.MULTIPLE_CHOICES).toBe(300);
      expect(HttpStatusCode.MOVED_PERMANENTLY).toBe(301);
      expect(HttpStatusCode.FOUND).toBe(302);
      expect(HttpStatusCode.SEE_OTHER).toBe(303);
      expect(HttpStatusCode.NOT_MODIFIED).toBe(304);
      expect(HttpStatusCode.USE_PROXY).toBe(305);
      expect(HttpStatusCode.SWITCH_PROXY).toBe(306);
      expect(HttpStatusCode.TEMPORARY_REDIRECT).toBe(307);
      expect(HttpStatusCode.PERMANENT_REDIRECT).toBe(308);
    });

    test('should include all common 4xx client error codes', () => {
      expect(HttpStatusCode.BAD_REQUEST).toBe(400);
      expect(HttpStatusCode.UNAUTHORIZED).toBe(401);
      expect(HttpStatusCode.PAYMENT_REQUIRED).toBe(402);
      expect(HttpStatusCode.FORBIDDEN).toBe(403);
      expect(HttpStatusCode.NOT_FOUND).toBe(404);
      expect(HttpStatusCode.METHOD_NOT_ALLOWED).toBe(405);
      expect(HttpStatusCode.NOT_ACCEPTABLE).toBe(406);
      expect(HttpStatusCode.PROXY_AUTHENTICATION_REQUIRED).toBe(407);
      expect(HttpStatusCode.REQUEST_TIMEOUT).toBe(408);
      expect(HttpStatusCode.CONFLICT).toBe(409);
      expect(HttpStatusCode.GONE).toBe(410);
      expect(HttpStatusCode.LENGTH_REQUIRED).toBe(411);
      expect(HttpStatusCode.PRECONDITION_FAILED).toBe(412);
      expect(HttpStatusCode.PAYLOAD_TOO_LARGE).toBe(413);
      expect(HttpStatusCode.URI_TOO_LONG).toBe(414);
      expect(HttpStatusCode.UNSUPPORTED_MEDIA_TYPE).toBe(415);
      expect(HttpStatusCode.RANGE_NOT_SATISFIABLE).toBe(416);
      expect(HttpStatusCode.EXPECTATION_FAILED).toBe(417);
      expect(HttpStatusCode.I_AM_A_TEAPOT).toBe(418); // RFC 2324
      expect(HttpStatusCode.MISDIRECTED_REQUEST).toBe(421);
      expect(HttpStatusCode.UNPROCESSABLE_ENTITY).toBe(422); // WebDAV
      expect(HttpStatusCode.LOCKED).toBe(423); // WebDAV
      expect(HttpStatusCode.FAILED_DEPENDENCY).toBe(424); // WebDAV
      expect(HttpStatusCode.UPGRADE_REQUIRED).toBe(426);
      expect(HttpStatusCode.PRECONDITION_REQUIRED).toBe(428);
      expect(HttpStatusCode.TOO_MANY_REQUESTS).toBe(429);
      expect(HttpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE).toBe(431);
      expect(HttpStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS).toBe(451);
    });

    test('should include all common 5xx server error codes', () => {
      expect(HttpStatusCode.INTERNAL_SERVER_ERROR).toBe(500);
      expect(HttpStatusCode.NOT_IMPLEMENTED).toBe(501);
      expect(HttpStatusCode.BAD_GATEWAY).toBe(502);
      expect(HttpStatusCode.SERVICE_UNAVAILABLE).toBe(503);
      expect(HttpStatusCode.GATEWAY_TIMEOUT).toBe(504);
      expect(HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED).toBe(505);
      expect(HttpStatusCode.VARIANT_ALSO_NEGOTIATES).toBe(506);
      expect(HttpStatusCode.INSUFFICIENT_STORAGE).toBe(507); // WebDAV
      expect(HttpStatusCode.LOOP_DETECTED).toBe(508); // WebDAV
      expect(HttpStatusCode.NOT_EXTENDED).toBe(510);
      expect(HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED).toBe(511);
    });
  });

  describe('Enum completeness', () => {
    test('should have meaningful enum names', () => {
      expect(HttpStatusCode.OK).toBe(200);
      expect(HttpStatusCode.NOT_FOUND).toBe(404);
      expect(HttpStatusCode.INTERNAL_SERVER_ERROR).toBe(500);
      expect(HttpStatusCode.CREATED).toBe(201);
      expect(HttpStatusCode.BAD_REQUEST).toBe(400);
      expect(HttpStatusCode.UNAUTHORIZED).toBe(401);
      expect(HttpStatusCode.FORBIDDEN).toBe(403);
      expect(HttpStatusCode.MOVED_PERMANENTLY).toBe(301);
      expect(HttpStatusCode.TEMPORARY_REDIRECT).toBe(307);
      expect(HttpStatusCode.SERVICE_UNAVAILABLE).toBe(503);
    });
  });

  describe('Industry standard compliance', () => {
    test('should include RFC 7231 status codes', () => {
      // Core HTTP/1.1 status codes from RFC 7231
      expect(HttpStatusCode.OK).toBe(200);
      expect(HttpStatusCode.CREATED).toBe(201);
      expect(HttpStatusCode.ACCEPTED).toBe(202);
      expect(HttpStatusCode.NO_CONTENT).toBe(204);
      expect(HttpStatusCode.MOVED_PERMANENTLY).toBe(301);
      expect(HttpStatusCode.FOUND).toBe(302);
      expect(HttpStatusCode.SEE_OTHER).toBe(303);
      expect(HttpStatusCode.NOT_MODIFIED).toBe(304);
      expect(HttpStatusCode.TEMPORARY_REDIRECT).toBe(307);
      expect(HttpStatusCode.BAD_REQUEST).toBe(400);
      expect(HttpStatusCode.UNAUTHORIZED).toBe(401);
      expect(HttpStatusCode.FORBIDDEN).toBe(403);
      expect(HttpStatusCode.NOT_FOUND).toBe(404);
      expect(HttpStatusCode.METHOD_NOT_ALLOWED).toBe(405);
      expect(HttpStatusCode.NOT_ACCEPTABLE).toBe(406);
      expect(HttpStatusCode.REQUEST_TIMEOUT).toBe(408);
      expect(HttpStatusCode.CONFLICT).toBe(409);
      expect(HttpStatusCode.GONE).toBe(410);
      expect(HttpStatusCode.LENGTH_REQUIRED).toBe(411);
      expect(HttpStatusCode.PAYLOAD_TOO_LARGE).toBe(413);
      expect(HttpStatusCode.URI_TOO_LONG).toBe(414);
      expect(HttpStatusCode.UNSUPPORTED_MEDIA_TYPE).toBe(415);
      expect(HttpStatusCode.EXPECTATION_FAILED).toBe(417);
      expect(HttpStatusCode.UPGRADE_REQUIRED).toBe(426);
      expect(HttpStatusCode.INTERNAL_SERVER_ERROR).toBe(500);
      expect(HttpStatusCode.NOT_IMPLEMENTED).toBe(501);
      expect(HttpStatusCode.BAD_GATEWAY).toBe(502);
      expect(HttpStatusCode.SERVICE_UNAVAILABLE).toBe(503);
      expect(HttpStatusCode.GATEWAY_TIMEOUT).toBe(504);
      expect(HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED).toBe(505);
    });

    test('should include WebDAV status codes (RFC 4918)', () => {
      expect(HttpStatusCode.PROCESSING).toBe(102);
      expect(HttpStatusCode.MULTI_STATUS).toBe(207);
      expect(HttpStatusCode.ALREADY_REPORTED).toBe(208);
      expect(HttpStatusCode.UNPROCESSABLE_ENTITY).toBe(422);
      expect(HttpStatusCode.LOCKED).toBe(423);
      expect(HttpStatusCode.FAILED_DEPENDENCY).toBe(424);
      expect(HttpStatusCode.INSUFFICIENT_STORAGE).toBe(507);
      expect(HttpStatusCode.LOOP_DETECTED).toBe(508);
    });

    test('should include additional RFC status codes', () => {
      expect(HttpStatusCode.PERMANENT_REDIRECT).toBe(308); // RFC 7538
      expect(HttpStatusCode.TOO_MANY_REQUESTS).toBe(429); // RFC 6585
      expect(HttpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE).toBe(431); // RFC 6585
      expect(HttpStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS).toBe(451); // RFC 7725
      expect(HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED).toBe(511); // RFC 6585
    });
  });
});
