"""
A testing function for creating a basic playlist, made for local testing
Author: Ellie Paek
Note: please don't connect anything to this! This will be used for local testing only
"""

import os

from playlistMaker import playlistmaker

# pretend account for vercel: qwertyay@gmail.com
# pretend password: hahanerd

def main():
    # replace auth with own authentication code (expires every hour)
    auth = "BQAbx0boLpY8KnQTjr_n3Aa6F4hOSgqzBKwr08kvAo2Hp_zmxdi7DKhJbHn9FYKzfabs3oU5cJreL18k1B4GA-8QDTN5-RLgOoK385Q3SxAc0lMqvs6QYzgON8_i5pE7SpjY9T8VWj9rBH0_LWGA_Wo6G9LH9gSVVFQrEJ-1Iss8SY3E17dnHKIhN6KomkFDh2HJ6xel_CSkzAtikSpiKYTltXso8SLR2OnOSryRW7T0XWwAAnBnLh9ju4XCAjyy86p-jIcVsZNM1S90O_R7UTkTyz3kp-MmfWrf56iyaNVRjgoImVeu3txMB5DNaLfjJjjm6Op-j0PfQYtY1w"
    pm = playlistmaker(auth)

    # get genre types?
    genres = ["rock", "pop"]

    # get tracks
    num_tracks = 50 # limit is 50 for recently played
    tracks = pm.get_tracks(num_tracks, genres)

    # get playlist name from user and create playlist
    playlist = pm.create_playlist("Test")

    # populate playlist with recommended tracks
    pm.populate_playlist(playlist, tracks)
    # get link to playlist
    link = pm.get_playlist_link()
    print(link)

    return link

if __name__ == "__main__":
    main()