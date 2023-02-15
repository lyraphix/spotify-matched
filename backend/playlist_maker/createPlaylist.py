"""
A testing function for creating a basic playlist
Author: Ellie Paek
"""

import os

from playlistMaker import playlistmaker

# pretend account for vercel: qwertyay@gmail.com
# pretend password: hahanerd

def main():
    auth = "BQBlFYSehmUJV2g0hpTKccjMs3rmi0jnLaWVU4C95zaRbnzQ8KRVeWhs42d9AS9U4qvCKgKTYN2U7eCmSthUtnA1JY6EzmIEARYGYXfRe-jUlDdFXi-r6ZQD6EowDitwNOtmDpu8v4nVEnpdEI42DycEzbc3-7BJS1AMZoxEx-tZqYRCVJMCZSXsJ629JyCmjTGJnOzja5Itkc0uhwUl5CN33Zyr2JnkCJrtwRwOEwgQjKriqjXvmzLFnVeCMPthot6kx8Ada2ae85aIsZligqTXPczG7Kw6IZeUV_YUPDWf9h4wtpZnvs3iDfc"
    pm = playlistmaker(auth)
    # os.getenv("SPOTIFY_AUTHORIZATION_TOKEN"),

    # get last played tracks
    num_tracks = 20
    top_tracks = pm.get_top_tracks(num_tracks)
    recent_tracks = pm.get_recent_tracks(num_tracks)

    # get playlist name from user and create playlist
    playlist = pm.create_playlist("Test")

    # populate playlist with recommended tracks
    pm.populate_playlist(playlist, top_tracks)
    pm.populate_playlist(playlist, recent_tracks)

    # get link to playlist
    link = pm.get_playlist_link()
    print(link)

if __name__ == "__main__":
    main()