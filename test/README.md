# Test Suite for http-status-typed

This directory contains comprehensive tests for the `http-status-typed` npm package.

## ⚠️ TypeScript Const Enum Testing

This package uses **TypeScript const enums**, which means:

- Tests verify compile-time behavior and type safety
- Runtime testing focuses on inlined values (numbers)
- No JavaScript object testing needed (const enums are inlined)

## Test Files

### `HttpStatusCode.test.ts`

Main test file that covers:

- **Informational responses (1xx)**: Tests for 100, 101, 102 status codes
- **Successful responses (2xx)**: Tests for all 2xx status codes including WebDAV extensions
- **Redirection messages (3xx)**: Tests for all 3xx status codes
- **Client error responses (4xx)**: Tests for all 4xx status codes including special cases like 418 (I'm a teapot)
- **Server error responses (5xx)**: Tests for all 5xx status codes
- **Type safety and const enum properties**: Tests for TypeScript const enum behavior and compile-time inlining
- **Practical usage scenarios**: Real-world usage examples including switch statements, function parameters, and status categorization
- **Edge cases and special status codes**: Tests for unusual but valid HTTP status codes
- **Comparison and arithmetic operations**: Tests for mathematical operations with inlined status codes

### `module.test.ts`

Tests for module structure and exports:

- **Default export**: Ensures the default export works correctly
- **Named export**: Ensures the named export works correctly
- **Module consistency**: Verifies both exports are identical
- **TypeScript compatibility**: Tests type annotations and interchangeability

### `performance.test.ts`

Performance and efficiency tests:

- **Const enum access performance**: Benchmarks for accessing inlined enum values (compile-time constants)
- **Memory usage**: Tests for zero runtime memory footprint
- **Switch statement performance**: Performance tests optimized for inlined constants

### `completeness.test.ts`

Completeness and standards compliance tests:

- **Standard HTTP status codes**: Ensures all common status codes are present
- **Status code ranges**: Validates proper categorization and uniqueness
- **Const enum completeness**: Tests naming conventions and compile-time behavior
- **Industry standard compliance**: Verifies compliance with various RFCs (7231, 4918, 6585, etc.)

## Running Tests

### Install Dependencies

```bash
npm install
```

### Run All Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

## Test Categories

### 📊 **Coverage Areas**

- ✅ All HTTP status codes (1xx through 5xx)
- ✅ TypeScript const enum type safety
- ✅ Compile-time inlining behavior
- ✅ Module exports (TypeScript declarations only)
- ✅ Performance characteristics (zero runtime overhead)
- ✅ Standards compliance (RFC 7231, RFC 4918, etc.)
- ✅ Real-world usage scenarios with TypeScript
- ✅ Edge cases and special status codes

### 🎯 **Test Approach**

- **Compile-time Tests**: Verify const enum values are properly inlined
- **Type Tests**: TypeScript-specific const enum functionality
- **Integration Tests**: Tests for how inlined status codes work together
- **Performance Tests**: Ensure zero runtime overhead
- **Compliance Tests**: Verify adherence to HTTP standards

### 🔍 **What's Tested**

1. **Correctness**: Each status code compiles to the correct numeric value
2. **Completeness**: All standard HTTP status codes are included
3. **Type Safety**: TypeScript const enum behavior works as expected
4. **Performance**: Const enum operations have zero runtime cost
5. **Usability**: Real-world TypeScript usage patterns work correctly
6. **Standards**: Compliance with HTTP RFCs and web standards

## Const Enum Specific Testing

### Compile-time Behavior

Tests verify that:

- `HttpStatusCode.OK` becomes `200` at compile time
- No runtime object is created
- TypeScript provides full type checking
- IntelliSense works correctly

### Runtime Behavior

Tests verify that:

- Compiled JavaScript contains only numeric literals
- No enum object exists at runtime
- Switch statements are optimized
- Bundle size impact is zero

## Contributing Tests

When adding new tests:

1. **Focus on compile-time behavior**: Remember that const enums are inlined
2. **Test TypeScript types**: Ensure type safety is maintained
3. **Use descriptive names**: Test names should clearly indicate what const enum behavior is being tested
4. **Test both positive and negative cases**: Include edge cases for inlined values
5. **Follow existing patterns**: Maintain consistency with existing test structure
6. **Update documentation**: Add new test categories to this README if applicable

## Test Configuration

The tests use:

- **Jest**: Testing framework with TypeScript support
- **ts-jest**: TypeScript compilation for Jest
- **ESM**: ES Module support for modern JavaScript
- **Coverage reporting**: HTML and LCOV formats
- **TypeScript**: Required for const enum testing

See `jest.config.js` for detailed configuration.

## TypeScript Requirements

These tests require:

- TypeScript 4.1+ (for const enum support)
- Proper TypeScript configuration
- `preserveConstEnums: true` if using `isolatedModules`

The test suite validates that the const enum implementation works correctly across different TypeScript compilation scenarios.
