function make_album(artist: string, title: string, tracks?: number) {
    const album: Record<string, unknown> = {
      artist: artist,
      title: title,
    };
  
    if (tracks !== undefined) {
      album['tracks'] = tracks;
    }
  
    return album;
  }
  
  // Call the function to create three album objects
  const album1 = make_album('Artist 1', 'Album 1');
  const album2 = make_album('Artist 2', 'Album 2', 10); // Including the number of tracks
  const album3 = make_album('Artist 3', 'Album 3');
  
  // Print each return value to show the album information
  console.log(album1);
  console.log(album2);
  console.log(album3);
  