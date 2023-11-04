export type StringOrNull = string | null;

export enum API_REQUEST {
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum API_HEADERS {
  CONTENT_TYPE = 'Content-Type',
  AUTHORIZATION = 'Authorization',
  TYPE_RAW_DATA = 'application/json',
  TYPE_MULTIPART_DATA = 'multipart/form-data',
  TOKEN_TYPE = 'Bearer',
}

export enum GOOGLE_API_RESPONSE {
  OK = '',
}
