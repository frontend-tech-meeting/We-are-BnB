export const query = (params) =>
  Object.keys(params)
    .map(
      (paramsKey) =>
        encodeURIComponent(paramsKey) +
        '=' +
        encodeURIComponent(params[paramsKey])
    )
    .join('&');
