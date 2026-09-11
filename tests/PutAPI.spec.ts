import { test, expect } from '@playwright/test';
 
// Test case: Verify PUT API updates existing data
test('simple PUT', async ({ request }) => {
 
  // Send PUT request (update record with ID = 1)
  const res = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: {
      id: 1,
      title: 'Updated Hello to Welcome',
      body: 'This is playwright',
      userId: 1
    }
  });
 
  // Print status (expected: 200 = success)
  console.log('Status:', res.status());
 
  // Convert response into JSON
  const body = await res.json();
 
  // // Print updated response
  console.log('Response:', body);
 
})
 