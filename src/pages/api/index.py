# copied from Vercel
from http.server import BaseHTTPRequestHandler
from backend.create_playlist.playlistMaker import playlistmaker


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        # copied from createPlaylist.py
        auth = "BQD3-xzA_gu_J9Hbv9nTtJuZa2lAXQQ6kwI_hmwL5DsVlixlP_coBjQtn2GA_gZAYyls_6sZqL2FYG9PUAD37TUFe0aWtXrsHS2Iz4t7WdPCgPT1jp9LUdMZgHcovLQi_ZjTQYo_0mT4bDZh8NrXF7wOzDDYrJGd1CujWQkWHH8bCd2am3-4Jbkv8NjnfRP7o3ayeAQdrn3_Bnnn33jOn_eIF68uhhfgTxD42mne28s0jwMGmvSmwnTdMflKgXtADHkOq7iQYDlaqv6I4W7kqwa1ygdv0hgkyKtPs5NKsmJQsRJK8AmGsdM1eC1ClyuenYB4vI8VDasJpw_8QA"
        pm = playlistmaker(auth)

        # get last played tracks
        num_tracks = 20
        top_tracks = pm.get_top_tracks(num_tracks)

        # get playlist name from user and create playlist
        playlist = pm.create_playlist("Test")

        # populate playlist with recommended tracks
        pm.populate_playlist(playlist, top_tracks)

        # get link to playlist
        link = pm.get_playlist_link()

        self.send_header('Content-type','text/plain')
        self.end_headers()
        self.wfile.write(link)
        return