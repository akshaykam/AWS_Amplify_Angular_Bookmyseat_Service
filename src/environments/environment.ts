export const environment = {
  production: true,
  // Use relative paths so frontend stays HTTPS-only; configure a reverse proxy to /api
  movieServiceUrl: 'https://bookmyseat.dockeroncloud.com/api/v1',
  reviewServiceUrl: 'https://bookmyseat.dockeroncloud.com/api/v1',
  enableTracing: true
};
