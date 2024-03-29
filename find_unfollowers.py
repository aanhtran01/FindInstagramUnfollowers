# -*- coding: utf-8 -*-
def read_list_from_file(file_path):
    with open(file_path, 'r') as file:
        # Read the file content and split by commas
        return set(file.read().strip().split(','))

def main():
    # Replace 'followers.txt' and 'following.txt' with your actual file paths
    followers_path = 'followers.txt'
    following_path = 'following .txt'

    # Read followers and following lists from files
    followers = read_list_from_file(followers_path)
    following = read_list_from_file(following_path)

    # Find people you follow but who don't follow you back
    not_followed_back = following - followers

    # Print the result
    print("People you follow but who don't follow you back:")
    for user in not_followed_back:
        print(user)

if __name__ == "__main__":
    main()
