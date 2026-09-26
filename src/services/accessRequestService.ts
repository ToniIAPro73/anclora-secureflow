export interface AccessRequest {
  name: string;
  email: string;
  company: string;
  product: string;
  message: string;
}

/** Boundary for the future whitelist API. No persistence is claimed yet. */
export async function submitAccessRequest(_request: AccessRequest): Promise<{ persisted: false }> {
  void _request;
  return { persisted: false };
}
