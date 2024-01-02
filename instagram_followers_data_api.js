let followersList = [];
let fetchInstagramFollowers;

fetchInstagramFollowers = async (maxId) => {
  // INSERT YOUR URL
  // Make sure count=200 because that is the max that Instagram will let you pull
  let apiUrl = "https://www.instagram.com/api/.../?count=200";
  if (maxId) apiUrl += "&max_id=" + maxId;
  let response = await fetch(apiUrl, {
    /* INSERT YOUR FETCHED FOLLOWER INFO HERE  
     "headers": {
        "accept": "...",
        ...
        "x-requested-with": "..."
      },
      "referrer": "...",
      ...
      "credentials": "include", // MAKE SURE THIS LINE STATES "include" NOT "omit"
    */
  });

  // Create a JSON object
  response = await response.json();
  response.users.forEach((user) => {
    followersList.push(user.username);
  });

  // If follower count exceeds 200, use recursion to request more
  if (response.next_max_id) {
    console.log("NEXT MAX ID: " + response.next_max_id);
    await fetchInstagramFollowers(response.next_max_id);
  }
};

await fetchInstagramFollowers(0);
console.log("FOLLOWERS: ", followersList);

// Print out in CSV format
const quotedUsernames = followersList.map((item) => "" + item + "");
console.log(quotedUsernames.join(","));
