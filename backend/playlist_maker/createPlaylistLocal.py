"""
Local testing function for creating playlists
Note: Please don't delete or integrate this into Vercel!
Author: Ellie Paek
"""


from multiplePlaylistMaker import playlistmaker

def main():

    # replace auth with own authentication code (expires every hour)
    auth = "BQA03p0Y1di8Ypwp5AWPC_2alzanfRfh3pA8_kFE0_BwEMxMIE39LA2QAZfRMSY2HmC-sHFJ2K87zxin2RstWmO_ayucYIBN6xuhqcHxKGVKFXEerAU_H9-utwmhkpyt2bV-SdClXJPmitVBis2Hb9_2qcTcEfkty6DOGDnqB9iP0m0lUEwE6ldDlpWVcHP__VXzlNwLx920Er1jadYMEOR4xRx15l_7eOYCvfdkMsz0JscS7DFpuH-wsS6QChVjRVqhu-mZxnjQjdn3fWugGeReZnVDLqcsyrsYLsV-hJ79fxyNNJK_8AAZUFqubK-kX21oHviiW6UIz33lCA"
    # for multiple people use
    listofauths = [auth, "BQAweWnmAIFSs2ginmLuB-I02tH2ERGcxI_k9ZJG-wSLMjbhKdjCcdFgSCgcrCIVuAdD1yR_WPmWGuojtS0JkCvv9H62C6mRZh0wxZvCu8_JpdobgGYUfp06fSBblKoiay5yYIRpdtiZjfjZD9iZNB6wllD5Ws5xg-nLbtKqgJVWjjwq6o11Ju8x6xZDGSdnjPcFEGgTarT1jMeGTDVN90wFBL_PscI4rM5sOjcBMgV2WTfC2W4tdCkyAPc7HyOuwnj5Mo1NsF6ZyUtMkpq4jJhlR60pPP55ZPvCyBtZCKVzvTMHkz_irknYu2ZwpSNsQw"]
    # get genre types?
    genres = ["r-n-b", "k-pop", "pop"]

    # main playlist
    pm = playlistmaker(listofauths)

    # get tracks, limit is 50 for top and recently played tracks
    # also if we go beyond 100 Spotify kind of breaks
    # since we're getting both top played and recently played, divide by 2
    num_tracks = int(50 / len(listofauths))
   # tracks = pm.multiple_get_tracks(num_tracks)
    tracks = pm.get_tracks_genre_filter(num_tracks, genres)
    # tracks = pm.get_tracks_genre_filter(num_tracks, genres)
    playlist = pm.create_playlist("Asjdfiaopwejfp")

    pm.populate_playlist(playlist, tracks)


    # get link to playlist
    link = pm.get_playlist_link()
    # local test
    print(link)
if __name__ == "__main__":
    main()