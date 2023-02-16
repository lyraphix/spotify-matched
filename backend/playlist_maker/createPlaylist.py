"""
A testing function for creating a basic playlist
Author: Ellie Paek
"""

import os

from playlistMaker import playlistmaker

# pretend account for vercel: qwertyay@gmail.com
# pretend password: hahanerd

def main():
    auth = "BQAv1lpFoidaAACqfq6Au5TXvhGtJY3xpXgiFPH1BiRTvUnj--Y5LbAWuaz0pTSO7ttCpS25iI572L0rdU3U9jeFtx6a1FQIQwHEm23hV8agZETmo136ZiiKMpSadlFpntvAK_SyEmCJdtY9Z2NckquQ69Rn_49-P8-5L10FYHaFDAnAbuwqLSP_xNIATEZHH8zB_PUNCZeNuV4MNUl6jwkOsZvnXoTsBzJRWTHNKrPwZWNm2uFb9xnqcVeM-yd5wFKaG3Uu4luL8buvtmaTePw5_eTHorvry2XInA"
    pm = playlistmaker(auth)
    # os.getenv("SPOTIFY_AUTHORIZATION_TOKEN"),

    # get tracks
    num_tracks = 20
    tracks = pm.get_tracks(num_tracks)

    # get playlist name from user and create playlist
    playlist = pm.create_playlist("Test")

    # populate playlist with recommended tracks
    pm.populate_playlist(playlist, tracks)

    # get link to playlist
    link = pm.get_playlist_link()
    print(link)

if __name__ == "__main__":
    main()