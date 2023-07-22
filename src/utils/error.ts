export class ApiError extends Error {
  code: number | undefined;

  errors: Array<ApiErrorResponse>;

  constructor(message: string, code: number, errors: Array<ApiErrorResponse>) {
    super(message);
    this.code = code;
    this.errors = errors;
  }

  hasErrorType(errorType: ApiErrorType): boolean {
    return this.errors.find((e) => e.type === errorType) !== undefined;
  }

  getFirstErrorByType(errorType: ApiErrorType): ApiErrorResponse | undefined {
    return this.errors.find((e) => e.type === errorType);
  }

  getErrorsByType(errorType: ApiErrorType): ApiErrorResponse[] {
    return this.errors.filter((e) => e.type === errorType);
  }

  getFirstErrorMessage() {
    if (this.errors.length > 0) {
      return this.errors[0].message;
    }
    return null;
  }
}

export function makeEmptyApiError() {
  return new ApiError('', -1, []);
}

export function makeApiError(message: string, code: number = -1) {
  return new ApiError(message, code, [
    {
      message,
    },
  ]);
}

export function alertApiErrorHandler(err: any) {
  if (err instanceof ApiError) {
    if (err.errors.length > 0) {
      alert(err.errors[0].message);
      return;
    }
  }
  alert('알 수 없는 에러가 발생하였습니다.');
}

export function handleApiError(handler: (err: ApiError) => void, err: any) {
  if (err instanceof ApiError) {
    handler(err);
    return;
  }
  alert('알 수 없는 에러가 발생하였습니다.');
}
