import "dotenv/config";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, type MockInstance, vi } from "vitest";

afterEach(() => {
  cleanup();

  vi.useRealTimers();
});

export let consoleError: MockInstance<(typeof console)["error"]>;

beforeEach(() => {
  const originalConsoleError = console.error;

  consoleError = vi.spyOn(console, "error");

  consoleError.mockImplementation(
    (...args: Parameters<typeof console.error>) => {
      originalConsoleError(...args);

      throw new Error(
        "Console error was called. Call consoleError.mockImplementation(() => {}) if this is expected."
      );
    }
  );
});
