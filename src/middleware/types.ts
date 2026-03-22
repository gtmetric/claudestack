/**
 * Middleware type definitions.
 */

import type { VibeframeRequest, VibeframeResponse } from "../types.ts";

export type NextFunction = () => Promise<Response>;

export type Middleware = (
  req: VibeframeRequest,
  res: VibeframeResponse,
  next: NextFunction,
) => Promise<Response>;
