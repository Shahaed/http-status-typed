# http-status-typed

This is [http-status-codes](https://github.com/prettymuchbryce/http-status-codes/blob/master/README.md) but the status codes are wrapped in an enum so you can have a Typescript type for the status codes.

> Version 1.0.1 significantly reduces the size of the package. Good for browsers now.
> Version 1.0.2 supports both CommonJS and ES Modules but doubles the size of the package (since we're now publishing two files).

## Installation

```console
npm install http-status-typed --save
```

## Usage (Typescript)

```typescript
import HttpStatusCode from 'http-status-typed';

interface ApiResponse {
    status: HttpStatusCode;
    response: object;
}

function handleResponse(): ApiResponse {
    return {
        status: HttpStatusCode.OK;
        response: {
            body: "😎"
        };
    }
}

```

There is no selective import. If you care about a few extra bytes of data you probably don't want to use this. Also the usage is probably similar for javascript? Idk.

## Codes

| Constant                        | Code | Status Text                     |
| ------------------------------- | ---- | ------------------------------- |
| ACCEPTED                        | 202  | Accepted                        |
| BAD_GATEWAY                     | 502  | Bad Gateway                     |
| BAD_REQUEST                     | 400  | Bad Request                     |
| CONFLICT                        | 409  | Conflict                        |
| CONTINUE                        | 100  | Continue                        |
| CREATED                         | 201  | Created                         |
| EXPECTATION_FAILED              | 417  | Expectation Failed              |
| FAILED_DEPENDENCY               | 424  | Failed Dependency               |
| FORBIDDEN                       | 403  | Forbidden                       |
| GATEWAY_TIMEOUT                 | 504  | Gateway Timeout                 |
| GONE                            | 410  | Gone                            |
| HTTP_VERSION_NOT_SUPPORTED      | 505  | HTTP Version Not Supported      |
| IM_A_TEAPOT                     | 418  | I'm a teapot                    |
| INSUFFICIENT_SPACE_ON_RESOURCE  | 419  | Insufficient Space on Resource  |
| INSUFFICIENT_STORAGE            | 507  | Insufficient Storage            |
| INTERNAL_SERVER_ERROR           | 500  | Server Error                    |
| LENGTH_REQUIRED                 | 411  | Length Required                 |
| LOCKED                          | 423  | Locked                          |
| METHOD_FAILURE                  | 420  | Method Failure                  |
| METHOD_NOT_ALLOWED              | 405  | Method Not Allowed              |
| MOVED_PERMANENTLY               | 301  | Moved Permanently               |
| MOVED_TEMPORARILY               | 302  | Moved Temporarily               |
| MULTI_STATUS                    | 207  | Multi-Status                    |
| MULTIPLE_CHOICES                | 300  | Multiple Choices                |
| NETWORK_AUTHENTICATION_REQUIRED | 511  | Network Authentication Required |
| NO_CONTENT                      | 204  | No Content                      |
| NON_AUTHORITATIVE_INFORMATION   | 203  | Non Authoritative Information   |
| NOT_ACCEPTABLE                  | 406  | Not Acceptable                  |
| NOT_FOUND                       | 404  | Not Found                       |
| NOT_IMPLEMENTED                 | 501  | Not Implemented                 |
| NOT_MODIFIED                    | 304  | Not Modified                    |
| OK                              | 200  | OK                              |
| PARTIAL_CONTENT                 | 206  | Partial Content                 |
| PAYMENT_REQUIRED                | 402  | Payment Required                |
| PERMANENT_REDIRECT              | 308  | Permanent Redirect              |
| PRECONDITION_FAILED             | 412  | Precondition Failed             |
| PRECONDITION_REQUIRED           | 428  | Precondition Required           |
| PROCESSING                      | 102  | Processing                      |
| PROXY_AUTHENTICATION_REQUIRED   | 407  | Proxy Authentication Required   |
| REQUEST_HEADER_FIELDS_TOO_LARGE | 431  | Request Header Fields Too Large |
| REQUEST_TIMEOUT                 | 408  | Request Timeout                 |
| REQUEST_TOO_LONG                | 413  | Request Entity Too Large        |
| REQUEST_URI_TOO_LONG            | 414  | Request-URI Too Long            |
| REQUESTED_RANGE_NOT_SATISFIABLE | 416  | Requested Range Not Satisfiable |
| RESET_CONTENT                   | 205  | Reset Content                   |
| SEE_OTHER                       | 303  | See Other                       |
| SERVICE_UNAVAILABLE             | 503  | Service Unavailable             |
| SWITCHING_PROTOCOLS             | 101  | Switching Protocols             |
| TEMPORARY_REDIRECT              | 307  | Temporary Redirect              |
| TOO_MANY_REQUESTS               | 429  | Too Many Requests               |
| UNAUTHORIZED                    | 401  | Unauthorized                    |
| UNPROCESSABLE_ENTITY            | 422  | Unprocessable Entity            |
| UNSUPPORTED_MEDIA_TYPE          | 415  | Unsupported Media Type          |
| USE_PROXY                       | 305  | Use Proxy                       |
