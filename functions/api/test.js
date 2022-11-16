export default {
  async fetch(request, env) {
    // Fetch AUTH service and pass request
    const response = await env.worker1.fetch(request.clone());

    // Return response from the AUTH service if the response status is not 200
    // It would return 403 'x-custom-token does not match, request not allowed' response in such case
    return response
  },
};