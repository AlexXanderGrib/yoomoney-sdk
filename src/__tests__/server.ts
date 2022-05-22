/* istanbul ignore file */
import express, { Application } from "express";
import { createServer } from "http";
import type { AddressInfo } from "net";

export type MockServer = {
  url: string;
  app: Application;

  close(): void;
};

/**
 *
 * @return {Promise<MockServer>}
 */
export async function createMockServer(): Promise<MockServer> {
  const app = express();
  const server = createServer(app);
  // eslint-disable-next-line unicorn/consistent-function-scoping
  let onListening: CallableFunction = () => void 0;
  const whenReady = new Promise((resolve) => {
    onListening = resolve;
  });
  const host = "localhost";
  let port = 0;
  let url = "";

  server.listen(port, host, () => {
    port = (server.address() as AddressInfo).port;

    url = `http://${host}:${port}`;
    onListening();
  });

  await whenReady;

  return {
    app,
    url,
    close() {
      server.close();
    }
  };
}
