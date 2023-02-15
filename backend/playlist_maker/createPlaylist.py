"""
A testing function for creating a basic playlist
Author: Ellie Paek
"""

import os

from playlistMaker import playlistmaker

# pretend account for vercel: qwertyay@gmail.com
# pretend password: hahanerd

def main():
    auth = "BQCe3jokh3Mv--eoAjBQ8FvL4MJgROCB24U_61GZqb49efppmtyXH9yoQ-fjMGGhKNVEZonC2Lwd8EhX4fMcozffV8LPETKKcAzU-nvF3Cj_f8CC33EDWdrrvikoEwkecuUdF-bZK9P397hJpmg06djSCsBqIlXfZ6i_TxuKYzQdaa9mrf4FQUFGy6xUJJooWX7RiqcuxTdmWNf-mKACwjNgW_X1iCIEER7must0wXebj2R59Bsqq-zYUcaTdVkqiwz1i9xNIzaqlT0bJjvB-bGfZAERrIG45Mqm6wKy85RbpHZQffrzDvkuhNc"
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