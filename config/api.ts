export const API_BASE_URL = process.env.API_BASE_URL?.replace('/api', '') || 'http://localhost:3001'
export const SOCKET_URL = process.env.SOCKET_URL || API_BASE_URL