import React, { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <div>
        ImageGallery
        <ul class="gallery">
          <ImageGalleryItem />
        </ul>
      </div>
    );
  }
}

export { ImageGallery };
