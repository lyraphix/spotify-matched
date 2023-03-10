"""
A testing function for creating a basic playlist
Author: Ellie Paek
"""

from playlistMaker import playlistmaker

# pretend account for vercel: qwertyay@gmail.com
# pretend password: hahanerd

def main(oauth):
    listofauths = list()
    auth = oauth
    listofauths.append(auth)

    pm = playlistmaker(listofauths)

    # get tracks, limit is 50 for top and recently played tracks
    # also if we go beyond 100 Spotify kind of breaks
    # since we're getting both top played and recently played, divide by 2
    num_tracks = int(50 / len(listofauths))
    tracks = pm.get_tracks(num_tracks)

    # get playlist name from user and create playlist
    title = "Yay Musaic"
    description = "Recommended songs by Musaic heh c:"
    playlist = pm.create_playlist(title, description)
    # populate playlist with tracks
    pm.populate_playlist(playlist, tracks)


    # get link to playlist
    link = pm.get_playlist_link()
    return link

if __name__ == "__main__":
    main()