"""
A testing function for creating a basic playlist
Author: Ellie Paek
"""

import os

from playlistMaker import playlistmaker

# pretend account for vercel: qwertyay@gmail.com
# pretend password: hahanerd

def main():
    auth = "BQD3-xzA_gu_J9Hbv9nTtJuZa2lAXQQ6kwI_hmwL5DsVlixlP_coBjQtn2GA_gZAYyls_6sZqL2FYG9PUAD37TUFe0aWtXrsHS2Iz4t7WdPCgPT1jp9LUdMZgHcovLQi_ZjTQYo_0mT4bDZh8NrXF7wOzDDYrJGd1CujWQkWHH8bCd2am3-4Jbkv8NjnfRP7o3ayeAQdrn3_Bnnn33jOn_eIF68uhhfgTxD42mne28s0jwMGmvSmwnTdMflKgXtADHkOq7iQYDlaqv6I4W7kqwa1ygdv0hgkyKtPs5NKsmJQsRJK8AmGsdM1eC1ClyuenYB4vI8VDasJpw_8QA"
    pm = playlistmaker(auth)
    # os.getenv("SPOTIFY_AUTHORIZATION_TOKEN"),
    # os.getenv("SPOTIFY_USER_ID")

    # get last played tracks
    num_tracks = 20
    top_tracks = pm.get_top_tracks(num_tracks)


    # get playlist name from user and create playlist
    playlist = pm.create_playlist("Test")

    # populate playlist with recommended tracks
    pm.populate_playlist(playlist, top_tracks)

    # get link to playlist
    link = pm.get_playlist_link()
    print(link)

if __name__ == "__main__":
    main()