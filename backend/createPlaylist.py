import os

from playlistMaker import playlistmaker


def main():
    auth = "BQBPeEK6pcWzi9d3SwwRztlFKboeIFuxBbh65w6rbrD1-WEnaDZ71LgB3dgSqOfIzlWE3AKgO0667z6Xi-ramOl3BjOHTMWKxk4-W1OCG844dQv_GpPVyTBVfO57WQBie9F7TwpcltzAt4qRkG7u7t7hRZNcYj-8_iXxUqmtD1GBbcWxEoWXYWZPRUMngt6DsiBSgwu--z2fckfrutv6REGRvEHEvM3wM1Ikahem_zjdSejmuO68SbL2YIRD04WnLPARSL6iBANavKVLRMqjuouD_j3zP4LvLpJ2oVtzU9mzmoooF39eF6blddk"
    idauth = "BQCu8lbhjJOtPU7rjXoo7_j4Wgad1DaFvesR2_Yd0Fhb101IBA8xZH3ucl6MMZbA3zoAhuaP_gr9ScsAavDfDmGzL9thTzCuCUlozP1d1Z6QziqSTXC5P_vT3l4op2Lv_Iom-wLGwUryFi3lUA4M4sJBoNk2q558oJvs7MCjg5cF1qF2tL1bxju7zJ9mcX6-OEKiHkURb9GPERnMfTYGvD9C1SQ8sGTo9IpFw1RLdqVlCMQMW2UDPPLlho64x9LqVQb-QdyxbTpqw7cWqOgSMb1D3VyfXQvAuRBt6sviG7HcG0JJ90TpjvaXZ4gLIA"
    pm = playlistmaker(auth, idauth)
    # os.getenv("SPOTIFY_AUTHORIZATION_TOKEN"),
    # os.getenv("SPOTIFY_USER_ID")

    # get last played tracks
    num_tracks = 20
    top_tracks = pm.get_top_tracks(num_tracks)


    # get playlist name from user and create playlist
    playlist = pm.create_playlist("Test")

    # populate playlist with recommended tracks
    pm.populate_playlist(playlist, top_tracks)


if __name__ == "__main__":
    main()