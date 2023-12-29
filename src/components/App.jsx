import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';

export class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Button />
      </div>
    );
  }
}
