"""
Local testing function for creating playlists
Note: Please don't delete or integrate this into Vercel!
Author: Ellie Paek
"""


from playlistMaker import playlistmaker

def main():
    # replace auth with own authentication code (expires every hour)
    auth = "BQAzVsa1eNm4hqhTablsVaiq7nO5sm1OSHd6g7DP-OAUbGlDMCmcjH2pD3xIE9HUaAfOrouNmZaY9KSjJzn3q2PJ1vfQtwSktIZOfRoj4q5rUwScRzQrM6jC4dBPSyB02spEmZUNBO22vfyvqap8t-RtxpYidhg6Z1DHteKWZ-P8V9xqVIbZl33qPLm3O4QGBPkw7n9r5mA7GwJ1hJPE2u4aaktIrWFXkqZooIMxNUinxhNouk0u-1tQf-zVXK6aXGNkJv8Mw5RezpCUbYTaZSnC8qpbG6tx6KZbyLei_9xXNtYUKdHNHhfMW1ypxgKZ7srvD2nifArY23Sf0Q"
    pm = playlistmaker(auth)

    # get genre types?
    genres = ["r-n-b", "k-pop"]

    # get tracks
    num_tracks = 50 # limit is 50 for recently played and top
    tracks = pm.get_tracks_genre_filter(num_tracks, genres)

    # get playlist name from user and create playlist
    playlist = pm.create_playlist("Test")

    # populate playlist with recommended tracks
    pm.populate_playlist(playlist, tracks)
    # get link to playlist
    link = pm.get_playlist_link()
    # local test
    print(link)
if __name__ == "__main__":
    main()