import { test, expect } from '@playwright/test';
 
// Test case: Verify GET API returns correct user data
test('GET user data', async ({ request }) => {
 
  const ud = await request.get("https://jsonplaceholder.typicode.com/posts/12")
 
  //Status =200
  console.log("Status :- "+ ud.status())
 
  //Converting to json()
   const userdata=  await ud.json()
 
 
   console.log("Full Data",userdata)
 
 
})