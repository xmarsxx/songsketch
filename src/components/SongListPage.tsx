import React from 'react';
import './SongListPage.css'; // Importing CSS file for styling

const SongListPage = () => {
  // Sample song data
  const songs = [
    { id: 1, title: 'Song 1', classification: 'rhythm' },
    { id: 2, title: 'Song 2', classification: 'melodic' },
    { id: 3, title: 'Song 3', classification: 'rhythm' },
    { id: 4, title: 'Song 4', classification: 'melodic' },
  ];

  const handleEdit = (songId: number) => {
    // Handle editing song with given ID
    console.log('Editing song with ID:', songId);
  };

  return (
    <div className="song-list-container">
      <h1>Song List</h1>
      <table className="song-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Classification</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {songs.map(song => (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.classification}</td>
              <td><button className="edit-button" onClick={() => handleEdit(song.id)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongListPage;