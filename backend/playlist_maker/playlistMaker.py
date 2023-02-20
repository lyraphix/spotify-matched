"""
Playlist making class, for now helps create a playlist with top 20 tracks
Author: Ellie Paek
Source (cloned and edited): https://github.com/musikalkemist/spotifyplaylistgenerator
To do: remove duplicate songs, combine multiple users' songs into a playlist, separate by genre
Updated: 2023/02/20 — divide by genre
"""

import json
import requests

from track import Track
from playlist import Playlist

class playlistmaker:

    def __init__(self, authorizationToken):
        """
        :param authorization_token (str): Spotify API token
        :param user_id (str): Spotify user id
        """
        self.authorizationToken = authorizationToken
        self.playlistid = ""
        # for removing duplicates
        self.playlistsongs = list()

    # duplicate function for site testing purposes
    def get_tracks(self, limit):
        """Get the top and recent n tracks played by a user
        :param limit (int): Number of tracks to get. Should be <= 50
        :return tracks (list of Track): List of last played tracks
        """
        # get top tracks first
        url = f"https://api.spotify.com/v1/me/top/tracks?limit={limit}"
        response = self._place_get_api_request(url)
        response_json = response.json()
        tracks = list()
        for track in response_json["items"]:
            tracks.append(Track(track["name"], track["id"], track["artists"][0]["name"]))

        # reset the url to get recently played tracks
        url = f"https://api.spotify.com/v1/me/player/recently-played?limit={limit}"
        response = self._place_get_api_request(url)
        response_json = response.json()
        for track in response_json["items"]:
            tracks.append(Track(track["track"]["name"], track["track"]["id"], track["track"]["artists"][0]["name"]))
        # remove duplicates
        tracks = set(tracks)
        return tracks


    def get_tracks_genre_filter(self, limit, requested_genres):
        """Get the top and recent n tracks played by a user
        :param limit (int): Number of tracks to get. Should be <= 50
        :param requested_genres (list): list of requested genres user wants
        :return tracks (list of Track): List of last played tracks
        """
        # get top tracks first
        url = f"https://api.spotify.com/v1/me/top/tracks?limit={limit}"
        response = self._place_get_api_request(url)
        response_json = response.json()
        # json testing for debugging purposes
        # json_object = json.dumps(response_json)
        # with open("test.json", "w") as outfile:
        #     outfile.write(json_object)
        # f = open('test.json')

        # returns JSON object as
        # a dictionary
        # data = json.load(f)
        #
        # # Iterating through the json
        # # list
        # for i in data['items']:
        #     print(i)
        # # Closing file
        # f.close()
        tracks = list()
        # separate by genre
        for track in response_json["items"]:
            artist_id = track["artists"][0]["id"]
            if self.match_artist_genre(artist_id, requested_genres):
                tracks.append(Track(track["name"], track["id"], track["artists"][0]["name"]))

        # reset the url to get recently played tracks
        url = f"https://api.spotify.com/v1/me/player/recently-played?limit={limit}"
        response = self._place_get_api_request(url)
        response_json = response.json()
        for track in response_json["items"]:
            artist_id = track["track"]["artists"][0]["id"]
            if self.match_artist_genre(artist_id, requested_genres):
                tracks.append(Track(track["track"]["name"], track["track"]["id"], track["track"]["artists"][0]["name"]))
        # remove duplicates
        tracks = set(tracks)
        return tracks

    def get_user_id(self):
        """Get the user ID of user to access their Spotify and create a playlist
        :return userid: unique string for finding user's Spotify"""
        url = f"https://api.spotify.com/v1/me"
        response = self._place_get_api_request(url)
        response_json = response.json()
        userid = response_json["id"]
        return userid

    
    def create_playlist(self, name):
        """
        :param name (str): New playlist name
        :return playlist (Playlist): Newly created playlist
        """
        userid = self.get_user_id()
        data = json.dumps({
            "name": name,
            "description": "Recommended songs by Spotify Matched c:",
            "collaborative": True,
            "public": False
        })
        url = f"https://api.spotify.com/v1/users/{userid}/playlists"
        response = self._place_post_api_request(url, data)
        response_json = response.json()
        # get playlist ID for getting links
        playlist_id = response_json["id"]
        self.playlistid = playlist_id

        playlist = Playlist(name, playlist_id)
        return playlist

    # since apparently getting the track genre is broken
    def match_artist_genre(self, artist, requested_genres):
        """Gets artists' genres and sees if it matches with the requested genres
        :param artist: artist id
        :param requested_genres: list of requested genres
        :return: True if artists' genres is in the requested, False if otherwise
        """
        # testing purposes
        # track_id = "1fdlTXD7obDyqOpx96BEL9" — Maison
        # 5NK2NHvmKLOn8V3eBYDaKm July 7th
        url = f"https://api.spotify.com/v1/artists/{artist}"
        response = self._place_get_api_request(url)
        response_json = response.json()
        artist_genres = response_json["genres"]
        for artist_genre in artist_genres:
            if artist_genre in requested_genres:
                return True
        return False


    def populate_playlist(self, playlist, tracks):
        """Add tracks to a playlist.
        :param playlist (Playlist): Playlist to which to add tracks
        :param tracks (list of Track): Tracks to be added to playlist
        :return response: API response
        """
        track_uris = [track.create_spotify_uri() for track in tracks]
        data = json.dumps(track_uris)
        url = f"https://api.spotify.com/v1/playlists/{playlist.id}/tracks"
        response = self._place_post_api_request(url, data)
        response_json = response.json()
        return response_json

    def get_playlist_link(self):
        """Gets playlist link.
        :return: link of playlist (string)
        """
        url = f"https://api.spotify.com/v1/playlists/{self.playlistid}"
        response = self._place_get_api_request(url)
        response_json = response.json()
        with open("test.json", "w") as outfile:
            outfile.write(str(response_json))
        f = open('test.json')
        link = response_json['external_urls']['spotify']
        return link


    def _place_get_api_request(self, url):
        response = requests.get(
            url,
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {self.authorizationToken}"
            }
        )
        return response
    
    def _place_post_api_request(self, url, data):
        response = requests.post(
            url,
            data=data,
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {self.authorizationToken}"
            }
        )
        return response
    
    """def get_track_recommendations(self, seed_tracks, limit=50):
        Get a list of recommended tracks starting from a number of seed tracks.
        :param seed_tracks (list of Track): Reference tracks to get recommendations. Should be 5 or less.
        :param limit (int): Number of recommended tracks to be returned
        :return tracks (list of Track): List of recommended tracks
        seed_tracks_url = ""
        for seed_track in seed_tracks:
            seed_tracks_url += seed_track.id + ","
        seed_tracks_url = seed_tracks_url[:-1]
        url = f"https://api.spotify.com/v1/recommendations?seed_tracks={seed_tracks_url}&limit={limit}"
        response = self._place_get_api_request(url)
        response_json = response.json()
        tracks = [Track(track["name"], track["id"], track["artists"][0]["name"]) for
                  track in response_json["tracks"]]
        return tracks
    """