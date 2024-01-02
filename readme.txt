# Find Instagram Unfollowers 

## Description
This repository includes scripts for fetching your Instagram followers using the Instagram API. The JavaScript script retrieves follower information and outputs the usernames in CSV format, while the Python script identifies users you follow but who don't follow you back.

## instagram_followers_data_api.js Usage

1. **Insert Your URL**: 
   Replace the placeholder in the `url` variable in instagram_followers_data_api.js with your Instrgram API endpoint. Ensure that the `count` parameter is set to 200, as it is the maximum allowed by Instagram.

2. **Insert Fetched Follower Info**:
   Inside the `fetch` function, provide the necessary headers and configurations required to make a successful API request. For macOS, this can be done by accessing the developer page (option+command+i) of your instagram account. Under the network tab, click on your follower list then find the "followers/?count=12..." link, copy as fetch then you will have all your neccessary headers and configurations in your clipboard. 

3. **Run the Script**:
   Execute the JavaScript script by running it on the developer page under the console tab.

4. **Review Output**:
   The script will log the fetched usernames in the console. Additionally, the usernames will be printed in CSV format. Save the output as a txt file for an easier workflow. 

5. **Run for the Following List**
Redo steps 1-4 to extract the following list. In the end, you should have two txt files, "followers.txt" and "following.txt"

## `find_unfollowers.py` Python Script Usage

1. **Install Python Dependencies**:
   Ensure you have Python installed. Run `pip install -r requirements.txt` to install the necessary dependencies.

2. **Replace File Paths**:
   Replace 'followers.txt' and 'following.txt' with the actual file paths containing your followers and following lists.

3. **Run the Script**:
   Execute the Python script (`find_unfollowers.py`) by running `find_unfollowers.py` in the terminal or in any IDE that is compatitble with python. 

4. **Review Output**:
   The script will print the users you follow but who don't follow you back.

## Important Note
Ensure that you comply with Instagram's API usage policies and guidelines.

## Requirements
python 2.7 

## Author
Anh Tran 

## JavaScript API References 
The creation of the instagram_followers_data_api.js was referenced from https://www.youtube.com/watch?v=sjIBN05k7Ew 
