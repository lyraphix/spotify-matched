"""
Local testing function for creating playlists
Note: Please don't delete or integrate this into Vercel!
Author: Ellie Paek
"""


# from playlistMaker import playlistmaker
from betaPlaylistMaker import playlistmaker
import random

def main():

    # replace auth with own authentication code (expires every hour)
    auth = "BQCHoMlybIFQsNzSsh3SQ7cZYhdQi0K8syoPX6FCktxBdDkRv0Yfi6p1dGZR3XzMHlFVjjCg6mcoMoF70fDIfTEEy2T2p_xogjzdJNeD167_Yzp0a1fstC6igls5UHKFqPYV-KPfRLpk2482oVhWcRvpJfs5OJefrbAj8spV4UIuQWbIwwMxAo9Fj7gNz9ylrUzowniux8euD7LGNZ1dsHDDPzVaI5ph40yZWJcFPp9Rf4Z_B0_r8jS3Rzx1Zi_cIMAy8XShzeTIxtB5czf7OqFo9rQv7Dk7sfEOD6oCAA-HgOUnOtt6yvPpGrU80OgySI6LJ4eRyLQhsL3dEw"
    # for multiple people use
    listofauths = [auth]
    # get genre types?
    genres = ["latin", "k-pop", "j-rock"]
    # "r-n-b", "pop", "jazz", "classical", "alternative", "indie", "j-rock", "latin"

    # main playlist
    pm = playlistmaker()

    # create empty playlist
    title = "Yay Musaic"
    description = "Recommended songs by Musaic heh c:"
    playlist = pm.create_playlist(title, description, listofauths[0])

    # get tracks, limit is 50 for top and recently played tracks
    # also if we go beyond 100 Spotify kind of breaks
    # since we're getting both top played and recently played, divide by 2
    num_tracks = int(50 / len(listofauths))
    for user in listofauths:
        tracks = pm.get_tracks_genre_filter(num_tracks, genres, user)
        pm.populate_playlist(playlist, tracks, listofauths[0])
        # get recommended if not full
        if len(tracks) < num_tracks:
            random.seed()
            rec_track_num = 100 - len(tracks)
            # check if songs actually found in library
            seed_tracks = list()
            if (len(tracks) != 0):
                # check if there's one song
                trackmax = 2
                if (len(tracks) == 1):
                    trackmax = 1
                tracks = list(tracks)
                random.shuffle(tracks)
                for counter in range(trackmax):
                    chosen_track = tracks[counter]
                    print(chosen_track.name)
                    seed_tracks.append(chosen_track.id)
            # if requested genres is over 3, find three random genres out of it
            random_requested_genres = genres
            if (len(genres) > (5-len(seed_tracks))):
                random_requested_genres = list()
                random.shuffle(genres)
                for i in range(5-len(seed_tracks)):
                    random_requested_genres.append(genres[i])
            # test
            # for yay in random_requested_genres:
            #     print(yay)
            rec_tracks = pm.get_track_recommendations(seed_tracks, random_requested_genres, rec_track_num)
            pm.populate_playlist(playlist, rec_tracks, listofauths[0])


    # get link to playlist
    link = pm.get_playlist_link(listofauths[0])
    # local test
    print(link)
if __name__ == "__main__":
    main()