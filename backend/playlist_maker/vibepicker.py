"""
A testing function for creating a basic playlist
Author: Ellie Paek
"""

import os

from playlistMaker import playlistmaker

def main():
    # replace auth with whatever token yoinked from the web Spotify API
    auth = "BQBPKYX-e3MXn-B_rWsq2Y-LoDRGV7i24XngKRfWqgKBRL2hu5zDEW3X2VVDV9_H0GQA7WIQSPSnU1xqRF7VDHTHufzA4iFIL4U9Nec3JYQh9gQnL1UHXV74nXOyrsS-rkg2lrvVaN4ITx3BKYfTGXLYn0QdZuqj-H_XQlXC_T35j4Ho_LZLaTThFnc_EUcyT3HK4qbapCIL5uINEAXnGpAneOQptdRD7j4E4ynchTqSOY2Q5Ubq_9tFNeMyRGTKpF0W5_vHfrDPuLuduEKgtSdC4I7f-FWbylZNti1NkpTkQjE-5t3gFd_OTIaDydcrfkbFcqXc3aw3ng"
    pm = playlistmaker(auth)
    # os.getenv("SPOTIFY_AUTHORIZATION_TOKEN"),
    search_auth = "BQCwcRpKfHhov3C8yDJqExIfV56gRMY8XX1yf_GubQSFHjemdy7nlPFrewrZbEeLbOneD67EsGqSTNGkPjnXraKMELwYraIRJx1aX_7Ynl-aWu5QaZ8dQeDxrTL4K8txTDxMlRPVPMDUN9slITZ1YDUljpyhhO687WdpguW29XFtKxHEnive292_mDRuwPCtop2Wavjny_RIuxIhXROpKD1GhSDBKEv-pQ6M3gyTtCwttPvg1Qs6yh8UD5Pr_uWvDK3kjacKHopJZ8vk453oNFGNgWRXTkL5JYUTI_5lEGzpvU2rmpB7IxZSLS_h0jZ8C5jFYtzPpYXY3Q"

    # get tracks
    num_tracks = 20
    tracks = pm.get_tracks_by_genre('pop', num_tracks, search_auth) 
    #tracks = pm.get_tracks(num_tracks)

    # get playlist name from user and create playlist
    playlist = pm.create_playlist("Test by Genre")

    # populate playlist with recommended tracks
    pm.populate_playlist(playlist, tracks)

    # get link to playlist
    link = pm.get_playlist_link()
    print(link)

if __name__ == "__main__":
    main()
