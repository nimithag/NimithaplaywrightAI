import { test, expect } from '@playwright/test';
 
// Test case: Verify DELETE API removes data
test('simple DELETE', async ({ request }) => {
 
  // Send DELETE request (delete record with ID = 1)
  const res = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
 
  // Print status (expected: 200 or 204)
  console.log('Status:', res.status());
 
})