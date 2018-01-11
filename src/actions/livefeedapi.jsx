export const GENERATE_API_KEY = "GENERATE_API_KEY"
export const GENERATE_API_KEY_OK = "GENERATE_API_KEY_OK"
export const GENERATE_API_KEY_FAIL = "GENERATE_API_KEY_FAIL"
export function generateAPIKey(auth) {
  return {
    type: GENERATE_API_KEY,
    auth
  }
}
export function generateAPIKeyOk(result) {
  return {
    type: GENERATE_API_KEY_OK,
    apikey: result.data
  }
}
export function generateAPIKeyFail(result) {
  return {
    type: GENERATE_API_KEY_FAIL,
    e: result
  }
}

export const CLEAR_API_KEY = "CLEAR_API_KEY"
export function clearAPIKey() {
  return {
    type: CLEAR_API_KEY,
  }
}